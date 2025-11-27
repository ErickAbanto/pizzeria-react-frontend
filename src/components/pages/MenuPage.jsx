import { useState } from "react";

function MenuPage() {
  // 🔥 Productos base — COLÓCALEMOS LUEGO LAS 30 PIZZAS REALES DE LA CARTA
  const [productos] = useState([
    {
      id: 1,
      nombre: "Pizza Ejemplo",
      historia: "Aquí irá la historia real de cada pizza que aparece en menu02.",
      ingredientes: "Ingredientes reales según carta (luego los rellenamos).",
      precioBase: 25.9,
      imagen: "/menu01/pizza-ejemplo.png",
    },
  ]);

  // Estado para el modal de información
  const [infoProducto, setInfoProducto] = useState(null);

  // Estado para el modal de agregar al carrito
  const [carritoProducto, setCarritoProducto] = useState(null);

  // Configuración temporal de tamaños y extras
  const tamaños = [
    { id: "personal", nombre: "Personal", precio: 0 },
    { id: "mediana", nombre: "Mediana", precio: 8 },
    { id: "familiar", nombre: "Familiar", precio: 14 },
  ];

  const extras = [
    { id: "queso", nombre: "Queso Extra", precio: 4 },
    { id: "jamon", nombre: "Jamón Extra", precio: 5 },
    { id: "tocino", nombre: "Tocino Extra", precio: 6 },
  ];

  // Estado del pedido en el modal
  const [seleccion, setSeleccion] = useState({
    tamaño: null,
    extras: [],
  });

  // Calcular precio final
  const calcularTotal = () => {
    if (!carritoProducto) return 0;

    let total =
      carritoProducto.precioBase +
      (seleccion.tamaño ? seleccion.tamaño.precio : 0) +
      seleccion.extras.reduce((acc, ex) => acc + ex.precio, 0);

    return total.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#f6f2e9] p-6">

      {/* TÍTULO */}
      <h1 className="text-5xl text-center font-black mb-10 text-black">
        MENÚ OHANA
      </h1>

      {/* GRID DE PRODUCTOS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map((p) => (
          <div
            key={p.id}
            className="bg-white border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0_#000] hover:scale-105 transition"
          >
            <img
              src={p.imagen}
              className="w-40 mx-auto mb-4"
            />

            <h2 className="text-2xl font-bold text-center mb-2">{p.nombre}</h2>

            <p className="text-center text-gray-700 text-sm mb-2">
              Desde S/ {p.precioBase.toFixed(2)}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                className="w-1/2 bg-black text-white py-2 rounded-xl font-bold"
                onClick={() => setInfoProducto(p)}
              >
                Info
              </button>
              <button
                className="w-1/2 bg-red-600 text-white py-2 rounded-xl font-bold"
                onClick={() => {
                  setCarritoProducto(p);
                  setSeleccion({ tamaño: null, extras: [] });
                }}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL INFORMACIÓN */}
      {infoProducto && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg p-6 border-4 border-black rounded-2xl shadow-[8px_8px_0_#000]">
            <h2 className="text-3xl font-black mb-4">{infoProducto.nombre}</h2>

            <img src={infoProducto.imagen} className="w-48 mx-auto mb-4" />

            <p className="mb-3">{infoProducto.historia}</p>
            <p className="font-bold mb-4">Ingredientes: {infoProducto.ingredientes}</p>

            <button
              className="mt-3 bg-red-600 text-white w-full py-2 rounded-xl font-bold"
              onClick={() => setInfoProducto(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* MODAL AGREGAR AL CARRITO */}
      {carritoProducto && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg p-6 border-4 border-black rounded-2xl shadow-[8px_8px_0_#000]">

            <h2 className="text-3xl font-black mb-4">
              {carritoProducto.nombre}
            </h2>

            {/* Tamaños */}
            <h3 className="text-xl font-bold mb-2">Tamaño</h3>
            <div className="flex flex-col gap-2 mb-4">
              {tamaños.map((t) => (
                <button
                  key={t.id}
                  className={`py-2 border-2 rounded-xl font-bold ${
                    seleccion.tamaño?.id === t.id
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSeleccion({ ...seleccion, tamaño: t })}
                >
                  {t.nombre} (+S/ {t.precio})
                </button>
              ))}
            </div>

            {/* Extras */}
            <h3 className="text-xl font-bold mb-2">Extras</h3>
            <div className="flex flex-col gap-2 mb-4">
              {extras.map((e) => (
                <button
                  key={e.id}
                  className={`py-2 border-2 rounded-xl font-bold ${
                    seleccion.extras.includes(e)
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => {
                    const nuevo = seleccion.extras.includes(e)
                      ? seleccion.extras.filter((x) => x.id !== e.id)
                      : [...seleccion.extras, e];

                    setSeleccion({ ...seleccion, extras: nuevo });
                  }}
                >
                  {e.nombre} (+S/ {e.precio})
                </button>
              ))}
            </div>

            {/* TOTAL */}
            <p className="text-2xl font-black text-center mb-4">
              Total: S/ {calcularTotal()}
            </p>

            {/* BOTÓN AGREGAR */}
            <button
              disabled={!seleccion.tamaño}
              className={`w-full py-3 font-bold rounded-xl ${
                seleccion.tamaño
                  ? "bg-red-600 text-white"
                  : "bg-gray-400 text-black"
              }`}
              onClick={() => {
                // Aquí se agrega al carrito global de tu proyecto
                alert("Producto agregado al carrito");
                setCarritoProducto(null);
              }}
            >
              Agregar al carrito
            </button>

            <button
              className="mt-3 bg-black text-white w-full py-2 rounded-xl font-bold"
              onClick={() => setCarritoProducto(null)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuPage;
