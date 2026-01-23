"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { TechBadge } from "./tech-badge"

interface ExperienceCardProps {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  technologies?: string[]
  isCurrent?: boolean
  className?: string
}

export function ExperienceCard({
  company,
  role,
  period,
  location,
  description,
  technologies,
  isCurrent,
  className
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "relative p-6 rounded-2xl border border-border bg-card",
        "hover:shadow-lg hover:border-primary/20 transition-all duration-300",
        className
      )}
    >
      {isCurrent && (
        <span className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-full">
          Current
        </span>
      )}

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold font-[family-name:var(--font-display)]">{company}</h3>
          <p className="text-primary font-semibold">{role}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {location}
          </span>
        </div>
      </div>

      <ul className="space-y-2 mb-4">
        {description.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} variant="gradient" />
          ))}
        </div>
      )}
    </motion.div>
  )
}
