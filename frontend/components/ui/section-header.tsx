import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full bg-gray-100/80 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur-sm">
          {badge}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
