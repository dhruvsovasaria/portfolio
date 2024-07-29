import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css"; // Assuming you have renamed your CSS file or kept it as styles.css

const App = () => {
  return (
    <div className="App bg-black">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
