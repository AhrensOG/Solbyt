import { Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} ADev. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="/terms-and-conditions"
            title="Ir a la página de Términos y Condiciones"
            target="_blank"
            className="text-gray-600 hover:text-purple-600 transition text-sm"
          >
            Términos y condiciones
          </Link>
          <Link
            href="/privacy-policy"
            title="Ir a la página de Política de Privacidad"
            target="_blank"
            className="text-gray-600 hover:text-purple-600 transition text-sm"
          >
            Política de privacidad
          </Link>
          <Link
            href="/contact"
            title="Ir a la página de Contacto"
            target="_blank"
            className="text-gray-600 hover:text-purple-600 transition text-sm"
          >
            Contacto
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-6 flex items-center justify-center space-x-6">
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
    </footer>
  );
};

export default Footer;
