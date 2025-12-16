"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Início", href: "#" },
  { name: "Serviços", href: "#servicos" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#000000]/95 backdrop-blur-xl border-b border-[#0066FF]/20 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00E5FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,102,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300">
              <span className="text-[#FFFFFF] font-extrabold text-xl">A</span>
            </div>
            <span className="text-[#FFFFFF] font-extrabold text-xl font-[family-name:var(--font-sans)]">
              Alderige<span className="text-[#00E5FF]">Creative</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#FFFFFF]/80 hover:text-[#00E5FF] font-medium transition-colors duration-300 font-[family-name:var(--font-sans)]"
              >
                {item.name}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-[#FFFFFF] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300"
            >
              Iniciar Projeto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#FFFFFF] p-2 hover:bg-[#0066FF]/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#0066FF]/20">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#FFFFFF]/80 hover:text-[#00E5FF] font-medium transition-colors duration-300 py-2 font-[family-name:var(--font-sans)]"
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-[#FFFFFF] mt-2">
                Iniciar Projeto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
