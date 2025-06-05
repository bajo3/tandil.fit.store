import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import fondoGimnasio from "../assets/gimnasio2.jpg"; // Usá .webp si podés

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

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      {/* Imagen con parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={fondoGimnasio}
          alt="Fondo"
          className="w-full h-full object-cover object-center md:object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 min-h-[100vh]">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.75)] tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="after:content-['|'] after:animate-pulse">{displayedText}</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl text-beige mt-6 max-w-2xl drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Para que tu entrenamiento rinda al máximo
        </motion.p>

        <motion.a
          href="#productos"
          className="mt-10 bg-green-400 text-black font-bold px-10 py-4 rounded-2xl hover:bg-green-500 transition shadow-2xl inline-block flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          🛒 Ver Productos
        </motion.a>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-green-400 text-2xl"
      >
        ↓
      </motion.div>
    </section>
  );
}
