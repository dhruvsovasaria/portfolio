import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles.css"; // Assuming you have renamed your CSS file or kept it as styles.css

const App = () => {
  return (
    <div className="App bg-codeblack h-screen overflow-y-auto snap-y snap-mandatory">
      <Header />
      <div className="snap-start">
        <Home />
      </div>
      <div className="snap-start">
        <About />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
    </div>
  );
};

export default App;
