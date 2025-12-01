// =========================
// IMPORTACIONES
// =========================
import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaRegCalendarAlt,
} from "react-icons/fa";

// =========================
// 1. DATA DE PROMOCIONES
// =========================
const ofertasData = [
  {
    id: 1,
    titulo: "Pizza del Mes",
    descripcion: "Especial Hawaiiana con ingredientes premium",
    validez: "31 Dic 2025",
    precioAnterior: "S/ 16.99",
    precioActual: "S/ 11.99",
    descuento: "29% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Hawaiiana",
  },
  {
    id: 2,
    titulo: "Martes de Vegetarianas",
    descripcion: "Todas las pizzas vegetarianas con 40% de descuento",
    validez: "Todos los martes",
    precioAnterior: "S/ 11.99",
    precioActual: "S/ 7.19",
    descuento: "40% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Vegetariana",
  },
  {
    id: 3,
    titulo: "Combo Familiar",
    descripcion: "2 pizzas medianas + bebida de 2L + palitos de queso",
    validez: "15 Dic 2025",
    precioAnterior: "S/ 34.99",
    precioActual: "S/ 24.99",
    descuento: "30% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Combo+Familiar",
  },
  {
    id: 4,
    titulo: "2x1 en Pizzas Familiares",
    descripcion:
      "Lleva 2 pizzas familiares al precio de 1. Válido de lunes a jueves.",
    validez: "30 Nov 2025",
    precioAnterior: "S/ 25.98",
    precioActual: "S/ 12.99",
    descuento: "50% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Pepperoni",
  },
];

// =========================
// 2. COMPONENTE FOOTER
// =========================
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        <div className="w-full sm:w-auto flex-1 min-w-[180px]">
          <h4 className="text-lg font-bold text-yellow-500 mb-4">
            Información
          </h4>

          <p className="mb-2 text-gray-400 flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-500" />
            Calle Principal 123, Ciudad
          </p>

          <p className="mb-2 text-gray-400 flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-500" />
            +1 234 567 8900
          </p>

          <p className="mb-2 text-gray-400 flex items-center gap-2">
            <FaEnvelope className="text-yellow-500" />
            hola@olimpiapizza.com
          </p>
        </div>

        <div className="w-full sm:w-auto flex-1 min-w-[180px]">
          <h4 className="text-lg font-bold text-yellow-500 mb-4">
            Links Rápidos
          </h4>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-gray-400 hover:text-white">
                Menú
              </Link>
            </li>
            <li>
              <Link
                to="/promociones"
                className="text-gray-400 hover:text-white"
              >
                Promociones
              </Link>
            </li>
            <li>
              <Link
                to="/sobre-nosotros"
                className="text-gray-400 hover:text-white"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-gray-400 hover:text-white">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto min-w-[180px]">
          <h4 className="text-lg font-bold text-yellow-500 mb-4">Síguenos</h4>

          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              className="text-white hover:text-yellow-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-yellow-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-yellow-500"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700 max-w-7xl mx-auto" />

      <div className="text-center text-sm text-gray-500">
        © 2025 Olimpia Pizza. Todos los derechos reservados.
      </div>
    </footer>
  );
};

// =========================
// 3. COMPONENTE DE TARJETA
// =========================
const OfertaCard = ({ oferta }) => {
  const {
    titulo,
    descripcion,
    validez,
    precioAnterior,
    precioActual,
    descuento,
    imagenUrl,
  } = oferta;

  return (
    <div className="flex flex-col sm:flex-row max-w-4xl mx-auto my-5 bg-white border-2 border-yellow-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl">
      <div className="relative w-full sm:w-2/5 h-48 sm:h-auto">
        <img
          src={imagenUrl}
          alt={titulo}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 right-4 bg-yellow-400 text-gray-800 text-sm font-bold px-3 py-1 rounded">
          {descuento}
        </span>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            {titulo}
          </h3>
          <p className="text-gray-600 mb-3">{descripcion}</p>

          <p className="text-sm text-gray-500 mb-5 flex items-center gap-2">
            <FaRegCalendarAlt className="text-yellow-500 text-lg" />
            Válido hasta: <strong>{validez}</strong>
          </p>
        </div>

        <div>
          <div className="mb-5">
            <span className="line-through text-gray-400 mr-3">
              {precioAnterior}
            </span>
            <span className="text-2xl font-bold text-gray-800">
              {precioActual}
            </span>
          </div>

          <button className="w-full bg-yellow-600 text-white font-bold py-3 rounded hover:bg-yellow-700">
            Reclamar Promoción
          </button>
        </div>
      </div>
    </div>
  );
};

// =========================
// 4. COMPONENTE PRINCIPAL
// =========================
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Promociones Especiales
          </h1>
          <p className="text-xl text-gray-600">
            Aprovecha nuestras increíbles promociones
          </p>
        </section>

        <section>
          {ofertasData.map((oferta) => (
            <OfertaCard key={oferta.id} oferta={oferta} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
