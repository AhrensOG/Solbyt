"use client";
import React from "react";
import NavBar from "../public/navbar/NavBar";
import Hero from "./Hero";

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default HomePage;
