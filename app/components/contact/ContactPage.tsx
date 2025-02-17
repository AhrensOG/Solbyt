import React from "react";
import Link from "next/link";
import StaticNavBar from "../public/navbar/StaticNavBar";
import Footer from "../public/footer/Footer";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <main className="bg-white">
      <StaticNavBar />
      <section className="mt-[80px] relative w-full bg-gradient-to-b from-white via-pink-50 to-white py-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500">
            ¡Gracias por tomar la iniciativa!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tu decisión de contactarnos es el primer paso hacia un futuro
            digital lleno de innovación y éxito. Estamos emocionados de
            acompañarte en esta transformación.
          </p>
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              ¿Cómo podemos ayudarte?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Si tienes alguna pregunta, comentario o deseas conocer más sobre
              nuestros servicios, no dudes en comunicarte con nosotros. Nuestro
              equipo de expertos está listo para asesorarte y acompañarte en
              cada paso del camino.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center space-x-3">
                <span className="text-purple-600 font-semibold">Email:</span>
                <Link
                  href="mailto:contacto@solbyt.com"
                  title="Ir a enviar correo"
                  className="text-gray-800 hover:text-purple-600 transition"
                >
                  contacto@solbyt.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-purple-600 font-semibold">Teléfono:</span>
                <Link
                  href="tel:+1234567890"
                  title="Ir a llamar"
                  className="text-gray-800 hover:text-purple-600 transition"
                >
                  +1 (234) 567-890
                </Link>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-600 mt-8">
            También puedes encontrarnos en nuestras redes sociales para conocer
            las últimas novedades.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link
              href="https://twitter.com"
              title="Ir a Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              title="Ir a LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              title="Ir a Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
