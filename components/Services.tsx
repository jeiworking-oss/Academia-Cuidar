import React from 'react';

const ServiceItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-center text-gray-700">
        <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </span>
        <span>{children}</span>
    </li>
);

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h4 className="text-xl font-bold text-purple-900 mb-2 h-14 flex items-center">{title}</h4>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
);


const ServiceDetailCard: React.FC<{ title: string, description: React.ReactNode }> = ({ title, description }) => (
    <div className="bg-purple-50/50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">{title}</h3>
        <div className="space-y-3 text-gray-600">{description}</div>
    </div>
);


const Services: React.FC = () => {

  const mainServices = [
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, 
      title: 'Cuidadoras con cama adentro (24 h)', 
      description: 'Atención continua día y noche para máxima tranquilidad.' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, 
      title: 'Cuidadoras para los fines de semana', 
      description: 'El respiro ideal para cuidadores familiares garantizando atención constante.' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, 
      title: 'Cuidadoras por horas', 
      description: 'Servicio flexible para acompañar y mantener la autonomía de tu familiar.' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" /></svg>, 
      title: 'Cuidadoras especializadas', 
      description: 'Cuidado seguro y personalizado para Alzheimer, Parkinson, ACV, y más.' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /><path d="M15 9h4m-2-2v4" /></svg>, 
      title: 'Care Managers', 
      description: 'Profesionales que coordinan de forma integral todos los aspectos del cuidado.' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /><path d="m12 8 2 4 2-4" /></svg>, 
      title: 'Monitoreo y estimulación', 
      description: 'Seguimiento diario y actividades cognitivas y físicas a través de nuestra app.' 
    }
  ];

  const includedFeatures = [
    "Acompañamiento y contención", "Higiene personal", "Teleasistencia", "Insumos de ortopedia", "Control de medicación", "Paseos y ejercicio físico", "Preparación de comidas", "Fisioterapia", "Estimulación cognitiva", "Tareas del hogar", "Podología", "Compras del hogar", "Supervisión de actividades diarias"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-purple-900">¿Cómo podemos ayudarte?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Comprometidos a mejorar la calidad de vida de tus seres queridos con un servicio profesional, humano y totalmente adaptado a tus necesidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {mainServices.map((service, index) => (
                <ServiceCard 
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>

        <div className="bg-purple-50/50 rounded-lg p-8 lg:p-12 mb-16">
            <h3 className="text-3xl font-bold text-purple-900 mb-6 text-center">Todos nuestros planes incluyen</h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-lg">
                {includedFeatures.map((feature, index) => <ServiceItem key={index}>{feature}</ServiceItem>)}
            </ul>
        </div>
        
      </div>
      
      <div className="relative bg-cover bg-center my-16" style={{ backgroundImage: 'url("https://storage.googleapis.com/aistudio-hosting/images/c1d8a3b5-0f6e-4a9b-8e2c-1a3b4c5d6e7f.jpeg")' }}>
          <div className="absolute inset-0 bg-purple-900/70"></div>
          <div className="relative container mx-auto px-6 py-16 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">Ayuda y soporte administrativo</h3>
              <p className="text-lg text-purple-200 max-w-4xl mx-auto">
              Nos ocupamos de todos los trámites legales para que no tengas que preocuparte. Contamos con un equipo especializado en cuestiones administrativas y legales, siempre disponible para responder tus consultas.
              </p>
          </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="space-y-12">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-purple-900">Servicio de Reclutamiento Personalizado</h2>
                <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">Encontramos a la mejor cuidadora para cada familia, desde pocas horas a la semana, y te acompañamos en todo el proceso.</p>
            </div>
            <div className="space-y-8">
                <ServiceDetailCard title="1. Cuidadoras con cama adentro (24 h)" description={
                    <>
                        <p>Acompañamiento especializado en régimen de cama adentro, para personas que necesitan atención continua de día y de noche. El servicio está disponible los 365 días del año para asegurar el bienestar de tu familiar en su hogar.</p>
                        <p>Para cubrir toda la semana, se asignan dos cuidadoras: una durante los días hábiles y otra los fines de semana. Las cuidadoras brindan atención integral: ayudan en actividades diarias, control de medicación, tareas del hogar, estimulación física y cognitiva, y acompañamiento emocional.</p>
                    </>
                } />
                <ServiceDetailCard title="2. Cuidadoras para los fines de semana" description={
                    <>
                        <p>Contratá una cuidadora profesional, con cama adentro o por horas, para acompañar a tu familiar los fines de semana. Es ideal para dar un respiro a los cuidadores familiares y garantizar atención constante.</p>
                        <p>Se ocupan de la higiene, las comidas, la medicación y la compañía. El servicio es flexible y se ajusta a las rutinas de cada hogar, brindando seguridad y bienestar.</p>
                    </>
                } />
                <ServiceDetailCard title="3. Cuidadoras por horas" description={
                    <>
                        <p>Te ayudamos a encontrar a las mejores cuidadoras a domicilio para que acompañen a tu familiar unas horas al día, manteniendo su autonomía. Este servicio es flexible: desde 1 hora a la semana hasta 40 horas semanales.</p>
                        <p>Asisten en tareas cotidianas como higiene, movilidad, paseos, alimentación, control de medicación, tareas domésticas y estimulación cognitiva.</p>
                    </>
                } />
                <ServiceDetailCard title="4. Cuidadoras especializadas" description={
                    <p>Para situaciones de mayor complejidad como Alzheimer, Parkinson, ACV, demencia o ELA, contamos con cuidadoras especializadas. Estas profesionales ofrecen un cuidado seguro, personalizado y con apoyo emocional, mejorando la calidad de vida de la persona y de su familia.</p>
                } />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;