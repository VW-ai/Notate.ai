"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Mail, Loader2, CheckCircle2 } from "lucide-react"

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentCount?: number
  onCountUpdate?: (count: number) => void
}

export function WaitlistModal({ open, onOpenChange, currentCount = 1032, onCountUpdate }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [waitlistCount, setWaitlistCount] = useState(currentCount)

  // Sync with parent count
  useEffect(() => {
    setWaitlistCount(currentCount)
  }, [currentCount])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_WAITLIST_API_URL || ""

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("API URL not configured")
      }

      // Note: No Content-Type header to avoid CORS preflight
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        const newCount = data.count || waitlistCount + 1
        setWaitlistCount(newCount)
        setEmail("")
        // Update parent component count
        if (onCountUpdate) {
          onCountUpdate(newCount)
        }
      } else {
        setError(data.message || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to join waitlist. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset state after a delay to prevent flash of content
    setTimeout(() => {
      setIsSuccess(false)
      setEmail("")
      setError("")
    }, 200)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Join the Waitlist</DialogTitle>
              <DialogDescription>
                Be the first to know when Notate launches. Get early access and exclusive updates.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full"
                  autoFocus
                />
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Join Waitlist
                  </>
                )}
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{waitlistCount.toLocaleString()}</span> people already joined
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mb-4 flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <DialogTitle className="text-2xl mb-2">You're on the list!</DialogTitle>
            <DialogDescription className="text-base mb-6">
              We'll send you an email when Notate is ready. Check your inbox for confirmation.
            </DialogDescription>
            <div className="mb-6 p-4 bg-secondary/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                You're{" "}
                <span className="font-bold text-primary text-lg">#{waitlistCount.toLocaleString()}</span>
                {" "}on the waitlist
              </p>
            </div>
            <Button onClick={handleClose} variant="outline" className="w-full">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
