/// components/Productos.jsx
import { motion } from "framer-motion";
import creatina from "../assets/creatina.jpg";
import creatinapote from "../assets/creatinapote.jpg";
import proteina from "../assets/proteina.jpg";
import preentreno from "../assets/pumpv8.jpg";
import colageno from "../assets/colageno.jpg";
import zma from "../assets/zma.jpg";
import multivitaminico from "../assets/multivitamin.jpg";
import bcaa from "../assets/bcaa.jpg";

const productos = [
  { nombre: "Creatina", desc: "Aumenta fuerza y rendimiento", img: creatina },
  { nombre: "Creatina Pote", desc: "Fuerza y volumen muscular", img: creatinapote },
  { nombre: "Proteína", desc: "Recuperación muscular efectiva", img: proteina },
  { nombre: "Pre-entreno", desc: "Energía explosiva para entrenar", img: preentreno },
  { nombre: "Colágeno", desc: "Salud de piel y articulaciones", img: colageno },
  { nombre: "ZMA", desc: "Sueño profundo y recuperación", img: zma },
  { nombre: "Multivitamínico", desc: "Vitaminas esenciales diarias", img: multivitaminico },
  { nombre: "BCAA", desc: "Previene el catabolismo muscular", img: bcaa },
];

export default function Productos() {
  return (
    <section id="productos" className="bg-[url('https://images.unsplash.com/photo-1598976824965-7d49eb6b42f6')] bg-cover bg-center px-6 py-20">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.75)]">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {productos.map((producto, idx) => (
          <motion.div key={idx} className="bg-neutral-900/90 border border-green-400 rounded-xl p-6 text-center hover:shadow-2xl hover:scale-105 transition" whileHover={{ scale: 1.05 }}>
            <img src={producto.img} alt={producto.nombre} className="h-40 w-full object-contain rounded-lg mb-4 bg-neutral-800" />
            <h3 className="text-xl font-bold text-green-300">{producto.nombre}</h3>
            <p className="text-beige mt-2">{producto.desc}</p>
            <a href="https://wa.me/5492494621182" target="_blank" className="mt-4 inline-block bg-green-400 text-black px-4 py-2 rounded-xl hover:bg-green-500">
              Comprar
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
