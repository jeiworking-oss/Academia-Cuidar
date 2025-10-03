import React from 'react';

const Academy: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 space-y-16">
        
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-purple-900">Nuestro Modelo de Cuidado Integral</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Acompañamos a las personas mayores y a sus familias a vivir la longevidad de forma segura y activa, combinando formación, tecnología y un profundo sentido humano.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-purple-900">Servicio de Formación</h3>
            <p className="text-gray-700">En AcademiaCuidar creemos que la calidad del servicio depende de la preparación de quienes lo brindan. Por eso, ofrecemos un programa de formación de 150 horas online y presencial, que incluye higiene, movilización, comunicación, envejecimiento activo, primeros auxilios y estimulación cognitiva.</p>
            <p className="text-gray-700">Cada cuidadora rinde evaluaciones para certificar su capacitación antes de integrarse a la red, garantizando así confianza y profesionalismo para las familias.</p>
          </div>
          <div className="space-y-4">
             <h3 className="text-3xl font-bold text-purple-900">Care Managers</h3>
             <p className="text-gray-700">Contamos con Care Managers, profesionales especializados que coordinan de manera integral todos los aspectos del cuidado. Su función es acompañar a la familia diseñando un plan personalizado, organizando turnos y tareas, y supervisando la correcta implementación del servicio.</p>
             <p className="text-gray-700">El Care Manager también actúa como enlace con médicos y centros de salud, asegurando que el cuidado sea seguro, completo y de calidad, aportando tranquilidad a las familias.</p>
          </div>
        </div>

        <div>
            <h3 className="text-3xl font-bold text-purple-900 text-center mb-6">Servicio de Monitoreo Digital</h3>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-center text-gray-700 mb-6">Contamos con una aplicación móvil para el seguimiento de tu servicio, disponible para Android y iOS, que te da control y tranquilidad.</p>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600">
                    <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">✔</span>Check-in/out georreferenciado.</li>
                    <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">✔</span>Gestión de reemplazos de urgencia.</li>
                    <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">✔</span>Registro de tareas y medicación.</li>
                    <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">✔</span>Gestión de turnos e historia clínica.</li>
                    <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">✔</span>Gestión de compras y pagos.</li>
                    <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">✔</span>Propuestas de estimulación cognitiva.</li>
                    <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">✔</span>Videovigilancia para mayor seguridad.</li>
                    <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">✔</span>Reportes y alertas en tiempo real.</li>
                </ul>
            </div>
        </div>
        
        <div className="bg-purple-700 text-white rounded-lg p-10">
          <h3 className="text-3xl font-bold text-center mb-6">AcademiaCuidar como empresa de impacto social</h3>
          <p className="text-center text-purple-100 text-lg max-w-4xl mx-auto mb-6">
            Queremos hacer sostenible el sistema de cuidados en la Argentina, brindando apoyo a personas en situación de dependencia o con enfermedades crónicas, para que puedan vivir más tiempo, con mejor salud y con mayor calidad de vida en sus hogares.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                  <h4 className="text-xl font-bold mb-2">Misión Eje 1</h4>
                  <p className="text-purple-200">Construir la atención domiciliaria más humana, experta y apoyada en tecnología de calidad en la región.</p>
              </div>
              <div>
                  <h4 className="text-xl font-bold mb-2">Misión Eje 2</h4>
                  <p className="text-purple-200">Revalorizar y profesionalizar el rol de las cuidadoras, ofreciéndoles formación, comunidad y reconocimiento social.</p>
              </div>
          </div>
        </div>

        <div>
            <h3 className="text-3xl font-bold text-purple-900 text-center mb-6">Valores que nos definen</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                    <h4 className="font-bold text-xl text-purple-800 mb-1">Calidad primero</h4>
                    <p className="text-gray-600">Cada servicio busca el más alto estándar del sector.</p>
                </div>
                 <div className="p-4">
                    <h4 className="font-bold text-xl text-purple-800 mb-1">Cercanía y empatía</h4>
                    <p className="text-gray-600">Escuchamos y acompañamos desde el primer contacto.</p>
                </div>
                 <div className="p-4">
                    <h4 className="font-bold text-xl text-purple-800 mb-1">Pensar en grande</h4>
                    <p className="text-gray-600">Trabajamos para transformar el cuidado en Argentina.</p>
                </div>
                 <div className="p-4">
                    <h4 className="font-bold text-xl text-purple-800 mb-1">Acción y compromiso</h4>
                    <p className="text-gray-600">Pasamos de la planificación a la acción rápida y efectiva.</p>
                </div>
                 <div className="p-4">
                    <h4 className="font-bold text-xl text-purple-800 mb-1">Un solo equipo</h4>
                    <p className="text-gray-600">Familias, cuidadoras y coordinadores trabajando juntos.</p>
                </div>
                 <div className="p-4">
                    <h4 className="font-bold text-xl text-purple-800 mb-1">Aprender siempre</h4>
                    <p className="text-gray-600">Cada día es una oportunidad para mejorar lo que hacemos.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Academy;
