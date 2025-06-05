/// components/Contacto.jsx
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-black px-6 py-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-400 mb-8">Contacto</h2>
        <p className="text-beige mb-6">¿Tenés dudas o querés hacer un pedido? Escribinos y te respondemos a la brevedad.</p>
        <div className="flex flex-col gap-4">
          <a href="https://wa.me/5492494621182" target="_blank" className="bg-green-400 text-black py-3 rounded-xl font-semibold hover:bg-green-500">WhatsApp</a>
          <a href="https://www.instagram.com/fit.store.tandil/" target="_blank" className="bg-pink-500 text-white py-3 rounded-xl font-semibold hover:bg-pink-600">Instagram</a>
        </div>
      </div>
      <a href="https://wa.me/5492494621182" target="_blank" className="fixed bottom-5 right-5 z-50 bg-green-400 text-black p-4 rounded-full shadow-xl hover:bg-green-500 text-2xl animate-bounce" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
    </section>
  );
}
