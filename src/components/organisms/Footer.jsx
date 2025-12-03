import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        {/* Redes Sociales */}
        <div className="flex gap-6 text-3xl">
          <a
            href="#"
            className="hover:text-yellow-400 transition-all"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href="#"
            className="hover:text-yellow-400 transition-all"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="#"
            className="hover:text-yellow-400 transition-all"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Derechos */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Pizzería — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
