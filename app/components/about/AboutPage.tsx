import React from "react";
import Navbar from "../public/navbar/V2/NavBar";
import Footer from "../public/footer/Footer";
import Hero from "./auxiliarComponents/Hero";
import Story from "./auxiliarComponents/Story";
import Values from "./auxiliarComponents/Values";
import Differentiators from "./auxiliarComponents/Differentiators";
import TeamExtended from "./auxiliarComponents/TeamExtended";
import CTA from "./auxiliarComponents/CTA";

const AboutPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-white">
        <Hero />
        <Story />
        <Values />
        <Differentiators />
        <TeamExtended />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
