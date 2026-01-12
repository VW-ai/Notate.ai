"use client"

import { Zap, Link2, FileText } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { MediaPlaceholder } from "@/components/ui/media-placeholder"

interface CaptureDemo {
  title: string
  description: string
  gifName: string
  icon: React.ElementType
}

const captureDemos: CaptureDemo[] = [
  {
    title: "Quick Thoughts",
    description:
      "Press your hotkey, type your thought. Captured instantly with a cute kaomoji.",
    gifName: "capture-01-thought.gif",
    icon: Zap,
  },
  {
    title: "Smart Links",
    description:
      "Paste a YouTube link. Get it categorized with smart suggestions automatically.",
    gifName: "capture-02-youtube.gif",
    icon: Link2,
  },
  {
    title: "Long Content",
    description:
      "Capture articles or long text. Content auto-collapses into a clean chip.",
    gifName: "capture-03-longtext.gif",
    icon: FileText,
  },
]

export function CaptureSection() {
  return (
    <section id="capture" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionHeader
          badge="Zero Friction"
          title="Capture anything, anywhere"
          description="One hotkey to summon Notate. Capture your thoughts without breaking your flow."
          align="center"
          className="mx-auto"
        />

        {/* Three column GIF showcase */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {captureDemos.map((demo, i) => (
            <div key={i} className="glass-card-hover p-6 group">
              {/* GIF placeholder */}
              <MediaPlaceholder
                type="gif"
                name={demo.gifName}
                aspectRatio="4/3"
              />

              {/* Title with icon */}
              <div className="mt-5 flex items-start gap-3">
                <demo.icon className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {demo.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {demo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
