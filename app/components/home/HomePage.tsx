"use client";
import React from "react";
import NavBar from "../public/navbar/NavBar";
import Hero from "./Hero";
import ServiceSection from "./ServiceSection";
import Timeline from "./TimeLine";
import TimelineV2 from "./TimeLineV2";
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
        {/* <Timeline /> */}
        <TimelineV2 />
      </main>
    </>
  );
};

export default HomePage;
