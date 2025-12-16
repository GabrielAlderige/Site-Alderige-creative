"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF0A_1px,transparent_1px),linear-gradient(to_bottom,#0066FF0A_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Animated Gradient Orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 transition-all duration-300 ease-out pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, #0066FF 50%, transparent 70%)",
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0066FF] bg-[#0066FF]/10 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span className="text-[#00E5FF] text-sm font-medium font-[family-name:var(--font-sans)]">
              Transformando ideias em realidade digital
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-sans)] font-extrabold text-[#FFFFFF] mb-6 animate-fade-in-up animation-delay-100 text-balance">
          Alderige<span className="text-[#00E5FF] glow-text">Creative</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#FFFFFF]/70 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-[family-name:var(--font-sans)] text-pretty">
          Agência especializada em <span className="text-[#0066FF] font-semibold">marketing digital</span>,
          desenvolvimento de <span className="text-[#00E5FF] font-semibold">jogos, apps e sites</span> que convertem
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
          <a href="#contato">
            <Button
              size="lg"
              className="bg-[#0066FF] hover:bg-[#0052CC] text-[#FFFFFF] font-medium px-8 py-6 text-lg rounded-lg shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] transition-all duration-300 group"
            >
              Iniciar Projeto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#portfolio">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#0066FF] text-[#FFFFFF] hover:bg-[#0066FF]/10 px-8 py-6 text-lg rounded-lg backdrop-blur-sm font-medium bg-transparent"
            >
              Ver Portfólio
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
          {[
            { value: "50+", label: "Projetos Entregues" },
            { value: "98%", label: "Clientes Satisfeitos" },
            { value: "5+", label: "Anos de Experiência" },
            { value: "24/7", label: "Suporte Dedicado" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-[#0066FF]/20 bg-[#101010]/50 backdrop-blur-sm hover:border-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#00E5FF] mb-2 font-[family-name:var(--font-sans)]">
                {stat.value}
              </div>
              <div className="text-sm text-[#FFFFFF]/60 font-[family-name:var(--font-sans)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#0066FF] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#00E5FF] rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
