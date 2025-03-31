/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import {
  FaCode,
  FaBrain,
  FaGraduationCap,
  FaBriefcase,
  FaAngular,
  FaJava,
  FaPhp,
  FaWindows,
  FaApple,
  FaLinux,
  FaDatabase,
  FaTools,
  FaProjectDiagram,
  FaCloud,
  FaBug,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiSpring,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiAmazonaws,
  SiAzuredevops,
  SiJenkins,
  SiSelenium,
  SiJunit5,
} from "react-icons/si";

const TAB_DATA = [
  {
    title: "Hard Skills",
    id: "hardSkills",
    content: (
      <div className="flex flex-wrap gap-5 text-white">
        <ul className="list-disc pl-2">
          <span className="flex items-center gap-1">
            <FaCode /> Frameworks
          </span>
          <hr width="100%" />
          <li className="flex items-center gap-1">
            <SiSpring /> Spring Boot
          </li>
          <li className="flex items-center gap-1">
            <SiNodedotjs /> Node
          </li>
          <li className="flex items-center gap-1">
            <FaAngular /> Angular
          </li>
          <li className="flex items-center gap-1">
            <SiNextdotjs /> Next.js
          </li>
        </ul>
        <ul className="list-disc pl-2">
          <span className="flex items-center gap-1">
            <FaCode /> Programming Languages
          </span>
          <hr width="100%" />
          <li className="flex items-center gap-1">
            <FaJava /> Java
          </li>
          <li className="flex items-center gap-1">
            <SiTypescript /> TypeScript
          </li>
          <li className="flex items-center gap-1">
            <SiJavascript /> JavaScript
          </li>
          <li className="flex items-center gap-1">
            <FaPhp /> PHP
          </li>
        </ul>
        <ul className="list-disc pl-2">
          <span className="flex items-center gap-1">
            <FaTools /> Tests/Automation
          </span>
          <hr width="100%" />
          <li className="flex items-center gap-1">
            <SiJunit5 /> JUnit
          </li>
          <li className="flex items-center gap-1">
            <SiSelenium /> Selenium
          </li>
          <li className="flex items-center gap-1">
            <FaBug /> T.D.D.
          </li>
        </ul>

        <ul className="list-disc pl-2">
          <span className="flex items-center gap-1">
            <FaDatabase /> Databases
          </span>
          <hr width="100%" />
          <li className="flex items-center gap-1">
            <SiMysql /> MySQL
          </li>
          <li className="flex items-center gap-1">
            <SiPostgresql /> PostgreSQL
          </li>
          <li className="flex items-center gap-1">
            <SiMicrosoftsqlserver /> MS SQL Server
          </li>
          <li className="flex items-center gap-1">
            <SiMongodb /> Mongo DB
          </li>
        </ul>
        <ul className="list-disc pl-2">
          <span className="flex items-center gap-1">
            <FaProjectDiagram /> Agile Methodologies
          </span>
          <hr width="100%" />
          <li className="pt-2">Scrum</li>
          <li>Kanban</li>
          <li>Extreme Programming (XP)</li>
        </ul>
        <ul className="list-disc pl-2">
          <span className="flex items-center gap-1">
            <FaCloud /> DevOps
          </span>
          <hr width="100%" />
          <li className="flex items-center gap-1">
            <SiDocker /> Docker
          </li>
          <li className="flex items-center gap-1">
            <SiAmazonaws /> AWS
          </li>
          <li className="flex items-center gap-1">
            <SiAzuredevops /> Azure
          </li>
          <li className="flex items-center gap-1">
            <SiJenkins /> Jenkins
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Soft Skills",
    id: "softSkills",
    content: (
      <div className="flex flex-wrap gap-5 text-white">
        <ul className="list-disc pl-2">
          <span className="flex items-center gap-1">
            <FaBrain /> Skills
          </span>
          <hr width="100%" />
          <li className="pt-2">Clear and effective communication</li>
          <li>Good programming practices(Clean code)</li>
          <li>Problem-solving</li>
          <li>Fast Learning</li>
          <li>Humanized customer service</li>
          <li>Self-management</li>
          <li>Ease of working in a team and dividing tasks</li>
          <li>Emotional intelligence</li>
          <li>Focus on delivering results</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-white">
        <span className="flex items-center gap-1">
          <FaGraduationCap /> Academic Background
        </span>
        <hr width="60%" />
        <li className="pt-2">
          Analysis and Systems Development <br />
          Senac College, Recife-PE
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 text-white">
        <span className="flex items-center gap-1">
          <FaBriefcase /> Professional Journey
        </span>
        <hr width="40%" />
        <li className="pt-2">
          Backend Developer <br />
         -  HubI - i.de.i.a.S Incubator, Recife <br />
          • Technologies used: Java (Spring Boot), Next.js (TypeScript), PostgreSQL, Docker, Ubuntu Server, Apache. <br />


        </li>
        <hr width="40%" />
        <li className="pt-5">
        Fullstack Developer <br />
          - Senac/Fecomércio-PE, Recife       <br/>
          • Technologies used: Node.js (TypeScript), PostgreSQL, Docker.
          
 </li>
        <hr width="40%" />
        <li className="pt-5">
           Junior System Analyst <br />
          - ScriptCase (RAD), Remote <br/>
          • Technologies used:PHP,Scriptcase,Linux, Macos, Windows, automated tests, PostgreSQL, Docker.

        </li>        
        <hr width="90%" />

        <li className="pt-5">
           Junior Backend Developer <br />
          - SirProject, Remote <br/>
          • Technologies used: Java (Spring Boot), Extreme Programming(XP), T.D.D, Junit, Mockito, PostgreSQL, Docker, Ubuntu Server, Apache. <br />
        </li>        
        <hr width="90%" />

       
        
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
            My name is Miguel Amaral and I'm Professional with experience in
            backend development, focusing on building scalable APIs and
            organized architectures, following SOLID principles and best
            development practices. Skilled in Java (Spring Boot) and Node.js
            (TypeScript), with experience in Docker, CI/CD (Jenkins, GitHub
            Actions), automated testing (JUnit, Mockito, TDD). Works with
            relational and non-relational databases (MySQL, PostgreSQL, MongoDB,
            MS SQL Server), ensuring efficiency and performance. Always seeking
            continuous learning and technical improvement.
          </p>
        </div>
        <div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("hardSkills")}
              active={tab === "hardSkills"}
            >
              Hard Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("softSkills")}
              active={tab === "softSkills"}
            >
              Soft Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
