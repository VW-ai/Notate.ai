import { Film, ImageIcon } from "lucide-react"

interface MediaPlaceholderProps {
  type: "gif" | "image"
  name: string
  aspectRatio?: string
  description?: string
  className?: string
}

export function MediaPlaceholder({
  type,
  name,
  aspectRatio = "16/9",
  description,
  className,
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden ${className || ""}`}
      style={{ aspectRatio }}
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-30 dot-pattern"
      />

      {/* Placeholder content */}
      <div className="relative text-center p-6">
        {type === "gif" ? (
          <Film className="h-12 w-12 text-gray-300 mx-auto" />
        ) : (
          <ImageIcon className="h-12 w-12 text-gray-300 mx-auto" />
        )}
        <p className="mt-3 text-sm font-medium text-gray-400">{name}</p>
        {description && (
          <p className="mt-1 text-xs text-gray-300">{description}</p>
        )}
      </div>
    </div>
  )
}
