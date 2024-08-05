import React from "react";
import Hero from "./Component/Hero";
import Contact from "./Component/Contact";
import Project from "./Component/Project";
import About from "./Component/About";
import Skill from "./Component/Skill";
const Page = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Project />
      <Skill />
      <Contact />
    </div>
  );
};

export default Page;
