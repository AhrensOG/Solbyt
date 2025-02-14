import Link from "next/link";
import React from "react";

const StaticNavBar: React.FC = () => {
  const MenuLinks = () => (
    <>
      <Link
        href="/"
        className="text-[#6aa9b6] hover:text-[#6aa9b6]/60 transition-all duration-200 text-lg py-2"
        aria-label="Ir a la página de inicio"
      >
        Inicio
      </Link>
      <Link
        href="/#contacto"
        className="text-[#beb0fa] hover:text-[#beb0fa]/60 transition-all duration-200 text-lg py-2"
        aria-label="Ir a la sección de contacto"
      >
        Contáctanos
      </Link>
      <Link
        href="/#servicios"
        className="text-[#cb6ce6] hover:text-[#cb6ce6]/60 transition-all duration-200 text-lg py-2"
        aria-label="Ir a la sección de servicios"
      >
        Servicio
      </Link>
      <Link
        href="/#sobre-nosotros"
        className="text-gray-900 hover:text-gray-400 transition-all duration-200 text-lg py-2"
        aria-label="Ir a la sección sobre nosotros"
      >
        Nosotros
      </Link>
    </>
  );

  return (
    <nav
      className={`fixed top-0 w-full bg-white h-20 z-50 transition-shadow duration-300`}
    >
      <div className="px-8 py-4 h-full flex items-center justify-between">
        <div className="text-xl tracking-widest text-blue-900 underline">
          <Link href="/" title="Ir a la página principal">
            AHRENS
          </Link>
        </div>
        <div className="hidden md:flex gap-8 uppercase tracking-widest">
          <MenuLinks />
        </div>
        <div className="block md:hidden uppercase tracking-widest">
          <Link
            href="/"
            className="text-[#6aa9b6] hover:text-[#6aa9b6]/60 transition-all duration-200 text-lg py-2"
            aria-label="Ir a la página de inicio"
          >
            Inicio
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default StaticNavBar;
