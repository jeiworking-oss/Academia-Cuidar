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

const Header: React.FC = () => {
  return (
    <header className="relative text-white min-h-[600px] lg:min-h-[700px] flex flex-col">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img src="https://storage.googleapis.com/aistudio-hosting/images/e7e6f6a7-05c0-42f0-b18c-c2b62d87a414.jpeg" alt="Caregiver sharing mate with an elderly man" className="absolute inset-0 w-full h-full object-cover" />

      <nav className="relative z-20 container mx-auto px-6 py-4 flex justify-between items-center bg-white/90 backdrop-blur-sm rounded-b-lg shadow-md">
        <Logo />
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-purple-800 transition">Inicio</a>
          <a href="#" className="text-gray-600 hover:text-purple-800 transition">Servicios</a>
          <a href="#" className="text-gray-600 hover:text-purple-800 transition">Academia Cuidar</a>
          <a href="#" className="text-gray-600 hover:text-purple-800 transition">Testimonios</a>
          <a href="#" className="text-gray-600 hover:text-purple-800 transition">FAQ</a>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <a href="https://wa.me/+5491157231100" className="px-4 py-2 text-purple-800 font-semibold border border-purple-300 rounded-full hover:bg-purple-100 transition">Trabaja con nosotros</a>
          <a href="https://wa.me/+5491157231111" className="px-4 py-2 flex items-center space-x-2 bg-purple-800 text-white font-semibold rounded-full hover:bg-purple-900 transition">
            <span>Contacto</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
        <div className="lg:hidden">
            <button className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </nav>

      <div className="relative z-20 flex-grow flex items-center justify-center text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Cuidados de calidad en casa
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Servicios de cuidado de personas mayores en el hogar, desde pocas horas a la semana y de manera totalmente personalizada. En AcademiaCuidar, vas a tener la tranquilidad de contar con una cuidadora profesional, con un seguimiento cercano, humano y con respaldo experto.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://wa.me/+5491157231111" className="px-8 py-3 bg-purple-700 text-white font-bold rounded-full hover:bg-purple-800 transition duration-300 text-lg">
              Solicitar Información
            </a>
            <a href="https://wa.me/+5491157231100" className="px-8 py-3 bg-blue-400 text-white font-bold rounded-full hover:bg-blue-500 transition duration-300 text-lg">
              Trabaja con nosotros
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;