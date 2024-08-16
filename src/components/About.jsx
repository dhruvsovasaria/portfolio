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
    // Add more if needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "200px 0px" }}
    >
      <section
        id="about"
        className="text-textcolor about-section flex flex-col pb-10"
      >
        <h1 className="text-7xl text-codebutton font-bold pb-5 px-28">
          About me{" "}
        </h1>
        <p className="text-xl p-5 px-28 justify-center">
          Hello! I'm Dhruv Sovasaria, a passionate and versatile technologist
          with a strong foundation. Currently pursuing B.Tech in Computer
          Science and Engineering from SRMIST, Chennai. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Sapiente asperiores assumenda,
          blanditiis neque itaque temporibus quam quibusdam rerum? Cum repellat
          totam quaerat debitis et at illum possimus rem, aspernatur quisquam?
          Maiores ut cumque, fugiat laborum voluptatum earum labore impedit quae
          doloribus non accusamus. Similique dolores, illo minima eaque soluta
          autem.
          <div className="text-gray-300 font-sans">
            <h3 className="text-lg pt-8 mb-4">
              Here are a few technologies I've been working with recently:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-y-1 text-base"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
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
