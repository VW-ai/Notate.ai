import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Trigger Capture",
    description: "Type /// anywhere on your Mac—in emails, documents, messages, or any app.",
  },
  {
    number: "2",
    title: "Auto Clear",
    description: "Your text is captured and automatically removed from the source field.",
  },
  {
    number: "3",
    title: "AI Processing",
    description: "Our AI extracts actions, suggests tags, and generates research context.",
  },
  {
    number: "4",
    title: "Smart Organization",
    description: "Notes are organized by tags, synced with Apple built-in Calendar/Reminder/Contact/Map, and ready for analysis.",
  },
]

export default function ProcessFlow() {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">Intelligent Workflow</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">From capture to organization in seconds</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="paper-card h-full border-border/60">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                      {step.number}
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-4">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/60">{step.description}</CardDescription>
                </CardContent>
              </Card>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
