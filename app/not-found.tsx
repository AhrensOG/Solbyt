import React from "react";
import Link from "next/link";
import StaticNavBar from "./components/public/navbar/StaticNavBar";
import Footer from "./components/public/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Página no encontrada | Solbyt",
  description:
    "En Solbyt, nos esforzamos por brindar una experiencia excepcional. La página que has solicitado no se encuentra disponible o ha sido movida. Por favor, revisa la dirección URL o regresa a la página principal para continuar explorando nuestros innovadores servicios y soluciones tecnológicas.",
  keywords: [
    "404",
    "página no encontrada",
    "error",
    "Solbyt",
    "soluciones tecnológicas",
    "servicios digitales",
  ],
  authors: [{ name: "Solbyt" }],
  metadataBase: new URL("https://solbyt.tech"),
  alternates: {
    canonical: "/404",
  },
};

const NotFound: React.FC = () => {
  return (
    <main className="bg-white">
      <StaticNavBar />
      <section className="mt-[80px] bg-gradient-to-b from-white via-pink-50 to-white w-full py-10 px-4 sm:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
            404
          </h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Página no encontrada
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida. Por
            favor, regresa a la página principal o utiliza el menú para explorar
            nuestros servicios.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
