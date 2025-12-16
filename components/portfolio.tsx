"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Premium",
    category: "Desenvolvimento Web",
    description: "Plataforma completa de vendas com gestão avançada",
    image: "/modern-ecommerce-dark.png",
    tags: ["Next.js", "Stripe", "TailwindCSS"],
  },
  {
    title: "App Fitness Pro",
    category: "Mobile App",
    description: "Aplicativo de treinos personalizados com IA",
    image: "/fitness-app-interface-dark-modern.jpg",
    tags: ["React Native", "AI", "Firebase"],
  },
  {
    title: "Game Aventura RPG",
    category: "Desenvolvimento de Jogos",
    description: "Jogo mobile com mecânicas inovadoras",
    image: "/mobile-rpg-game-interface.jpg",
    tags: ["Unity", "C#", "Multiplayer"],
  },
  {
    title: "Dashboard Analytics",
    category: "Sistema Web",
    description: "Painel de análise de dados em tempo real",
    image: "/analytics-dashboard-dark-modern.jpg",
    tags: ["React", "D3.js", "Node.js"],
  },
  {
    title: "Campanha Digital 360°",
    category: "Marketing Digital",
    description: "Estratégia completa com 300% ROI",
    image: "/digital-marketing-campaign-graphics.jpg",
    tags: ["Meta Ads", "Google Ads", "SEO"],
  },
  {
    title: "App Delivery Express",
    category: "Mobile App",
    description: "Sistema de entregas com rastreamento em tempo real",
    image: "/delivery-app-interface-map.jpg",
    tags: ["Flutter", "Maps API", "Real-time"],
  },
]

export default function Portfolio() {
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
    <section ref={sectionRef} className="py-24 px-4 bg-[#101010] relative overflow-hidden" id="portfolio">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF08_1px,transparent_1px),linear-gradient(to_bottom,#0066FF08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">
            Projetos <span className="text-[#00E5FF] glow-text">Realizados</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto font-[family-name:var(--font-sans)]">
            Casos de sucesso que transformaram negócios e geraram resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden border border-[#0066FF]/20 bg-[#000000]/80 backdrop-blur-sm hover:border-[#00E5FF] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-60" />
                <div className="absolute top-3 right-3">
                  <Button
                    size="icon"
                    className="w-8 h-8 rounded-full bg-[#0066FF]/80 hover:bg-[#0066FF] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-[#00E5FF] font-medium mb-2 font-[family-name:var(--font-sans)]">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 font-[family-name:var(--font-sans)]">
                  {project.title}
                </h3>
                <p className="text-[#FFFFFF]/60 text-sm mb-4 font-[family-name:var(--font-sans)]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#0066FF] text-[#FFFFFF] hover:bg-[#0066FF]/10 px-8 py-6 text-lg rounded-lg backdrop-blur-sm font-medium bg-transparent"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  )
}
