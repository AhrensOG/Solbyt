import React from "react";
import Hero from "./Hero";
import Footer from "../public/footer/Footer";
import WorkInformation from "./WorkInformation";
import { Toaster } from "react-hot-toast";
import ServicesSection from "./V2/ServicesSection";
import ProjectsSection from "./V2/ProjectSection";
import CTASection from "./V2/CTASection";
import ContactSection from "./V2/ContactSection";
import Navbar from "../public/navbar/V2/NavBar";

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Toaster position="top-center" />
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <CTASection />
        <ContactSection />
        <WorkInformation />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
