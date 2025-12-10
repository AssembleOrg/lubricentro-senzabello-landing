import { CONFIG } from './config';

const razones = [
  {
    icon: '🤝',
    titulo: 'Confianza y honestidad',
    descripcion: 'Te explicamos todo lo que hacemos con tu auto. Sin vueltas ni trabajos innecesarios. Si algo no hace falta, te lo decimos.',
  },
  {
    icon: '💰',
    titulo: 'Precios justos',
    descripcion: 'Buena relación precio-calidad. Sabés cuánto vas a pagar antes de empezar. Sin sorpresas en la cuenta.',
  },
  {
    icon: '⏱️',
    titulo: 'Atención rápida',
    descripcion: 'Valoramos tu tiempo. Un cambio de aceite básico lo hacemos en menos de 30 minutos. Podés esperar mientras trabajamos.',
  },
  {
    icon: '📍',
    titulo: 'Ubicación accesible',
    descripcion: `Estamos sobre la calle Senzabello, fácil de llegar y de encontrar. En el corazón de ${CONFIG.barrio}.`,
  },
  {
    icon: '🏆',
    titulo: `+${CONFIG.aniosExperiencia} años de experiencia`,
    descripcion: 'Conocemos Florencio Varela y a los autos que andan por acá. Experiencia real trabajando con todo tipo de vehículos.',
  },
  {
    icon: '⭐',
    titulo: 'Clientes satisfechos',
    descripcion: `Más de ${CONFIG.cantidadResenias} reseñas online con una calificación de ${CONFIG.calificacion} estrellas. Nuestros clientes nos recomiendan.`,
  },
];

export default function PorQueElegirnos() {
  return (
    <section id="por-que-elegirnos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestra diferencia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
            ¿Por qué elegir{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">
              Lubricentro Senzabello
            </span>
            ?
          </h2>
          <p className="text-lg text-neutral-600">
            No somos una concesionaria ni una franquicia. Somos un lubricentro de barrio,
            atendido por sus dueños, donde cada cliente importa.
          </p>
        </div>

        {/* Grid de razones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {razones.map((razon, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="h-full bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg">
                {/* Número decorativo */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-neutral-100 group-hover:text-primary-100 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Icono */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                  <span className="filter drop-shadow-sm">{razon.icon}</span>
                </div>
                
                {/* Contenido */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {razon.titulo}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {razon.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { valor: `+${CONFIG.aniosExperiencia}`, label: 'Años de experiencia' },
            { valor: CONFIG.cantidadResenias, label: 'Reseñas online' },
            { valor: CONFIG.calificacion, label: 'Calificación promedio' },
            { valor: '30', label: 'Min. cambio de aceite', suffix: 'min' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary-700 mb-1">
                {stat.valor}
                {stat.suffix && <span className="text-lg ml-1">{stat.suffix}</span>}
              </div>
              <div className="text-sm text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


