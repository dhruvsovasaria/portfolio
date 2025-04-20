import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaRProject, FaDochub, FaFile } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section text-textcolor pt-20 mt-20">
      <section className="md:w-4/5 lg:w-4/5 mx-auto px-10 py-0">
        <div className="text-center">
          <a href="https://github.com/dhruvsovasaria/" className="block">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime flex items-center justify-center gap-4">
              <FaGithub className="text-2xl" />
              <span>Github</span>
            </h2>
          </a>
          <a href="https://www.linkedin.com/in/dhruvsovasaria/" className="block">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime flex items-center justify-center gap-4">
              <FaLinkedin className="text-2xl" />
              <span>Linkedin</span>
            </h2>
          </a>
          <a href="https://x.com/dhruvsvsria" className="block">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime flex items-center justify-center gap-4">
              <FaTwitter className="text-2xl" />
              <span>Twitter</span>
            </h2>
          </a>
          <a
            href="https://drive.google.com/file/d/1kV8BShRKvuHadlQVl40ncYSGBf-gW1KA/view?usp=sharing"
            className="block"
          >
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime flex items-center justify-center gap-4">
              <FaFile className="text-2xl" />
              <span>Resume</span>
            </h2>
          </a>
        </div>
      </section>

      <div className="from-codeblack to-white min-h-[60vh] w-full bg-gradient-to-b text-center mx-auto flex justify-center items-center mt-60 rounded-bl-3xl rounded-br-3xl flex-col">
        <div className="text-5xl text-codeblack font-semibold mb-4">Interested in working</div>
        <div className="text-5xl font-semibold text-black mb-8">with me ?</div>
        <a
          href=""
          className="bg-black text-white mt-7 rounded-full px-10 py-4 text-xl font-bold hover:scale-105 transition-all duration-100"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
