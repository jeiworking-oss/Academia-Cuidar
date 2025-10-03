import React from 'react';
import AccordionItem from './AccordionItem';

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-900">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas más comunes sobre nuestros servicios y proceso de selección de cuidadores.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <AccordionItem title="¿Por qué elegir AcademiaCuidar?">
            <div className="space-y-4">
              <p>AcademiaCuidar es la organización líder en atención domiciliaria de calidad en Argentina. Acompañamos a las personas mayores y a sus familias a vivir la longevidad de forma segura y activa.</p>
              <p>Lo logramos, mediante la formación de cuidadoras, el reclutamiento personalizado, y el uso de tecnología para el monitoreo y la estimulación diaria.</p>
              <p>Nuestra visión es una sociedad en la que, al envejecer, vivamos con propósito, compañía y seguridad.</p>
              <p>Detrás de esta misión hay tres pilares:</p>
              <ol className="list-decimal list-outside space-y-2 pl-5">
                <li>
                  <strong>Calidad de las cuidadoras:</strong> seleccionamos y formamos a las mejores profesionales, con un proceso riguroso liderado por psicólogos, trabajadoras sociales y especialistas en recursos humanos. Solo una parte de las postulantes logra ingresar a nuestra red.
                </li>
                <li>
                  <strong>Trato humano y personalizado:</strong> cada familia cuenta con una Coordinadora de Cuidados, profesional del área social o de la salud, que acompaña y asesora durante todo el proceso.
                </li>
                <li>
                  <strong>Tecnología aplicada al cuidado:</strong> desarrollamos herramientas digitales que permiten a las familias y médicos seguir el servicio en tiempo real: check-in/out, control de tareas, registro de medicación y signos vitales, propuestas de estimulación y tableros con reportes.
                </li>
              </ol>
            </div>
          </AccordionItem>
          <AccordionItem title="¿Qué servicios ofrece AcademiaCuidar?">
            <div className="space-y-4">
              <p>Ofrecemos servicios de cuidado a domicilio totalmente personalizados:</p>
              <ul className="list-disc list-outside space-y-2 pl-5">
                <li>Cuidadoras por horas.</li>
                <li>Cuidadoras con cama adentro (24 horas).</li>
                <li>Cuidadoras para los fines de semana.</li>
                <li>Cuidadoras de noche.</li>
                <li>Cuidadoras especializadas en Alzheimer, Parkinson, ACV, demencia y ELA.</li>
              </ul>
              <p>Además, incluimos tareas de acompañamiento, higiene personal, movilidad, alimentación, compras, control de medicación, paseos, estimulación física y cognitiva, y contención emocional.</p>
            </div>
          </AccordionItem>
          <AccordionItem title="¿Cómo se selecciona a la cuidadora?">
            <div className="space-y-4">
              <p>El proceso tiene varios pasos:</p>
              <ol className="list-decimal list-outside space-y-2 pl-5">
                <li>
                  <strong>Plan de Trabajo Individual (PTI):</strong> la Coordinadora de Cuidados realiza una valoración integral de la persona mayor, definiendo necesidades, objetivos y tareas.
                </li>
                <li>
                  <strong>Selección:</strong> buscamos en nuestra red de cuidadoras aquellas que cumplen con la experiencia, la formación y las habilidades necesarias.
                </li>
                <li>
                  <strong>Elección final:</strong> presentamos a la candidata ideal, pero la decisión siempre la toma la familia. En más del 90% de los casos, la primera recomendación es la que se confirma.
                </li>
              </ol>
            </div>
          </AccordionItem>
          <AccordionItem title="¿Qué valor aporta la Coordinadora de Cuidados?">
            <div className="space-y-4">
                <p>La Coordinadora de Cuidados es la pieza central de nuestro modelo. Es una profesional (psicóloga, terapista ocupacional, trabajadora social o fisioterapeuta) con experiencia en el sector sociosanitario.</p>
                <p>Sus funciones principales son:</p>
                <ul className="list-disc list-outside space-y-2 pl-5">
                    <li>Realizar la valoración inicial y diseñar el PTI.</li>
                    <li>Supervisar el servicio en forma periódica y continua.</li>
                    <li>Brindar acompañamiento preventivo y proactivo.</li>
                    <li>Resolver incidencias y emergencias.</li>
                    <li>Orientar a la familia con consejos de cuidado y estimulación.</li>
                    <li>Coordinarse con médicos, servicios de salud y profesionales externos.</li>
                </ul>
                <p>El equipo está disponible los 365 días del año, con guardias activas para asegurar continuidad incluso los fines de semana y feriados.</p>
            </div>
          </AccordionItem>
          <AccordionItem title="¿Cómo funciona el sistema de monitoreo digital?">
            <div>
              <p>Nuestra aplicación móvil permite un seguimiento completo:</p>
              <ul className="list-disc list-outside space-y-2 pl-5 mt-4">
                <li>Check-in/out georreferenciado de la cuidadora.</li>
                <li>Registro diario de tareas, medicación y signos vitales.</li>
                <li>Planificación de turnos y reemplazos de urgencia.</li>
                <li>Gestión integrada de logística e historia clínica.</li>
                <li>Supervisión de compras y pagos de insumos.</li>
                <li>Propuestas de estimulación física y cognitiva (juegos, memoria, conversación, actividad adaptada).</li>
                <li>Videovigilancia opcional para seguridad.</li>
                <li>Video mensual con fotos de nietos o familiares para reforzar el vínculo afectivo.</li>
                <li>Tablero con reportes y alertas para la familia y el médico.</li>
              </ul>
            </div>
          </AccordionItem>
           <AccordionItem title="¿Qué es una Care Manager y qué aporta a la familia?">
            <div className="space-y-4">
                <p>La Care Manager es una profesional especializada que coordina de manera integral el cuidado de la persona mayor. Su rol es central porque:</p>
                <ul className="list-disc list-outside space-y-2 pl-5">
                    <li>Diseña junto a la familia un plan de cuidados personalizado.</li>
                    <li>Supervisa a las cuidadoras y asegura que las tareas se realicen según lo planificado.</li>
                    <li>Se comunica con médicos y centros de salud, actuando como nexo entre la familia y el sistema sanitario.</li>
                    <li>Detecta a tiempo cualquier necesidad nueva y propone ajustes en el servicio.</li>
                    <li>Ofrece a la familia un único punto de contacto, simplificando la gestión y aportando tranquilidad.</li>
                </ul>
                <p>Este modelo asegura que el cuidado no dependa solo de la relación directa con la cuidadora, sino que haya una coordinación profesional continua, lo que garantiza mayor calidad, seguridad y confianza en el servicio.</p>
            </div>
          </AccordionItem>
          <AccordionItem title="¿Puedo elegir a la cuidadora?">
            <p>Sí. AcademiaCuidar presenta las mejores opciones según el perfil y las necesidades, pero la elección final siempre la hace la familia.</p>
          </AccordionItem>
          <AccordionItem title="¿Cuánto tarda en comenzar el servicio?">
            <p>En general, entre 4 y 6 días hábiles desde la primera entrevista. En casos de urgencia, podemos iniciar el servicio en 24 a 48 horas.</p>
          </AccordionItem>
           <AccordionItem title="¿Qué valores guían a AcademiaCuidar?">
            <ul className="list-disc list-outside space-y-2 pl-5">
              <li><strong>Calidad:</strong> hacemos las cosas bien desde el inicio.</li>
              <li><strong>Compromiso:</strong> tratamos cada caso como único, con dedicación real.</li>
              <li><strong>Transparencia:</strong> comunicación clara y honesta, sin letra chica.</li>
              <li><strong>Impacto social:</strong> trabajamos para transformar el sistema de cuidados en Argentina, profesionalizando a las cuidadoras y apoyando a las familias.</li>
              <li><strong>Innovación:</strong> integramos tecnología para mejorar la seguridad y la eficiencia del cuidado.</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="¿Dónde brinda servicio AcademiaCuidar?">
            <div className="space-y-4">
              <p>Actualmente trabajamos en:</p>
              <ul className="list-disc list-outside space-y-2 pl-5">
                <li>Ciudad de Buenos Aires.</li>
                <li>Vicente López.</li>
                <li>San Isidro.</li>
                <li>San Fernando.</li>
                <li>Villanueva.</li>
                <li>Escobar.</li>
                <li>Pilar.</li>
              </ul>
              <p>Estamos en proceso de expansión hacia nuevas localidades del Gran Buenos Aires, siempre priorizando mantener la máxima calidad en cada servicio.</p>
            </div>
          </AccordionItem>
          <AccordionItem title="¿Qué diferencia a AcademiaCuidar de otras agencias o servicios particulares?">
             <ul className="list-disc list-outside space-y-2 pl-5">
                <li>Todas las candidatas son egresadas o estudiantes de la Academia</li>
                <li>Selección y formación rigurosa de cuidadoras.</li>
                <li>Acompañamiento continuo con sistema de monitoreo.</li>
                <li>Contratos transparentes y seguros.</li>
                <li>Pago solo cuando el servicio se inicia efectivamente.</li>
                <li>Presencia cercana y atención personalizada en todo momento.</li>
             </ul>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default FAQ;