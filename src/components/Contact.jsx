import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section text-textcolor pt-0">
      <section className="md:w-4/5 lg:w-4/5 mx-auto px-10 py-0">
        <div className="text-center">
          <a href="https://github.com/dhruvsovasaria/">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime">
              Github
            </h2>
          </a>
          <a href="https://www.linkedin.com/in/dhruvsovasaria/">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime">
              Linkedin
            </h2>
          </a>
          <a href="https://x.com/dhruvsvsria">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime">
              Twitter
            </h2>
          </a>
          <a href="https://drive.google.com/file/d/1FLyWZsdVKtuTpmhcOv5adr2ORlaoLtjv/view?usp=sharing">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime">
              Resume
            </h2>
          </a>
        </div>
      </section>

      <div className="from-codeblack to-white min-h-96  bg-gradient-to-b text-center mx-auto flex justify-center items-center mt-60 rounded-bl-3xl rounded-br-3xl flex-col ">
        <div> </div> <div> </div>
        <div className="text-3xl text-codeblacktext-codeblack font-semibold text-codeblack">
          Interested in working
        </div>
        <div className="text-3xl text- font-semibold text-black">with me ?</div>
        <a
          href=""
          className="bg-black text-white
           mt-7 rounded-full px-7 py-3 font-bold hover:scale-105 transition-all duration-100"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
