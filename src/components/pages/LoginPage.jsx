import React from 'react'

import { FaUser, FaLock } from "react-icons/fa";

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 border-2 border-yellow-500">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h2>

        <form className="space-y-5">

          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg border">
            <FaUser className="text-gray-500" />
            <input
              type="text"
              placeholder="Correo o usuario"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg border">
            <FaLock className="text-gray-500" />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg text-lg">
            Entrar
          </button>

        </form>

        <p className="text-center text-gray-600 mt-5 text-sm">
          ¿No tienes cuenta?{" "}
          <span className="text-yellow-600 font-bold cursor-pointer hover:underline">
            Crear cuenta
          </span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
