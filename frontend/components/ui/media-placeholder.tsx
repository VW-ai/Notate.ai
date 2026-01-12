import Image from "next/image"
import { cn } from "@/lib/utils"

const basePath = process.env.NODE_ENV === 'production' ? '/Notate.ai' : ''

interface MediaPlaceholderProps {
  type: "gif" | "image"
  name: string
  aspectRatio?: string
  width?: number
  height?: number
  description?: string
  className?: string
  objectFit?: "cover" | "contain"
  priority?: boolean
}

export function MediaPlaceholder({
  type,
  name,
  aspectRatio,
  width,
  height,
  description,
  className,
  objectFit = "contain",
  priority = false,
}: MediaPlaceholderProps) {
  const computedAspectRatio =
    aspectRatio || (width && height ? `${width}/${height}` : "16/9")
  const isGif = type === "gif" || name.toLowerCase().endsWith(".gif")
  const altText = description || name

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gray-200/70 bg-gray-50 shadow-sm",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white before:via-gray-50 before:to-gray-100",
        className
      )}
      style={{ aspectRatio: computedAspectRatio }}
    >
      <Image
        src={`${basePath}/${name}`}
        alt={altText}
        fill
        sizes="(min-width: 1280px) 960px, (min-width: 768px) 80vw, 100vw"
        className={cn(
          "relative z-10 object-cover transition-transform duration-300",
          objectFit === "contain" && "object-contain",
          "group-hover:scale-[1.01]"
        )}
        unoptimized={isGif}
        priority={priority}
      />

      {description && (
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/50 via-black/25 to-transparent px-4 py-3 text-sm font-medium text-white drop-shadow">
          {description}
        </div>
      )}
    </div>
  )
}
