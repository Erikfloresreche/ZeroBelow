
import { Menu, X } from "lucide-react";

import ZeroBelowLogo from "@/assets/images/ZeroBelowLogo.jpg"
import { Button } from "@/widgets/button";
import { HeaderController } from "./Header.controller";

export function Header() {

    const { isMenuOpen, setIsMenuOpen } = HeaderController();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
            <img 
              src={ZeroBelowLogo} 
              alt="ZeroBelow Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-white text-xl font-semibold">ZeroBelow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white/90 hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-white/90 hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#tecnologia" className="text-white/90 hover:text-white transition-colors">
              Tecnología
            </a>
            <a href="#casos" className="text-white/90 hover:text-white transition-colors">
              Casos de Uso
            </a>
            <a href="#contacto" className="text-white/90 hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-white/90 hover:text-white transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-white/90 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#tecnologia" className="text-white/90 hover:text-white transition-colors">
                Tecnología
              </a>
              <a href="#casos" className="text-white/90 hover:text-white transition-colors">
                Casos de Uso
              </a>
              <a href="#contacto" className="text-white/90 hover:text-white transition-colors">
                Contacto
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white justify-start">
                  Contactar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}