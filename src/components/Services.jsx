'use client'

import { Flame, ClipboardCheck, Settings, Droplet, AirVent, Baby, Truck, Wrench, ShieldAlert, ChefHat } from 'lucide-react'
import { services } from '@/data/content'

const iconMap = {
  'flame': Flame,
  'clipboard-check': ClipboardCheck,
  'settings': Settings,
  'droplet': Droplet,
  'air-vent': AirVent,
  'baby': Baby,
  'truck': Truck,
  'wrench': Wrench,
  'shield-alert': ShieldAlert,
  'chef-hat': ChefHat,
}

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Serviços de Engenharia e Conformidade Regulatória
          </h2>
          <p className="text-xl text-gray-600">
            Soluções completas para regularização e conformidade em Natal, Parnamirim e Grande Natal/RN
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon]
            return (
              <div
                key={service.id}
                id={service.anchor}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#C9A14A] group"
              >
                <div className="bg-gradient-to-br from-[#0A1F44] to-[#102A5C] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {IconComponent && <IconComponent className="text-[#C9A14A]" size={36} />}
                </div>
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 font-semibold">
            Atendemos toda a região metropolitana de Natal/RN com agilidade e suporte técnico completo.
          </p>
        </div>
      </div>
    </section>
  )
}
