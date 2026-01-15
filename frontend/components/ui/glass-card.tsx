import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  gradient?: boolean
  children: React.ReactNode
}

export function GlassCard({
  hover = false,
  gradient = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  const cardClass = gradient
    ? "card-gradient-hover"
    : hover
      ? "card-minimal-hover"
      : "card-minimal"

  return (
    <div
      className={cn(cardClass, className)}
      {...props}
    >
      {children}
    </div>
  )
}
