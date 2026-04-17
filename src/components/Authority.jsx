'use client'

import { CheckCircle, MessageCircle } from 'lucide-react'
import { engineer, contactInfo, authorityCredentials } from '@/data/content'

export default function Authority() {
  const handleWhatsAppClick = () => {
    window.open(contactInfo.whatsappLink, '_blank')
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <div className="relative max-w-md mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_regularize-agora-1/artifacts/5qnz0l7z_Gemini_Generated_Image_g2ije3g2ije3g2ij.png" 
                    alt="Eng. Danilo J. Gomes de Souza - Engenheiro Responsável"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8 order-2 md:order-2">
              <div>
                <p className="text-[#C9A14A] font-bold text-xl mb-2">Responsável Técnico</p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
                  {engineer.name}
                </h2>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border-l-4 border-[#C9A14A] shadow-lg">
                <p className="text-xl font-bold text-[#0A1F44] mb-2">
                  {engineer.credential}
                </p>
                <p className="text-lg text-gray-700 font-semibold mb-4">
                  {engineer.crea}
                </p>
                <p className="text-2xl font-bold text-[#C9A14A]">
                  {engineer.title}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {engineer.bio}
                </p>
              </div>

              <div className="space-y-4">
                {authorityCredentials.map((credential, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="text-[#C9A14A] flex-shrink-0 mt-1" size={28} />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {credential}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#0A1F44] p-8 rounded-2xl">
                <blockquote className="text-white text-xl italic leading-relaxed">
                  "A regularização não deve ser burocrática. Deve ser feita corretamente para garantir operação, segurança e aprovação."
                </blockquote>
              </div>

              <div>
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-[#C9A14A] hover:bg-[#E0B85A] text-[#0A1F44] font-bold text-xl px-10 py-8 rounded-xl shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:scale-105 border-2 border-[#E0B85A] w-full md:w-auto flex items-center justify-center"
                >
                  <MessageCircle className="mr-3" size={24} />
                  Falar com Engenheiro Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
