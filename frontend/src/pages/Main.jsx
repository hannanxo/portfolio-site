import React from "react";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/Forms/ContactForm";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Work from "../components/Work";

function Main() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Work />
      <Blogs />
      <Contact />
    </>
  );
}

export default Main;
