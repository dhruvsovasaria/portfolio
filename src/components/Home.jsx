import React from "react";
const Home = () => {
  return (
    <div className="">
      <section
        id="home"
        className="home-section bg-codeblack text-white w-5/7 flex gap-3"
      >
        <h1 className="text-codelightlime home-text text-7xl">Hi, I'm </h1>
        {/* <h1 className="home-text">Dhruv Sovasaria </h1> */}
        <h1 className=" text-codelime text-9xl font-semibold">
          Dhruv Sovasaria{" "}
        </h1>
        <p className="home-text   text-5xl">Full Stack Developer</p>
      </section>
    </div>
  );
};

export default Home;
