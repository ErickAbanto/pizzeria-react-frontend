import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function IniciarSesionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ---------------------- SUBMIT ----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const request = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!request.ok) throw new Error("Usuario y/o contraseña inválidos.");

      const response = await request.json();

      switch (response.role) {
        case "C":
          navigate("/cdashboard");
          break;
        case "A":
          navigate("/adashboard");
          break;
        case "V":
          navigate("/vdashboard");
          break;
        default:
          navigate("/");
          break;
      }
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="w-full flex items-start justify-center px-4 py-12">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-10 border-2 border-yellow-500">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Iniciar Sesión
          </h2>

          {error && (
            <p className="text-red-600 font-semibold text-center mb-4">{error}</p>
          )}

          {/* FORM */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-700 font-semibold text-sm">Email</label>
              <div className="mt-2 flex items-center gap-3 bg-gray-100 p-3 rounded-xl border border-gray-300">
                <FaEnvelope className="text-gray-500 text-lg" />
                <input
                  type="email"
                  placeholder="Ingrese su correo"
                  className="w-full bg-transparent outline-none text-gray-700 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-semibold text-sm">Password</label>
              <div className="mt-2 flex items-center gap-3 bg-gray-100 p-3 rounded-xl border border-gray-300">
                <FaLock className="text-gray-500 text-lg" />
                <input
                  type="password"
                  placeholder="Ingrese su contraseña"
                  className="w-full bg-transparent outline-none text-gray-700 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-xl text-lg transition-all"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6 text-sm">
            ¿No tienes cuenta?{" "}
            <Link
              to="/registrate-aqui"
              className="text-yellow-600 font-bold hover:underline"
            >
              Crear cuenta
            </Link>
          </p>

        </div>
      </div>

      {/* FOOTER */}
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
              <a href="https://facebook.com" className="text-white hover:text-yellow-500"><FaFacebookF /></a>
              <a href="https://instagram.com" className="text-white hover:text-yellow-500"><FaInstagram /></a>
              <a href="https://twitter.com" className="text-white hover:text-yellow-500"><FaTwitter /></a>
            </div>
          </div>

        </div>

        <hr className="my-8 border-gray-700 max-w-7xl mx-auto" />

        <div className="text-center text-sm text-gray-500">
          © 2025 Olimpia Pizza. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default IniciarSesionPage;
