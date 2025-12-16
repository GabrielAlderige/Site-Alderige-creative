"use client"

import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#0066FF]/20 py-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF05_1px,transparent_1px),linear-gradient(to_bottom,#0066FF05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00E5FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,102,255,0.3)]">
                <span className="text-[#FFFFFF] font-extrabold text-xl">A</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#FFFFFF] font-[family-name:var(--font-sans)]">
                Alderige<span className="text-[#00E5FF]">Creative</span>
              </h3>
            </div>
            <p className="text-[#FFFFFF]/60 text-sm font-[family-name:var(--font-sans)] leading-relaxed mb-6 max-w-md">
              Transformando ideias em soluções digitais de alto impacto. Especialistas em marketing, desenvolvimento e
              inovação tecnológica.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center hover:bg-[#0066FF]/20 hover:border-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-[#00E5FF] group-hover:scale-110 transition-transform" />
                  </a>
                )
              })}
            </div>
            {/* </CHANGE> */}
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: "Início", href: "#" },
                { name: "Serviços", href: "#servicos" },
                { name: "Portfólio", href: "#portfolio" },
                { name: "Sobre", href: "#sobre" },
                { name: "Contato", href: "#contato" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#FFFFFF]/60 hover:text-[#00E5FF] transition-colors text-sm font-[family-name:var(--font-sans)] hover:translate-x-1 inline-block transition-transform"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-[#FFFFFF] mb-4 font-[family-name:var(--font-sans)]">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:galbyoficial@gmail.com"
                  className="flex items-start gap-2 text-[#FFFFFF]/60 hover:text-[#00E5FF] transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-[family-name:var(--font-sans)]">galbyoficial@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5535998416972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[#FFFFFF]/60 hover:text-[#00E5FF] transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-[family-name:var(--font-sans)]">(35) 99841-6972</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#FFFFFF]/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-[family-name:var(--font-sans)]">Brasil</span>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-[#0066FF]/20">
              <p className="text-xs text-[#FFFFFF]/50 font-[family-name:var(--font-sans)]">
                Fundador: Gabriel Alderige
              </p>
            </div>
            {/* </CHANGE> */}
          </div>
        </div>

        <div className="border-t border-[#0066FF]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#FFFFFF]/50 text-sm font-[family-name:var(--font-sans)] text-center md:text-left">
              © {new Date().getFullYear()} AlderigeCreative. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-xs text-[#FFFFFF]/50">
              <a href="#" className="hover:text-[#00E5FF] transition-colors font-[family-name:var(--font-sans)]">
                Política de Privacidade
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[#00E5FF] transition-colors font-[family-name:var(--font-sans)]">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
        {/* </CHANGE> */}
      </div>
    </footer>
  )
}
