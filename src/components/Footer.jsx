import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-serif font-bold text-amber-900 mb-4 block">
              Inmaculada Rodríguez Torné
            </span>
            <p className="text-stone-600 text-sm leading-relaxed">
              Dra. en Filología Bíblica Trilingüe y Teóloga especializada en lenguas bíblicas.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold text-stone-800 mb-4 block">Enlaces rápidos</span>
            <nav className="space-y-2">
              <Link to="/acerca-de-mi" className="block text-stone-600 hover:text-amber-900 transition-colors text-sm">
                Acerca de mí
              </Link>
              <Link to="/academia" className="block text-stone-600 hover:text-amber-900 transition-colors text-sm">
                Academia
              </Link>
              <Link to="/cursos" className="block text-stone-600 hover:text-amber-900 transition-colors text-sm">
                Cursos y Conferencias
              </Link>
              <Link to="/contacto" className="block text-stone-600 hover:text-amber-900 transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-lg font-semibold text-stone-800 mb-4 block">Contacto</span>
            <div className="space-y-3">
              <a href="mailto:infohebreo@yahoo.com" className="flex items-center space-x-2 text-stone-600 hover:text-amber-900 transition-colors text-sm">
                <Mail size={16} />
                <span>infohebreo@yahoo.com</span>
              </a>
              <a href="mailto:academiabiblicatrilingue@gmail.com" className="flex items-center space-x-2 text-stone-600 hover:text-amber-900 transition-colors text-sm">
                <Mail size={16} />
                <span>academiabiblicatrilingue@gmail.com</span>
              </a>
              <a href="tel:+34649454564" className="flex items-center space-x-2 text-stone-600 hover:text-amber-900 transition-colors text-sm">
                <Phone size={16} />
                <span>+34 649454564</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-200 text-center">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Inmaculada Rodríguez Torné. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;