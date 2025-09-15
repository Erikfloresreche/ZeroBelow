

import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import ZeroBelowLogo from "@/assets/images/ZeroBelowLogo.jpg"
import { Button } from "@/widgets/button";
import { Input } from "@/widgets/input";


export const Footer = () => {
  return (
    <footer id="contacto" className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={ZeroBelowLogo} 
                alt="ZeroBelow Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-white text-xl font-semibold">ZeroBelow</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Líderes en tecnología de drones para condiciones extremas. 
              Capturamos lo imposible en los lugares más desafiantes del mundo.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 p-2">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Filmación Aérea</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Monitoreo Térmico</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Cartografía Polar</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Inspección Industrial</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Investigación Científica</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Nuestro Equipo</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Carreras</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Noticias</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">info@zerobelow.com</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">+34 123 456 789</span>
              </div>
              <div className="flex items-start text-slate-400">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Barcelona<br />España</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="text-white font-medium mb-3">Newsletter</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Tu email" 
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 flex-1"
                />
                <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4">
                  Suscribir
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 ZeroBelow. Todos los derechos reservados.
            </div>
            <p className="text-slate-400 text-sm">Made with ❤︎ by <a href="https://github.com/Erikfloresreche" target="_blank" rel="noopener noreferrer" className="text-transparent bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text">Erik Flores Reche</a></p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}