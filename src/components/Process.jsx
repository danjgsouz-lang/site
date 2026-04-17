'use client'

import { processSteps } from '@/data/content'

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Processo Simples e Direto
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.id} className="text-center group">
                <div className="bg-gradient-to-br from-[#C9A14A] to-[#E0B85A] w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 mx-auto mb-6">
                  <span className="text-[#0A1F44] text-4xl font-bold">{step.id}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0A1F44] leading-tight">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
