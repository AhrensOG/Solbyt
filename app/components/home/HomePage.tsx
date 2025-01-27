"use client";
import React from "react";
import NavBar from "../public/navbar/NavBar";
import Hero from "./Hero";
import ServicesSection from "./ServiceSection";

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <ServicesSection />
      </main>
    </>
  );
};

export default HomePage;
