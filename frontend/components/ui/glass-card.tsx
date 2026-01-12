import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  children: React.ReactNode
}

export function GlassCard({
  hover = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(hover ? "glass-card-hover" : "glass-card", className)}
      {...props}
    >
      {children}
    </div>
  )
}
