import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
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
              asChild
            >
              <a href="mailto:waw009@ucsd.edu?subject=Join Notate Waitlist">
                <Mail className="mr-2 h-4 w-4" />
                Join Waitlist
              </a>
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

      {/* Hero visual - Overview screenshot */}
      <div className="mt-16 mx-auto max-w-6xl px-4">
        <div className="paper-card p-4 md:p-8">
          <div className="relative rounded-lg overflow-hidden border border-border/40">
            <Image
              src="/Overview.png"
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
