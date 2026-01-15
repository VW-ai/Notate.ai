"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/lib/useInView"

interface ScrollAnimateProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollAnimate({
  children,
  className,
  delay = 0,
}: ScrollAnimateProps) {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={cn("scroll-fade-up", isInView && "in-view", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
