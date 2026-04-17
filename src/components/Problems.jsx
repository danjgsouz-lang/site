'use client'

import { AlertTriangle, FileX, AlertOctagon, XCircle, MessageCircle } from 'lucide-react'
import { problems, contactInfo } from '@/data/content'

const iconMap = {
  'alert-triangle': AlertTriangle,
  'file-x': FileX,
  'alert-octagon': AlertOctagon,
  'x-circle': XCircle
}

export default function Problems() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0A1F44] mb-8">
            Seu Negócio Pode Ser Interditado a Qualquer Momento
          </h2>
          <p className="text-2xl text-gray-700 font-bold mb-6">
            Empresas sem regularização estão sujeitas a:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {problems.map((problem) => {
            const IconComponent = iconMap[problem.icon]
            return (
              <div 
                key={problem.id}
                className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-400 hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="bg-red-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A1F44] text-center">
                  {problem.title}
                </h3>
              </div>
            )
          })}
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-r-2xl">
            <p className="text-2xl font-bold text-red-900 text-center">
              "A fiscalização não avisa. E quando chega, o prejuízo é imediato."
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0A1F44] to-[#102A5C] rounded-3xl p-12 text-center shadow-2xl border-4 border-[#C9A14A]">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A Sentinel Engenharia atua para garantir que seu negócio esteja 100% regularizado e apto a operar.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a 
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#C9A14A] hover:bg-[#E0B85A] text-[#0A1F44] font-bold text-xl px-12 py-8 rounded-xl shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:scale-105 border-2 border-[#E0B85A] w-full sm:w-auto flex items-center justify-center">
                  <MessageCircle className="mr-3" size={24} />
                  Falar com Especialista Agora
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
