import { Menu, X, UserRound, ChevronDown, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaPizzaSlice,
  FaTags,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fff7e8] z-50 shadow-lg py-4 px-6 flex justify-between items-center transition-all duration-300">
      
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-transform duration-300 hover:scale-105">
          <img src="/imgs/logo.png" alt="logo" className="w-12 h-12 object-contain" />
        </div>
        <span className="text-xl font-bold tracking-wider text-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:text-yellow-600">
          OHANA
        </span>
      </Link>

      {/* ICONO HAMBURGUESA */}
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="lg:hidden w-12 h-12 flex items-center justify-center bg-white border-4 border-black rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-all duration-300 relative"
      >
        <span className={`absolute transition-all duration-300 ${openMenu ? "rotate-90 opacity-0" : "opacity-100 rotate-0"}`}>
          <Menu size={28} strokeWidth={3} />
        </span>
        <span className={`absolute transition-all duration-300 ${openMenu ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
          <X size={28} strokeWidth={3} />
        </span>
      </button>

      {/* MENÚ DESKTOP */}
      <ul className="hidden lg:flex items-center gap-10 text-sm font-bold text-black">
        <li className="hover:text-yellow-600 transition-all duration-200"><Link to="/">Inicio</Link></li>
        <li className="hover:text-yellow-600 transition-all duration-200"><Link to="/menu">Menú</Link></li>
        <li className="hover:text-yellow-600 transition-all duration-200"><Link to="/promociones">Promociones</Link></li>
        <li className="hover:text-yellow-600 transition-all duration-200"><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        <li className="hover:text-yellow-600 transition-all duration-200"><Link to="/contacto">Contacto</Link></li>
      </ul>

      {/* LOGIN → CARRITO (Desktop) */}
      <div className="hidden lg:flex items-center gap-6">

        {/* INICIAR SESIÓN PRIMERO */}
        <Link to="/iniciar-sesion" className="flex items-center gap-2 font-medium text-black hover:text-yellow-600 transition-all duration-200">
          <UserRound size={22} />
          Iniciar Sesión
        </Link>

        <ChevronDown size={22} className="hover:text-yellow-600 transition-transform duration-300" />

        {/* CARRITO DESPUÉS */}
        <Link to="/carrito" className="flex items-center gap-2 text-black hover:text-yellow-600 transition-all duration-200 font-bold">
          <ShoppingCart size={26} strokeWidth={3} />
          Carrito
        </Link>
      </div>

      {/* OVERLAY + MENÚ MÓVIL */}
      {openMenu && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40 lg:hidden"></div>

          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-[78%] bg-[#fff7e8] lg:hidden border-l-4 border-black shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)] flex flex-col py-8 px-6 gap-6 transition-all duration-300 animate-slideLeft z-50"
          >

            {/* Botón cerrar X */}
            <button
              onClick={() => setOpenMenu(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white border-2 border-black rounded-full shadow-md"
            >
              <X size={24} />
            </button>

            {/* Header logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center border-4 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] overflow-hidden">
                <img src="/imgs/logo.png" alt="logo" className="w-11 h-11 object-contain" />
              </div>
              <span className="text-xl font-bold text-black tracking-wide drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                OHANA
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 mt-2">
              <Link to="/" onClick={() => setOpenMenu(false)} className="flex items-center gap-3 text-lg font-bold hover:text-yellow-600"><FaHome size={22} /> Inicio</Link>
              <Link to="/menu" onClick={() => setOpenMenu(false)} className="flex items-center gap-3 text-lg font-bold hover:text-yellow-600"><FaPizzaSlice size={22} /> Menú</Link>
              <Link to="/promociones" onClick={() => setOpenMenu(false)} className="flex items-center gap-3 text-lg font-bold hover:text-yellow-600"><FaTags size={22} /> Promociones</Link>
              <Link to="/sobre-nosotros" onClick={() => setOpenMenu(false)} className="flex items-center gap-3 text-lg font-bold hover:text-yellow-600"><FaInfoCircle size={22} /> Sobre Nosotros</Link>
              <Link to="/contacto" onClick={() => setOpenMenu(false)} className="flex items-center gap-3 text-lg font-bold hover:text-yellow-600"><FaPhoneAlt size={22} /> Contacto</Link>
            </div>

            {/* INICIAR SESIÓN FIRST (Mobile) */}
            <Link
              to="/iniciar-sesion"
              onClick={() => setOpenMenu(false)}
              className="flex items-center gap-3 text-lg font-bold mt-6 hover:text-yellow-600"
            >
              <UserRound size={24} strokeWidth={3} /> Iniciar Sesión
            </Link>

            {/* CARRITO AFTER (Mobile) */}
            <Link
              to="/carrito"
              onClick={() => setOpenMenu(false)}
              className="flex items-center gap-3 text-lg font-bold bg-black text-white px-5 py-3 rounded-xl border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
              hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:scale-95 mt-4"
            >
              <ShoppingCart size={24} /> Carrito
            </Link>

          </div>
        </>
      )}

      {/* Línea decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black"></div>
    </nav>
  );
}

export default Navbar;
