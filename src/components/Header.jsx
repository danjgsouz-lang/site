'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { contactInfo } from '@/data/content'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Contato', href: '#contato' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1F44] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_f66a8976-6ebf-41ce-94b5-4024522eadf8/artifacts/79t1eo0r_Cart%C3%A3o%20nova%20logo%20%282%29.png" 
              alt="Sentinel Engenharia" 
              className="h-14 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-[#C9A14A] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href={`tel:${contactInfo.whatsapp}`}
              className="flex items-center space-x-2 text-white hover:text-[#C9A14A] transition-colors duration-300"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">{contactInfo.whatsappDisplay}</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-[#C9A14A] transition-colors duration-300"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#102A5C]">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-[#C9A14A] transition-colors duration-300 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
