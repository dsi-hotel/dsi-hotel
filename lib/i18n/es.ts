import type { fr } from './fr'

export const es: typeof fr = {
  nav: {
    solutions: 'Soluciones',
    engagements: 'Compromisos',
    whyUs: 'Acerca de',
    sectors: 'Sectores',
    clients: 'Clientes',
    testimonials: 'Testimonios',
    contact: 'Contacto',
    audit: 'Auditoría gratis',
  },

  hero: {
    eyebrow: 'MSP IT · Hotelería',
    title1: 'La IT ',
    title2: 'invisible.',
    title3: 'El servicio de ',
    title4: '5 estrellas.',
    subtitle: 'DSI Hotel gestiona toda su infraestructura IT — para que sus equipos y huéspedes nunca tengan que pensar en ello.',
    ctaAudit: 'Solicitar una auditoría',
    ctaServices: 'Descubrir nuestros servicios',
    scroll: 'Desplazar',
    statUptime: 'Uptime garantizado en infraestructura crítica',
    statResponse: 'Tiempo de respuesta en incidencias críticas',
    statSupport: 'Guardia 365 días al año',
  },

  ticker: [
    'Gestión de Parque IT',
    'Ciberseguridad & Hardening',
    'Red Wi-Fi & VLAN',
    'Videovigilancia IP',
    'Conformidad PCI-DSS',
    'NinjaOne RMM',
    'RGPD & DORA',
    'Hardening DC',
    'Soporte 24/7/365',
    'Hotelería',
  ],

  sla: {
    uptime: 'Uptime garantizado',
    intervention: 'Intervención garantizada',
    supervision: 'Supervisión & soporte',
  },

  services: {
    label: 'Nuestras soluciones',
    h2a: 'Infraestructura diseñada',
    h2b: 'para la hotelería',
    desc: 'Cada servicio está diseñado en torno a las limitaciones operacionales propias de la hotelería.',
    all: 'Todos nuestros servicios',
    items: [
      {
        id: 'infrastructure',
        title: 'Gestión de Parque IT',
        description: 'Inventario, despliegue y supervisión de todos sus equipos. Gestión de puestos via Intune, MDM, actualizaciones automatizadas e informes mensuales.',
        tags: ['Intune', 'NinjaOne', 'MDM'],
      },
      {
        id: 'wifi',
        title: 'Red Wi-Fi & LAN',
        description: 'Despliegue Ubiquiti UniFi Wi-Fi 7, SSID segregados guest / staff / IoT. Cobertura radio garantizada habitación por habitación, gestión cloud centralizada.',
        tags: ['UniFi', 'Wi-Fi 7', 'VLAN'],
      },
      {
        id: 'cybersecurite',
        title: 'Ciberseguridad',
        description: 'Firewall pfSense, EDR Sophos, gestión de identidades Entra ID con MFA. Despliegue SIEM Azure Sentinel. Auditoría de seguridad anual, informe de conformidad y plan de remediación incluidos.',
        tags: ['pfSense', 'Entra ID', 'Azure Sentinel'],
      },
      {
        id: 'helpdesk',
        title: 'Helpdesk IT',
        description: 'Soporte a usuarios por ticket, teléfono o intervención in situ en menos de 4h hábiles. Stock de reemplazo dedicado, guardia disponible 7d/7.',
        tags: ['SLA 4h', 'In situ', 'Freshdesk'],
      },
      {
        id: 'sauvegarde',
        title: 'Copia de seguridad & Continuidad',
        description: 'Backup Veeam diario, retención 30 días, replicación cifrada fuera del sitio. Plan de recuperación de actividad probado semestralmente, RTO garantizado en contrato.',
        tags: ['Veeam', 'PRA', 'RTO garantizado'],
      },
      {
        id: 'videosurveillance',
        title: 'Videovigilancia IP',
        description: "Cámaras IP de alta definición, NVR redundante, retención cifrada 30 días, acceso remoto seguro. Conformidad RGPD e integración control de acceso.",
        tags: ['IP HD', 'NVR', 'RGPD'],
      },
    ],
  },

  tech: {
    label: 'Forman parte de nuestro ecosistema',
  },

  whyUs: {
    label: 'Por qué DSI Hotel',
    h2a: 'IT diseñado para',
    h2b: 'la hotelería',
    desc: 'Nuestra especialización exclusiva en hotelería nos permite anticipar sus necesidades antes de que se conviertan en problemas. Cada solución está calibrada para las exigencias de un establecimiento de 4 o 5 estrellas.',
    reporting: 'Infraestructura operacional',
    location: 'Reporte en tiempo real — Establecimiento París 8°',
    progressUptime: 'Uptime servidores',
    progressTickets: 'Tickets resueltos este mes',
    progressWifi: 'Cobertura Wi-Fi',
    badge: 'Sin interrupciones críticas',
    cardLabel: 'Intervención máx.',
    diffs: [
      {
        title: 'Experiencia sectorial pura',
        desc: '100% de nuestros clientes son hoteles. Conocemos cada limitación operacional.',
      },
      {
        title: 'Equipo dedicado en París',
        desc: 'Técnicos basados en París, disponibles in situ en menos de una hora. Sin subcontratación.',
      },
      {
        title: 'Contrato SLA sin sorpresas',
        desc: 'Informe mensual detallado, interlocutor único, compromiso de resultados en cada métrica.',
      },
    ],
  },

  expertise: {
    h2a: 'Conocemos su',
    h2b: 'entorno',
    items: [
      { id: 'opera', name: 'Oracle OPERA', subtitle: 'PMS líder en hotelería', tags: 'PMS · POS · Interfaces' },
      { id: 'fortinet', name: 'Fortinet', subtitle: 'Seguridad de red & firewall', tags: 'FortiGate · VPN · SD-WAN' },
      { id: 'sophos', name: 'Sophos', subtitle: 'Protección endpoint & cloud', tags: 'EDR · XDR · Intercept X' },
      { id: 'm365', name: 'Microsoft 365', subtitle: 'Productividad & seguridad', tags: 'Entra ID · Intune · Defender' },
    ],
  },

  clients: {
    label: 'Confían en nosotros',
    h2a: 'Nuestros clientes',
    h2b: 'socios',
    desc: 'Grupos hoteleros de excepción nos confían su infraestructura IT en toda Europa.',
    confidential: 'Establecimientos bajo acuerdo de confidencialidad · Referencias disponibles bajo petición',
    zone: 'París · Francia · Europa',
  },

  testimonial: {
    label: 'Lo que dicen nuestros clientes',
    quote: 'Desde que DSI Hotel gestiona nuestra infraestructura, no hemos tenido ninguna interrupción durante el check-in. Eso es exactamente lo que esperábamos de un socio IT.',
    role: 'Director de Operaciones',
    location: 'Hotel boutique 5★ — París 8°',
  },

  cta: {
    eyebrow: 'Auditoría gratuita & sin compromiso',
    h2a: 'Listo para asegurar',
    h2b: 'su infraestructura?',
    desc: 'Nuestros expertos analizan su parque IT en 48h y le entregan un informe completo — sin coste, sin compromiso.',
    btn: 'Solicitar una auditoría gratuita',
    trust: 'Respuesta en 24h · SLA garantizado',
  },

  footer: {
    tagline: 'Socio IT de hoteles de lujo en Europa, esencial por compromiso.',
    solutionsLabel: 'Soluciones',
    solutions: ['Infraestructura', 'Ciberseguridad', 'Red Wi-Fi', 'Conformidad', 'Soporte gestionado'],
    aproposLabel: 'Acerca de',
    apropos: ['Nuestro enfoque', 'Equipo', 'Carreras', 'Socios'],
    contactLabel: 'Contacto',
    copyright: '© DSI Hotel 2025 — Todos los derechos reservados',
    legal: 'Aviso legal',
    privacy: 'Política de privacidad',
    slaNote: '* Las garantías se aplican a las urgencias operativas hoteleras cubiertas por el contrato SLA firmado.',
    hours: 'Lun–Vie 8h–19h\nSoporte 24h/24 · 7d/7',
  },

  contact: {
    breadcrumb: 'Inicio',
    label: 'Hablemos de su proyecto',
    titleA: 'Solicite su',
    titleB: 'auditoría IT gratuita',
    subtitle: 'Un experto de DSI Hotel analiza su infraestructura existente y le entrega un informe personalizado en 48h. Sin compromiso.',

    formTitle: 'Describa su establecimiento',
    formSubtitle: 'Todos los campos marcados con * son obligatorios.',

    labelFirstName: 'Nombre',
    labelLastName: 'Apellido',
    labelRole: 'Cargo',
    labelEstablishment: 'Establecimiento',
    labelEmail: 'Email profesional',
    labelPhone: 'Teléfono',
    labelRooms: 'Número de habitaciones',
    labelNeeds: 'Necesidades principales',
    labelMessage: 'Mensaje',

    placeholderFirstName: 'Juan',
    placeholderLastName: 'García',
    placeholderEstablishment: 'Hotel Gran Vía',
    placeholderEmail: 'j.garcia@hotel.com',
    placeholderPhone: '+34 XX XXX XXXX',
    placeholderMessage: 'Describa su infraestructura actual, sus problemas...',
    selectOption: 'Seleccionar...',

    roles: ['Director General', 'Director de Operaciones', 'Director IT', 'Director Financiero', 'Otro'],
    roomsOptions: ['< 30 habitaciones', '30–80 habitaciones', '80–150 habitaciones', '150–300 habitaciones', '> 300 habitaciones'],
    needsOptions: ['Infraestructura de servidores', 'Ciberseguridad', 'Red Wi-Fi', 'Videovigilancia', 'Conformidad PCI-DSS', 'Equipos & helpdesk', 'Auditoría completa'],

    rgpdText: 'Acepto que DSI Hotel trate mis datos para responder a mi solicitud.',
    rgpdLink: 'Política de privacidad',

    submitBtn: 'Enviar mi solicitud →',
    submittingBtn: 'Enviando...',

    successTitle: '¡Solicitud enviada!',
    successMsg: 'Nos pondremos en contacto en 24h hábiles.',
    successBtn: 'Volver al inicio',

    errorMsg: 'Ha ocurrido un error. Por favor inténtelo de nuevo o contáctenos directamente.',

    errors: {
      firstName: 'Nombre requerido (mín. 2 caracteres)',
      lastName: 'Apellido requerido (mín. 2 caracteres)',
      role: 'Por favor seleccione su cargo',
      establishment: 'Nombre del establecimiento requerido',
      email: 'Dirección de email inválida',
      phone: 'Número de teléfono inválido',
      rgpd: 'Debe aceptar la política de privacidad',
    },

    coordTitle: 'Nuestros datos de contacto',
    hours: 'Lun–Vie 8h–19h\nSoporte 24h/24 – 7d/7',

    nextTitle: 'Qué ocurre a continuación',
    steps: [
      { title: 'Respuesta en 24h', desc: 'Un experto le contacta para cualificar su necesidad' },
      { title: 'Auditoría in situ', desc: 'Análisis de su infraestructura en 2–3h (gratuita)' },
      { title: 'Propuesta en 48h', desc: 'Informe + presupuesto adaptado a su establecimiento' },
    ],

    urgTitle: '¿Urgencia IT?',
    urgDesc: 'Guardia técnica 24h/7d/365d',
    urgBtn: 'Llamar ahora',

    reassurance: [
      { title: 'Auditoría 100% gratuita', desc: 'Sin compromiso, sin condiciones' },
      { title: 'Respuesta garantizada en 24h', desc: 'Días hábiles' },
      { title: 'Confidencialidad asegurada', desc: 'Sus datos nunca se comparten' },
    ],
  },
}
