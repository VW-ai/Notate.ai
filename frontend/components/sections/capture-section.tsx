"use client"

import { Zap, Link2, FileText } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { MediaPlaceholder } from "@/components/ui/media-placeholder"
import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { GsapHorizontalScroll } from "@/components/ui/gsap-horizontal-scroll"

interface CaptureDemo {
  title: string
  description: string
  gifName: string
  icon: React.ElementType
  width: number
  height: number
}

const captureDemos: CaptureDemo[] = [
  {
    title: "Quick Thoughts",
    description: "Instant capture (•‿•)✎",
    gifName: "capture-01-thought.gif",
    icon: Zap,
    width: 800,
    height: 450,
  },
  {
    title: "Smart Links",
    description: "Auto-categorize links (._.)...",
    gifName: "capture-02-youtube.gif",
    icon: Link2,
    width: 800,
    height: 450,
  },
  {
    title: "Long Content",
    description: "Clean chips, no clutter (•_•)",
    gifName: "capture-03-longtext.gif",
    icon: FileText,
    width: 800,
    height: 450,
  },
]

export function CaptureSection() {
  return (
    <section id="capture" className="overflow-hidden">
      {/* Header with normal padding */}
      <div className="px-6 mx-auto max-w-7xl py-20 md:py-32">
        <ScrollAnimate>
          <SectionHeader
            badge="Zero Friction"
            kaomoji="(•‿•)"
            title="Capture"
            description="One hotkey to summon Notate. Capture your thoughts without breaking your flow."
            align="center"
            className="mx-auto"
          />
        </ScrollAnimate>
      </div>

      {/* GSAP Horizontal Scroll */}
      <GsapHorizontalScroll>
        {captureDemos.map((demo, i) => (
          <div key={i} className="card-minimal-hover p-5 group h-full">
            <MediaPlaceholder
              type="gif"
              name={demo.gifName}
              width={demo.width}
              height={demo.height}
            />

            <div className="mt-4 flex items-start gap-3">
              <demo.icon className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {demo.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {demo.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </GsapHorizontalScroll>
    </section>
  )
}
