"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send } from "lucide-react"

export default function Contact() {
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
    <section ref={sectionRef} className="py-24 px-4 bg-[#101010] relative overflow-hidden" id="contato">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF08_1px,transparent_1px),linear-gradient(to_bottom,#0066FF08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5FF] rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">
            Vamos Conversar<span className="text-[#00E5FF] glow-text">?</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto font-[family-name:var(--font-sans)]">
            Transforme sua ideia em realidade. Entre em contato e receba uma proposta personalizada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-6 font-[family-name:var(--font-sans)]">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:galbyoficial@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg border border-[#0066FF]/20 bg-[#000000]/50 backdrop-blur-sm hover:border-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center group-hover:bg-[#0066FF]/20 group-hover:border-[#00E5FF] transition-all duration-300">
                    <Mail className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#FFFFFF]/60 font-[family-name:var(--font-sans)]">Email</div>
                    <div className="text-[#FFFFFF] font-medium font-[family-name:var(--font-sans)]">
                      galbyoficial@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/5535998416972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-[#0066FF]/20 bg-[#000000]/50 backdrop-blur-sm hover:border-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center group-hover:bg-[#0066FF]/20 group-hover:border-[#00E5FF] transition-all duration-300">
                    <Phone className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#FFFFFF]/60 font-[family-name:var(--font-sans)]">WhatsApp</div>
                    <div className="text-[#FFFFFF] font-medium font-[family-name:var(--font-sans)]">
                      (35) 99841-6972
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#0066FF]/20 bg-[#000000]/50 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">
                Por que escolher a AlderigeCreative?
              </h4>
              <ul className="space-y-3">
                {[
                  "Atendimento personalizado e dedicado",
                  "Prazos cumpridos rigorosamente",
                  "Suporte técnico 24/7",
                  "Garantia de satisfação",
                  "Tecnologias de última geração",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-[#FFFFFF]/70 font-[family-name:var(--font-sans)]">
                    <span className="w-2 h-2 rounded-full bg-[#0066FF] mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <form className="space-y-6 p-8 rounded-xl border border-[#0066FF]/20 bg-[#000000]/50 backdrop-blur-sm">
              <div>
                <label className="block text-sm font-medium text-[#FFFFFF] mb-2 font-[family-name:var(--font-sans)]">
                  Nome Completo
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  className="bg-[#101010] border-[#0066FF]/30 text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 focus:border-[#00E5FF] focus:ring-[#00E5FF]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#FFFFFF] mb-2 font-[family-name:var(--font-sans)]">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-[#101010] border-[#0066FF]/30 text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 focus:border-[#00E5FF] focus:ring-[#00E5FF]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#FFFFFF] mb-2 font-[family-name:var(--font-sans)]">
                  Telefone / WhatsApp
                </label>
                <Input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="bg-[#101010] border-[#0066FF]/30 text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 focus:border-[#00E5FF] focus:ring-[#00E5FF]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#FFFFFF] mb-2 font-[family-name:var(--font-sans)]">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={5}
                  className="bg-[#101010] border-[#0066FF]/30 text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 focus:border-[#00E5FF] focus:ring-[#00E5FF]/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-[#FFFFFF] font-medium py-6 rounded-lg shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] transition-all duration-300 group"
              >
                Enviar Mensagem
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
