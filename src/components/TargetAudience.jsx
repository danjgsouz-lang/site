'use client'

import { Factory, Wrench, School, Home, Building2 } from 'lucide-react'
import { targetAudience } from '@/data/content'

const iconMap = {
  1: Factory,
  2: Wrench,
  3: School,
  4: Home,
  5: Building2
}

export default function TargetAudience() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Quem Atendemos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {targetAudience.map((audience) => {
            const IconComponent = iconMap[audience.id]
            return (
              <div 
                key={audience.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#C9A14A] text-center group"
              >
                <div className="bg-gradient-to-br from-[#0A1F44] to-[#102A5C] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="text-[#C9A14A]" size={36} />
                </div>
                <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {audience.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
