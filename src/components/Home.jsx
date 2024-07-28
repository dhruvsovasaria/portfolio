import React, { useEffect } from "react";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.fromTo(".home-text", { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  return (
    <section id="home" className="home-section">
      <h1 className="home-text">Hi, I'm </h1>
      {/* <h1 className="home-text">Dhruv Sovasaria </h1> */}
      <h1>
        <span id="first-name">Dhruv </span>
        <span id="last-name">
          S
          <span className="o" id="animated-o">
            o
          </span>
          vasaria
        </span>
      </h1>
      <p className="home-text">DEVELOPER</p>
    </section>
  );
};

export default Home;
