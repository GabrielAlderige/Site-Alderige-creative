"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Zap, Target } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Inovação",
    description: "Sempre à frente com as tecnologias mais recentes",
  },
  {
    icon: Target,
    title: "Resultados",
    description: "Foco em entregar valor e retorno sobre investimento",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Trabalhamos lado a lado com nossos clientes",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Qualidade superior em cada projeto entregue",
  },
]

export default function About() {
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
    <section ref={sectionRef} className="py-24 px-4 bg-[#000000] relative overflow-hidden" id="sobre">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF05_1px,transparent_1px),linear-gradient(to_bottom,#0066FF05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF] rounded-full blur-[200px] opacity-5" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] mb-6 font-[family-name:var(--font-sans)]">
              Sobre a <span className="text-[#00E5FF] glow-text">AlderigeCreative</span>
            </h2>
            <p className="text-lg text-[#FFFFFF]/70 mb-6 font-[family-name:var(--font-sans)] leading-relaxed">
              Somos uma agência especializada em transformar ideias em soluções digitais de alto impacto. Com expertise
              em desenvolvimento de software, jogos, aplicativos e marketing digital, entregamos projetos que não apenas
              impressionam visualmente, mas geram resultados mensuráveis.
            </p>
            <p className="text-lg text-[#FFFFFF]/70 mb-8 font-[family-name:var(--font-sans)] leading-relaxed">
              Fundada por <span className="text-[#0066FF] font-semibold">Gabriel Alderige</span>, nossa missão é
              capacitar empresas e empreendedores a alcançarem seu máximo potencial no ambiente digital, combinando
              criatividade, tecnologia de ponta e estratégia orientada a dados.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-[#0066FF]/20 bg-[#101010]/50 backdrop-blur-sm hover:border-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                  >
                    <Icon className="w-6 h-6 text-[#00E5FF] mb-2" />
                    <h3 className="text-sm font-bold text-[#FFFFFF] mb-1 font-[family-name:var(--font-sans)]">
                      {value.title}
                    </h3>
                    <p className="text-xs text-[#FFFFFF]/60 font-[family-name:var(--font-sans)]">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div
            className={`relative transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative aspect-square">
              {/* Geometric Shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border-2 border-[#0066FF]/20 rounded-lg animate-spin-slow" />
                <div className="absolute w-3/4 h-3/4 border-2 border-[#00E5FF]/30 rounded-lg animate-spin-reverse" />
                <div className="absolute w-1/2 h-1/2 bg-gradient-to-br from-[#0066FF] to-[#00E5FF] rounded-lg opacity-20 blur-3xl" />

                {/* Center Circle */}
                <div className="relative w-64 h-64 rounded-full border-2 border-[#0066FF] bg-[#101010]/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_50px_rgba(0,102,255,0.3)]">
                  <div className="text-center">
                    <div className="text-5xl font-extrabold text-[#00E5FF] mb-2 font-[family-name:var(--font-sans)]">
                      5+
                    </div>
                    <div className="text-sm text-[#FFFFFF]/70 font-[family-name:var(--font-sans)]">Anos de</div>
                    <div className="text-sm text-[#FFFFFF]/70 font-[family-name:var(--font-sans)]">Experiência</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 rounded-lg bg-[#0066FF]/20 border border-[#0066FF]/40 backdrop-blur-sm animate-float" />
                <div className="absolute bottom-0 right-0 w-16 h-16 rounded-lg bg-[#00E5FF]/20 border border-[#00E5FF]/40 backdrop-blur-sm animate-float animation-delay-300" />
                <div className="absolute top-1/4 right-0 w-12 h-12 rounded-full bg-[#0066FF]/30 border border-[#0066FF]/50 backdrop-blur-sm animate-float animation-delay-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
