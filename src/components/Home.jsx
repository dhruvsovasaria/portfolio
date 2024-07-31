import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex w-full h-screen pl-10">
      <section
        id="home"
        className="home-section bg-codeblack text-white flex-[4] flex flex-col justify-start p-6 pt-20"
      >
        <h1 className="text-codelightlime home-text text-7xl pl-1 font-semibold">
          Hi, I'm
        </h1>
        <h1 className=" text-codelime text-9xl font-semibold pb-2">
          Dhruv Sovasaria
        </h1>
        <p className="home-text pl-2 text-5xl pt-10 font-semibold text-textcolor">
          Web Developer
        </p>
        <button className="max-w-52 border-2 text-textcolor my-10 text-sm rounded ml-3 hover:bg-buttonhovercolor font-medium px-4 py-3 hover:text-codelightlime transition-colors duration-150">
          Checkout Linkedin
        </button>
      </section>
      <section className="flex-[1] flex justify-center h-100 p-0 pr-5 items-end ">
        <img
          src="src/assets/dhruv-photo.png"
          alt="dhruv-profile-photo"
          className="   min-h-[80vh] object-cover"
        />
      </section>
    </div>
  );
};

export default Home;
