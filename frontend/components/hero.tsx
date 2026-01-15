"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Users, ArrowDown, ChevronDown } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"
import { AnimatedCounter } from "@/components/animated-counter"
import { MediaPlaceholder } from "@/components/ui/media-placeholder"

const WAITLIST_COUNT_KEY = "notate_waitlist_count"
const DEFAULT_COUNT = 1032

export default function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(DEFAULT_COUNT)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load cached count from localStorage (client-side only, after hydration)
    const cached = localStorage.getItem(WAITLIST_COUNT_KEY)
    if (cached) {
      setWaitlistCount(parseInt(cached, 10))
    }

    // Fetch current waitlist count
    const fetchCount = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_WAITLIST_API_URL
        if (!apiUrl) {
          setIsLoading(false)
          return
        }

        const response = await fetch(apiUrl)
        const data = await response.json()
        if (data.success && data.count) {
          const newCount = parseInt(data.count, 10)
          setWaitlistCount(newCount)
          // Cache the count
          localStorage.setItem(WAITLIST_COUNT_KEY, newCount.toString())
        }
      } catch (error) {
        console.error("Failed to fetch waitlist count:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCount()
  }, [])

  return (
    <section id="hero" className="relative overflow-hidden px-6 py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          {/* Badge with kaomoji */}
          <div className="mb-6 badge-minimal inline-flex">
            <span>(•‿•)</span>
            <span>Capture anything. Find everything.</span>
          </div>

          {/* Main heading with rainbow accent */}
          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-balance text-gray-900 leading-tight">
            Capture anything,
            <br />
            <span className="rainbow-text">Find everything.</span>
          </h1>

          {/* Subheading with kaomoji */}
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-600 text-balance leading-relaxed">
            Zero friction. Keyboard-first. Instant recall. <span className="text-gray-900">(⌐■_■)</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-primary"
              onClick={() => setIsWaitlistOpen(true)}
            >
              <Mail className="mr-2 h-4 w-4" />
              Join waitlist (•‿•)✓
            </Button>
            <Button size="lg" className="btn-secondary" asChild>
              <a href="#capture">
                <ArrowDown className="mr-2 h-4 w-4" />
                See how it works
              </a>
            </Button>
          </div>

          {/* Trust signal */}
          <p className="mt-8 text-xs text-gray-500">
            Be the first to know when Notate launches. No spam, ever.
          </p>
        </div>
      </div>

      {/* Waitlist Counter */}
      <div className="relative mx-auto max-w-4xl mt-12 mb-8">
        <div className="card-minimal flex items-center justify-center gap-4 py-6 px-8">
          <Users className="h-8 w-8 text-gray-400" />
          <div className="text-center">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-bold text-gray-900 tabular-nums">
                <AnimatedCounter value={waitlistCount} duration={1500} />
              </span>
              <span className="text-2xl font-semibold text-gray-400">
                people
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              already joined the waitlist
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="text-center animate-bounce">
        <a href="#capture" className="inline-flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronDown className="h-6 w-6" />
          <span className="text-xs mt-1">Scroll to explore</span>
        </a>
      </div>

      <WaitlistModal
        open={isWaitlistOpen}
        onOpenChange={setIsWaitlistOpen}
        currentCount={waitlistCount}
        onCountUpdate={(newCount) => {
          setWaitlistCount(newCount)
          localStorage.setItem(WAITLIST_COUNT_KEY, newCount.toString())
        }}
      />
    </section>
  )
}
