import type { ExpertiseItem } from '@/types'

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'opera',
    name: 'Oracle OPERA',
    subtitle: 'PMS leader hôtellerie',
    tags: 'PMS · POS · Interfaces',
    icon: 'database',
  },
  {
    id: 'fortinet',
    name: 'Fortinet',
    subtitle: 'Sécurité réseau & firewall',
    tags: 'FortiGate · VPN · SD-WAN',
    icon: 'shield',
  },
  {
    id: 'sophos',
    name: 'Sophos',
    subtitle: 'Protection endpoint & cloud',
    tags: 'EDR · XDR · Intercept X',
    icon: 'lock',
  },
  {
    id: 'm365',
    name: 'Microsoft 365',
    subtitle: 'Productivité & sécurité',
    tags: 'Entra ID · Intune · Defender',
    icon: 'grid',
  },
]
