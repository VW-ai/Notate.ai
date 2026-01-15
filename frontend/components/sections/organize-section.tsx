"use client"

import { Network, Calendar, Layers } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { MediaPlaceholder } from "@/components/ui/media-placeholder"
import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { GsapHorizontalScroll } from "@/components/ui/gsap-horizontal-scroll"

const organizeViews = [
  {
    title: "Graph ( •̀ ω •́ )⟷",
    description: "Discover connections between your thoughts and ideas. Watch your knowledge network come alive.",
    mediaName: "organize-01-graph.gif",
    mediaType: "gif" as const,
    icon: Network,
    width: 800,
    height: 584,
  },
  {
    title: "Timeline (•_•)⏱",
    description: "See everything organized by when you captured it.",
    mediaName: "organize-02-timeline.png",
    mediaType: "image" as const,
    icon: Calendar,
    width: 1229,
    height: 897,
  },
  {
    title: "Types (•_•)⌁",
    description: "Browse by content type: thoughts, links, files, and more.",
    mediaName: "organize-03-types.png",
    mediaType: "image" as const,
    icon: Layers,
    width: 1229,
    height: 897,
  },
]

export function OrganizeSection() {
  return (
    <section id="organize" className="overflow-hidden">
      {/* Header with normal padding */}
      <div className="px-6 mx-auto max-w-7xl py-20 md:py-32">
        <ScrollAnimate>
          <SectionHeader
            badge="3 Views"
            kaomoji="(._.)"
            title="Organize"
            description="Three views to understand your information: Graph, Timeline, and Types."
            align="center"
            className="mx-auto"
          />
        </ScrollAnimate>
      </div>

      {/* GSAP Horizontal Scroll */}
      <GsapHorizontalScroll>
        {organizeViews.map((view, i) => (
          <div key={i} className="card-minimal p-5 h-full">
            <MediaPlaceholder
              type={view.mediaType}
              name={view.mediaName}
              width={view.width}
              height={view.height}
            />
            <div className="mt-4 flex items-start gap-3">
              <view.icon className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {view.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {view.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </GsapHorizontalScroll>
    </section>
  )
}
