import { CONFIG } from './config';

const testimonios = [
  {
    nombre: 'Juan M.',
    zona: 'Villa Santa Rosa, Varela',
    texto: 'Excelente atención, muy honestos. Me dijeron que el filtro todavía andaba bien y no me cobraron de más. Voy siempre para el cambio de aceite.',
    estrellas: 5,
  },
  {
    nombre: 'María L.',
    zona: 'Florencio Varela Centro',
    texto: 'Rápidos y prolijos. Llegué sin turno y en media hora ya tenía el auto listo. Los precios son muy razonables comparado con otros lugares.',
    estrellas: 5,
  },
  {
    nombre: 'Carlos R.',
    zona: 'San Juan, Varela',
    texto: 'Hace años que traigo mis autos acá. Siempre te explican todo, te muestran los repuestos que cambian y te dan consejos útiles. Muy recomendable.',
    estrellas: 5,
  },
  {
    nombre: 'Laura G.',
    zona: 'Bosques, F. Varela',
    texto: 'Primera vez que fui y quedé muy conforme. Me revisaron varios puntos del auto además del aceite, sin cobrarme extra. Volveré seguro.',
    estrellas: 4,
  },
  {
    nombre: 'Diego P.',
    zona: 'Villa Santa Rosa',
    texto: 'Lo mejor es que son de confianza. Después de años de ir a distintos lugares, encontré uno donde no te venden cosas que no necesitás.',
    estrellas: 5,
  },
  {
    nombre: 'Andrea S.',
    zona: 'Zeballos, F. Varela',
    texto: 'Muy buen servicio. Me atendieron súper bien y me dieron todos los detalles del mantenimiento. El aceite que usan es de primera.',
    estrellas: 5,
  },
];

export default function Opiniones() {
  return (
    <section id="opiniones" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonios reales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
            Lo que dicen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">
              nuestros clientes
            </span>
          </h2>
          <p className="text-lg text-neutral-600">
            Con más de <strong className="text-neutral-800">{CONFIG.cantidadResenias} reseñas online</strong> y
            una calificación de <strong className="text-neutral-800">{CONFIG.calificacion} estrellas</strong>,
            nuestros clientes hablan por nosotros.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < testimonio.estrellas} />
                ))}
              </div>

              {/* Texto del testimonio */}
              <p className="text-neutral-700 leading-relaxed mb-6 italic">
                "{testimonio.texto}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonio.nombre.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonio.nombre}</p>
                  <p className="text-sm text-neutral-500">{testimonio.zona}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badge de Google */}
        <div className="mt-12 flex flex-col items-center">
          <div className="bg-white rounded-2xl px-8 py-6 shadow-sm border border-neutral-100 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <GoogleIcon />
              </div>
              <div>
                <p className="font-semibold text-neutral-800">Google Reviews</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < 4.5} small />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600">
                    {CONFIG.calificacion} ({CONFIG.cantidadResenias} reseñas)
                  </span>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm hover:underline"
            >
              Ver todas las reseñas →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ filled = true, small = false }: { filled?: boolean; small?: boolean }) {
  return (
    <svg
      className={`${small ? 'w-4 h-4' : 'w-5 h-5'} ${filled ? 'text-golden-400' : 'text-neutral-200'}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}


