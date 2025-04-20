import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const technologies = [
    "React",
    "TailwindCSS",
    "Node.js",
    "Next.js",
    "Docker",
    "MongoDB",
    "MySQL",
    "AWS",
    // Add more if needed
  ];

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "200px 0px" }}>
      <section id="about" className="text-textcolor about-section flex flex-col pb-20 mb-20">
        <h1 className="text-5xl text-codebutton font-semibold pb-5 px-28">About me </h1>
        <p className="text-xl p-5 px-28 justify-center">
          I'm Dhruv Sovasaria, a Computer Science student at SRM Institute of Science and Technology specializing in
          full-stack web development. I work with tools like React, Node.js, and TypeScript to build efficient, scalable
          applications. I'm passionate about solving problems, improving code quality, and creating user-centric
          products. I have a strong interest in the consumer space, driven by a desire to understand how technology can
          shape consumer experiences.
          <div>
            <h3 className="text-lg pt-8 mb-4">Here are a few technologies I've been working with recently:</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-y-1 text-base">
                  <svg className="w-3.5 h-3.5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.5-5.5L6 8l4 4 8-8 1.5 1.5L10 15z" />
                  </svg>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </p>
      </section>
    </motion.div>
  );
};

export default About;
