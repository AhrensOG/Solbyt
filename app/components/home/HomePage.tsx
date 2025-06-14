import React from "react";
// import NavBar from "../public/navbar/NavBar";
import Hero from "./Hero";
// import Timeline from "./TimeLine";
// import ServiceSection from "./ServiceSection";
// import AboutUs from "./AboutUs";
// import Contact from "./Contact";
import Footer from "../public/footer/Footer";
import WorkInformation from "./WorkInformation";
import { Toaster } from "react-hot-toast";
import ServicesSection from "./V2/ServiceSection";
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
        {/* <Timeline /> */}
        <ProjectsSection />
        {/* <AboutUs /> */}
        <CTASection />
        {/* <Contact /> */}
        <ContactSection />
        <WorkInformation />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
