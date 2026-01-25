"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { 
  Users, 
  Zap, 
  Layers, 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  ArrowDown,
  Sparkles,
  Code2,
  Smartphone,
  Globe,
  Database,
  Bot,
  Workflow
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { TypewriterText } from "@/components/typewriter-text"
import { ServicesCarousel } from "@/components/services-carousel"
import { FloatingDownloadButton } from "@/components/floating-download"
import { AnimatedSection, AnimatedCard } from "@/components/animated-section"
import { ExperienceCard } from "@/components/experience-card"
import { StatsCard } from "@/components/stats-card"
import { TechBadge } from "@/components/tech-badge"

const experiences = [
  {
    company: "Deriv",
    role: "Full Stack Software Engineer - AI | Flutter | React",
    period: "Jan 2024 - Present",
    location: "Dubai, UAE",
    isCurrent: true,
    description: [
      "Engineered cross-platform trading and P2P money transfer apps with Flutter/Dart, scaling to 1M+ global downloads",
      "Deployed an end-to-end P2P platform enabling 85K+ monthly transactions and $45M+ annual deposits",
      "Accelerated development cycles by 60% using AI-powered tools with up to 90% code auto-generation",
      "Shipped AI-driven personalization and automation features with Generative AI + LLM integrations"
    ],
    technologies: ["Flutter", "React", "AI/LLM"]
  },
  {
    company: "Deriv",
    role: "Full Stack Engineer | Scrum Master",
    period: "Dec 2022 - Dec 2023",
    location: "Dubai, UAE",
    description: [
      "Led a team of 6 in implementing Scrum practices and enhancing team collaboration",
      "Created the complete P2P web platform using ReactJS, TypeScript, Redux, Firebase, WebSockets",
      "Integrated DataTheorem vulnerability scanning into CI/CD pipelines for security compliance"
    ],
    technologies: ["IT Project Management", "Mobile App Development"]
  },
  {
    company: "Surfboard Payments",
    role: "Software Engineer",
    period: "Sep 2020 - Nov 2022",
    location: "Chennai, India",
    description: [
      "Developed implementation roadmaps in collaboration with clients and design teams",
      "Optimized application architecture for performance and memory management",
      "Oversaw mobile app development team from conceptualization to production release"
    ],
    technologies: ["Flutter", "Dart", "Mobile Development"]
  },
  {
    company: "Notion Press Media",
    role: "Sales Consultant",
    period: "Jun 2019 - Jun 2020",
    location: "Chennai, India",
    description: [
      "Led generation of 400 sales prospects monthly with strategic upselling techniques",
      "Established a presales team, optimized processes to increase paid sales prospects"
    ],
    technologies: ["Sales", "Presales", "Client Relations"]
  }
]

const techCategories = [
  {
    title: "Frontend",
    icon: Globe,
    technologies: ["React.js", "Flutter", "TypeScript", "Next.js"]
  },
  {
    title: "Backend",
    icon: Database,
    technologies: ["Node.js", "Express.js", "NestJS", "MongoDB"]
  },
  {
    title: "AI & Automation",
    icon: Bot,
    technologies: ["LLMs", "LangChain", "CrewAI", "n8n"]
  },
  {
    title: "DevOps & Tools",
    icon: Workflow,
    technologies: ["Firebase", "Git", "Docker", "CI/CD"]
  }
]

const additionalSkills = [
  "Redux", "WebSockets", "REST APIs", "GraphQL", "Dart", "OutSystems", 
  "Agile/Scrum", "DataTheorem", "ClickUp", "Jira"
]

