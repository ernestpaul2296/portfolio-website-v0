"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled 
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Empty space for alignment */}
            <div className="w-12" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.button>
              ))}
              
              <div className="flex items-center gap-3 ml-4">
                <motion.a
                  href="https://www.linkedin.com/in/ernest-paul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-sm hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {"Let's Talk"}
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-secondary"
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-background z-50 md:hidden border-l border-border"
            >
              <div className="p-6">
                <div className="flex justify-end items-center mb-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left px-4 py-3 rounded-xl text-foreground font-medium hover:bg-secondary transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border space-y-3">
                  <a
                    href="https://www.linkedin.com/in/ernest-paul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-[#0077B5]" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-medium">Let's Talk</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
