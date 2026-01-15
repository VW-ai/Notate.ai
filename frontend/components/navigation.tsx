"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { withAssetPrefix } from "@/lib/assetPrefix"
import { useActiveSection, SectionId } from "@/lib/useActiveSection"

const navItems: { href: string; label: string; id: SectionId }[] = [
  { href: "#capture", label: "Capture", id: "capture" },
  { href: "#organize", label: "Organize", id: "organize" },
  { href: "#use", label: "Use", id: "use" },
  { href: "#team", label: "Team", id: "team" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()

  return (
    <nav className="sticky top-0 z-50 nav-minimal">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <Image
              src={withAssetPrefix("/notate-logo.png")}
              alt="Notate Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-lg transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold text-gray-900">Notate</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors relative py-1 ${
                  activeSection === item.id
                    ? "text-gray-900 nav-link-active"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-gray-200 pt-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
