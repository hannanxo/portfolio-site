import React from "react";
import About from "../components/About";
import Contact from "../components/Forms/ContactForm";
import Home from "../components/Home";
import Skills from "../components/Skills";
import BlogSection from "../components/Blogs/BlogSection";
import { useEffect } from "react";
import ProjectSection from "../components/Projects/ProjectSection";

function Main() {
  useEffect(() => {
    document.title = "Hannan – Portfolio";
  });
  return (
    <>
      <Home />
      <About />
      <Skills />
      <ProjectSection />
      <BlogSection />
      <Contact />
    </>
  );
}

export default Main;
