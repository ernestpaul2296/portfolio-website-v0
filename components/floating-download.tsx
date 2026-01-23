"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Share2, X, FileText } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

const RESUME_URL = "https://blobs.vusercontent.net/blob/Ernest%20Paul-RNQ82aGKirTn3JkgcRRBGCrnhriMZv.pdf"

export function FloatingDownloadButton() {
  const isMobile = useIsMobile()
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = RESUME_URL
    link.download = "Ernest_Paul_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setIsBottomSheetOpen(false)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ernest Paul - Resume",
          text: "Check out Ernest Paul's resume - Full Stack Engineer",
          url: RESUME_URL
        })
      } catch {
        // User cancelled or share failed, do nothing
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(RESUME_URL)
      alert("Resume link copied to clipboard!")
    }
    setIsBottomSheetOpen(false)
  }

  if (!isVisible) return null

  // Desktop view - single button with tooltip
  if (!isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          onClick={handleDownload}
          className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5" />
          <span className="font-semibold">Download Resume</span>
        </motion.button>
      </motion.div>
    )
  }

  // Mobile view - button with bottom sheet
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsBottomSheetOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText className="w-5 h-5" />
          <span className="font-semibold text-sm">Resume</span>
        </motion.button>
      </motion.div>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {isBottomSheetOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBottomSheetOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-card rounded-t-3xl p-6 pb-10 z-50 border-t border-border"
            >
              <div className="w-12 h-1 bg-muted-foreground/30 rounded-full mx-auto mb-6" />
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)]">Resume Options</h3>
                <button
                  onClick={() => setIsBottomSheetOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid gap-3">
                <button
                  onClick={handleDownload}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border border-border bg-secondary/50",
                    "hover:bg-secondary transition-colors"
                  )}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Download Resume</p>
                    <p className="text-sm text-muted-foreground">Save PDF to your device</p>
                  </div>
                </button>

                <button
                  onClick={handleShare}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border border-border bg-secondary/50",
                    "hover:bg-secondary transition-colors"
                  )}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Share2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Share Resume</p>
                    <p className="text-sm text-muted-foreground">Send to others via link</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
