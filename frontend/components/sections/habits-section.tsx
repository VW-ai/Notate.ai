"use client"

import { Sparkles } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { MediaPlaceholder } from "@/components/ui/media-placeholder"

export function HabitsSection() {
  return (
    <section id="habits" className="px-6 py-20 md:py-32 section-alt">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          badge="Automation"
          kaomoji="(⌐■_■)"
          title="Habits"
          description="Define rules in plain language. Notate learns how you want to process different types of content."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 card-minimal p-6 md:p-8">
          <MediaPlaceholder
            type="gif"
            name="habit.gif"
            width={800}
            height={450}
            description="Habits page overview + creating a new habit"
          />

          {/* Title below media */}
          <div className="mt-6 flex items-start gap-4">
            <Sparkles className="h-6 w-6 text-gray-400 mt-0.5" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Custom Workflows (._.)...</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Create habits for any content type. Notate suggests them automatically when you capture matching content.
              </p>
            </div>
          </div>

          {/* Example habits */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">( •̀ ω •́ )✧ Suggested</p>
              <p className="font-semibold text-gray-900">YouTube</p>
              <p className="text-sm text-gray-500 mt-1">"Extract key points and add to Watch List"</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">( •̀ ω •́ )✧ Suggested</p>
              <p className="font-semibold text-gray-900">Papers</p>
              <p className="text-sm text-gray-500 mt-1">"Summarize abstract and link to related notes"</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">( •̀ ω •́ )✧ Suggested</p>
              <p className="font-semibold text-gray-900">Weekly</p>
              <p className="text-sm text-gray-500 mt-1">"Generate reflection from this week's thoughts"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
