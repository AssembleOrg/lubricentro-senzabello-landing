// ============================================
// CONFIGURACIÓN DEL NEGOCIO - PLACEHOLDERS
// Completá estos datos con la información real
// ============================================

export const CONFIG = {
  // Información del negocio
  nombreComercial: "Lubricentro Senzabello",
  slogan: "Atendido por sus dueños",
  
  // Contacto
  whatsapp: "1127103159", // Sin el 15, solo el número
  telefono: "1127103159", // PLACEHOLDER: Agregar número de teléfono fijo si hay
  
  // Ubicación
  direccion: "Bombero Voluntario V. Senzabello 1504",
  localidad: "Florencio Varela",
  barrio: "Cruce de Florencio Varela",
  provincia: "Buenos Aires",
  codigoPostal: "B1888",
  googleMapsUrl: "https://maps.google.com/?q=Bombero+Voluntario+V.+Senzabello+1504,+Florencio+Varela,+Buenos+Aires",
  
  // Reputación
  cantidadResenias: "40+",
  calificacion: "4.5",
  
  // Experiencia
  aniosExperiencia: "7+",
  
  // Marcas de lubricantes (PLACEHOLDER)
  marcasPrincipales: "Castrol, Mobil (ExxonMobil), Chevron ", // Ej: "YPF, Shell, Mobil, Total"
  
  // Horarios (PLACEHOLDER)
  horarios: {
    lunesViernes: "8:00 a 18:00", // Ej: "8:00 a 18:00"
    sabados: "8:00 a 13:00", // Ej: "8:00 a 13:00"
    domingos: "Cerrado",
  },
  
  // Medios de pago (PLACEHOLDER)
  mediosPago: "[MEDIOS_DE_PAGO]", // Ej: "Efectivo, débito, crédito, transferencia"
} as const;

// Links de contacto formateados
export const LINKS = {
  whatsapp: `https://wa.me/549${CONFIG.whatsapp}?text=Hola!%20Quiero%20consultar%20sobre%20los%20servicios%20del%20lubricentro`,
  whatsappTurno: `https://wa.me/549${CONFIG.whatsapp}?text=Hola!%20Quiero%20pedir%20un%20turno%20para%20mi%20vehículo`,
  llamar: `tel:+549${CONFIG.whatsapp}`,
  googleMaps: CONFIG.googleMapsUrl,
} as const;


