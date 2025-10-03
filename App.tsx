import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Academy from './components/Academy';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';

const App: React.FC = () => {

  const requestInfoDescription = (
    <div className="text-center max-w-3xl mx-auto space-y-4">
      <p>En AcademiaCuidar sabemos que cada familia es única y que cada persona mayor necesita un cuidado diferente. Por eso, nuestro equipo te asesora de manera personalizada para encontrar la mejor solución según tus necesidades.</p>
      <h3 className="font-bold text-xl text-purple-800 pt-4">¿Cómo funciona?</h3>
      <ol className="list-decimal list-inside text-left mx-auto max-w-md space-y-2">
        <li>Completá el formulario online o escribinos por WhatsApp.</li>
        <li>Un asesor de AcademiaCuidar se pondrá en contacto con vos para escuchar tu situación.</li>
        <li>Te enviaremos una cotización adaptada a tu caso, sin costo y sin compromiso.</li>
        <li>Si lo deseas, coordinamos una entrevista con una de nuestras coordinadoras de cuidados para diseñar un plan personalizado.</li>
      </ol>
      <p>Dejanos tus datos y un miembro de nuestro equipo te llamará en el horario que prefieras. También podés contactarnos directamente por WhatsApp para una atención inmediata.</p>
    </div>
  );

  const employmentDescription = (
    <div className="text-left max-w-4xl mx-auto space-y-6">
      <p>En AcademiaCuidar creemos que cuidar es una tarea fundamental y queremos reconocer a quienes lo hacen con vocación y profesionalismo. Por eso, te ofrecemos la posibilidad de formarte, certificarte y acceder a oportunidades laborales en hogares de la Ciudad de Buenos Aires, Vicente López, San Isidro, San Fernando, Villanueva, Escobar y Pilar.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold text-xl text-purple-800 mb-2">¿Qué ofrecemos?</h4>
          <ul className="list-disc list-outside space-y-2 pl-5">
            <li><strong>Formación gratuita y certificada:</strong> más de 150 horas de capacitación online y presencial.</li>
            <li><strong>Reclutamiento personalizado:</strong> evaluamos tu perfil para conectarte con la familia adecuada.</li>
            <li><strong>Trabajo estable y digno:</strong> cuidamos tus derechos con contratos transparentes.</li>
            <li><strong>Acompañamiento continuo:</strong> contarás con el apoyo de una coordinadora de cuidados.</li>
            <li><strong>Reconocimiento y comunidad:</strong> sé parte de una red profesional de cuidadoras.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl text-purple-800 mb-2">Requisitos para postularte</h4>
          <ul className="list-disc list-outside space-y-2 pl-5">
            <li>Tener experiencia en el cuidado de personas mayores o vocación comprobada.</li>
            <li>Presentar certificado de antecedentes penales actualizado.</li>
            <li>Contar con referencias personales y/o laborales verificables.</li>
            <li>Aprobar el test diagnóstico inicial y completar la formación de AcademiaCuidar.</li>
          </ul>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-xl text-purple-800 mb-2">¿Cómo postularte?</h4>
        <p>Completá el formulario en línea o escribinos por WhatsApp. Nuestro equipo de Recursos Humanos se pondrá en contacto con vos para agendar una entrevista y comenzar el proceso de formación y selección.</p>
      </div>
    </div>
  );


  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main>
        <WhyChooseUs />
        <Services />
        <Process />
        <Academy />
        <Testimonials />
        <FAQ />
        <CallToAction
          title="Solicita Información"
          description={requestInfoDescription}
          buttonText="Contactar por WhatsApp"
          buttonStyle="primary"
          link="https://wa.me/+5491157231111"
        />
        <CallToAction
          title="Sumate a la comunidad de cuidadoras"
          description={employmentDescription}
          buttonText="Postularme ahora"
          buttonStyle="secondary"
          link="https://wa.me/+5491157231100"
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;