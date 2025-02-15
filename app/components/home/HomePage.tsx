import React from "react";
import NavBar from "../public/navbar/NavBar";
import Hero from "./Hero";
// import ServiceSection from "./ServiceSection";
import Timeline from "./TimeLine";
import ServiceSectionV2 from "./ServiceSectionV2";
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
        <ServiceSectionV2 />
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
