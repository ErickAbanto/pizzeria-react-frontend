// =========================
// IMPORTACIONES
// =========================
import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// =========================
// 1. DATA DEL MENÚ
// =========================
const menuData = [
  {
    id: 1,
    titulo: "Pizza Pepperoni",
    descripcion: "Clásica pizza con abundante pepperoni y queso mozzarella.",
    precio: "12.99",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pepperoni",
  },
  {
    id: 2,
    titulo: "Pizza Hawaiana",
    descripcion: "Piña, jamón y queso mozzarella sobre una base crocante.",
    precio: "13.50",
    imagenUrl: "https://via.placeholder.com/300x200?text=Hawaiana",
  },
  {
    id: 3,
    titulo: "Pizza Vegetariana",
    descripcion: "Tomate, champiñones, aceitunas, cebolla y pimiento.",
    precio: "11.99",
    imagenUrl: "https://via.placeholder.com/300x200?text=Vegetariana",
  },
  {
    id: 4,
    titulo: "Pizza Suprema",
    descripcion: "Pepperoni, chorizo, pimiento, champiñones y aceitunas.",
    precio: "15.99",
    imagenUrl: "https://via.placeholder.com/300x200?text=Suprema",
  },
  {
    id: 5,
    titulo: "Pizza Cuatro Quesos",
    descripcion: "Mozzarella, cheddar, gouda y parmesano.",
    precio: "14.50",
    imagenUrl: "https://via.placeholder.com/300x200?text=4+Quesos",
  },
  {
    id: 6,
    titulo: "Pizza BBQ",
    descripcion: "Pollo, salsa bbq, cebolla y queso mozzarella.",
    precio: "13.99",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+BBQ",
  },
];

// =========================
// 2. FOOTER
// =========================
const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 py-10 px-4 sm:px-8">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">

      <div className="w-full sm:w-auto flex-1 min-w-[180px]">
        <h4 className="text-lg font-bold text-yellow-500 mb-4">Información</h4>

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
        <h4 className="text-lg font-bold text-yellow-500 mb-4">Links Rápidos</h4>

        <ul className="space-y-2">
          <li><Link to="/" className="text-gray-400 hover:text-white">Inicio</Link></li>
          <li><Link to="/menu" className="text-gray-400 hover:text-white">Menú</Link></li>
          <li><Link to="/promociones" className="text-gray-400 hover:text-white">Promociones</Link></li>
          <li><Link to="/sobre-nosotros" className="text-gray-400 hover:text-white">Sobre Nosotros</Link></li>
          <li><Link to="/contacto" className="text-gray-400 hover:text-white">Contacto</Link></li>
        </ul>
      </div>

      <div className="w-full sm:w-auto min-w-[180px]">
        <h4 className="text-lg font-bold text-yellow-500 mb-4">Síguenos</h4>

        <div className="flex space-x-4 text-2xl">
          <a href="https://facebook.com" className="text-white hover:text-yellow-500">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-yellow-500">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-yellow-500">
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

// =========================
// 3. TARJETA DEL MENÚ
// =========================
const MenuCard = ({ item }) => {
  const { titulo, descripcion, precio, imagenUrl } = item;

  return (
    <div className="bg-white border-2 border-yellow-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl flex flex-col">
      <img
        src={imagenUrl}
        alt={titulo}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{titulo}</h3>
          <p className="text-gray-600 mt-2">{descripcion}</p>
        </div>

        <div className="mt-4">
          <p className="text-2xl font-bold text-gray-900">S/{precio}</p>

          <button className="w-full mt-4 bg-yellow-600 text-white font-bold py-3 rounded hover:bg-yellow-700">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

// =========================
// 4. PÁGINA PRINCIPAL (MenuPage)
// =========================
export default function MenuPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="pt-10 pb-16 px-4 sm:px-6 lg:px-8">

        <section className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Menú</h1>
          <p className="text-xl text-gray-600">Descubre nuestras mejores pizzas</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {menuData.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}
