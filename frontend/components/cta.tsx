import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="paper-card p-12 md:p-16 text-center bg-gradient-to-br from-secondary/40 to-transparent">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">Ready to Transform Your Productivity?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Join productivity enthusiasts who are capturing smarter, organizing faster, and working better with Notate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border/60 bg-transparent">
              Schedule a Demo
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Free for 14 days. No credit card required. Full access to all features.
          </p>
        </div>
      </div>
    </section>
  )
}
