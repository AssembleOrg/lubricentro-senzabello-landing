import { CONFIG, LINKS } from './config';

const servicios = [
  {
    icon: '🛢️',
    titulo: 'Cambio de aceite y filtro',
    descripcion: 'Usamos aceites de primera calidad para que tu motor trabaje suave y dure más. Incluye revisión del nivel y estado del aceite.',
  },
  {
    icon: '🌬️',
    titulo: 'Filtro de aire y habitáculo',
    descripcion: 'Mejorá el rendimiento de tu motor y respirá aire limpio dentro del auto. Un filtro sucio hace que gastes más nafta.',
  },
  {
    icon: '💧',
    titulo: 'Revisión de fluidos',
    descripcion: 'Chequeamos líquido de frenos, refrigerante y dirección hidráulica. Son fundamentales para que tu auto funcione seguro.',
  },
  {
    icon: '🚗',
    titulo: 'Chequeo pre-viaje',
    descripcion: 'Antes de salir a la ruta, revisamos los puntos clave: neumáticos, luces, frenos, correas y más. Viajá tranquilo.',
  },
  {
    icon: '⛽',
    titulo: 'Filtro de combustible',
    descripcion: 'Evitá que impurezas lleguen al motor. Un filtro de nafta limpio mejora el arranque y el consumo.',
  },
  {
    icon: '🔧',
    titulo: 'Mecánica ligera',
    descripcion: 'Pequeñas reparaciones y mantenimientos que no requieren taller especializado. Consultanos qué podemos hacer por tu auto.',
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
            Servicios de lubricación y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">
              mantenimiento
            </span>
          </h2>
          <p className="text-lg text-neutral-600">
            Todo lo que tu auto necesita para mantenerse en óptimas condiciones.
            Sin vueltas, con productos de calidad y a precios justos.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary-200"
            >
              {/* Icono */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                {servicio.icon}
              </div>
              
              {/* Contenido */}
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                {servicio.titulo}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Marcas de lubricantes */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-neutral-100">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Trabajamos con las mejores marcas
              </h3>
              <p className="text-neutral-600 mb-4">
                Usamos lubricantes de marcas reconocidas para garantizar la calidad y durabilidad
                del servicio. Si tenés preferencia por alguna marca en particular, consultanos.
              </p>
              <p className="text-lg font-semibold text-primary-700">
                {CONFIG.marcasPrincipales}
              </p>
            </div>
            
            {/* Placeholder para logos de marcas */}
            <div className="flex flex-wrap justify-center gap-4">
              {['Marca 1', 'Marca 2', 'Marca 3', 'Marca 4'].map((marca, i) => (
                <div
                  key={i}
                  className="w-24 h-16 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 text-xs"
                >
                  [LOGO]
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all transform hover:scale-105"
          >
            <span>Consultá por tu servicio</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


