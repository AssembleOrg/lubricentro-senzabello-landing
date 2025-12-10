import { CONFIG, LINKS } from './config';

const beneficios = [
  { icon: '⚡', text: 'Atención rápida, sin esperas largas' },
  { icon: '💰', text: 'Precios justos y sin sorpresas' },
  { icon: '👨‍🔧', text: 'Atendido por sus dueños' },
  { icon: '🔍', text: 'Revisamos los puntos clave de tu auto' },
  { icon: '✅', text: `Más de ${CONFIG.cantidadResenias} reseñas positivas` },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        {/* Patrón decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        {/* Círculos decorativos */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-golden-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Atendemos hoy mismo • Sin turno previo
              </span>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-slide-up">
              Cambio de aceite{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-300 to-golden-500">
                rápido y de confianza
              </span>{' '}
              en Florencio Varela
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-white/80 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              En {CONFIG.barrio}, tu auto está en buenas manos. Con{' '}
              <strong className="text-white">+{CONFIG.aniosExperiencia} años de experiencia</strong> y{' '}
              <strong className="text-white">{CONFIG.cantidadResenias} reseñas</strong> que nos respaldan.
            </p>

            {/* Lista de beneficios */}
            <ul className="space-y-3 mb-10">
              {beneficios.map((beneficio, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-white/90 animate-slide-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <span className="text-xl">{beneficio.icon}</span>
                  <span>{beneficio.text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all transform hover:scale-105"
              >
                <WhatsAppIcon />
                <span>Escribinos por WhatsApp</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href={LINKS.llamar}
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 transition-all"
              >
                <PhoneIcon />
                <span>Llamar ahora</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 pt-10 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < 4.5} />
                  ))}
                </div>
                <span className="text-white font-semibold">{CONFIG.calificacion}</span>
                <span className="text-white/60">estrellas</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="text-white/80">
                <span className="text-white font-semibold">{CONFIG.cantidadResenias}</span> reseñas
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="text-white/80">
                <span className="text-white font-semibold">+{CONFIG.aniosExperiencia}</span> años
              </div>
            </div>
          </div>

          {/* Imagen del lubricentro */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="relative">
              {/* Imagen principal */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10 shadow-2xl">
                <img 
                  src="/lubricentro.jpg" 
                  alt="Interior de Lubricentro Senzabello - Taller de cambio de aceite en Florencio Varela"
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  loading="eager"
                />
              </div>

              {/* Card flotante */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">Servicio completo</p>
                    <p className="text-sm text-neutral-500">En menos de 30 min</p>
                  </div>
                </div>
              </div>

              {/* Card flotante 2 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled className="text-golden-400" />
                    ))}
                  </div>
                  <span className="font-bold text-neutral-800">{CONFIG.calificacion}</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">{CONFIG.cantidadResenias} clientes felices</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function StarIcon({ filled = true, className = '' }: { filled?: boolean; className?: string }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-golden-400' : 'text-white/30'} ${className}`}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}

