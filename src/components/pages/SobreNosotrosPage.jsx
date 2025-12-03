import React from "react";
import Footer from "../organisms/Footer";

function SobreNosotrosPage() {
  return (
    <div className="w-full flex flex-col items-center p-6 sm:p-10">

      <h2 className="text-4xl font-bold text-yellow-600 mb-10 text-center">
        Sobre Nosotros
      </h2>

      {/* 🔶 SECCIÓN 1 — Imagen Izquierda / Texto Derecha */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center gap-8 mb-16">
        {/* Imagen */}
        <img
          src="/img/sobre1.jpg"
          alt="Equipo de trabajo"
          className="w-full sm:w-1/2 rounded-2xl shadow-xl border-2 border-yellow-500"
        />

        {/* Texto */}
        <div className="w-full sm:w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-yellow-600">
            Nuestra Historia
          </h3>

          <p className="text-lg leading-relaxed bg-white p-4 rounded-xl shadow">
            Somos una pizzería que nació con la pasión por los sabores artesanales
            y el objetivo de ofrecer una experiencia única a cada cliente.
          </p>

          <p className="text-lg leading-relaxed bg-white p-4 rounded-xl shadow">
            Desde nuestros inicios, nos hemos comprometido a preparar pizzas con
            ingredientes frescos, masa artesanal y una atención que marca la diferencia.
          </p>
        </div>
      </div>

      {/* 🔶 SECCIÓN 2 — Imagen Derecha / Texto Izquierda */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row-reverse items-center gap-8 mb-16">
        {/* Imagen */}
        <img
          src="/img/sobre2.jpg"
          alt="Nuestro Local"
          className="w-full sm:w-1/2 rounded-2xl shadow-xl border-2 border-yellow-500"
        />

        {/* Texto */}
        <div className="w-full sm:w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-yellow-600">
            Pasión por el Sabor
          </h3>

          <p className="text-lg leading-relaxed bg-white p-4 rounded-xl shadow">
            Trabajamos día a día para ofrecer nuevas combinaciones de sabores,
            manteniendo la esencia tradicional que nos caracteriza.
          </p>

          <p className="text-lg leading-relaxed bg-white p-4 rounded-xl shadow">
            Creemos en la innovación constante, pero sin perder lo más importante:
            el cariño y la dedicación en cada preparación.
          </p>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default SobreNosotrosPage;
