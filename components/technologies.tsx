"use client"

import { useEffect, useRef, useState } from "react"

const techCategories = [
  {
    category: "Frontend",
    techs: [
      { name: "React", logo: "⚛️" },
      { name: "Next.js", logo: "▲" },
      { name: "Vue.js", logo: "💚" },
      { name: "TailwindCSS", logo: "🎨" },
    ],
  },
  {
    category: "Mobile",
    techs: [
      { name: "React Native", logo: "📱" },
      { name: "Flutter", logo: "🦋" },
      { name: "Swift", logo: "🍎" },
      { name: "Kotlin", logo: "🤖" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", logo: "🟢" },
      { name: "Python", logo: "🐍" },
      { name: "PostgreSQL", logo: "🐘" },
      { name: "MongoDB", logo: "🍃" },
    ],
  },
  {
    category: "Games",
    techs: [
      { name: "Unity", logo: "🎮" },
      { name: "Unreal", logo: "🎯" },
      { name: "Godot", logo: "🤖" },
      { name: "Blender", logo: "🎨" },
    ],
  },
  {
    category: "Cloud & DevOps",
    techs: [
      { name: "AWS", logo: "☁️" },
      { name: "Vercel", logo: "▲" },
      { name: "Docker", logo: "🐳" },
      { name: "GitHub", logo: "🔧" },
    ],
  },
  {
    category: "Marketing",
    techs: [
      { name: "Google Ads", logo: "🎯" },
      { name: "Meta Ads", logo: "📱" },
      { name: "Analytics", logo: "📊" },
      { name: "SEO", logo: "🔍" },
    ],
  },
]

export default function Technologies() {
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
    <section ref={sectionRef} className="py-24 px-4 bg-[#101010] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF08_1px,transparent_1px),linear-gradient(to_bottom,#0066FF08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">
            Tecnologias <span className="text-[#00E5FF] glow-text">Avançadas</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto font-[family-name:var(--font-sans)]">
            Stack moderna e ferramentas de ponta para entregar resultados excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border border-[#0066FF]/20 bg-[#000000]/60 backdrop-blur-sm transition-all duration-700 hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-[#00E5FF] mb-4 font-[family-name:var(--font-sans)]">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.techs.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-lg bg-[#0066FF]/5 border border-[#0066FF]/20 hover:bg-[#0066FF]/10 hover:border-[#0066FF]/40 transition-all duration-300 group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {tech.logo}
                    </span>
                    <span className="text-sm text-[#FFFFFF]/70 font-medium font-[family-name:var(--font-sans)]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Tecnologias" },
            { value: "100%", label: "Código Limpo" },
            { value: "24/7", label: "Suporte" },
            { value: "∞", label: "Atualizações" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl border border-[#0066FF]/20 bg-[#000000]/40 backdrop-blur-sm transition-all duration-700 ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-4xl font-extrabold text-[#00E5FF] mb-2 glow-text font-[family-name:var(--font-sans)]">
                {stat.value}
              </div>
              <div className="text-sm text-[#FFFFFF]/60 font-[family-name:var(--font-sans)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
