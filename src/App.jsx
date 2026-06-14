import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
const App = () => {
  return (
    <>
      {/* Hero is full-viewport — no container constraint */}
      <Navbar />
      <Hero />
      {/* Rest of the page stays within max-w-7xl */}
      <div className="container mx-auto max-w-7xl">
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
};

export default App;