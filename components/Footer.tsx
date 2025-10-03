import React from 'react';

const Logo: React.FC = () => {
    return (
      <a href="#" className="flex items-center space-x-2">
        <div className="text-purple-800">
          <svg height="40" viewBox="0 0 80 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 0L0 20V22L40 42L80 22V20L40 0Z M68 56C68 56 55 64 40 72C25 64 12 56 12 56V30L40 45L68 30V56Z"/>
              {/* The white fill simulates a cutout on light backgrounds */}
              <path d="M40 33C33 26 26 30 26 39C26 48 40 55 40 55C40 55 54 48 54 39C54 30 47 26 40 33Z" fill="white"/>
          </svg>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-light tracking-wider text-purple-800">ACADEMIA</span>
          <span className="text-3xl font-bold tracking-tighter text-purple-800 -mt-1">CUIDAR</span>
        </div>
      </a>
    );
  };

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs">Cuidado profesional y humano para tus seres queridos. Formando a los mejores cuidadores.</p>
          </div>

          {/* Column 2: Navegación */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-800 transition">Inicio</a></li>
              <li><a href="#" className="hover:text-purple-800 transition">Servicios</a></li>
              <li><a href="#" className="hover:text-purple-800 transition">Academia Cuidar</a></li>
              <li><a href="#" className="hover:text-purple-800 transition">Trabaja con nosotros</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-800 transition">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-purple-800 transition">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-purple-800 transition">Política de Cookies</a></li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                <span>Calle Falsa 123, Madrid</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                <span>info@academiacuidar.es</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>© 2024 Academia Cuidar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;