"use client"

import { Zap, Clock, ArrowRight, type LucideIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ImageLightbox } from "./image-lightbox"

interface Substep {
  description: string
  image: string
}

interface Step {
  label: string
  description: string
  image: string
  substeps?: Substep[]
}

interface Workflow {
  icon: LucideIcon
  title: string
  description: string
  steps: Step[]
}

const workflows: Workflow[] = [
  {
    icon: Zap,
    title: "Quick Capture",
    description:
      "Type /// anywhere on your Mac—emails, browsers, documents. Notate instantly captures your thought, auto-clears the text, and processes it with AI. No apps to switch, no flow interrupted.",
    steps: [
      {
        label: "Type ///",
        description: "Type /// followed by your thought anywhere",
        image: "/capture-step1.png"
      },
      {
        label: "Captured",
        description: "Get notification when capture is complete",
        image: "/capture-step3.png"
      },
      {
        label: "AI Processing",
        description: "AI extracts and organizes key information",
        image: "/ai-processing.png"
      }
    ],
  },
  {
    icon: Clock,
    title: "Activity Timer",
    description: "Type ;;; to start tracking your work. Notate creates timed events, saves them to your calendar, and lets you tag them for analytics. Simple time tracking that actually works.",
    steps: [
      {
        label: "Start Event",
        description: "Type ;;; and enter event details in popup to start tracking",
        image: "/timer-1.png",
        substeps: [
          { description: "Type ;;; shortcut", image: "/timer-1.png" },
          { description: "Popup to initiate event", image: "/timer-2.png" },
          { description: "Event starting notification", image: "/timer-3.png" }
        ]
      },
      {
        label: "Finish Event",
        description: "Type ;;; again when done, select tags, and finish the event",
        image: "/timer-4.png",
        substeps: [
          { description: "Get back to work, type ;;; when finished", image: "/timer-4.png" },
          { description: "Shows current running event, finish it", image: "/timer-5.png" },
          { description: "Select tags for the event (optional)", image: "/timer-6.png" }
        ]
      },
      {
        label: "Saved & Tagged",
        description: "Event automatically saved to calendar and tagged in Notate",
        image: "/timer-7.png",
        substeps: [
          { description: "Event added to calendar (Gmail)", image: "/timer-7.png" },
          { description: "Also tagged and showing in Notate", image: "/timer-8.png" }
        ]
      }
    ],
  },
]

export default function Features() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="features" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">
            How Notate Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Two simple workflows to capture everything and track your time effortlessly
          </p>
        </div>

        <div className="space-y-16">
          {workflows.map((workflow, workflowIndex) => {
            const Icon = workflow.icon
            return (
              <div key={workflowIndex} className="space-y-8">
                {/* Workflow Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{workflow.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
                      {workflow.description}
                    </p>
                  </div>
                </div>

                {/* Workflow Steps - Horizontal */}
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {workflow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="relative">
                        {/* Step Card */}
                        <div className="paper-card p-6 space-y-4 h-full border-border/60 hover:border-primary/30 transition-colors group">
                          {/* Step Number */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary text-base font-semibold flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <h4 className="font-bold text-foreground text-base">{step.label}</h4>
                          </div>

                          {/* Step Description */}
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>

                          {/* Main Screenshot */}
                          <div
                            className="relative overflow-hidden rounded-lg border border-border/40 bg-secondary/10 cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all"
                            onClick={() => setLightboxImage({ src: step.image, alt: step.label })}
                          >
                            <Image
                              src={step.image}
                              alt={step.label}
                              width={800}
                              height={600}
                              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Substeps - if available */}
                          {step.substeps && step.substeps.length > 0 && (
                            <div className="space-y-3 mt-4 pt-4 border-t border-border/40">
                              <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                                Detailed Steps
                              </p>
                              <div className="grid grid-cols-1 gap-3">
                                {step.substeps.map((substep, substepIndex) => (
                                  <div
                                    key={substepIndex}
                                    className="flex gap-3 items-start cursor-pointer hover:bg-secondary/20 p-2 rounded-lg transition-colors"
                                    onClick={() => setLightboxImage({ src: substep.image, alt: substep.description })}
                                  >
                                    <div className="flex-shrink-0 w-16 h-16 rounded border border-border/40 overflow-hidden bg-secondary/10">
                                      <Image
                                        src={substep.image}
                                        alt={substep.description}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-xs text-muted-foreground leading-relaxed">
                                        {substepIndex + 1}. {substep.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Arrow between steps (not on last step) */}
                        {stepIndex < workflow.steps.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                            <ArrowRight className="h-8 w-8 text-primary/50" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        src={lightboxImage?.src || ""}
        alt={lightboxImage?.alt || ""}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </section>
  )
}
