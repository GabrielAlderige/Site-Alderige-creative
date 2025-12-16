"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Award, Zap } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "150+",
    label: "Clientes Atendidos",
    description: "Empresas confiaram em nossas soluções",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "ROI Médio",
    description: "Retorno sobre investimento comprovado",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfação",
    description: "Taxa de aprovação dos clientes",
  },
  {
    icon: Zap,
    value: "24h",
    label: "Resposta",
    description: "Tempo médio de atendimento",
  },
]

export default function StatsBanner() {
  const [inView, setInView] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const interval = duration / steps

    stats.forEach((stat, index) => {
      const targetValue = Number.parseInt(stat.value)
      if (isNaN(targetValue)) return

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        const currentValue = Math.floor(targetValue * progress)

        setCounts((prevCounts) => {
          const newCounts = [...prevCounts]
          newCounts[index] = currentValue
          return newCounts
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, interval)
    })
  }, [inView])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#101010] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0066FF]/5 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF08_1px,transparent_1px),linear-gradient(to_bottom,#0066FF08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const isPercentage = stat.value.includes("%")
            const isTime = stat.value.includes("h")
            const displayValue = isPercentage
              ? `${counts[index]}%`
              : isTime
                ? stat.value
                : stat.value.includes("+")
                  ? `${counts[index]}+`
                  : counts[index]

            return (
              <div
                key={index}
                className={`text-center p-6 rounded-xl border border-[#0066FF]/20 bg-[#000000]/60 backdrop-blur-sm hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-500 group ${
                  inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 mb-4 group-hover:bg-[#0066FF]/20 group-hover:border-[#00E5FF] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]">
                  <Icon className="w-7 h-7 text-[#00E5FF] group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-4xl font-extrabold text-[#00E5FF] mb-2 glow-text font-[family-name:var(--font-sans)]">
                  {displayValue}
                </div>
                <div className="text-sm font-bold text-[#FFFFFF] mb-1 font-[family-name:var(--font-sans)]">
                  {stat.label}
                </div>
                <div className="text-xs text-[#FFFFFF]/50 font-[family-name:var(--font-sans)]">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
