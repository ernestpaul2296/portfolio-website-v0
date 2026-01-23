"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TechBadgeProps {
  name: string
  variant?: "default" | "primary" | "gradient"
  className?: string
}

export function TechBadge({ name, variant = "default", className }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
        variant === "default" && "bg-secondary text-secondary-foreground",
        variant === "primary" && "bg-primary/10 text-primary",
        variant === "gradient" && "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600",
        className
      )}
    >
      {name}
    </motion.span>
  )
}

export function TechStack({ 
  title, 
  technologies, 
  className 
}: { 
  title: string
  technologies: string[]
  className?: string 
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechBadge key={tech} name={tech} variant="gradient" />
        ))}
      </div>
    </div>
  )
}
