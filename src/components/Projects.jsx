import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projects = [
    {
      title: "personal Portfolio",
      description:
        "This Portfolio Website is a sleek and user-friendly platform, powered by Vite.js and React. With sections like Home, About, Work and Contact, it seamlessly showcases Dhruv's projects, skills, and background. The responsive design ensures an optimal viewing experience across devices, inviting visitors to explore and connect.",
      awardText: "",
      awardYear: "",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "LenDen",
      description:
        "LenDen bridges the need for a seamless, user-friendly interface that makes the borrowing and lending process easier, so that users can get liquidity in a way that is simple and easy to understand.",
      awardText: "Winner at Unfold",
      awardYear: "2023",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Resume CLI",
      description:
        "A command-line interface (CLI) portfolio made using Rust. It provides a simple and interactive way to showcase your internships/projects and skills in a terminal environment. With this portfolio, you can easily manage and present your work to others.",
      awardText: "",
      awardYear: "",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="bg-black min-h-screen flex flex-wrap justify-center p-10 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            awardText={project.awardText}
            awardYear={project.awardYear}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
