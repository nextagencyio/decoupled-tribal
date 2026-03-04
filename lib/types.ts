// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Department
export interface DrupalDepartment extends DrupalNode {
  phone?: string
  email?: string
  location?: string
  hours?: string
  departmentCategory?: DrupalTerm[]
}

export interface DepartmentsData {
  nodeDepartments: {
    nodes: DrupalDepartment[]
  }
}

// Council Member
export interface DrupalCouncilMember extends DrupalNode {
  position?: string
  district?: string
  termDates?: string
  email?: string
  phone?: string
  photo?: DrupalImage
}

export interface CouncilMembersData {
  nodeCouncilMembers: {
    nodes: DrupalCouncilMember[]
  }
}

// Tribal Service
export interface DrupalService extends DrupalNode {
  department?: DrupalTerm[]
  eligibility?: string
  serviceCategory?: DrupalTerm[]
  contactPhone?: string
}

export interface ServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

// Event
export interface DrupalEvent extends DrupalNode {
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  eventCategory?: DrupalTerm[]
  openToPublic?: boolean
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// News Article
export interface DrupalNews extends DrupalNode {
  category?: DrupalTerm[]
  featured?: boolean
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
