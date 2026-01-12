"use client"

import { Network, Calendar, Layers } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { MediaPlaceholder } from "@/components/ui/media-placeholder"

export function OrganizeSection() {
  return (
    <section id="organize" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Knowledge Base"
          title="See your knowledge, organized"
          description="Three views to understand your information: Graph, Timeline, and Types."
          align="center"
          className="mx-auto"
        />

        {/* Triangle layout: 1 big on top, 2 small below */}
        <div className="mt-16 space-y-8">
          {/* Graph View - Large, full width */}
          <div className="glass-card p-6 md:p-8">
            <MediaPlaceholder
              type="gif"
              name="organize-01-graph.gif"
              aspectRatio="16/9"
              description="Knowledge graph zoom out reveal"
            />
            <div className="mt-6 flex items-start gap-4">
              <Network className="h-6 w-6 text-gray-400 mt-0.5" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Graph View</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Discover connections between your thoughts and ideas. Watch your knowledge network come alive.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline & Types - Two smaller, side by side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Timeline View */}
            <div className="glass-card p-5">
              <MediaPlaceholder
                type="image"
                name="organize-02-timeline.png"
                aspectRatio="16/10"
              />
              <div className="mt-4 flex items-start gap-3">
                <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Timeline View</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    See everything organized by when you captured it.
                  </p>
                </div>
              </div>
            </div>

            {/* Types View */}
            <div className="glass-card p-5">
              <MediaPlaceholder
                type="image"
                name="organize-03-types.png"
                aspectRatio="16/10"
              />
              <div className="mt-4 flex items-start gap-3">
                <Layers className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Types View</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Browse by content type: thoughts, links, files, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
