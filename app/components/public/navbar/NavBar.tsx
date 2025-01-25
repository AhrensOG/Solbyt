import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <nav className="w-full bg-white h-20">
      <div className="px-8 py-4 h-full flex items-center justify-between">
        <div className="text-xl tracking-widest text-blue-900 underline">
          <Link href="/" title="Ir a la página principal">
            AHRENS
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-800" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 uppercase tracking-widest">
          <MenuLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden bg-white w-full flex flex-col p-4 px-8 border-t border-gray-200"
            initial={{ maxHeight: 0 }}
            animate={{
              maxHeight: isMenuOpen ? 500 : 0,
              opacity: isMenuOpen ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            exit={{
              maxHeight: 0,
              opacity: 0,
              transition: { duration: 0.3 },
            }}
          >
            <MenuLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
