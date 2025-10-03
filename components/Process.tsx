import React from 'react';

const ProcessStep: React.FC<{ number: number; title: string; description: string; isLast?: boolean }> = ({ number, title, description, isLast = false }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div>
        <div className="flex items-center justify-center w-10 h-10 border-2 border-purple-600 rounded-full">
          <span className="text-lg font-bold text-purple-600">{number}</span>
        </div>
      </div>
      {!isLast && <div className="w-px h-full bg-purple-300"></div>}
    </div>
    <div className="pb-8">
      <h3 className="mb-1 text-xl font-bold text-purple-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);


const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-900">Empezá con AcademiaCuidar en 5 pasos</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro proceso está diseñado para ser simple, rápido y centrado en encontrar la mejor solución para vos y tu familia.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
            <ProcessStep 
                number={1}
                title="Escuchamos"
                description="Nos contactás y un asesor especializado escucha tus necesidades para entender tu situación en profundidad."
            />
             <ProcessStep 
                number={2}
                title="Asesoramos"
                description="Definimos en conjunto el mejor plan de servicio para tu familiar, con una cotización gratuita y sin compromiso."
            />
             <ProcessStep 
                number={3}
                title="Valoramos"
                description="Una Coordinadora de Cuidados realiza una evaluación integral del estado de la persona mayor."
            />
             <ProcessStep 
                number={4}
                title="Seleccionamos"
                description="Te presentamos a las cuidadoras más adecuadas según el perfil y elegís junto a nosotros la opción ideal."
            />
             <ProcessStep 
                number={5}
                title="Iniciamos"
                description="Comienza el servicio con un seguimiento continuo y personalizado para asegurar la máxima calidad y tu tranquilidad."
                isLast
            />
        </div>
      </div>
    </section>
  );
};

export default Process;