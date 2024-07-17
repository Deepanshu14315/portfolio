import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Education from "./Components/Education";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <TechStack />
      <Projects/>
    </>
  );
};

export default App;
