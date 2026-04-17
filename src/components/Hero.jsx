'use client'

import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'
import { heroStats, contactInfo } from '@/data/content'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsAppClick = () => {
    window.open(contactInfo.whatsappLink, '_blank')
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#0A1F44] via-[#102A5C] to-[#0A1F44]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A14A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Regularize seu negócio{' '}
                <span className="text-[#C9A14A]">antes que a fiscalização chegue</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
                Evite multas, interdições e prejuízos. A Sentinel Engenharia resolve a regularização e aprovação do seu empreendimento com agilidade e suporte técnico completo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-[#C9A14A] hover:bg-[#E0B85A] text-[#0A1F44] font-bold text-xl px-10 py-8 rounded-xl shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:scale-105 border-2 border-[#E0B85A] flex items-center justify-center"
              >
                <MessageCircle className="mr-3" size={24} />
                Falar com Especialista Agora
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-bold text-xl px-8 py-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Solicitar Diagnóstico Técnico
                <ArrowRight className="ml-3" size={24} />
              </button>
            </div>

            <div className="space-y-3 pt-4">
              {heroStats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-[#C9A14A] flex-shrink-0" size={24} />
                  <span className="text-lg font-medium text-gray-300">✔ {stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg" 
                alt="Engenheiro de Segurança em Inspeção"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/60 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C9A14A] p-3 rounded-lg">
                  <CheckCircle className="text-[#0A1F44]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1F44] text-lg">Suporte Completo até a Aprovação</h3>
                  <p className="text-gray-600 text-sm mt-1">Acompanhamento técnico em todas as etapas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
