"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Ellipsis, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setIsAtTop(currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const MenuLinks = () => (
    <>
      <Link
        href="/"
        title="Ir a la página principal"
        className="text-[#6aa9b6] hover:text-[#6aa9b6]/60 transition-all duration-200 text-lg py-2"
        aria-label="Ir a la página de inicio"
      >
        Inicio
      </Link>
      <Link
        href="/#contact"
        title="Ir a la sección de Contacto"
        className="text-[#beb0fa] hover:text-[#beb0fa]/60 transition-all duration-200 text-lg py-2"
        aria-label="Ir a la sección de contacto"
      >
        Contáctanos
      </Link>
      <Link
        href="/#services"
        title="Ir a la sección de Servicios"
        className="text-[#cb6ce6] hover:text-[#cb6ce6]/60 transition-all duration-200 text-lg py-2"
        aria-label="Ir a la sección de servicios"
      >
        Servicio
      </Link>
      <Link
        href="/#about-us"
        title="Ir a la sección de Sobre Nosotros"
        className="text-gray-900 hover:text-gray-400 transition-all duration-200 text-lg py-2"
        aria-label="Ir a la sección sobre nosotros"
      >
        Nosotros
      </Link>
    </>
  );

  return (
    <motion.nav
      className={`fixed top-0 w-full bg-white h-20 z-50 transition-shadow duration-300 ${
        isAtTop ? "" : "shadow-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-8 py-4 h-full flex items-center justify-between">
        <div className="text-xl tracking-widest text-blue-900 underline">
          <Link href="/" title="Ir a la página principal">
            <Image
              src={"/logo.png"}
              width={150}
              height={49}
              alt="Logo de Solbyt"
              title="Logo de Solbyt"
            />
          </Link>
        </div>

        <div className="md:hidden min-h-[49px] grid place-items-center">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Ellipsis className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 uppercase tracking-widest min-h-[49px]">
          <MenuLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute md:static md:hidden overflow-hidden bg-white w-full flex flex-col p-4 px-8 border-t border-gray-200 z-50"
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
    </motion.nav>
  );
};

export default NavBar;
