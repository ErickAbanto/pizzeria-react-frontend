import React, { useState } from "react";

function MenuPage() {
  // ---------- Estados UI ----------
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [activeFilter, setActiveFilter] = useState("Todas");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addingProduct, setAddingProduct] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null); // Muestra solo el producto seleccionado


  // ---------- Datos completos de la carta ----------
  const PRODUCTS = [
    // PIZZAS CLÁSICAS
    { id:"pizza-americana", type:"pizza", name:"Americana", category:"Clásicas", sizes:{Personal:12,Mediana:19,Familiar:25,Extrafamiliar:32}, price:12, ingredients:["Salsa Pomarola","Queso mozzarella","Jamón"], history:"Una pizza clásica con jamón y mozzarella sobre salsa Pomarola.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-italiana", type:"pizza", name:"Italiana", category:"Clásicas", sizes:{Personal:13,Mediana:20,Familiar:26,Extrafamiliar:33}, price:13, ingredients:["Salsa Pomarola","Queso mozzarella","Jamón","Aceituna","Pimentón"], history:"Inspirada en sabores mediterráneos con aceitunas y pimentón.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-napolitana", type:"pizza", name:"Napolitana", category:"Clásicas", sizes:{Personal:13,Mediana:20,Familiar:26,Extrafamiliar:33}, price:13, ingredients:["Salsa Pomarola","Queso mozzarella","Tomates frescos","Orégano","Albahaca"], history:"La tradicional pizza napolitana con frescura mediterránea.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-siciliana", type:"pizza", name:"Siciliana", category:"Clásicas", sizes:{Personal:13,Mediana:20,Familiar:26,Extrafamiliar:33}, price:13, ingredients:["Salsa Pomarola","Queso mozzarella","Salame","Pimentón"], history:"Receta con influencia siciliana, fuerte y sabrosa.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-hawaiana", type:"pizza", name:"Hawaiana", category:"Clásicas", sizes:{Personal:14,Mediana:21,Familiar:28,Extrafamiliar:36}, price:14, ingredients:["Salsa Pomarola","Queso mozzarella","Jamón","Piña"], history:"La famosa combinación dulce y salada con piña.", extrasAvailable:{queso:true,pina:true}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-pepperoni", type:"pizza", name:"Pepperoni", category:"Clásicas", sizes:{Personal:14,Mediana:21,Familiar:28,Extrafamiliar:36}, price:14, ingredients:["Salsa Pomarola","Queso mozzarella","Pepperoni"], history:"Una de las más populares en todo el mundo.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-continental", type:"pizza", name:"Continental", category:"Clásicas", sizes:{Personal:14,Mediana:21,Familiar:28,Extrafamiliar:36}, price:14, ingredients:["Salsa Pomarola","Queso mozzarella","Jamón","Aceituna","Cebolla blanca","Champiñones"], history:"Una mezcla completa de sabores continentales.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-mozzarella", type:"pizza", name:"Mozzarella", category:"Clásicas", sizes:{Personal:15,Mediana:22,Familiar:29,Extrafamiliar:37}, price:15, ingredients:["Salsa Pomarola","Extra queso mozzarella"], history:"Ideal para los amantes del queso.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-carbonara", type:"pizza", name:"Carbonara", category:"Clásicas", sizes:{Personal:15,Mediana:22,Familiar:30,Extrafamiliar:38}, price:15, ingredients:["Salsa blanca especial","Queso mozzarella","Tocino","Champiñones"], history:"Inspirada en la pasta carbonara, cremosa y deliciosa.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-margarita", type:"pizza", name:"Margarita", category:"Clásicas", sizes:{Personal:15,Mediana:22,Familiar:30,Extrafamiliar:38}, price:15, ingredients:["Salsa Pomarola","Queso mozzarella","Jamón","Tocino","Maíz dulce"], history:"Una variante con jamón y maíz dulce.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },

    // PIZZAS ESPECIALES
    { id:"pizza-pollo-gourmet", type:"pizza", name:"Pollo Gourmet", category:"Especiales", sizes:{Mediana:24,Familiar:36,Extrafamiliar:44}, price:24, ingredients:["Salsa blanca especial","Queso mozzarella","Tocino","Jamón","Pollo asado","Champiñones"], history:"Una pizza gourmet con pollo y tocino.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-vegetariana", type:"pizza", name:"Vegetariana", category:"Especiales", sizes:{Mediana:24,Familiar:36,Extrafamiliar:44}, price:24, ingredients:["Salsa Pomarola","Queso mozzarella","Aceituna","Champiñones","Pimentón","Cebolla blanca"], history:"Perfecta para quienes prefieren vegetales frescos.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-tropical", type:"pizza", name:"Tropical", category:"Especiales", sizes:{Mediana:26,Familiar:36,Extrafamiliar:45}, price:26, ingredients:["Queso mozzarella","Durazno","Piña","Cereza roja y verde","Leche condensada"], history:"Una pizza dulce y exótica.", extrasAvailable:{queso:false,pina:true}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-suprema", type:"pizza", name:"Suprema", category:"Especiales", sizes:{Mediana:28,Familiar:38,Extrafamiliar:48}, price:28, ingredients:["Salsa Pomarola","Queso mozzarella","Hot dog","Jamón","Tocino","Carne","Cabanossi","Pimentón","Aceituna","Cebolla blanca","Champiñones"], history:"La más completa, con abundancia de ingredientes.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-4-estaciones", type:"pizza", name:"4 Estaciones", category:"Especiales", sizes:{Mediana:28,Familiar:38,Extrafamiliar:48}, price:28, ingredients:["Americana","Italiana","Napolitana","Hawaiana","Vegetariana","Pepperoni","Carbonara","Mozzarella"], history:"Una pizza que reúne varios estilos clásicos en una sola preparación.", extrasAvailable:{queso:true,pina:true}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-shiliquita", type:"pizza", name:"Shiliquita", category:"Especiales", sizes:{Mediana:25,Familiar:35,Extrafamiliar:45}, price:25, ingredients:["Salsa Pomarola","Queso mozzarella","Jamón","Salchicha shilica","Cebolla blanca"], history:"Especialidad con salchicha shilica y cebolla blanca.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pizza.svg" },

       // PIZZAS BBQ
    { id:"pizza-ohana", type:"pizza", name:"Ohana (Especialidad de la casa)", category:"BBQ", sizes:{Mediana:26,Familiar:36,Extrafamiliar:46}, price:26, ingredients:["Salsa Pomarola","Queso mozzarella","Jamón","Salame","Cabanossi","Piña","Cebolla blanca","Salsa BBQ"], history:"La especialidad de la casa con salsa BBQ y piña.", extrasAvailable:{queso:true,pina:true}, img:"placeholder-bnw-pizza.svg" },
    { id:"pizza-hawaiana-chiken", type:"pizza", name:"Hawaiana Chicken", category:"BBQ", sizes:{Mediana:26,Familiar:36,Extrafamiliar:46}, price:26, ingredients:["Salsa Pomarola","Queso mozzarella","Jamón","Piña","Pollo asado","Cebolla blanca","Salsa BBQ"], history:"Variante hawaiana con pollo y salsa BBQ.", extrasAvailable:{queso:true,pina:true}, img:"placeholder-bnw-pizza.svg" },

    // PASTAS
    { id:"pasta-espagueti-bolognesa", type:"pasta", name:"Espagueti a la Bolognesa", category:"Pastas", price:14, ingredients:["Espagueti","Salsa de tomate con carne de res","Queso parmesano"], history:"Clásico italiano con salsa de carne.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pasta.svg" },
    { id:"pasta-espagueti-alfredo", type:"pasta", name:"Espagueti al Alfredo", category:"Pastas", price:14, ingredients:["Espagueti","Salsa de leche","Jamón","Queso parmesano"], history:"Suave y cremosa salsa Alfredo.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pasta.svg" },
    { id:"pasta-espagueti-carbonara", type:"pasta", name:"Espagueti a la Carbonara", category:"Pastas", price:16, ingredients:["Espagueti","Salsa de leche","Tocino","Champiñones","Queso parmesano"], history:"Inspirada en la carbonara clásica.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pasta.svg" },
    { id:"pasta-fetuccini-bolognesa", type:"pasta", name:"Fetuccini a la Bolognesa", category:"Pastas", price:16, ingredients:["Fetuccini","Salsa de tomate con carne de res","Queso parmesano"], history:"Variante con fetuccini y salsa de carne.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pasta.svg" },
    { id:"pasta-fetuccini-alfredo", type:"pasta", name:"Fetuccini al Alfredo", category:"Pastas", price:16, ingredients:["Fetuccini","Salsa de leche","Jamón","Queso parmesano"], history:"Fetuccini con salsa Alfredo cremosa.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pasta.svg" },
    { id:"pasta-fetuccini-carbonara", type:"pasta", name:"Fetuccini a la Carbonara", category:"Pastas", price:18, ingredients:["Fetuccini","Salsa de leche","Tocino","Champiñones","Queso parmesano"], history:"Carbonara con fetuccini y tocino.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pasta.svg" },

    // LASAÑAS
    { id:"lasagna-bolognesa", type:"lasagna", name:"Lasaña a la Bolognesa", category:"Lasañas", price:18, ingredients:["Pasta en capas","Salsa de tomate con carne de res","Queso parmesano"], history:"Lasaña clásica con salsa bolognesa.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pasta.svg" },
    { id:"lasagna-alfredo", type:"lasagna", name:"Lasaña al Alfredo", category:"Lasañas", price:18, ingredients:["Pasta en capas","Salsa de leche","Jamón","Queso parmesano"], history:"Lasaña cremosa con salsa Alfredo.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pasta.svg" },
    { id:"lasagna-carbonara", type:"lasagna", name:"Lasaña a la Carbonara", category:"Lasañas", price:20, ingredients:["Pasta en capas","Salsa de leche","Tocino","Champiñones","Queso parmesano"], history:"Lasaña con el sabor de la carbonara.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-pasta.svg" },

    // PAN AL AJO
    { id:"pan-ajo-simple", type:"pan", name:"Pan al Ajo Simple", category:"Pan al Ajo", price:5, ingredients:["Crema de ajo especial","Orégano"], history:"Clásico pan al ajo.", extrasAvailable:{queso:false,pina:false}, img:"placeholder-bnw-bread.svg" },
    { id:"pan-ajo-queso", type:"pan", name:"Pan al Ajo con Queso", category:"Pan al Ajo", price:7, ingredients:["Crema de ajo especial","Orégano","Queso mozzarella"], history:"Pan al ajo con extra queso.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-bread.svg" },
    { id:"pan-ajo-americano", type:"pan", name:"Pan al Ajo Americano", category:"Pan al Ajo", price:8, ingredients:["Crema de ajo especial","Orégano","Queso mozzarella","Jamón"], history:"Variante americana con jamón.", extrasAvailable:{queso:true,pina:false}, img:"placeholder-bnw-bread.svg" },
    { id:"pan-ajo-hawaiano", type:"pan", name:"Pan al Ajo Hawaiano", category:"Pan al Ajo", price:10, ingredients:["Crema de ajo especial","Orégano","Queso mozzarella","Jamón","Piña"], history:"Variante hawaiana con jamón y piña.", extrasAvailable:{queso:true,pina:true}, img:"placeholder-bnw-bread.svg" },
    { id:"pan-ajo-especial", type:"pan", name:"Pan al Ajo Especial", category:"Pan al Ajo", price:12, ingredients:["Crema de ajo especial","Orégano","Queso mozzarella","Jamón","Piña","Salame","Cabanossi"], history:"La versión más completa del pan al ajo, con carnes y piña.", extrasAvailable:{queso:true,pina:true}, img:"placeholder-bnw-bread.svg" }
  ];



  // ---------- Filtros ----------
  const categories = ["Todas", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const displayed = PRODUCTS.filter(p => {
    if (activeCategory !== "Todas" && p.category !== activeCategory) return false;
    if (activeFilter === "Más Popular" && !p.popular) return false;
    if (query.trim() === "") return true;
    const q = query.trim().toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q) ||
      p.ingredients.join(" ").toLowerCase().includes(q)
    );
  });

  // ---------- Helpers ----------
  const SIZE_OPTIONS = [
    { label: "Personal", delta: 0 },
    { label: "Mediana", delta: 5 },
    { label: "Familiar", delta: 10 },
    { label: "Extrafamiliar", delta: 15 }
  ];
  const GLOBAL_EXTRAS = { queso: { label: "Queso extra", price: 5 }, pina: { label: "Piña extra", price: 4 } };

  function calcUnitPrice(product, sizeLabel, chosenExtras) {
    const base = product.price;
    const sizeDelta = SIZE_OPTIONS.find(s => s.label === sizeLabel)?.delta || 0;
    const extrasSum = Object.keys(chosenExtras || {}).reduce(
      (sum, k) => (chosenExtras[k] ? sum + (GLOBAL_EXTRAS[k]?.price || 0) : sum),
      0
    );
    return base + sizeDelta + extrasSum;
  }

  function handleAddToCart({ product, size, extras, quantity }) {
    const unitPrice = calcUnitPrice(product, size, extras);
    const item = {
      productId: product.id,
      name: product.name,
      size,
      extras,
      quantity,
      unitPrice
    };
    if (window.addToCart) window.addToCart(item);
    setAddingProduct(null);
    alert(`${quantity} x ${product.name} agregado al carrito externo`);
  }

  // ---------- Sugerencias del buscador ----------
  const suggestions = query.trim()
    ? PRODUCTS.filter(p => {
        if (activeCategory !== "Todas" && p.category !== activeCategory) return false; // filtra por categoría activa
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.ingredients.join(" ").toLowerCase().includes(q)
        );
      })
    : [];

  // ---------- Render ----------
  return (
    <>
      <section className="max-w-[1100px] mx-auto my-5 p-8">
        <h1 className="text-4xl font-bold">Nuestro Menú</h1>
        <p className="mt-2 text-gray-700">
          Explora nuestra selección de pizzas artesanales, pastas, lasañas y panes al ajo
        </p>

        {/* Buscador con sugerencias */}
        <div className="relative mt-5">
          <div className="flex gap-3 items-center">
            <input
              placeholder="Buscar en el menú..."
              value={query}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && suggestions.length > 0) {
                  // Seleccionar primera sugerencia, ocultar autoayuda
                  setActiveProduct(suggestions[0]);
                  setIsSearchFocused(false);
                }
              }}
              className="flex-1 p-3 border-2 border-black rounded-lg text-lg"
              aria-label="Buscar productos"
            />

            <div className="flex gap-2">
              <select
                value={activeCategory}
                onChange={(e) => {
                  setActiveCategory(e.target.value);
                  // Al cambiar categoría, limpia producto activo y autoayuda
                  setActiveProduct(null);
                  setIsSearchFocused(false);
                  // Opcional: limpia query para evitar inconsistencias
                  setQuery("");
                }}
                className="p-2 border-2 border-black rounded-lg"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <select
                value={activeFilter}
                onChange={(e) => {
                  setActiveFilter(e.target.value);
                  // Al cambiar filtro, también limpia producto activo y autoayuda
                  setActiveProduct(null);
                  setIsSearchFocused(false);
                }}
                className="p-2 border-2 border-black rounded-lg"
              >
                <option value="Todas">Todas</option>
                <option value="Más Popular">Más Popular</option>
              </select>
            </div>
          </div>

          {/* Sugerencias dinámicas (solo si hay foco, texto y no hay producto activo) */}
          {isSearchFocused && query.trim() !== "" && !activeProduct && (
            <ul className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {suggestions.map((p) => (
                <li
                  key={p.id}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  // usar onMouseDown para evitar perder foco antes de manejar el click
                  onMouseDown={() => {
                    setQuery(p.name);
                    setActiveProduct(p);      // Mostrar solo esa pizza
                    setIsSearchFocused(false); // Ocultar autoayuda
                  }}
                >
                  {p.name}
                </li>
              ))}
              {suggestions.length === 0 && (
                <li className="px-3 py-2 text-gray-500">Sin coincidencias</li>
              )}
            </ul>
          )}
        </div>

        {/* Tabs de categoría */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveCategory(tab);
                setActiveProduct(null);
                setIsSearchFocused(false);
                setQuery("");
              }}
              className={`px-3 py-2 rounded-lg border ${
                activeCategory === tab
                  ? "bg-black text-white border-2 border-black"
                  : "bg-white border-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid de productos (muestra solo activeProduct si existe) */}
        <div className="grid gap-5 mt-6 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
          {(activeProduct ? [activeProduct] : displayed).map((p) => (
            <article key={p.id} className="p-4 border rounded-xl bg-white flex flex-col">
              <div className="flex justify-center mb-3">
                <svg viewBox="0 0 120 120" className="w-28 h-28" aria-hidden>
                  <circle cx="60" cy="60" r="56" stroke="#111" strokeWidth="2" fill="#fff" />
                  <g fill="#111">
                    <circle cx="40" cy="45" r="6" />
                    <circle cx="80" cy="40" r="6" />
                    <circle cx="95" cy="75" r="6" />
                    <circle cx="60" cy="90" r="6" />
                  </g>
                </svg>
              </div>

              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="flex justify-between mt-1 text-sm">
                <span className="font-bold">S/. {p.price}</span>
                <span className="opacity-70">{p.category}</span>
              </div>

              <div className="flex gap-2 mt-3">
                <button
                  className="flex-1 p-2 border-2 border-black rounded-lg bg-white"
                  onClick={() => { setSelectedProduct(p); setActiveProduct(p); setIsSearchFocused(false); }}
                >
                  Ver Información
                </button>
                <button
                  className="flex-1 p-2 border-2 border-black rounded-lg bg-black text-white"
                  onClick={() => { setAddingProduct(p); setActiveProduct(p); setIsSearchFocused(false); }}
                >
                  Agregar
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Botón para volver al menú completo */}
        {activeProduct && (
          <div className="mt-6">
            <button
              onClick={() => { setActiveProduct(null); setIsSearchFocused(false); }}
              className="px-4 py-2 border-2 border-black rounded-lg bg-white"
            >
              Volver al menú completo
            </button>
          </div>
        )}
      </section>

      {/* Modal: Ver Información */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white p-6 rounded-lg w-[520px] max-w-[95%]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
            <p className="mt-2">
              <strong>Ingredientes:</strong> {selectedProduct.ingredients.join(", ")}
            </p>
            <p className="mt-2">
              <strong>Historia:</strong> {selectedProduct.history}
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 border-2 border-black rounded-lg bg-white"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  setAddingProduct(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="p-2 border-2 border-black rounded-lg bg-black text-white"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Agregar */}
      {addingProduct && (
        <CartModal
          product={addingProduct}
          onClose={() => setAddingProduct(null)}
          onAdd={(opts) => handleAddToCart(opts)}
          sizeOptions={SIZE_OPTIONS}
          extrasDefs={GLOBAL_EXTRAS}
        />
      )}
    </>
  );
}

// ---------------- CartModal ----------------
function CartModal({ product, onClose, onAdd, sizeOptions, extrasDefs }) {
  const [size, setSize] = useState(sizeOptions?.[1]?.label || "Mediana");
  const [extras, setExtras] = useState(() => {
    const obj = {};
    Object.keys(extrasDefs).forEach((k) => (obj[k] = false));
    return obj;
  });
  const [quantity, setQuantity] = useState(1);

  function toggleExtra(key) {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function calcUnit() {
    let sum = product.price;
    const sDelta = sizeOptions.find((s) => s.label === size)?.delta || 0;
    sum += sDelta;
    Object.keys(extras).forEach((k) => {
      if (extras[k]) sum += extrasDefs[k]?.price || 0;
    });
    return sum;
  }

  const unitPrice = calcUnit();
  const total = unitPrice * Math.max(1, quantity);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-[520px] max-w-[95%]"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-4">Agregar: {product.name}</h3>

        {/* Tamaños */}
        <label className="text-sm font-bold">Tamaño</label>
        <div className="flex gap-2 mt-2">
          {sizeOptions.map((s) => (
            <button
              key={s.label}
              onClick={() => setSize(s.label)}
              className={`px-3 py-2 rounded-lg border cursor-pointer ${
                s.label === size
                  ? "bg-black text-white border-black"
                  : "bg-white border-gray-400"
              }`}
            >
              {s.label} {s.delta ? `( + S/. ${s.delta})` : ""}
            </button>
          ))}
        </div>

        {/* Extras */}
        <label className="text-sm font-bold mt-4 block">Extras</label>
        <div className="flex gap-4 flex-wrap mt-2">
          {Object.keys(extrasDefs).map((k) => {
            if (!product.extrasAvailable?.[k]) return null;
            return (
              <label key={k} className="flex items-center gap-2 border p-2 rounded">
                <input
                  type="checkbox"
                  checked={!!extras[k]}
                  onChange={() => toggleExtra(k)}
                />
                <span>
                  {extrasDefs[k].label} (+S/. {extrasDefs[k].price})
                </span>
              </label>
            );
          })}
        </div>

        {/* Cantidad */}
        <label className="text-sm font-bold mt-4 block">Cantidad</label>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.max(1, parseInt(e.target.value || "1")))
          }
          className="w-28 p-2 border-2 border-black rounded-lg mt-2"
        />

        {/* Precios */}
        <div className="mt-4">
          <strong>Precio unitario: S/. {unitPrice.toFixed(2)}</strong>
          <div className="mt-2 font-bold">Total: S/. {total.toFixed(2)}</div>
        </div>

        {/* Botones */}
        <div className="flex gap-2 mt-5">
          <button
            onClick={onClose}
            className="flex-1 p-2 border-2 border-black rounded-lg bg-white"
          >
            Cancelar
          </button>
          <button
            onClick={() => onAdd({ product, size, extras, quantity })}
            className="flex-1 p-2 border-2 border-black rounded-lg bg-black text-white"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
