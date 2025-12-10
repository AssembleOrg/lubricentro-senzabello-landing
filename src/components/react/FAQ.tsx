import { useState } from 'react';
import { CONFIG } from './config';

const preguntas = [
  {
    pregunta: '¿Necesito turno o puedo ir directo?',
    respuesta: 'Podés venir directo sin turno previo. Atendemos por orden de llegada. Si querés asegurarte disponibilidad en un horario puntual, podés escribirnos por WhatsApp y coordinamos.',
  },
  {
    pregunta: '¿Cuánto tarda un cambio de aceite?',
    respuesta: 'Un cambio de aceite estándar lo hacemos en aproximadamente 20 a 30 minutos. Puede variar un poco según el vehículo y si incluye revisiones adicionales.',
  },
  {
    pregunta: '¿Qué marcas de aceite usan?',
    respuesta: `Trabajamos con marcas reconocidas como ${CONFIG.marcasPrincipales}. Usamos aceites de calidad que cumplen con las especificaciones de los fabricantes. Si tenés preferencia por alguna marca, consultanos.`,
  },
  {
    pregunta: '¿Atienden autos 0km sin perder la garantía?',
    respuesta: 'Sí. Por ley, podés hacer el service de tu auto 0km en cualquier taller habilitado sin perder la garantía de fábrica, siempre que se usen repuestos y lubricantes acordes. Te damos factura y registramos el service.',
  },
  {
    pregunta: '¿Trabajan con camionetas y utilitarios?',
    respuesta: 'Sí, atendemos autos, camionetas, utilitarios y vehículos livianos en general. Para vehículos más grandes o especiales, consultanos antes.',
  },
  {
    pregunta: '¿Qué medios de pago aceptan?',
    respuesta: `Aceptamos ${CONFIG.mediosPago}. Consultanos si tenés alguna necesidad particular de forma de pago.`,
  },
  {
    pregunta: '¿Revisan otros puntos del auto con el servicio?',
    respuesta: 'Sí, con cada cambio de aceite hacemos una revisión visual de los puntos básicos: niveles de fluidos, estado de correas, luces, y te comentamos si vemos algo que necesite atención.',
  },
  {
    pregunta: '¿Tienen estacionamiento?',
    respuesta: 'Sí, tenemos espacio para que estaciones tu vehículo mientras esperás. El lugar es accesible y está sobre la calle principal.',
  },
  {
    pregunta: '¿Cuáles son los horarios de atención?',
    respuesta: `Atendemos de lunes a viernes de ${CONFIG.horarios.lunesViernes} y sábados de ${CONFIG.horarios.sabados}. Domingos cerrado. Ante dudas, escribinos por WhatsApp.`,
  },
  {
    pregunta: '¿Puedo esperar mientras hacen el servicio?',
    respuesta: 'Sí, podés esperar en el lugar. Tenemos un espacio para que te sientes cómodo mientras trabajamos en tu vehículo.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Resolvé tus dudas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
            Preguntas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">
              frecuentes
            </span>
          </h2>
          <p className="text-lg text-neutral-600">
            Las consultas más comunes de nuestros clientes. Si no encontrás lo que buscás,
            escribinos por WhatsApp.
          </p>
        </div>

        {/* Acordeón de preguntas */}
        <div className="space-y-4">
          {preguntas.map((item, index) => (
            <div
              key={index}
              className={`bg-neutral-50 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-lg ring-2 ring-primary-500/20' : ''
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-100 transition-colors"
              >
                <span className="font-semibold text-neutral-900 pr-4">
                  {item.pregunta}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-primary-600 text-white rotate-180'
                      : 'bg-neutral-200 text-neutral-600'
                  }`}
                >
                  <ChevronIcon />
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-neutral-600 leading-relaxed">
                    {item.respuesta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">
            ¿Tenés otra pregunta que no está acá?
          </p>
          <a
            href={`https://wa.me/549${CONFIG.whatsapp}?text=Hola!%20Tengo%20una%20consulta...`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold hover:underline"
          >
            <span>Consultanos por WhatsApp</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}


