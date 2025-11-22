export default function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Iniciar Sesión
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Bienvenido(a) a <span className="font-semibold">Pizzería Ohana</span>
        </p>

        {/* Formulario */}
        <form className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium text-sm">
              Correo electrónico
            </label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              placeholder="tu@email.com"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="text-gray-700 font-medium text-sm">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              placeholder="********"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-xl transition"
          >
            Ingresar
          </button>
        </form>

        {/* Separador */}
        <div className="flex items-center gap-3 mt-6">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <span className="text-gray-500 text-sm">o</span>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>

        {/* Crear cuenta */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          ¿No tienes una cuenta?
          <a href="/register" className="text-red-600 font-semibold hover:underline">
            {" "}Regístrate aquí
          </a>
        </p>
      </div>
    </section>
  );
}
