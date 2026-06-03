export interface Service {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
  icon: string
}

export interface ExpertiseItem {
  id: string
  name: string
  subtitle: string
  tags: string
  icon: string
}

export interface StatItem {
  value: string
  label: string
  icon: string
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  role: string
  establishment: string
  email: string
  phone: string
  rooms: string
  needs: string[]
  message: string
  rgpd: boolean
}
