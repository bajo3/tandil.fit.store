import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const fullText = "Nutrición y energía para tu entrenamiento";
  const [displayedText, setDisplayedText] = useState("");
  const speed = 50;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText]);

  // Parallax scroll setup
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]); // mueve el fondo hacia arriba al hacer scroll

  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      {/* Imagen con parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80"
          alt="Fondo"
          className="w-full h-full object-cover"
        />

        {/* Oscurecer la imagen */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Contenido en primer plano */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 min-h-[100vh]">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.75)] tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-beige mt-6 max-w-2xl drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Para que tu entrenamiento rinda al máximo
        </motion.p>

        <motion.a
          href="#productos"
          className="mt-10 bg-green-400 text-black font-bold px-10 py-4 rounded-2xl hover:bg-green-500 transition shadow-2xl inline-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Productos
        </motion.a>
      </div>
    </section>
  );
}
