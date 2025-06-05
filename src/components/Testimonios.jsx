/// components/Testimonios.jsx
import { motion } from "framer-motion";

export default function Testimonios() {
  return (
    <section id="beneficios" className="px-6 py-20 bg-[url('https://images.unsplash.com/photo-1571019613578-2b78b6d2b62a')] bg-cover bg-center">
      <motion.div className="max-w-5xl mx-auto text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-extrabold text-green-400 mb-8 drop-shadow-[0_0_10px_rgba(34,197,94,0.75)]">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left text-beige">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-black/60 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-green-300 mb-2">Asesoramiento personalizado</h3>
            <p>Te ayudamos a elegir el suplemento ideal según tus objetivos.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-black/60 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-green-300 mb-2">Calidad garantizada</h3>
            <p>Trabajamos con marcas de primer nivel para asegurar los mejores resultados.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-black/60 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-green-300 mb-2">Atención rápida y envíos</h3>
            <p>Coordinamos entregas en Tandil y alrededores.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

