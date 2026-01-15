"use client"

import { MessageCircle, MessageSquare, Mail } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { MediaPlaceholder } from "@/components/ui/media-placeholder"
import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { GsapHorizontalScroll } from "@/components/ui/gsap-horizontal-scroll"

interface UseCase {
  title: string
  description: string
  gifName: string
  icon: React.ElementType
  width: number
  height: number
}

const useCases: UseCase[] = [
  {
    title: "Ask Your Knowledge (•_•)?",
    description:
      "Natural language queries across all your captured content. AI finds and summarizes relevant information.",
    gifName: "use-01-ask.gif",
    icon: MessageCircle,
    width: 800,
    height: 450,
  },
  {
    title: "WeChat Assistant (⌐■_■)",
    description:
      "Screenshot a conversation. Get smart reply suggestions in your preferred tone and language.",
    gifName: "use-02-wechat.gif",
    icon: MessageSquare,
    width: 720,
    height: 405,
  },
  {
    title: "Email Composer (•_•)✎",
    description:
      "Draft professional emails with context from your knowledge base. One click to accept or modify.",
    gifName: "use-03-gmail.gif",
    icon: Mail,
    width: 720,
    height: 405,
  },
]

export function UseSection() {
  return (
    <section id="use" className="section-alt overflow-hidden">
      {/* Header with normal padding */}
      <div className="px-6 mx-auto max-w-7xl py-20 md:py-32">
        <ScrollAnimate>
          <SectionHeader
            badge="Output"
            kaomoji="(⌐■_■)"
            title="Use"
            description="Query, refine, and compose with AI assistance powered by your personal knowledge."
            align="center"
            className="mx-auto"
          />
        </ScrollAnimate>
      </div>

      {/* GSAP Horizontal Scroll */}
      <GsapHorizontalScroll>
        {useCases.map((useCase, i) => (
          <div key={i} className="card-minimal-hover p-5 group h-full">
            <MediaPlaceholder
              type="gif"
              name={useCase.gifName}
              width={useCase.width}
              height={useCase.height}
            />

            <div className="mt-4 flex items-start gap-3">
              <useCase.icon className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {useCase.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </GsapHorizontalScroll>
    </section>
  )
}
