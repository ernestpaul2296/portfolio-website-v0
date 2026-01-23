"use client"

import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  icon: LucideIcon
  label: string
  value: string
  className?: string
}

export function StatsCard({ icon: Icon, label, value, className }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className={cn(
        "p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h4 className="text-2xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        {value}
      </h4>
      <p className="text-muted-foreground text-sm">{label}</p>
    </motion.div>
  )
}
