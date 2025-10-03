import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full text-left transform hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-xl font-bold text-purple-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{quote}</p>
    <p className="font-bold text-purple-800 mt-auto">{name}</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-900">Historias de cuidado con AcademiaCuidar</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Conocé cómo el acompañamiento y los cuidados profesionales de AcademiaCuidar mejoran la calidad de vida de las familias.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TestimonialCard
            title="La historia de Elena"
            quote="Elena, de 82 años, necesitaba compañía durante algunas horas del día. Gracias a AcademiaCuidar conoció a Graciela, su cuidadora, con quien comparte charlas, paseos y el apoyo necesario para mantenerse activa."
            name="Familia de Elena"
          />
          <TestimonialCard
            title="La historia de Héctor"
            quote="Héctor, de 75 años, fue diagnosticado con Parkinson. Su familia encontró en AcademiaCuidar una cuidadora capacitada que lo ayuda con la medicación, la movilidad y ejercicios de estimulación, brindándole seguridad y tranquilidad a sus hijos."
            name="Familia de Héctor"
          />
          <TestimonialCard
            title="La historia de Marta"
            quote="Cuando al papá de Marta le diagnosticaron Alzheimer, la preocupación por su cuidado fue enorme. Con AcademiaCuidar lograron un plan personalizado y hoy cuentan con una cuidadora estable, formada y supervisada, que acompaña a toda la familia en este proceso."
            name="Marta y su papá"
          />
          <TestimonialCard
            title="La historia de Ricardo"
            quote="Ricardo, de 60 años, vive con Esclerosis Lateral Amiotrófica (ELA). Con el apoyo de su cuidadora especializada y el seguimiento constante de la aplicación de AcademiaCuidar, su familia puede estar segura de que recibe la mejor atención."
            name="Familia de Ricardo"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;