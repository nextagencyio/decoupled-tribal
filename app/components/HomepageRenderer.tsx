'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Landmark, Users, HandHeart } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const highlights = [
  { icon: Landmark, title: 'Sovereign Governance', description: 'Dedicated departments and council leadership serving the community.' },
  { icon: Users, title: 'Community Programs', description: 'Education, health, and family support rooted in shared responsibility.' },
  { icon: HandHeart, title: 'Cultural Preservation', description: 'Language, traditions, and heritage carried forward for future generations.' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>
      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">Serving the Nation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Honoring heritage while building a strong and prosperous future.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="font-display text-xl text-primary-900 font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <footer className="bg-primary-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-display font-bold text-accent-400 mb-4">Clearwater Band of Ojibwe</h3>
              <p className="text-gray-400 mb-4">Honoring our heritage and building a prosperous future for our community.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/departments" className="hover:text-accent-400 transition-colors">Departments</Link></li>
                <li><Link href="/council" className="hover:text-accent-400 transition-colors">Council Members</Link></li>
                <li><Link href="/services" className="hover:text-accent-400 transition-colors">Services</Link></li>
                <li><Link href="/events" className="hover:text-accent-400 transition-colors">Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>100 Main Street</li>
                <li>Clearwater, MN 56634</li>
                <li>info@clearwaterojibwe.gov</li>
                <li>(218) 555-3100</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-900 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Clearwater Band of Ojibwe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
