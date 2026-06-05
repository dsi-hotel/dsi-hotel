import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'infrastructure',
    number: '01',
    title: 'Gestion de Parc Informatique',
    description: "Inventaire, déploiement et supervision de l'ensemble de vos équipements. Gestion des postes via Intune, MDM, mises à jour automatisées et reporting mensuel.",
    tags: ['Intune', 'NinjaOne', 'MDM'],
    icon: 'server',
  },
  {
    id: 'wifi',
    number: '02',
    title: 'Réseau Wi-Fi & LAN',
    description: 'Déploiement Ubiquiti UniFi Wi-Fi 7, SSID ségrégués guest / staff / IoT. Couverture radio garantie chambre par chambre, gestion cloud centralisée.',
    tags: ['UniFi', 'Wi-Fi 7', 'VLAN'],
    icon: 'wifi',
  },
  {
    id: 'cybersecurite',
    number: '03',
    title: 'Cybersécurité',
    description: "Pare-feu pfSense, EDR Sophos, gestion des identités Entra ID avec MFA. Déploiement SIEM Azure Sentinel. Audit sécurité annuel, rapport de conformité et plan de remédiation inclus.",
    tags: ['pfSense', 'Entra ID', 'Azure Sentinel'],
    icon: 'shield',
  },
  {
    id: 'helpdesk',
    number: '04',
    title: 'Helpdesk IT',
    description: "Support utilisateurs par ticket, téléphone ou intervention sur site sous 4h ouvrées. Stock de remplacement dédié, astreinte disponible 7j/7.",
    tags: ['SLA 4h', 'On-site', 'Freshdesk'],
    icon: 'monitor',
  },
  {
    id: 'sauvegarde',
    number: '05',
    title: 'Sauvegarde & Continuité',
    description: "Backup Veeam quotidien, rétention 30 jours, réplication hors-site chiffrée. Plan de reprise d'activité testé semestriellement, RTO garanti au contrat.",
    tags: ['Veeam', 'PRA', 'RTO garanti'],
    icon: 'harddrive',
  },
  {
    id: 'videosurveillance',
    number: '06',
    title: 'Vidéosurveillance IP',
    description: "Caméras IP haute définition, NVR redondant, rétention 30 jours chiffrée, accès distant sécurisé. Conformité RGPD et intégration contrôle d'accès.",
    tags: ['IP HD', 'NVR', 'RGPD'],
    icon: 'camera',
  },
]
