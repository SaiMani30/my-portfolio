"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Front-End Portfolio Website",
    description: "Portfolio Website using HTML,CSS and JS",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SaiMani30/CodeClause_portfolio_website.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Farm Fresh Landing Page",
    description: "Landing page for company promotions",
    image: "/images/projects/2.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SaiMani30/CodeClause_Landing_page-.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Event Page for Society",
    description: "Event page using HTML,CSS and JS",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SaiMani30/aisoc_page.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pizza Ordering Website",
    description: "Pizza ordering website using Full-stack",
    image: "/images/projects/4.webp",
    tag: ["All", "Ongoing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Netflix clone",
    description: "Clone of Netflix homepage",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SaiMani30/Bharat-Intern_netflix-home-page.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "To-do list",
    description: "Basic To-Do list",
    image: "/images/projects/6.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SaiMani30/internpe_to_do_list.git",
    previewUrl: "/",
  },
  {
  id: 7,
    title: "Calculator",
    description: "Basic Calculator using Js functions",
    image: "/images/projects/7.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SaiMani30/internpe_calculator.git",
    previewUrl: "/",
  },
  {
    id: 8,
      title: "Temperature Converter",
      description: "Basic Temp converter using Js functions",
      image: "/images/projects/8.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/SaiMani30/Bharat-Intern_temperature_convertor.git",
      previewUrl: "/",
    },
    {
      id: 8,
        title: "Blog Page",
        description: "Blog Page using React,Tailwind and Sanity",
        image: "/images/projects/9.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/SaiMani30/bloggersyt.git",
        previewUrl: "/",
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
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12" style={{ background: 'linear-gradient(90deg, #0ea5ea, #0bd1d1 51%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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
          name="Ongoing"
          isSelected={tag === "Ongoing"}
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
              // Apply inline styles for responsive images
              imgUrl={project.image}
              style={{ maxWidth: "100%", height: "auto" }}
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
