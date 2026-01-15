"use client"

import { useEffect, useState } from "react"

export type SectionId = "hero" | "capture" | "organize" | "use" | "team"

interface Section {
  id: SectionId
  label: string
}

export const sections: Section[] = [
  { id: "hero", label: "Home" },
  { id: "capture", label: "Capture" },
  { id: "organize", label: "Organize" },
  { id: "use", label: "Use" },
  { id: "team", label: "Team" },
]

export function useActiveSection(): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>("hero")

  useEffect(() => {
    // Track which sections are currently intersecting
    const visibleSections = new Map<SectionId, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio)
          } else {
            visibleSections.delete(id)
          }
        })

        // Find the section with highest visibility, prioritizing earlier sections
        if (visibleSections.size > 0) {
          let bestSection: SectionId = "hero"
          let bestRatio = 0

          sections.forEach(({ id }) => {
            const ratio = visibleSections.get(id) || 0
            if (ratio > bestRatio) {
              bestRatio = ratio
              bestSection = id
            }
          })

          setActiveSection(bestSection)
        }
      },
      {
        // Lower threshold for earlier detection
        threshold: [0, 0.1, 0.2, 0.3, 0.5],
        // Account for fixed header, detect when section enters top portion
        rootMargin: "-100px 0px -40% 0px",
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return activeSection
}
