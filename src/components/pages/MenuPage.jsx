import React, { useState, useEffect } from "react";

function MenuPage() {
  // ---------- Estados UI ----------
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [activeFilter, setActiveFilter] = useState("Todas");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addingProduct, setAddingProduct] = useState(null);
  const [cart, setCart] = useState(() => {
    try { const raw = localStorage.getItem("menu_cart_v1"); return raw ? JSON.parse(raw) : []; } catch { return []; }
  });

  useEffect(() => { localStorage.setItem("menu_cart_v1", JSON.stringify(cart)); }, [cart]);

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
    return p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q) || p.ingredients.join(" ").toLowerCase().includes(q);
  });

  // ---------- Helpers carrito ----------
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
    const extrasSum = Object.keys(chosenExtras || {}).reduce((sum, k) => (chosenExtras[k] ? sum + (GLOBAL_EXTRAS[k]?.price || 0) : sum), 0);
    return base + sizeDelta + extrasSum;
  }

  function addToCart({ product, size, extras, quantity }) {
    const unitPrice = calcUnitPrice(product, size, extras);
    const item = {
      cartId: Date.now().toString(),
      productId: product.id,
      name: product.name,
      size,
      extras,
      quantity,
      unitPrice
    };
    setCart(prev => [...prev, item]);
    setAddingProduct(null);
    alert(`${quantity} x ${product.name} agregado al carrito`);
  }

  function removeFromCart(cartId) {
    setCart(prev => prev.filter(i => i.cartId !== cartId));
  }

  function cartTotal() {
    return cart.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
  }

  // ---------- Render ----------
  return (
    <>
      <section style={styles.container}>
        <h1 style={styles.title}>Nuestro Menú</h1>
        <p style={styles.lead}>Explora nuestra selección de pizzas artesanales, pastas, lasañas y panes al ajo</p>

        {/* Buscador */}
        <div style={styles.controlsRow}>
          <input
            placeholder="Buscar en el menú..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.searchInput}
            aria-label="Buscar productos"
          />

          <div style={{ display: "flex", gap: 8 }}>
            <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} style={styles.select}>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <select value={activeFilter} onChange={(e) => setActiveFilter(e.target.value)} style={styles.select}>
              <option value="Todas">Todas</option>
              <option value="Más Popular">Más Popular</option>
            </select>
          </div>
        </div>

        {/* Tabs de categoría */}
        <div style={styles.tabsRow}>
          {categories.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              style={activeCategory === tab ? styles.tabActive : styles.tab}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div style={styles.grid}>
          {displayed.map(p => (
            <article key={p.id} style={styles.card}>
              <div style={styles.imgWrap}>
                <svg viewBox="0 0 120 120" style={styles.svgThumb} aria-hidden>
                  <circle cx="60" cy="60" r="56" stroke="#111" strokeWidth="2" fill="#fff" />
                  <g fill="#111">
                    <circle cx="40" cy="45" r="6" />
                    <circle cx="80" cy="40" r="6" />
                    <circle cx="95" cy="75" r="6" />
                    <circle cx="60" cy="90" r="6" />
                  </g>
                </svg>
              </div>

              <h3 style={styles.cardTitle}>{p.name}</h3>
              <div style={styles.cardMeta}>
                <span style={{ fontWeight: 700 }}>S/. {p.price}</span>
                <span style={{ fontSize: 12, opacity: 0.7 }}>{p.category}</span>
              </div>

              <div style={styles.cardActions}>
                <button style={styles.infoButton} onClick={() => setSelectedProduct(p)}>Ver Información</button>
                <button style={styles.addButton} onClick={() => setAddingProduct(p)}>Agregar al Carrito</button>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* Sidebar Carrito */}
      <aside style={styles.cartWidget}>
        <h4 style={{ margin: 0 }}>Carrito</h4>
        {cart.length === 0 ? (
          <div style={{ marginTop: 8, opacity: 0.7 }}>Carrito vacío</div>
        ) : (
          <div style={{ marginTop: 8 }}>
            {cart.map(it => (
              <div key={it.cartId} style={styles.cartItem}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700 }}>{it.name}</div>
                  <div style={{ fontSize: 12, opacity: 0.8 }}>
                    {it.size} • {Object.keys(it.extras || {}).filter(k => it.extras[k]).join(", ")}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 700 }}>S/. {(it.unitPrice * it.quantity).toFixed(2)}</div>
                  <div style={{ fontSize: 12, marginTop: 6 }}>
                    <button onClick={() => removeFromCart(it.cartId)} style={styles.removeBtn}>Eliminar</button>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 10, fontWeight: 800 }}>Total: S/. {cartTotal().toFixed(2)}</div>
          </div>
        )}
      </aside>

      {/* Modal: Ver Información */}
      {selectedProduct && (
        <div style={styles.modalBackdrop} onClick={() => setSelectedProduct(null)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>{selectedProduct.name}</h3>
            <p><strong>Ingredientes:</strong> {selectedProduct.ingredients.join(", ")}</p>
            <p style={{ marginTop: 8 }}><strong>Historia:</strong> {selectedProduct.history}</p>

            <div style={{ marginTop: 18, display: "flex", gap: 8 }}>
              <button onClick={() => setSelectedProduct(null)} style={styles.modalBtn}>Cerrar</button>
              <button onClick={() => { setAddingProduct(selectedProduct); setSelectedProduct(null); }} style={styles.addButton}>Agregar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Agregar al Carrito */}
      {addingProduct && (
        <CartModal
          product={addingProduct}
          onClose={() => setAddingProduct(null)}
          onAdd={(opts) => addToCart(opts)}
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
    const obj = {}; Object.keys(extrasDefs).forEach(k => obj[k] = false); return obj;
  });
  const [quantity, setQuantity] = useState(1);

  function toggleExtra(key) { setExtras(prev => ({ ...prev, [key]: !prev[key] })); }

  function calcUnit() {
    let sum = product.price;
    const sDelta = (sizeOptions.find(s => s.label === size)?.delta) || 0;
    sum += sDelta;
    Object.keys(extras).forEach(k => { if (extras[k]) sum += (extrasDefs[k]?.price || 0); });
    return sum;
  }

  const unitPrice = calcUnit();
  const total = unitPrice * Math.max(1, quantity);

  return (
    <div style={styles.modalBackdrop} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <h3 style={{ marginTop: 0 }}>Agregar: {product.name}</h3>

        <label style={styles.label}>Tamaño</label>
        <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
          {sizeOptions.map(s => (
            <button key={s.label} onClick={() => setSize(s.label)} style={s.label === size ? styles.sizeActive : styles.sizeBtn}>
              {s.label} {s.delta ? `(+ S/. ${s.delta})` : ""}
            </button>
          ))}
        </div>

        <label style={{ ...styles.label, marginTop: 12 }}>Extras</label>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
          {Object.keys(extrasDefs).map(k => {
            if (!product.extrasAvailable?.[k]) return null;
            return (
              <label key={k} style={styles.checkboxLabel}>
                <input type="checkbox" checked={!!extras[k]} onChange={() => toggleExtra(k)} />
                <span style={{ marginLeft: 6 }}>{extrasDefs[k].label} (+S/. {extrasDefs[k].price})</span>
              </label>
            );
          })}
        </div>

        <label style={{ ...styles.label, marginTop: 12 }}>Cantidad</label>
        <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value || "1")))} style={styles.qtyInput} />

        <div style={{ marginTop: 14 }}>
          <strong>Precio unitario: S/. {unitPrice.toFixed(2)}</strong>
          <div style={{ marginTop: 6, fontWeight: 800 }}>Total: S/. {total.toFixed(2)}</div>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          <button onClick={onClose} style={styles.modalBtn}>Cancelar</button>
          <button onClick={() => onAdd({ product, size, extras, quantity })} style={styles.addButton}>Agregar</button>
        </div>
      </div>
    </div>
  );
}
// ---------------- Estilos inline ----------------
const styles = {
  container: { maxWidth: 1100, margin: "20px auto", padding: "30px" },
  title: { fontSize: 36, margin: 0 },
  lead: { marginTop: 8, color: "#222", opacity: 0.9 },
  controlsRow: { display: "flex", gap: 12, marginTop: 18, alignItems: "center" },
  searchInput: { flex: 1, padding: 12, border: "2px solid #111", borderRadius: 8, fontSize: 16 },
  select: { padding: 10, border: "2px solid #111", borderRadius: 8 },
  tabsRow: { marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" },
  tab: { padding: "8px 12px", border: "1px solid #111", background: "#fff", borderRadius: 8 },
  tabActive: { padding: "8px 12px", border: "2px solid #111", background: "#111", color: "#fff", borderRadius: 8 },
  grid: { marginTop: 26, display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" },
  card: { padding: 14, border: "1px solid #ddd", borderRadius: 12, background: "#fff", display: "flex", flexDirection: "column", alignItems: "stretch" },
  imgWrap: { display: "flex", justifyContent: "center", marginBottom: 12 },
  svgThumb: { width: 110, height: 110 },
  cardTitle: { margin: 0, fontSize: 18 },
  cardMeta: { display: "flex", justifyContent: "space-between", marginTop: 6, alignItems: "center" },
  cardActions: { display: "flex", gap: 8, marginTop: 12 },
  infoButton: { flex: 1, padding: 10, border: "2px solid #111", background: "#fff", cursor: "pointer", borderRadius: 8 },
  addButton: { flex: 1, padding: 10, border: "2px solid #111", background: "#111", color: "#fff", cursor: "pointer", borderRadius: 8 },

  cartWidget: { position: "fixed", right: 20, bottom: 20, width: 300, padding: 14, borderRadius: 10, background: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.08)", border: "1px solid #ddd" },
  cartItem: { display: "flex", gap: 12, padding: "8px 0", borderBottom: "1px dashed #eee" },
  removeBtn: { padding: "6px 8px", border: "1px solid #aaa", background: "transparent", cursor: "pointer", borderRadius: 6 },

  modalBackdrop: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 },
  modal: { width: 520, maxWidth: "95%", background: "#fff", padding: 20, borderRadius: 10 },
  modalBtn: { padding: "10px", border: "2px solid #111", background: "#fff", cursor: "pointer", borderRadius: 8 },
  label: { fontSize: 13, fontWeight: 700 },
  sizeBtn: { padding: "8px 10px", border: "1px solid #ccc", borderRadius: 8, background: "#fff", cursor: "pointer" },
  sizeActive: { padding: "8px 10px", border: "1px solid #111", borderRadius: 8, background: "#111", color: "#fff", cursor: "pointer" },
  checkboxLabel: { display: "flex", alignItems: "center", gap: 8, border: "1px solid transparent", padding: 6 },
  qtyInput: { width: 120, padding: 10, border: "2px solid #111", borderRadius: 8 },
};

export default MenuPage;
