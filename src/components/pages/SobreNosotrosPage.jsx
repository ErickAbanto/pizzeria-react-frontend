import React, { useEffect, useRef } from 'react';

// ================================================
// 1. DATA
// ================================================

const valoresData = [
    { icon: '♡', titulo: 'PASIÓN', descripcion: 'Cada pizza la hacemos con amor y dedicación, como si fuera para nuestra familia.' },
    { icon: '⚙', titulo: 'CALIDAD', descripcion: 'Solo usamos los mejores ingredientes frescos y de origen local.' },
    { icon: '👨‍👩‍👧‍👦', titulo: 'FAMILIA', descripcion: 'Ohana significa familia, y aquí todos son parte de la nuestra.' },
    { icon: '🕒', titulo: 'TRADICIÓN', descripcion: 'Recetas transmitidas por tres generaciones de maestros pizzeros.' },
];

const trayectoriaData = [
    { year: '1995', titulo: 'Fundación de Pizzería Ohana', descripcion: 'Todo comenzó en un pequeño local con un gran sueño.' },
    { year: '2005', titulo: 'Expansión del Menú', descripcion: 'Incorporamos nuevas recetas familiares.' },
    { year: '2015', titulo: 'Reconocimiento Nacional', descripcion: 'Premio a la Mejor Pizzería Artesanal.' },
    { year: '2025', titulo: 'Plataforma Digital', descripcion: 'Llevaremos nuestras pizzas a tu hogar con tecnología.' },
];

// ================================================
// 2. COMPONENTE QUE REVELA ELEMENTOS AL SCROLL
// ================================================
const useScrollReveal = () => {
    const ref = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
                    }
                });
            },
            { threshold: 0.2 }
        );

        ref.current.forEach((el) => el && observer.observe(el));
    }, []);

    return ref;
};

