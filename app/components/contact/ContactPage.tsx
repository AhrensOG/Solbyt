import React from "react";
import Footer from "../public/footer/Footer";
import Navbar from "../public/navbar/V2/NavBar";
import Hero from "./auxiliarComponents/Hero";
import Form from "./auxiliarComponents/Form";
import CTA from "./auxiliarComponents/CTA";
import { Toaster } from "react-hot-toast";

const ContactPage: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-white">
        <Toaster position="top-center" />
        <Hero />
        <Form />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
