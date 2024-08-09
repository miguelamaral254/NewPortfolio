'use client';
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
          <li>Angular</li>
          <li>Next JS</li>
          <li>Springboot</li>
        </ul>
        <ul className="list-disc pl-2">
          <span>Operational Systems</span>
          <hr width="100%" />
          <li>Windows</li>
          <li>MacOS X</li>
          <li>Linux</li>
        </ul>

        <ul className="list-disc pl-2">
          <span>Programming languages</span>
          <hr width="100%" />
          <li>Typescript</li>
          <li>Java</li>
          <li>C#</li>
          <li>Python</li>
          <li>PHP</li>
        </ul>

        <ul className="list-disc pl-2">
          <span>Data Base</span>
          <hr width="100%" />
          <li>Mysql</li>
          <li>PostgreSQL</li>
          <li>Ms SQL server</li>
        </ul>
        <ul className="list-disc pl-2">
          <span>Agile methodologies</span>
          <hr width="100%" />
          <li className="pt-2">Scrum</li>
          <li>Kanbam</li>
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
          <hr width="100%" />
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

        <hr width="40%" />
        <li>
          Fullstack developer <br />
          Mascate Scheadule system
        </li>

        <hr width="40%" />
        <li className="pt-1">
          Frontend Developer <br />
          SERPRO
        </li>

        <hr width="40%" />
        <li className="pt-1">
          IT Support Analyst <br />
          Scriptcase
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
            My name is Miguel Augusto Sales do Amaral, Fullstack developer with
            a strong focus on building APIs using mainly technologies such as
            Java and Spring Boot. I'm also proficient in the most modern
            technologies such as Next.js and TypeScript. I have experience in
            creating complete and scalable solutions, using architectures such
            as clean architecture and applying good development practices to
            ensure efficiency and quality. I am always looking for new
            challenges to expand my skills and contribute to innovative
            projects.
            .
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
