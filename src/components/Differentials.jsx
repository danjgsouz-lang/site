'use client'

import { Target, CheckCircle, Zap, Headphones } from 'lucide-react'
import { differentials } from '@/data/content'

const iconMap = {
  'target': Target,
  'check-circle': CheckCircle,
  'zap': Zap,
  'headphones': Headphones
}

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Por Que Escolher a Sentinel Engenharia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {differentials.map((differential) => {
            const IconComponent = iconMap[differential.icon]
            return (
              <div 
                key={differential.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="bg-gradient-to-br from-[#C9A14A] to-[#E0B85A] w-24 h-24 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="text-[#0A1F44]" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-3">
                  {differential.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {differential.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
