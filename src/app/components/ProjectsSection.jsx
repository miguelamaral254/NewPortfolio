"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title:"Mascate booker",
    description: "A reservation tool booking for the Mascate restaurant",
    image:"/images/projects/0.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/miguelamaral254/projeto-mascate",
    previewUrl:"https://projeto-mascate.vercel.app/",
  },
  {
    id: 1,
    title:"Senac Store",
    description: "A cloath store for geekies from senac collage",
    image:"/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/miguelamaral254/ecommerceprojclt",
    previewUrl:"https://senacstoreproj.vercel.app/",
  },
  {
    id: 2,
    title: "Hyphen",
    description: "This project have the aim of boosting experience for new developers and also assisting in the search for both employees and employers for projects/jobs",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/miguelamaral254/hyphenapp",
    previewUrl: "https://www.figma.com/proto/7NGYbbYRxAvhuEkrhtJlmk/Untitled?page-id=0%3A1&node-id=12-401&viewport=429%2C500%2C0.04&t=4jqO1Z95tlHJG5mG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=12%3A79&show-proto-sidebar=1",
  },
  {
    id: 3,
    title: "Project mannagement",
    description: "The purpose of this project is to manage the project, adding tasks and allocating resources",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miguelamaral254/VersionamentoProjetoss",
    previewUrl: "https://projetocosts.vercel.app/",
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
