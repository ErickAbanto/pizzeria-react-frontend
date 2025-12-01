import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full flex items-start justify-center bg-gray-100 px-4 py-10">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 border-2 border-yellow-500">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h2>

        <form className="space-y-6">

          <div>
            <label className="text-gray-700 font-semibold text-sm">Email</label>
            <div className="mt-2 flex items-center gap-3 bg-gray-100 p-3 rounded-lg border">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                placeholder="Ingrese su correo"
                className="w-full bg-transparent outline-none text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-gray-700 font-semibold text-sm">Password</label>
            <div className="mt-2 flex items-center gap-3 bg-gray-100 p-3 rounded-lg border">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                className="w-full bg-transparent outline-none text-gray-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
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
