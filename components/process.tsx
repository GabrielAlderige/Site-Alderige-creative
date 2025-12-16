"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Code2, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Descoberta & Estratégia",
    description:
      "Análise profunda do seu negócio, público-alvo e objetivos. Criamos uma estratégia personalizada para o sucesso.",
    duration: "1-2 semanas",
  },
  {
    icon: Code2,
    title: "Desenvolvimento & Design",
    description:
      "Criação do projeto com metodologia ágil, entregas incrementais e feedback constante durante todo o processo.",
    duration: "4-8 semanas",
  },
  {
    icon: Rocket,
    title: "Lançamento & Deploy",
    description:
      "Testes rigorosos, otimizações de performance e lançamento estratégico com monitoramento em tempo real.",
    duration: "1 semana",
  },
  {
    icon: LineChart,
    title: "Crescimento & Otimização",
    description:
      "Análise de métricas, A/B testing, melhorias contínuas e suporte dedicado para escalar seus resultados.",
    duration: "Contínuo",
  },
]

export default function Process() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-[#000000] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00E5FF05_1px,transparent_1px),linear-gradient(to_bottom,#00E5FF05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF] rounded-full blur-[200px] opacity-5" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">
            Nosso <span className="text-[#00E5FF] glow-text">Processo</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto font-[family-name:var(--font-sans)]">
            Metodologia comprovada para transformar sua visão em realidade
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066FF]/20 via-[#00E5FF]/40 to-[#0066FF]/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00E5FF] flex items-center justify-center shadow-[0_0_40px_rgba(0,102,255,0.4)]">
                        <Icon className="w-10 h-10 text-[#FFFFFF]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#000000] border-2 border-[#00E5FF] flex items-center justify-center text-sm font-bold text-[#00E5FF]">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 font-[family-name:var(--font-sans)]">
                      {step.title}
                    </h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/30 text-xs text-[#00E5FF] mb-3">
                      {step.duration}
                    </div>
                    <p className="text-[#FFFFFF]/60 text-sm leading-relaxed font-[family-name:var(--font-sans)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-lg text-[#FFFFFF]/80 mb-4 font-[family-name:var(--font-sans)]">
            Pronto para começar sua jornada digital?
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-[#FFFFFF] rounded-lg font-bold text-lg hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
    </section>
  )
}
