import React from "react";
import Navbar from "../public/navbar/V2/NavBar";
import Footer from "../public/footer/Footer";
import Hero from "./auxiliarComponents/Hero";
import FeaturedProjects from "./auxiliarComponents/FeaturedProjects";
import CTA from "./auxiliarComponents/CTA";

const ProjectsPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-white">
        <Hero />
        <FeaturedProjects />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
