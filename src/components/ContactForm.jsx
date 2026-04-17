'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { contactInfo } from '@/data/content'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio (em produção, integrar com API)
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: ''
      })
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
              Solicite Seu Diagnóstico Técnico
            </h2>
            <p className="text-xl text-gray-600">
              Resposta em até 24 horas. Sem compromisso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    Telefone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(84) 99999-9999"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Qual sua necessidade? (AVCB, NR, laudo técnico, etc.)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C9A14A] hover:bg-[#E0B85A] text-[#0A1F44] font-bold text-xl py-8 rounded-xl shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:scale-105 border-2 border-[#E0B85A] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Diagnóstico Técnico'}
                  <Send className="ml-3" size={24} />
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="text-green-700">Diagnóstico técnico solicitado com sucesso! Entraremos em contato em até 24 horas.</p>
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#0A1F44] to-[#102A5C] p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Contato Direto</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-[#C9A14A] font-semibold mb-2">WhatsApp</p>
                    <a 
                      href={contactInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl hover:text-[#C9A14A] transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>{contactInfo.whatsappDisplay}</span>
                    </a>
                    <p className="text-sm text-gray-300 mt-2">Resposta rápida garantida</p>
                  </div>

                  <div>
                    <p className="text-[#C9A14A] font-semibold mb-2">E-mail</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg hover:text-[#C9A14A] transition-colors duration-300 break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-[#C9A14A] font-semibold mb-2">Instagram</p>
                    <a 
                      href={contactInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-[#C9A14A] transition-colors duration-300"
                    >
                      {contactInfo.instagram}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#C9A14A]">
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-6">
                  O Que Acontece Depois?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-[#C9A14A] flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-700 text-lg">Resposta em até 24 horas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-[#C9A14A] flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-700 text-lg">Diagnóstico claro da sua situação</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-[#C9A14A] flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-700 text-lg">Orçamento detalhado e prazo real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
