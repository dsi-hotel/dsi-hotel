import type { fr } from './fr'

export const en: typeof fr = {
  nav: {
    solutions: 'Solutions',
    engagements: 'Commitments',
    whyUs: 'About',
    sectors: 'Sectors',
    clients: 'Clients',
    testimonials: 'Testimonials',
    contact: 'Contact',
    audit: 'Free Audit',
  },

  hero: {
    eyebrow: 'MSP IT · Luxury Hospitality',
    title1: 'The IT ',
    title2: 'invisible.',
    title3: 'Five-star ',
    title4: 'service.',
    subtitle: 'DSI Hotel takes full charge of your IT infrastructure — so your teams and guests never have to think about it.',
    ctaAudit: 'Request an audit',
    ctaServices: 'Discover our services',
    scroll: 'Scroll',
    statUptime: 'Guaranteed uptime on critical infrastructure',
    statResponse: 'Response time for critical incidents',
    statSupport: 'On-call 365 days a year',
  },

  ticker: [
    'IT Fleet Management',
    'Cybersecurity & Hardening',
    'Wi-Fi Network & VLAN',
    'IP Video Surveillance',
    'PCI-DSS Compliance',
    'NinjaOne RMM',
    'GDPR & DORA',
    'DC Hardening',
    '24/7/365 Support',
    'Luxury Hospitality',
  ],

  sla: {
    uptime: 'Guaranteed Uptime',
    intervention: 'Guaranteed Response',
    supervision: 'Monitoring & Support',
  },

  services: {
    label: 'Our solutions',
    h2a: 'Infrastructure tailored',
    h2b: 'for hospitality',
    desc: 'Each service is designed around the operational constraints of luxury hospitality.',
    all: 'All our services',
    items: [
      {
        id: 'infrastructure',
        title: 'IT Fleet Management',
        description: 'Inventory, deployment and monitoring of all your equipment. Workstation management via Intune, MDM, automated updates and monthly reporting.',
        tags: ['Intune', 'NinjaOne', 'MDM'],
      },
      {
        id: 'wifi',
        title: 'Wi-Fi & LAN Network',
        description: 'Ubiquiti UniFi Wi-Fi 7 deployment, segregated guest / staff / IoT SSIDs. Guaranteed room-by-room radio coverage, centralized cloud management.',
        tags: ['UniFi', 'Wi-Fi 7', 'VLAN'],
      },
      {
        id: 'cybersecurite',
        title: 'Cybersecurity',
        description: 'pfSense firewall, Sophos EDR, Entra ID identity management with MFA. Azure Sentinel SIEM deployment. Annual security audit, compliance report and remediation plan included.',
        tags: ['pfSense', 'Entra ID', 'Azure Sentinel'],
      },
      {
        id: 'helpdesk',
        title: 'IT Helpdesk',
        description: 'User support by ticket, phone or on-site intervention within 4 business hours. Dedicated replacement stock, on-call 7 days a week.',
        tags: ['SLA 4h', 'On-site', 'Freshdesk'],
      },
      {
        id: 'sauvegarde',
        title: 'Backup & Continuity',
        description: 'Daily Veeam backup, 30-day retention, encrypted off-site replication. Business continuity plan tested bi-annually, RTO guaranteed in contract.',
        tags: ['Veeam', 'BCP', 'RTO guaranteed'],
      },
      {
        id: 'videosurveillance',
        title: 'IP Video Surveillance',
        description: 'High-definition IP cameras, redundant NVR, 30-day encrypted retention, secure remote access. GDPR compliant with access control integration.',
        tags: ['IP HD', 'NVR', 'GDPR'],
      },
    ],
  },

  tech: {
    label: 'Part of our ecosystem',
  },

  whyUs: {
    label: 'Why DSI Hotel',
    h2a: 'IT designed for',
    h2b: 'luxury hospitality',
    desc: 'Our exclusive specialization in luxury hospitality allows us to anticipate your needs before they become problems. Each solution is calibrated for the demands of a 4 or 5-star establishment.',
    reporting: 'Operational Infrastructure',
    location: 'Real-time reporting — Paris 8th establishment',
    progressUptime: 'Server uptime',
    progressTickets: 'Tickets resolved this month',
    progressWifi: 'Wi-Fi coverage',
    badge: 'No critical interruptions',
    cardLabel: 'Max. response',
    diffs: [
      {
        title: 'Pure sector expertise',
        desc: '100% of our clients are hotels. We know every operational constraint.',
      },
      {
        title: 'Dedicated Paris team',
        desc: 'Technicians based in Paris, available on-site in under an hour. No subcontracting.',
      },
      {
        title: 'SLA contract without surprises',
        desc: 'Detailed monthly report, single point of contact, results commitment on every metric.',
      },
    ],
  },

  expertise: {
    h2a: 'We know your',
    h2b: 'environment',
    items: [
      { id: 'opera', name: 'Oracle OPERA', subtitle: 'Leading hospitality PMS', tags: 'PMS · POS · Interfaces' },
      { id: 'fortinet', name: 'Fortinet', subtitle: 'Network security & firewall', tags: 'FortiGate · VPN · SD-WAN' },
      { id: 'sophos', name: 'Sophos', subtitle: 'Endpoint & cloud protection', tags: 'EDR · XDR · Intercept X' },
      { id: 'm365', name: 'Microsoft 365', subtitle: 'Productivity & security', tags: 'Entra ID · Intune · Defender' },
    ],
  },

  clients: {
    label: 'They trust us',
    h2a: 'Our client',
    h2b: 'partners',
    desc: 'Exceptional hotel groups entrust their IT infrastructure to us across Europe.',
    confidential: 'Establishments under confidentiality agreement · References available on request',
    zone: 'Paris · France · Europe',
  },

  testimonial: {
    label: 'What our clients say',
    quote: "Since DSI Hotel has been managing our infrastructure, we haven't had a single interruption during check-in. That's exactly what we expected from an IT partner.",
    role: 'Director of Operations',
    location: '5★ Boutique Hotel — Paris 8th',
  },

  cta: {
    eyebrow: 'Free audit & no commitment',
    h2a: 'Ready to secure',
    h2b: 'your infrastructure?',
    desc: 'Our experts analyze your IT fleet in 48 hours and provide a comprehensive report — free of charge, no commitment.',
    btn: 'Request a free audit',
    trust: 'Response within 24h · SLA guaranteed',
  },

  footer: {
    tagline: 'IT partner for luxury hotels across Europe, essential by commitment.',
    solutionsLabel: 'Solutions',
    solutions: ['Infrastructure', 'Cybersecurity', 'Wi-Fi Network', 'Compliance', 'Managed support'],
    aproposLabel: 'About',
    apropos: ['Our approach', 'Team', 'Careers', 'Partners'],
    contactLabel: 'Contact',
    copyright: '© DSI Hotel 2025 — All rights reserved',
    legal: 'Legal notices',
    privacy: 'Privacy policy',
    slaNote: '* Guarantees apply to operational hotel emergencies covered by the signed SLA contract.',
    hours: 'Mon–Fri 8am–7pm\n24/7 Support',
  },

  contact: {
    breadcrumb: 'Home',
    label: "Let's talk about your project",
    titleA: 'Request your',
    titleB: 'free IT audit',
    subtitle: 'A DSI Hotel expert analyzes your existing infrastructure and delivers a personalized report within 48h. No commitment.',

    formTitle: 'Describe your establishment',
    formSubtitle: 'All fields marked with * are required.',

    labelFirstName: 'First name',
    labelLastName: 'Last name',
    labelRole: 'Role',
    labelEstablishment: 'Establishment',
    labelEmail: 'Professional email',
    labelPhone: 'Phone',
    labelRooms: 'Number of rooms',
    labelNeeds: 'Main needs',
    labelMessage: 'Message',

    placeholderFirstName: 'John',
    placeholderLastName: 'Smith',
    placeholderEstablishment: 'Grand Hotel',
    placeholderEmail: 'j.smith@hotel.com',
    placeholderPhone: '+44 XXXX XXX XXX',
    placeholderMessage: 'Describe your current infrastructure, your challenges...',
    selectOption: 'Select...',

    roles: ['General Manager', 'Operations Director', 'CTO / IT Manager', 'Finance Director', 'Other'],
    roomsOptions: ['< 30 rooms', '30–80 rooms', '80–150 rooms', '150–300 rooms', '> 300 rooms'],
    needsOptions: ['Server infrastructure', 'Cybersecurity', 'Wi-Fi Network', 'Video surveillance', 'PCI-DSS compliance', 'Workstations & helpdesk', 'Full audit'],

    rgpdText: 'I agree that DSI Hotel processes my data to respond to my request.',
    rgpdLink: 'Privacy policy',

    submitBtn: 'Send my request →',
    submittingBtn: 'Sending...',

    successTitle: 'Request sent!',
    successMsg: 'We will get back to you within 24 business hours.',
    successBtn: 'Back to home',

    errorMsg: 'An error occurred. Please try again or contact us directly.',

    errors: {
      firstName: 'First name required (min. 2 characters)',
      lastName: 'Last name required (min. 2 characters)',
      role: 'Please select your role',
      establishment: 'Establishment name required',
      email: 'Invalid email address',
      phone: 'Invalid phone number',
      rgpd: 'You must accept the privacy policy',
    },

    coordTitle: 'Our contact details',
    hours: 'Mon–Fri 8am–7pm\n24/7 Support',

    nextTitle: 'What happens next',
    steps: [
      { title: 'Response within 24h', desc: 'An expert contacts you to qualify your needs' },
      { title: 'On-site audit', desc: 'Analysis of your infrastructure in 2–3h (complimentary)' },
      { title: 'Proposal within 48h', desc: 'Report + quote tailored to your establishment' },
    ],

    urgTitle: 'IT emergency?',
    urgDesc: 'Technical on-call 24h/7d/365d',
    urgBtn: 'Call now',

    reassurance: [
      { title: '100% free audit', desc: 'No commitment, no conditions' },
      { title: 'Guaranteed 24h response', desc: 'Business days' },
      { title: 'Confidentiality assured', desc: 'Your data is never shared' },
    ],
  },
}
