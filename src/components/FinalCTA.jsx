'use client'

import { MessageCircle, ArrowRight } from 'lucide-react'
import { contactInfo } from '@/data/content'

export default function FinalCTA() {
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
    <section className="py-24 bg-gradient-to-br from-[#0A1F44] to-[#102A5C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A14A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Regularize Seu Negócio Agora
          </h2>
          <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
            Não espere a fiscalização chegar. Entre em contato e garanta a regularização do seu empreendimento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-[#C9A14A] hover:bg-[#E0B85A] text-[#0A1F44] font-bold text-2xl px-12 py-10 rounded-xl shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:scale-105 border-2 border-[#E0B85A] flex items-center justify-center"
            >
              <MessageCircle className="mr-3" size={28} />
              Falar com Especialista no WhatsApp
            </button>
            
            <button 
              onClick={scrollToContact}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-bold text-2xl px-12 py-10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Solicitar Diagnóstico Técnico
              <ArrowRight className="ml-3" size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