export default function Portfolio() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <FloatingDownloadButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto mb-8 w-40 h-40 md:w-48 md:h-48"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse opacity-50 blur-md" />
            <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden">
              <Image
                src="/images/profile-photo.png"
                alt="Ernest Paul - Full Stack Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Open to work badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-emerald-600 font-medium text-sm">Open to collaborations & new projects</span>
          </motion.div>

          {/* Typewriter text */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mb-6 leading-tight text-foreground">
            <span className="block mb-2">
              {"Hi, I'm "}
              <TypewriterText 
                text="Ernest Paul"
                duration={2500}
              />
            </span>
            <span className="block mt-4 text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-muted-foreground">
              <TypewriterText 
                text="Full Stack Software Engineer crafting Web, Mobile & AI Solutions that scale to millions of users"
                duration={4500}
              />
            </span>
          </h1>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ernest-paul/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-secondary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono text-primary">// SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-4">
              What I Can Build For <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Your Business</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              From web and mobile apps to AI-driven solutions, I deliver end-to-end engineering for your digital products
            </p>
          </AnimatedSection>

          <AnimatedCard delay={0.2}>
            <ServicesCarousel />
          </AnimatedCard>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono text-primary">// ABOUT ME</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-8">
              Building the Future, <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">One App at a Time</span>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I help businesses grow and scale by building Web, Mobile, and AI-powered solutions. My apps have reached <span className="text-foreground font-semibold">1M+ users</span> across fintech and edtech, driving measurable outcomes and real business impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {"In today's fast-paced digital world, I combine frontend engineering, backend architecture, and applied AI to create automated, scalable, and production-ready solutions."}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4">
              <AnimatedCard delay={0.2}>
                <StatsCard icon={Users} value="1M+" label="Users reached across apps" />
              </AnimatedCard>
              <AnimatedCard delay={0.3}>
                <StatsCard icon={Zap} value="60%" label="Faster development with AI" />
              </AnimatedCard>
              <AnimatedCard delay={0.4}>
                <StatsCard icon={Layers} value="Full Stack" label="End-to-end solutions" />
              </AnimatedCard>
              <AnimatedCard delay={0.5}>
                <StatsCard icon={Brain} value="AI-First" label="LLMs & intelligent automation" />
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono text-primary">// EXPERIENCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-12">
              {"Where I've Made "}<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Impact</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <AnimatedCard key={`${exp.company}-${exp.period}`} delay={index * 0.1}>
                <ExperienceCard {...exp} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono text-primary">// TECH STACK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-12">
              Technologies I <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Master</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {techCategories.map((category, index) => (
              <AnimatedCard key={category.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-4 font-[family-name:var(--font-display)]">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} variant="gradient" />
                    ))}
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Also experienced with:</h4>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill) => (
                  <TechBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono text-primary">{"// LET'S CONNECT"}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-4">
              Ready to Build <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Something Great?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              {"I'm open to full-time roles, freelance projects, consulting, or collaborations in AI, automation, and full stack development."}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedCard delay={0.1}>
              <motion.a
                href="mailto:ernestpaul2296@gmail.com"
                whileHover={{ y: -4 }}
                className="block p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1 font-[family-name:var(--font-display)]">Email</h3>
                <p className="text-muted-foreground">ernestpaul2296@gmail.com</p>
              </motion.a>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <motion.a
                href="tel:+971528896463"
                whileHover={{ y: -4 }}
                className="block p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="font-bold mb-1 font-[family-name:var(--font-display)]">Phone</h3>
                <p className="text-muted-foreground">+971 52 889 6463</p>
              </motion.a>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <motion.a
                href="https://www.linkedin.com/in/ernest-paul/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="block p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0077B5]/10 flex items-center justify-center mb-4">
                  <Linkedin className="w-6 h-6 text-[#0077B5]" />
                </div>
                <h3 className="font-bold mb-1 font-[family-name:var(--font-display)]">LinkedIn</h3>
                <p className="text-muted-foreground">linkedin.com/in/ernest-paul</p>
              </motion.a>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <motion.div
                whileHover={{ y: -4 }}
                className="block p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-bold mb-1 font-[family-name:var(--font-display)]">Location</h3>
                <p className="text-muted-foreground">Dubai, UAE</p>
              </motion.div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              EP
            </span>
            <span className="text-muted-foreground">Full Stack Software Engineer | AI Solutions</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ernest Paul. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