// ================================================
// 3. CARD VALORES (CON EFECTO 3D HOVER)
// ================================================
const ValorCard = ({ valor, scrollRef, index }) => (
    <div
        ref={(el) => (scrollRef.current[index] = el)}
        className="
            border-2 border-yellow-500 bg-white rounded-xl p-6 text-center shadow 
            hover:shadow-2xl transition duration-500 
            transform hover:rotate-1 hover:scale-105
            opacity-0 translate-y-10 scale-90
        "
    >
        <div className="text-4xl mb-4 inline-block border-2 border-yellow-500 text-yellow-600 p-3 rounded-full">
            {valor.icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 tracking-widest">{valor.titulo}</h3>
        <p className="text-gray-600 text-sm">{valor.descripcion}</p>
    </div>
);

// ================================================
// 4. TIMELINE ITEM (CON SLIDE IZQ / DER)
// ================================================
const TrayectoriaItem = ({ item, isLeft, scrollRef, index }) => (
    <div
        ref={(el) => (scrollRef.current[index] = el)}
        className={`
            flex w-full 
            opacity-0 translate-y-10 scale-95 
        `}
    >
        <div className={`w-full ${isLeft ? "justify-start" : "justify-end"} flex`}>
            <div
                className={`
                    p-5 border-2 border-yellow-500 bg-white rounded-xl shadow-md w-full max-w-sm relative
                    ${isLeft ? "text-right" : "text-left"}
                `}
            >
                <div
                    className={`
                        hidden sm:block absolute w-5 h-5 rounded-full bg-yellow-500 border-4 border-white 
                        top-1/2 transform -translate-y-1/2 
                        ${isLeft ? "right-[-34px]" : "left-[-34px]"}
                    `}
                ></div>

                <h4 className="text-xl font-extrabold text-yellow-700">{item.year}</h4>
                <p className="text-lg font-semibold text-gray-800">{item.titulo}</p>
                <p className="text-gray-600 text-sm">{item.descripcion}</p>
            </div>
        </div>
    </div>
);

// ================================================
// 5. ABOUT US COMPLETO (CON PARALLAX)
// ================================================
export default function AboutUs() {
    const revealRef = useScrollReveal();

    return (
        <div className="bg-gray-100 min-h-screen">

            {/* =========================== */}
            {/*  HERO CON PARALLAX 🎆 */}
            {/* =========================== */}
            <section
                className="
                    relative h-[400px] sm:h-[450px] md:h-[500px] 
                    flex items-center justify-center bg-fixed bg-cover bg-center
                "
                style={{
                    backgroundImage:
                        "url('https://okdiario.com/img/2023/04/10/receta-casera-de-pizza-pugliese.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-white opacity-60"></div>

                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1594007654729-407eedc4be81?auto=format&w=1500')",
                    }}
                ></div>

                <div className="relative z-10 text-center p-4 animate-fade">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-wider mb-3">
                        NUESTRA HISTORIA
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto">
                        Tres generaciones compartiendo el amor por la auténtica pizza italiana.
                    </p>
                </div>
            </section>

            {/* =========================== */}
            {/*  SECCIÓN FAMILIA OHANA */}
            {/* =========================== */}
            <section className="py-16 sm:py-20 px-4 md:px-10 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* TEXTO */}
                    <div className="md:w-3/5 opacity-0 translate-y-10 scale-95 transition-all duration-700"
                        ref={(el) => (revealRef.current[100] = el)}>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-widest">
                            LA FAMILIA OHANA
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            En 1995, nuestro abuelo Mario llegó a esta ciudad con un sueño: compartir las recetas auténticas de pizza italiana que había aprendido de su madre.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Con solo un horno de leña y mucho amor por el oficio, abrió lo que hoy es Pizzería Ohana.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Hoy seguimos usando las mismas recetas originales y la misma pasión.
                        </p>
                    </div>

                    {/* IMAGEN */}
                    <div className="md:w-2/5 opacity-0 translate-y-10 scale-95 transition-all duration-700"
                        ref={(el) => (revealRef.current[101] = el)}>
                        <div className="border-2 border-yellow-500 rounded-xl p-2 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1601924582971-b0d81c481b9a?q=80&w=1000"
                                alt="Manos amasando pizza"
                                className="w-full rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================== */}
            {/*  VALORES (CARDS 3D) */}
            {/* =========================== */}
            <section className="pt-10 pb-20 px-4 md:px-10 max-w-6xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-gray-900 tracking-widest mb-2">
                        NUESTROS VALORES
                    </h2>
                    <p className="text-gray-600">Los pilares que nos hacen únicos</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {valoresData.map((valor, index) => (
                        <ValorCard key={index} valor={valor} index={index} scrollRef={revealRef} />
                    ))}
                </div>

                {/* MISIÓN Y VISIÓN */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => (revealRef.current[200 + i] = el)}
                            className="p-6 border-2 border-yellow-500 bg-white rounded-xl shadow 
                            opacity-0 translate-y-10 scale-95"
                        >
                            <h3 className="text-xl font-bold mb-3 text-yellow-700">
                                {i === 0 ? "Misión" : "Visión"}
                            </h3>
                            <p className="text-gray-600">
                                {i === 0
                                    ? "Crear momentos memorables alrededor de la mesa con pizzas artesanales."
                                    : "Ser la pizzería referente que combina tradición con innovación digital."}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================== */}
            {/*  TRAYECTORIA / TIMELINE */}
            {/* =========================== */}
            <section className="pt-10 pb-20 px-4 md:px-10 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-gray-900 tracking-widest">
                        NUESTRA TRAYECTORIA
                    </h2>
                    <p className="text-gray-600">30 años de historia y tradición</p>
                </div>

                <div className="relative">
                    <div className="hidden sm:block absolute left-1/2 w-1 bg-yellow-400 h-full transform -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {trayectoriaData.map((item, index) => (
                            <TrayectoriaItem
                                key={index}
                                item={item}
                                index={300 + index}
                                scrollRef={revealRef}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
