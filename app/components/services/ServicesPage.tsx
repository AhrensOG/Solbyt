import CTASection from "../home/V2/CTASection";
import Footer from "../public/footer/Footer";
import Navbar from "../public/navbar/V2/NavBar";
import FaqSection from "./FaqSection";
import ProcessSection from "./ProcessSection";
import ServicesHero from "./ServicesHero";
import ServicesGrid from "./ServicesGrid";

export default function ServicesPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ProcessSection />
        <FaqSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
