import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="w-full bg-gray-100">
      <div className="px-6 pt-12 pb-20 max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Contáctanos
        </h1>

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* FORMULARIO */}
          <div className="bg-white w-full rounded-2xl shadow-2xl p-10 border border-gray-300">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Envíanos un mensaje
            </h2>

            <form className="space-y-6">

              <div>
                <label className="text-gray-700 font-semibold text-sm">
                  Nombre
                </label>
                <div className="mt-2 bg-gray-100 p-3 rounded-xl border border-gray-300">
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    className="w-full bg-transparent outline-none text-gray-700 text-sm"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-semibold text-sm">
                  Correo
                </label>
                <div className="mt-2 bg-gray-100 p-3 rounded-xl border border-gray-300">
                  <input
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    className="w-full bg-transparent outline-none text-gray-700 text-sm"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-semibold text-sm">
                  Mensaje
                </label>
                <div className="mt-2 bg-gray-100 p-3 rounded-xl border border-gray-300">
                  <textarea
                    rows="4"
                    placeholder="Escribe tu mensaje"
                    className="w-full bg-transparent outline-none text-gray-700 text-sm resize-none"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-xl text-lg transition-all"
              >
                Enviar Mensaje
              </button>

            </form>
          </div>

          {/* INFORMACIÓN + MAPA */}
          <div className="space-y-8">

            {/* INFO */}
            <div className="bg-white w-full rounded-2xl shadow-2xl p-10 border border-gray-300">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Información
              </h2>

              <p className="mb-4 flex items-center gap-3 text-gray-700">
                <MapPin className="text-yellow-600" />
                <strong>Dirección:</strong> Jr. Ayacucho #.. - Celendín, Perú
              </p>

              <p className="mb-4 flex items-center gap-3 text-gray-700">
                <Phone className="text-yellow-600" />
                <strong>Teléfono:</strong> +51 900 000 000
              </p>

              <p className="mb-4 flex items-center gap-3 text-gray-700">
                <Mail className="text-yellow-600" />
                <strong>Correo:</strong> ohanapizzas@gmail.com
              </p>

              <p className="mb-2 flex items-center gap-3 text-gray-700">
                <Clock className="text-yellow-600" />
                <strong>Horario:</strong> 6:00 pm - 11:00 pm
              </p>
            </div>

            {/* MAPA */}
            <div className="w-full h-72 rounded-2xl overflow-hidden shadow-2xl border border-gray-300">
              <iframe
                title="Mapa"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.7966327374634!2d-78.14798618840922!3d-6.868651031262374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b3cd0030f39669%3A0xdf36bf68323020a8!2sPizzer%C3%ADa%20Ohana!5e1!3m2!1ses-419!2spe!4v1764012075305!5m2!1ses-419!2spe"
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactoPage;
