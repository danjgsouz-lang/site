'use client'

import { Phone } from 'lucide-react'
import { contactInfo, engineer } from '@/data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0A1F44] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_f66a8976-6ebf-41ce-94b5-4024522eadf8/artifacts/79t1eo0r_Cart%C3%A3o%20nova%20logo%20%282%29.png" 
              alt="Sentinel Engenharia" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed max-w-md mb-6">
              Projetos, laudos e consultoria em engenharia com foco em aprovação e conformidade regulatória. Regularize seu empreendimento com agilidade e eficiência.
            </p>
            <div className="space-y-2">
              <p className="text-[#C9A14A] font-semibold">{engineer.name}</p>
              <p className="text-gray-400 text-sm">{engineer.crea}</p>
            </div>
          </div>

          <div>
            <h3 className="text-[#C9A14A] font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#hero')}
                  className="text-gray-300 hover:text-[#C9A14A] transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#servicos')}
                  className="text-gray-300 hover:text-[#C9A14A] transition-colors duration-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#diferenciais')}
                  className="text-gray-300 hover:text-[#C9A14A] transition-colors duration-300"
                >
                  Diferenciais
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#processo')}
                  className="text-gray-300 hover:text-[#C9A14A] transition-colors duration-300"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contato')}
                  className="text-gray-300 hover:text-[#C9A14A] transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#C9A14A] font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-4">
              <a 
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#C9A14A] transition-colors duration-300 group"
              >
                <Phone size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>{contactInfo.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sentinel Engenharia. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Grande Natal/RN | Conformidade Regulatória
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
