"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "O prazo varia conforme a complexidade. Um site institucional leva de 2-4 semanas, enquanto apps e sistemas mais complexos podem levar de 2-3 meses. Sempre trabalhamos com entregas incrementais para você acompanhar o progresso.",
  },
  {
    question: "Qual o investimento necessário para começar?",
    answer:
      "Cada projeto é único e personalizado. Oferecemos diferentes pacotes e condições de pagamento flexíveis. Entre em contato para receber uma proposta personalizada sem compromisso baseada nas suas necessidades específicas.",
  },
  {
    question: "Vocês oferecem suporte após o lançamento?",
    answer:
      "Sim! Todos os nossos projetos incluem suporte pós-lançamento. Oferecemos pacotes de manutenção mensal que incluem atualizações, correções, monitoramento e melhorias contínuas para garantir o sucesso do seu projeto.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "Seguimos uma metodologia ágil com 4 fases principais: Descoberta & Estratégia, Desenvolvimento & Design, Lançamento & Deploy, e Crescimento & Otimização. Você participa ativamente do processo com reuniões regulares e entregas incrementais.",
  },
  {
    question: "Posso solicitar alterações durante o desenvolvimento?",
    answer:
      "Absolutamente! Nossa metodologia ágil permite flexibilidade. Você pode solicitar ajustes durante o desenvolvimento. Revisões dentro do escopo acordado são incluídas, e alterações maiores podem ser adicionadas com ajuste no cronograma.",
  },
  {
    question: "Vocês trabalham com clientes de outras cidades/estados?",
    answer:
      "Sim! Atendemos clientes em todo o Brasil e até internacionalmente. Trabalhamos 100% remoto com ferramentas de colaboração online, mantendo a mesma qualidade e proximidade de um atendimento presencial.",
  },
  {
    question: "O que diferencia a AlderigeCreative de outras agências?",
    answer:
      "Combinamos expertise técnica avançada com visão de negócio. Não apenas desenvolvemos, mas criamos soluções que geram resultados mensuráveis. Nossa equipe é apaixonada por inovação e comprometida com o sucesso dos nossos clientes.",
  },
  {
    question: "Vocês ajudam com hospedagem e domínio?",
    answer:
      "Sim! Cuidamos de toda a infraestrutura técnica, incluindo registro de domínio, hospedagem em servidores de alta performance, configuração de e-mails profissionais e certificados SSL. Você não precisa se preocupar com nada técnico.",
  },
]

export default function FAQ() {
  const [inView, setInView] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-[#101010] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF08_1px,transparent_1px),linear-gradient(to_bottom,#0066FF08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10 max-w-4xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">
            Perguntas <span className="text-[#00E5FF] glow-text">Frequentes</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto font-[family-name:var(--font-sans)]">
            Respondemos as principais dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border border-[#0066FF]/20 bg-[#000000]/60 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:border-[#00E5FF] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#0066FF]/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-[#FFFFFF] font-[family-name:var(--font-sans)] text-balance pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#00E5FF] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-[#FFFFFF]/70 leading-relaxed font-[family-name:var(--font-sans)] text-balance">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-lg text-[#FFFFFF]/80 mb-4 font-[family-name:var(--font-sans)]">
            Ainda tem dúvidas? Estamos aqui para ajudar!
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-[#FFFFFF] rounded-lg font-bold text-lg hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  )
}
