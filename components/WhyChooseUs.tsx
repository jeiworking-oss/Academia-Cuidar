import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center p-4">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-700 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-purple-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-900">¿Por qué elegir AcademiaCuidar?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Te acompañamos desde el primer minuto, asesorándote y adaptándonos en cada etapa para garantizar un cuidado en casa de alta calidad.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h6.172a2 2 0 011.414.586l3.828 3.828A2 2 0 0117 8z" /></svg>}
            title="Atención y cotizaciones a medida"
            description="Nuestro equipo está disponible los 365 días del año para darte una respuesta rápida y un asesoramiento gratuito sin compromiso."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
            title="Coordinadora de Cuidados"
            description="Se asigna una profesional (psicóloga, T.O., etc.) que te acompaña, supervisa el servicio y resuelve cualquier consulta."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            title="Solo pagás cuando estás satisfecho"
            description="Creemos en la transparencia. Por eso, solo abonás luego de dos semanas de servicio, no antes."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
            title="Plan de Trabajo Individual (PTI)"
            description="La Coordinadora realiza una valoración integral para definir necesidades, objetivos y las tareas específicas de la cuidadora."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            title="Cuidadoras con experiencia"
            description="Hacemos una selección rigurosa liderada por psicólogos y especialistas. La familia siempre tiene la última palabra en la elección."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            title="Coordinación con sistema de salud"
            description="Trabajamos en articulación con centros de salud y servicios sociales para brindar un servicio completo y de la mejor calidad."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
