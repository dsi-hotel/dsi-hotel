export const fr = {
  nav: {
    solutions: 'Solutions',
    engagements: 'Engagements',
    whyUs: 'À propos',
    sectors: 'Secteurs',
    clients: 'Clients',
    testimonials: 'Témoignages',
    contact: 'Contact',
    audit: 'Audit gratuit',
  },

  hero: {
    eyebrow: 'MSP IT · Hôtellerie de Luxe',
    title1: "L'IT ",
    title2: 'invisible.',
    title3: 'Le service ',
    title4: '5 étoiles.',
    subtitle: "DSI Hotel prend en charge l'intégralité de votre infrastructure IT — pour que vos équipes et vos guests n'aient jamais à y penser.",
    ctaAudit: 'Demander un audit',
    ctaServices: 'Découvrir nos services',
    scroll: 'Défiler',
    statUptime: 'Uptime garanti sur infra critique',
    statResponse: "Délai d'intervention incident critique",
    statSupport: 'Astreinte 365 jours par an',
  },

  ticker: [
    'Gestion de parc IT',
    'Cybersécurité & Hardening',
    'Réseau Wi-Fi & VLAN',
    'Vidéosurveillance IP',
    'Conformité PCI-DSS',
    'NinjaOne RMM',
    'RGPD & DORA',
    'Hardening DC',
    'Support 24/7/365',
    'Hôtellerie de luxe',
  ],

  sla: {
    uptime: 'Uptime garanti',
    intervention: 'Intervention garantie',
    supervision: 'Supervision & support',
  },

  services: {
    label: 'Nos solutions',
    h2a: 'Une infrastructure taillée',
    h2b: "pour l'hôtellerie",
    desc: "Chaque service est conçu autour des contraintes opérationnelles propres à l'hôtellerie de luxe.",
    all: 'Tous nos services',
    items: [
      {
        id: 'infrastructure',
        title: 'Gestion de Parc Informatique',
        description: "Inventaire, déploiement et supervision de l'ensemble de vos équipements. Gestion des postes via Intune, MDM, mises à jour automatisées et reporting mensuel.",
        tags: ['Intune', 'NinjaOne', 'MDM'],
      },
      {
        id: 'wifi',
        title: 'Réseau Wi-Fi & LAN',
        description: 'Déploiement Ubiquiti UniFi Wi-Fi 7, SSID ségrégués guest / staff / IoT. Couverture radio garantie chambre par chambre, gestion cloud centralisée.',
        tags: ['UniFi', 'Wi-Fi 7', 'VLAN'],
      },
      {
        id: 'cybersecurite',
        title: 'Cybersécurité',
        description: "Pare-feu pfSense, EDR Sophos, gestion des identités Entra ID avec MFA. Déploiement SIEM Azure Sentinel. Audit sécurité annuel, rapport de conformité et plan de remédiation inclus.",
        tags: ['pfSense', 'Entra ID', 'Azure Sentinel'],
      },
      {
        id: 'helpdesk',
        title: 'Helpdesk IT',
        description: "Support utilisateurs par ticket, téléphone ou intervention sur site sous 4h ouvrées. Stock de remplacement dédié, astreinte disponible 7j/7.",
        tags: ['SLA 4h', 'On-site', 'Freshdesk'],
      },
      {
        id: 'sauvegarde',
        title: 'Sauvegarde & Continuité',
        description: "Backup Veeam quotidien, rétention 30 jours, réplication hors-site chiffrée. Plan de reprise d'activité testé semestriellement, RTO garanti au contrat.",
        tags: ['Veeam', 'PRA', 'RTO garanti'],
      },
      {
        id: 'videosurveillance',
        title: 'Vidéosurveillance IP',
        description: "Caméras IP haute définition, NVR redondant, rétention 30 jours chiffrée, accès distant sécurisé. Conformité RGPD et intégration contrôle d'accès.",
        tags: ['IP HD', 'NVR', 'RGPD'],
      },
    ],
  },

  tech: {
    label: 'Ils font partie de notre écosystème',
  },

  whyUs: {
    label: 'Pourquoi DSI Hotel',
    h2a: "L'IT pensé pour",
    h2b: "l'hôtellerie de luxe",
    desc: "Notre spécialisation exclusive dans l'hôtellerie de luxe nous permet d'anticiper vos besoins avant même qu'ils ne deviennent des problèmes. Chaque solution est calibrée pour les exigences d'un établissement 4 ou 5 étoiles.",
    reporting: 'Infrastructure opérationnelle',
    location: 'Reporting temps réel — Établissement Paris 8e',
    progressUptime: 'Uptime serveurs',
    progressTickets: 'Tickets résolus ce mois',
    progressWifi: 'Couverture Wi-Fi',
    badge: 'Aucune interruption critique',
    cardLabel: 'Intervention max.',
    diffs: [
      {
        title: 'Expertise sectorielle pure',
        desc: "100% de nos clients sont des hôtels. Nous connaissons chaque contrainte opérationnelle.",
      },
      {
        title: 'Équipe dédiée Paris intramuros',
        desc: "Techniciens basés à Paris, disponibles sur site en moins d'une heure. Pas de sous-traitance.",
      },
      {
        title: 'SLA contractuel sans surprise',
        desc: 'Rapport mensuel détaillé, interlocuteur unique, engagement de résultat sur chaque métrique.',
      },
    ],
  },

  expertise: {
    h2a: 'Nous connaissons votre',
    h2b: 'environnement',
    items: [
      { id: 'opera', name: 'Oracle OPERA', subtitle: 'PMS leader hôtellerie', tags: 'PMS · POS · Interfaces' },
      { id: 'fortinet', name: 'Fortinet', subtitle: 'Sécurité réseau & firewall', tags: 'FortiGate · VPN · SD-WAN' },
      { id: 'sophos', name: 'Sophos', subtitle: 'Protection endpoint & cloud', tags: 'EDR · XDR · Intercept X' },
      { id: 'm365', name: 'Microsoft 365', subtitle: 'Productivité & sécurité', tags: 'Entra ID · Intune · Defender' },
    ],
  },

  clients: {
    label: 'Ils nous font confiance',
    h2a: 'Nos clients',
    h2b: 'partenaires',
    desc: "Des groupes hôteliers d'exception nous confient leur infrastructure IT à travers l'Europe.",
    confidential: 'Établissements sous accord de confidentialité · Références disponibles sur demande',
    zone: 'Paris · Île-de-France · Europe',
  },

  testimonial: {
    label: 'Ce que disent nos clients',
    quote: "Depuis que DSI Hotel gère notre infrastructure, nous n'avons pas eu une seule interruption pendant un check-in. C'est exactement ce que nous attendions d'un partenaire IT.",
    role: 'Directeur des opérations',
    location: 'Boutique hôtel 5★ — Paris 8e',
  },

  cta: {
    eyebrow: 'Audit gratuit & sans engagement',
    h2a: 'Prêt à sécuriser',
    h2b: 'votre infrastructure ?',
    desc: 'Nos experts analysent votre parc IT en 48h et vous remettent un rapport complet — sans frais, sans engagement.',
    btn: 'Demander un audit gratuit',
    trust: 'Réponse sous 24h · SLA garanti',
  },

  footer: {
    tagline: "Partenaire IT des hôtels de luxe en Europe, essentiel par engagement.",
    solutionsLabel: 'Solutions',
    solutions: ['Infrastructure', 'Cybersécurité', 'Réseau Wi-Fi', 'Conformité', 'Support managé'],
    aproposLabel: 'À propos',
    apropos: ['Notre approche', 'Équipe', 'Carrières', 'Partenaires'],
    contactLabel: 'Contact',
    copyright: '© DSI Hotel 2025 — Tous droits réservés',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    slaNote: '* Garanties applicables aux urgences opérationnelles hôtelières couvertes par le contrat SLA signé.',
    hours: 'Lun–Ven 8h–19h\nSupport 24h/24 · 7j/7',
  },

  contact: {
    breadcrumb: 'Accueil',
    label: 'Parlons de votre projet',
    titleA: 'Demandez votre',
    titleB: 'audit IT gratuit',
    subtitle: "Un expert DSI Hotel analyse votre infrastructure existante et vous remet un rapport personnalisé sous 48h. Sans engagement.",

    formTitle: 'Décrivez votre établissement',
    formSubtitle: "Tous les champs marqués d'un * sont obligatoires.",

    labelFirstName: 'Prénom',
    labelLastName: 'Nom',
    labelRole: 'Fonction',
    labelEstablishment: 'Établissement',
    labelEmail: 'Email professionnel',
    labelPhone: 'Téléphone',
    labelRooms: 'Nombre de chambres',
    labelNeeds: 'Besoins principaux',
    labelMessage: 'Message',

    placeholderFirstName: 'Jean',
    placeholderLastName: 'Dupont',
    placeholderEstablishment: 'Hôtel de la Paix',
    placeholderEmail: 'j.dupont@hotel.com',
    placeholderPhone: '+33 1 XX XX XX XX',
    placeholderMessage: 'Décrivez votre infrastructure actuelle, vos problématiques...',
    selectOption: 'Sélectionner...',

    roles: ['Directeur Général', 'Directeur des opérations', 'DSI / Responsable IT', 'Directeur Financier', 'Autre'],
    roomsOptions: ['< 30 chambres', '30–80 chambres', '80–150 chambres', '150–300 chambres', '> 300 chambres'],
    needsOptions: ['Infrastructure serveurs', 'Cybersécurité', 'Réseau Wi-Fi', 'Vidéosurveillance', 'Conformité PCI-DSS', 'Postes & helpdesk', 'Audit complet'],

    rgpdText: 'J\'accepte que DSI Hotel traite mes données pour répondre à ma demande.',
    rgpdLink: 'Politique de confidentialité',

    submitBtn: 'Envoyer ma demande →',
    submittingBtn: 'Envoi en cours...',

    successTitle: 'Demande envoyée !',
    successMsg: 'Nous vous recontactons sous 24h ouvrées.',
    successBtn: "Retour à l'accueil",

    errorMsg: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.',

    errors: {
      firstName: 'Prénom requis (2 caractères min.)',
      lastName: 'Nom requis (2 caractères min.)',
      role: 'Veuillez sélectionner votre fonction',
      establishment: "Nom de l'établissement requis",
      email: 'Adresse email invalide',
      phone: 'Numéro de téléphone invalide',
      rgpd: 'Vous devez accepter la politique de confidentialité',
    },

    coordTitle: 'Nos coordonnées',
    hours: 'Lun–Ven 8h–19h\nSupport 24h/24 – 7j/7',

    nextTitle: 'Ce qui se passe ensuite',
    steps: [
      { title: 'Réponse sous 24h', desc: 'Un expert vous contacte pour qualifier votre besoin' },
      { title: 'Audit sur site', desc: "Analyse de votre infrastructure en 2–3h (offert)" },
      { title: 'Proposition sous 48h', desc: 'Rapport + devis adapté à votre établissement' },
    ],

    urgTitle: 'Une urgence IT ?',
    urgDesc: 'Astreinte technique 24h/7j/365j',
    urgBtn: 'Appeler maintenant',

    reassurance: [
      { title: 'Audit 100% offert', desc: 'Aucun engagement, aucune condition' },
      { title: 'Réponse garantie sous 24h', desc: 'Jours ouvrés' },
      { title: 'Confidentialité assurée', desc: 'Vos données ne sont jamais partagées' },
    ],
  },
}
