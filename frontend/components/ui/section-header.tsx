import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: string
  kaomoji?: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  badge,
  title,
  kaomoji,
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
        <span className="badge-minimal text-sm">
          {badge}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 text-balance">
        {kaomoji && <span className="mr-2">{kaomoji}</span>}
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
