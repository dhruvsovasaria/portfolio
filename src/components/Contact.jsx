import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section  text-textcolor  md:w-4/5 lg:w-4/5 mx-auto"
    >
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
  );
};

export default Contact;
