"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, ArrowRight } from "lucide-react"

export default function CTABanner() {
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/10 via-[#00E5FF]/10 to-[#0066FF]/10" />

      <div className="container mx-auto relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center p-12 rounded-2xl border border-[#0066FF]/30 bg-gradient-to-br from-[#0066FF]/5 to-[#00E5FF]/5 backdrop-blur-sm shadow-[0_0_50px_rgba(0,102,255,0.2)] transition-all duration-700 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00E5FF] mb-6 shadow-[0_0_40px_rgba(0,229,255,0.4)]">
            <Rocket className="w-10 h-10 text-[#FFFFFF]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">
            Pronto para <span className="text-[#00E5FF] glow-text">Decolar</span>?
          </h2>

          <p className="text-xl text-[#FFFFFF]/70 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-sans)] leading-relaxed">
            Transforme sua visão em realidade digital. Receba uma consultoria gratuita e descubra como podemos acelerar
            seu crescimento online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-[#FFFFFF] font-bold px-8 py-6 text-lg rounded-lg shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] transition-all duration-300 hover:scale-105 group"
            >
              Agendar Consultoria Grátis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#0066FF] text-[#FFFFFF] hover:bg-[#0066FF]/10 px-8 py-6 text-lg rounded-lg backdrop-blur-sm font-medium bg-transparent"
            >
              Ver Cases de Sucesso
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#FFFFFF]/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              <span className="font-[family-name:var(--font-sans)]">Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              <span className="font-[family-name:var(--font-sans)]">Resposta em 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              <span className="font-[family-name:var(--font-sans)]">Proposta personalizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
