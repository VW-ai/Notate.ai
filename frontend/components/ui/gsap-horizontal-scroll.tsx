"use client"

import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface GsapHorizontalScrollProps {
  children: React.ReactNode
  className?: string
}

export function GsapHorizontalScroll({
  children,
  className = ""
}: GsapHorizontalScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        desktop: "(min-width: 768px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (ctx) => {
        // Disable if user prefers reduced motion
        if (ctx.conditions?.reduceMotion) return

        const wrapper = wrapperRef.current
        const track = trackRef.current
        if (!wrapper || !track) return

        const getDistance = () => Math.max(0, track.scrollWidth - wrapper.clientWidth)

        // Don't pin if no horizontal scroll needed
        if (getDistance() <= 0) return

        const gsapCtx = gsap.context(() => {
          gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",  // Critical: no easing with scrub
            scrollTrigger: {
              trigger: wrapper,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${getDistance()}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          })
        }, wrapper)

        return () => gsapCtx.revert()
      }
    )

    return () => mm.revert()
  }, [])

  return (
    <div ref={wrapperRef} className={`gsap-horizontal-wrapper ${className}`}>
      <div ref={trackRef} className="gsap-horizontal-track">
        {React.Children.map(children, (child, i) => (
          <div className="gsap-card" key={i}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
