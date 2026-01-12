"use client"

import { MessageCircle, MessageSquare, Mail } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { MediaPlaceholder } from "@/components/ui/media-placeholder"

interface UseCase {
  title: string
  description: string
  gifName: string
  icon: React.ElementType
}

const useCases: UseCase[] = [
  {
    title: "Ask Your Knowledge",
    description:
      "Natural language queries across all your captured content. AI finds and summarizes relevant information.",
    gifName: "use-01-ask.gif",
    icon: MessageCircle,
  },
  {
    title: "WeChat Assistant",
    description:
      "Screenshot a conversation. Get smart reply suggestions in your preferred tone and language.",
    gifName: "use-02-wechat.gif",
    icon: MessageSquare,
  },
  {
    title: "Email Composer",
    description:
      "Draft professional emails with context from your knowledge base. One click to accept or modify.",
    gifName: "use-03-gmail.gif",
    icon: Mail,
  },
]

export function UseSection() {
  return (
    <section id="use" className="px-6 py-20 md:py-32 section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Output"
          title="Use your knowledge, everywhere"
          description="Query, refine, and compose with AI assistance powered by your personal knowledge."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, i) => (
            <div key={i} className="glass-card-hover p-6 group">
              {/* GIF */}
              <MediaPlaceholder
                type="gif"
                name={useCase.gifName}
                aspectRatio="4/3"
              />

              {/* Title with icon */}
              <div className="mt-5 flex items-start gap-3">
                <useCase.icon className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {useCase.description}
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
