"use client";
import React from "react";
import NavBar from "../public/navbar/NavBar";
import Hero from "./Hero";
import ServiceSection from "./ServiceSection";
import Timeline from "./TimeLine";
import ServiceSectionV2 from "./ServiceSectionV2";

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        {/* <ServiceSection /> */}
        <ServiceSectionV2 />
        <Timeline />
      </main>
    </>
  );
};

export default HomePage;
