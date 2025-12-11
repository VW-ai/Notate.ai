"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Users } from "lucide-react"
import Image from "next/image"
import { withAssetPrefix } from "@/lib/assetPrefix"
import { WaitlistModal } from "@/components/waitlist-modal"
import { AnimatedCounter } from "@/components/animated-counter"

const WAITLIST_COUNT_KEY = 'notate_waitlist_count'
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
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-foreground/70">
            <span className="h-2 w-2 rounded-full bg-primary" />
            macOS Productivity Reimagined
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-balance text-foreground leading-tight">
            Capture Your Thoughts,
            <br />
            <span className="gradient-text">Organize with AI</span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground text-balance leading-relaxed">
            Notate works invisibly in the background. Simply type /// anywhere, and let AI transform your scattered
            thoughts into organized notes & actions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsWaitlistOpen(true)}
            >
              <Mail className="mr-2 h-4 w-4" />
              Join Waitlist
            </Button>
            <Button size="lg" variant="outline" className="border-border/60 bg-transparent" asChild>
              <a href="#video">
                Watch Demo
              </a>
            </Button>
          </div>

          {/* Trust signal */}
          <p className="mt-12 text-xs text-muted-foreground">
            Be the first to know when Notate launches. No spam, ever.
          </p>
        </div>
      </div>

      {/* Waitlist Counter */}
      <div className="relative mx-auto max-w-4xl mt-16 mb-8">
        <div className="flex items-center justify-center gap-3 py-6 px-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <Users className="h-8 w-8 text-primary" />
          <div className="text-center">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-bold text-[#c97653] tabular-nums">
                <AnimatedCounter value={waitlistCount} duration={1500} />
              </span>
              <span className="text-2xl font-semibold text-muted-foreground">
                people
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              already joined the waitlist
            </p>
          </div>
        </div>
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

      {/* Hero visual - Overview screenshot */}
      <div className="mt-8 mx-auto max-w-6xl px-4">
        <div className="paper-card p-4 md:p-8">
          <div className="relative rounded-lg overflow-hidden border border-border/40">
            <Image
              src={withAssetPrefix("/Overview.png")}
              alt="Notate app overview showing timeline and daily schedule"
              width={1600}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
