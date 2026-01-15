"use client"

import { useActiveSection, sections, SectionId } from "@/lib/useActiveSection"

export function ProgressDots() {
  const activeSection = useActiveSection()
  const activeIndex = sections.findIndex((s) => s.id === activeSection)

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex">
      {/* Container with background */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-full py-4 px-2.5 shadow-lg border border-gray-200/50">
        {/* Vertical track line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gray-200 rounded-full" />

        {/* Progress fill */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-4 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-500"
          style={{
            height: `${(activeIndex / (sections.length - 1)) * 100}%`,
            maxHeight: 'calc(100% - 32px)'
          }}
        />

        {/* Dots */}
        <div className="relative flex flex-col gap-5">
          {sections.map(({ id, label }, index) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group relative flex items-center justify-center"
              aria-label={`Go to ${label}`}
            >
              {/* Label tooltip */}
              <span className="absolute right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-medium text-gray-700 whitespace-nowrap bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-100">
                {label}
              </span>

              {/* Dot */}
              <div
                className={`relative z-10 rounded-full transition-all duration-300 ${
                  activeSection === id
                    ? "progress-dot active w-4 h-4"
                    : index <= activeIndex
                    ? "w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
