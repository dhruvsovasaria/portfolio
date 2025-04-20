import React from "react";
import { motion } from "framer-motion";
import dhruvPhoto from "../assets/dhruv-photo.png";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section id="home" className="home-section min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-codelightlime">Dhruv Sovasaria</h1>
          <p className="text-2xl text-gray-300 mb-8">Full Stack Developer</p>
          <div className="flex justify-center gap-4">
            <a href="#about" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
