"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    company: "TechStart Inovações",
    role: "CEO",
    text: "A AlderigeCreative transformou completamente nossa presença digital. O app desenvolvido aumentou nossas vendas em 250% nos primeiros 3 meses.",
    rating: 5,
    image: "/professional-man.jpg",
  },
  {
    name: "Ana Paula Silva",
    company: "FashionHub",
    role: "Diretora de Marketing",
    text: "Profissionalismo excepcional! A equipe entregou um e-commerce impecável e as estratégias de marketing digital geraram um ROI de 400%.",
    rating: 5,
    image: "/professional-woman-diverse.png",
  },
  {
    name: "Roberto Oliveira",
    company: "GameStudio BR",
    role: "Fundador",
    text: "O jogo mobile que desenvolveram superou todas as expectativas. Mais de 100 mil downloads em 2 meses e avaliação 4.8 nas lojas.",
    rating: 5,
    image: "/game-developer.png",
  },
  {
    name: "Mariana Costa",
    company: "BeautyPro",
    role: "Proprietária",
    text: "A gestão de redes sociais deles é simplesmente incrível. Crescimento de 500% no Instagram e engajamento nunca visto antes.",
    rating: 5,
    image: "/beauty-entrepreneur.jpg",
  },
  {
    name: "Felipe Santos",
    company: "FitLife Academia",
    role: "Diretor",
    text: "Sistema completo de gestão + app para alunos. Reduziu nossos custos em 40% e melhorou muito a experiência dos clientes.",
    rating: 5,
    image: "/fitness-professional.jpg",
  },
  {
    name: "Juliana Pereira",
    company: "EduTech Solutions",
    role: "CTO",
    text: "Consultoria técnica de altíssimo nível. Arquitetura sólida, código limpo e uma equipe que realmente entende de tecnologia.",
    rating: 5,
    image: "/tech-woman.png",
  },
]

export default function Testimonials() {
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
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00E5FF] rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">
            Clientes <span className="text-[#00E5FF] glow-text">Satisfeitos</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto font-[family-name:var(--font-sans)]">
            Veja o que nossos clientes dizem sobre trabalhar conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl border border-[#0066FF]/20 bg-[#101010]/80 backdrop-blur-sm hover:border-[#00E5FF] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-[#0066FF]/30" />
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00E5FF] text-[#00E5FF]" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[#FFFFFF]/70 mb-6 leading-relaxed font-[family-name:var(--font-sans)] text-balance">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#0066FF]/20">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-[#0066FF]/30"
                />
                <div>
                  <div className="text-[#FFFFFF] font-bold font-[family-name:var(--font-sans)]">{testimonial.name}</div>
                  <div className="text-sm text-[#FFFFFF]/50 font-[family-name:var(--font-sans)]">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div
          className={`mt-16 flex flex-wrap justify-center items-center gap-8 transition-all duration-700 delay-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            { label: "98%", sublabel: "Taxa de Satisfação" },
            { label: "150+", sublabel: "Projetos Entregues" },
            { label: "4.9/5", sublabel: "Avaliação Média" },
            { label: "100%", sublabel: "Clientes Recorrentes" },
          ].map((badge, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-extrabold text-[#00E5FF] glow-text font-[family-name:var(--font-sans)]">
                {badge.label}
              </div>
              <div className="text-sm text-[#FFFFFF]/60 font-[family-name:var(--font-sans)]">{badge.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
