"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Navbar: React.FC = () => {
  const t = useTranslations("navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: t("links.home"), href: "/" },
    { name: t("links.services"), href: "#services" },
    { name: t("links.projects"), href: "#projects" },
    { name: t("links.about"), href: "#nosotros" },
    { name: t("links.contact"), href: "#contact" },
  ];

  const changeLanguage = (lang: string) => {
    const path = pathname.replace(`/${locale}`, "");
    router.push(`/${lang}${path}`);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              width={150}
              height={49}
              alt={t("logo_alt")}
              title={t("logo_title")}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-solbyt-solbyt-gray-800 hover:text-solbyt-purple-600 transition-colors font-medium">
                {link.name}
              </Link>
            ))}

            <button className="ml-4 bg-solbyt-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-lg">
              {t("button")}
            </button>

            {/* Language Selector */}
            <div className="relative ml-4">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center px-3 py-1 border rounded-md text-solbyt-purple-600 font-bold hover:bg-gray-100">
                {locale.toUpperCase()} <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute w-[62px] right-0 mt-2 bg-white border rounded-md shadow z-10">
                  {["es", "en", "fr"]
                    .filter((lang) => lang !== locale)
                    .map((lang) => (
                      <button
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className="block w-full px-2.5 py-2 text-left text-solbyt-purple-600 font-bold hover:bg-gray-100">
                        {lang.toUpperCase()}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-solbyt-purple-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-gray-700 hover:text-solbyt-purple-600 transition-colors font-medium border-b border-gray-100"
                  onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <button
                className="mt-4 bg-solbyt-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}>
                {t("button")}
              </button>

              {/* Language Selector Mobile */}
              <div className="mt-4 flex justify-center space-x-2">
                {["es", "en", "fr"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      changeLanguage(lang);
                      setIsOpen(false);
                    }}
                    className="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100">
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
