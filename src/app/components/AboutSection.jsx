"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "HardSkills",
    id: "hardSkills",
    content: (
      <div className="flex flex-wrap gap-5 ">
        <ul className="list-disc pl-2">
          <span>Frameworks</span>
          <hr width="100%" />
          <li className="pt-2">React</li>
          <li>Angular</li>
          <li>Next JS</li>
          <li>.Net</li>
          <li>AspNet</li>
          <li>Springboot</li>
          <li>Tailwind</li>
        </ul>
        <ul className="list-disc pl-2">
          <span>Mobile</span>
          <hr width="100%" />
          <li className="pt-2">React native</li>
          <li>IONIC</li>
          <li>Kotlin</li>
          <ul className="list-disc pt-1">
            <span>Operational Systems</span>
            <hr width="100%" />
            <li className="pt-2">Windows</li>
            <li>MacOS X</li>
            <li>Linux</li>
          </ul>
        </ul>

        <ul className="list-disc pl-2">
          <span>Languages</span>
          <hr width="100%" />
          <li className="pt-2">Javascript</li>
          <li>Java</li>
          <li>C, C++ and C#</li>
          <li>Python</li>
          <li>PHP</li>
        </ul>

        <ul className="list-disc pl-2">
          <span>Web Services</span>
          <hr width="100%" />
          <li className="pt-2">REST</li>
          <li>SOAP</li>
          <li>JSON Services</li>
          <li>Python</li>
          <li>PHP</li>
        </ul>

        <ul className="list-disc pl-2">
          <span>Data Base</span>
          <hr width="100%" />
          <li className="pt-2">Mysql</li>
          <li>Postgree SQL</li>
          <li>Firebird</li>
          <li>Db2</li>
        </ul>
        <ul className="list-disc pl-2">
          <span>Agile methodologies</span>
          <hr width="100%" />
          <li className="pt-2">Scrum</li>
          <li>Kanbam</li>
          <li>XP</li>
        </ul>
      </div>
    ),
  },
  {
    title: "SoftSkills",
    id: "softSkills",
    content: (
      <div className="flex flex-wrap gap-5 ">
        <ul className="list-disc pl-2">
          <li className="pt-2">Clear and effective communication</li>
          <li>problem solving</li>
          <li>humanized customer service</li>
          <li>self-management</li>
          <li>ease of working in a team and dividing tasks</li>
          <li> emotional intelligence, </li>
          <li>self-management</li>
          <li>focus on delivering results</li>
          <hr width="100%" />
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Analysis and systems development <br />
          Senac College, Recife-PE
        </li>
        <hr width="60%" />
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Frontend Developer <br />
          Aplantica pizzeria
        </li>
        <hr width="30%" />
        <li className="pt-1">
          Telemarket operator <br />
          Netmake Solutions for internet
        </li>
        <hr width="40%" />
        <li className="pt-1">
          IT Support Analyst <br />
          Netmake Solutions for internet
        </li>
        <hr width="40%" />
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("hardSkills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 flex flex-wrap gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Since I started my journey as a freelance Frontend 2 years ago, I
            have done remotely work for a few companies and eventually I became
            a Fullstack developer. Currently I continue working as a freelance
            developer and also work as technical support. I am the type of
            professional who is confident, naturally curious and continually
            works towards improve my skills.
          </p>
        </div>
        <div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("hardSkills")}
              active={tab === "hardSkills"}
            >
              {" "}
              Hard Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("softSkills")}
              active={tab === "softSkills"}
            >
              {" "}
              Soft skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
