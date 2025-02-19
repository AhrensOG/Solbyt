import React from "react";
import NavBar from "../public/navbar/NavBar";
import Hero from "./Hero";
import Timeline from "./TimeLine";
import ServiceSection from "./ServiceSection";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "../public/footer/Footer";
import WorkInformation from "./WorkInformation";
import { Toaster } from "react-hot-toast";

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Toaster position="top-center" />
        <Hero />
        {/* <ServiceSection /> */}
        <ServiceSection />
        <Timeline />
        <AboutUs />
        <Contact />
        <WorkInformation />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
