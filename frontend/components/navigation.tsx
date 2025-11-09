"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/notate-logo.png"
              alt="Notate Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-lg transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold text-foreground">Notate</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#views" className="text-sm text-muted-foreground hover:text-foreground transition">
              Views
            </a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition">
              Team
            </a>
            <a href="#video" className="text-sm text-muted-foreground hover:text-foreground transition">
              Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-border/40 pt-4 md:hidden">
            <a href="#features" className="text-sm text-foreground">
              Features
            </a>
            <a href="#views" className="text-sm text-foreground">
              Views
            </a>
            <a href="#team" className="text-sm text-foreground">
              Team
            </a>
            <a href="#video" className="text-sm text-foreground">
              Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
