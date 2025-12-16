"use client"

import { Code, Gamepad2, Smartphone, Globe, TrendingUp, Megaphone } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações web modernas, responsivas e otimizadas para conversão",
    features: ["Landing Pages", "E-commerce", "Sistemas Web", "PWA"],
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e multiplataforma para iOS e Android com UX excepcional",
    features: ["iOS & Android", "React Native", "Design Intuitivo", "Performance"],
  },
  {
    icon: Gamepad2,
    title: "Desenvolvimento de Jogos",
    description: "Jogos envolventes para mobile, web e desktop com mecânicas inovadoras",
    features: ["Unity & Unreal", "Game Design", "Multiplayer", "Monetização"],
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Estratégias completas para aumentar sua presença online e gerar resultados",
    features: ["SEO & SEM", "Social Media", "Tráfego Pago", "Analytics"],
  },
  {
    icon: Megaphone,
    title: "Gestão de Redes Sociais",
    description: "Criação de conteúdo estratégico e gestão profissional das suas redes",
    features: ["Conteúdo", "Engajamento", "Campanhas", "Relatórios"],
  },
  {
    icon: Code,
    title: "Consultoria Tech",
    description: "Assessoria especializada em tecnologia e transformação digital",
    features: ["Arquitetura", "DevOps", "Cloud", "Otimização"],
  },
]

export default function Services() {
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
    <section ref={sectionRef} className="py-24 px-4 bg-[#000000] relative overflow-hidden" id="servicos">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF05_1px,transparent_1px),linear-gradient(to_bottom,#0066FF05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00E5FF] rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">
            Nossas <span className="text-[#00E5FF] glow-text">Soluções</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto font-[family-name:var(--font-sans)]">
            Serviços completos para levar seu negócio ao próximo nível digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group p-6 rounded-xl border border-[#0066FF]/20 bg-[#101010]/80 backdrop-blur-sm hover:border-[#00E5FF] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:-translate-y-2 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center mb-4 group-hover:bg-[#0066FF]/20 group-hover:border-[#00E5FF] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]">
                  <Icon className="w-6 h-6 text-[#00E5FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 font-[family-name:var(--font-sans)]">
                  {service.title}
                </h3>
                <p className="text-[#FFFFFF]/60 mb-4 font-[family-name:var(--font-sans)]">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#FFFFFF]/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
