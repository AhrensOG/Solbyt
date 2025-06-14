"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import Hero from "./auxiliarComponents/Hero";
import CustomerValue from "./auxiliarComponents/CustomerValue";
import ServiceFeatures from "./auxiliarComponents/ServiceFeatures";
import WorkProcess from "./auxiliarComponents/WorkProcess";
import UseCases from "./auxiliarComponents/UseCases";
import FAQ from "./auxiliarComponents/FAQ";
import CTA from "./auxiliarComponents/CTA";

const WebDevelopment = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col min-h-screen">
        <Hero />
        <CustomerValue />
        <ServiceFeatures />
        <WorkProcess />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default WebDevelopment;
