"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 2,
    title:"HubI - Inovation Hub",
    description: "A platform connecting students, teachers, entrepreneurs, and companies to turn ideas into real solutions, boosting academic projects, startups, and initiatives.",
    stack:"- Technologies used: Java, Springboot, JWT,TypeScript, Next.js, Axios.",
    image:"/images/projects/hubi.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/miguelamaral254/site-hub-inovacao",
    previewUrl:"https://github.com/miguelamaral254/site-hub-inovacao",
  },
  {
    id: 3,
    title:"Agenda NRF Retails 2025",
    description: "A Web agenda developed for the management and monitoring of the NRF 2025 Mission, organized by Fecomércio-PE, in partnership with Sebrae and Senac-PE. This application allows participants to access detailed information about the NRF Retail's Big Show 2025 event in New York, offering an intuitive and visually appealing experience.",
    image:"/images/projects/retails.jpeg",
    stack:"- Technologies used: Typescript, Node.js, Express, JWT, Next.js, React Native, EXPO, Axios.",
    tag: ["All", "Mobile", "Web"],
    gitUrl:"https://github.com/GuusRodrigues/SenacEventos",
    previewUrl:"https://github.com/GuusRodrigues/SenacEventos",
  },
  {
    id: 4,
    title:"Mediotec+",
    description: "Mediotech+ is a web system developed for coordinators, teachers and students of the Mediotec school, which aims to facilitate the organization and monitoring of classes, subjects, students and grades. This repository corresponds to the project's Frontend.",
    image:"/images/projects/mediotec.png",
    stack:"- Technologies used: Java, Springboot, JWT, Next.js,React Native, EXPO, Typescript, Axios",
    tag: ["All", "Mobile", "Web"],
    gitUrl:"https://github.com/miguelamaral254/mediotec-frontend",
    previewUrl:"https://github.com/miguelamaral254/mediotec-frontend",
  },
  {
    id: 5,
    title:"Mascate booker",
    description: "A reservation tool booking for the Mascate restaurant",
    stack:"- Technologies used: Java, Springboot, JWT, TypeScript, Next.js, Axios.",
    image:"/images/projects/0.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/miguelamaral254/projeto-mascate",
    previewUrl:"https://projeto-mascate.vercel.app/",
  },
  {
    id: 6,
    title:"Senac Store",
    description: "A cloath store for geekies from senac collage",
    stack:"- Technologies used: TypeScript, Next.js, Prisma.",
    image:"/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/miguelamaral254/ecommerceprojclt",
    previewUrl:"https://senacstoreproj.vercel.app/",
  },
  
 
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              stack={project.stack}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
