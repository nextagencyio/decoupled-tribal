// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeCouncilMember {
  id: string;
  body: { value: string; summary?: string };
  district: string;
  email: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  termDates: string;
  title: string;
}

export interface NodeDepartment {
  id: string;
  body: { value: string; summary?: string };
  departmentCategory: any[];
  email: string;
  hours: string;
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  phone: string;
  title: string;
}

export interface NodeEvent {
  id: string;
  body: { value: string; summary?: string };
  endDate: { time: string };
  eventCategory: any[];
  eventDate: { time: string };
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  openToPublic: boolean;
  path: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeNews {
  id: string;
  body: { value: string; summary?: string };
  category: any[];
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeService {
  id: string;
  body: { value: string; summary?: string };
  contactPhone: string;
  department: any[];
  eligibility: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  serviceCategory: any[];
  title: string;
}
