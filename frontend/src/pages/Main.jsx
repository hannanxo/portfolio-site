import React from "react";
import About from "../components/About";
import Contact from "../components/Forms/ContactForm";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Work from "../components/Work";
import BlogSection from "../components/Blogs/BlogSection";

function Main() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Work />
      <BlogSection />
      <Contact />
    </>
  );
}

export default Main;
