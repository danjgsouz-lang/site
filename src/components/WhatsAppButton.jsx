'use client'

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { contactInfo } from '@/data/content'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleClick = () => {
    window.open(contactInfo.whatsappLink, '_blank')
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full p-5 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:scale-110 transition-transform duration-300" />
        
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#0A1F44] text-white px-5 py-3 rounded-xl text-base font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Fale conosco agora!
        </span>

        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
      </button>

      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#25D366] to-[#20BD5C] p-4 shadow-2xl lg:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageCircle className="text-white" size={28} />
              <div className="text-white">
                <p className="font-bold text-base">Precisa regularizar?</p>
                <p className="text-sm">Fale agora no WhatsApp</p>
              </div>
            </div>
            <button
              onClick={handleClick}
              className="bg-white text-[#25D366] px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Abrir
            </button>
          </div>
        </div>
      )}
    </>
  )
}
