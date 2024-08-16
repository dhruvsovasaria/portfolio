import React from "react";
import ProjectCard from "./ProjectCard";
import portphoto from "../assets/portphoto.png";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "This Portfolio Website is a sleek and user-friendly platform, powered by Vite.js and React. With sections like Home, About, Work and Contact, it seamlessly showcases Dhruv's projects, skills, and background. The responsive design ensures an optimal viewing experience across devices, inviting visitors to explore and connect.",
      awardText: "",
      awardYear: "",
      imageUrl: portphoto,
    },
    {
      title: "zPay",
      description:
        "built with mongodb , nodejs , jwt and react , offering safe transactions and a seamless user experience",
      awardText: "Winner at Unfold",
      awardYear: "",
      imageUrl: "",
    },
    {
      title: "Drucx",
      description: "Platform for buying and selling thrifted clothes ",
      awardText: "",
      awardYear: "",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  return (
    <section id="projects" className="projects-section">
      <h1 className="text-5xl text-codebutton p-6  pb-12 font-bold text-center">
        Projects
      </h1>
      <div className="bg-codeblack min-h-screen flex flex-wrap justify-center  gap-4 p-0">
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
