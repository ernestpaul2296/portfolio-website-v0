"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Smartphone, Brain, Zap, Rocket, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Full-stack web apps with React, Next.js, and Node.js that scale with your business",
    tags: ["React.js", "Next.js", "Node.js", "TypeScript", "JavaScript", "Express.js", "NestJS", "MongoDB"],
    gradient: "from-blue-500 to-cyan-500",
    showTags: true
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications with Flutter reaching millions of users",
    tags: ["Flutter", "Dart", "iOS/Android"],
    gradient: "from-emerald-500 to-teal-500",
    showTags: true
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent chatbots, AI assistants, and LLM-powered automation systems",
    tags: ["LLMs", "Generative AI", "Agentic AI", "LangChain", "LangGraph", "RAG"],
    gradient: "from-pink-500 to-rose-500",
    showTags: true
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamlined workflows and automated processes using AI and low-code tools",
    tags: ["n8n", "CrewAI", "LangChain", "MCP"],
    gradient: "from-amber-500 to-orange-500",
    showTags: true
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Rapid prototyping and proof-of-concept development for startups",
    tags: ["React", "Next.js", "Flutter", "Python", "JavaScript"],
    gradient: "from-indigo-500 to-purple-500",
    showTags: true
  }
]

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Progress bar */}
      <div className="flex gap-2 mb-6 justify-center">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              index === currentIndex 
                ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-500" 
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-0 right-0 text-sm text-muted-foreground font-mono">
        <span className="text-foreground font-semibold">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        <span>{String(services.length).padStart(2, '0')}</span>
      </div>

      {/* Carousel */}
      <div className="relative min-h-[320px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={cn(
                "w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br",
                services[currentIndex].gradient
              )}>
                {(() => {
                  const IconComponent = services[currentIndex].icon
                  return <IconComponent className="w-8 h-8 text-white" />
                })()}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-display)]">
                {services[currentIndex].title}
              </h3>
              
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {services[currentIndex].description}
              </p>
              
              {services[currentIndex].showTags && (
                <div className="flex flex-wrap gap-2">
                  {services[currentIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
