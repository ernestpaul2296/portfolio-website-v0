"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterTextProps {
  text: string
  className?: string
  duration?: number
  onComplete?: () => void
}

export function TypewriterText({ text, className, duration = 7000, onComplete }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const chars = text.split("")
    const charDelay = duration / chars.length
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < chars.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
        setIsComplete(true)
        onComplete?.()
      }
    }, charDelay)

    return () => clearInterval(interval)
  }, [text, duration, onComplete])

  return (
    <span className={cn("relative", className)}>
      {displayText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-[1em] bg-primary animate-pulse ml-0.5 align-middle" />
      )}
    </span>
  )
}
