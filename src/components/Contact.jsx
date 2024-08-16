import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section text-textcolor pt-0">
      <section className="md:w-4/5 lg:w-4/5 mx-auto px-10 py-0">
        <div className="text-center">
          <a href="">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime">
              Github
            </h2>
          </a>
          <a href="">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime">
              Linkedin
            </h2>
          </a>
          <a href="">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime">
              Twitter
            </h2>
          </a>
          <a href="">
            <h2 className="py-7 border-y-2 text-2xl font-semibold hover:bg-buttonhovercolor hover:text-codelightlime">
              Resume
            </h2>
          </a>
        </div>
      </section>

      <div className="bg-white my-20 min-h-80  text-center mx-auto flex justify-center items-center mt-60 rounded-bl-3xl rounded-br-3xl flex-col">
        <div className="text-3xl text-codeblacktext-codeblack text-codeblack">
          Interested in working
        </div>
        <div className="text-3xl text-codeblack ">with me ?</div>
        <button className="bg-black text-codelightlime mt-7 rounded-full px-7 py-3">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
