/// components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-green-400 animate-pulse">Tandil.Fit.Store</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#productos" className="hover:text-green-400 transition duration-300 ease-in-out hover:scale-110">Productos</a>
          <a href="#beneficios" className="hover:text-green-400 transition duration-300 ease-in-out hover:scale-110">Beneficios</a>
          <a href="#contacto" className="hover:text-green-400 transition duration-300 ease-in-out hover:scale-110">Contacto</a>
        </div>
      </nav>
    </header>
  );
}


