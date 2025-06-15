"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import Hero from "./auxiliarComponents/Hero";
import Benefits from "./auxiliarComponents/Benefits";
import Features from "./auxiliarComponents/Features";
import UseCases from "./auxiliarComponents/UseCases";
import WorkProcess from "./auxiliarComponents/WorkProcess";
import FAQ from "./auxiliarComponents/FAQ";
import CTA from "./auxiliarComponents/CTA";

const ProcessAutomation = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Benefits />
        <Features />
        <UseCases />
        <WorkProcess />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default ProcessAutomation;
