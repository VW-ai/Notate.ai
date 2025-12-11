"use client"

import { useState, useEffect } from 'react'
import SlotCounter from 'react-slot-counter'

interface AnimatedCounterProps {
  value: number
  duration?: number
}

export function AnimatedCounter({ value, duration = 1500 }: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [displayValue, setDisplayValue] = useState<number>(9999)
  const [finalValue, setFinalValue] = useState<number | null>(null)

  useEffect(() => {
    // Only animate once on initial mount
    if (!hasAnimated) {
      // Wait a bit for cache/API to load, then capture the value
      const timer = setTimeout(() => {
        setFinalValue(value)
        setDisplayValue(value)
        setHasAnimated(true)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [hasAnimated, value])

  // Show 9999 before animation starts
  if (!hasAnimated || finalValue === null) {
    return <span className="inline-block" style={{ minWidth: '200px' }}>9,999</span>
  }

  return (
    <SlotCounter
      value={displayValue.toLocaleString()}
      startValue="9999"
      duration={duration / 1000}
      animateOnVisible={false}
      dummyCharacters={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
      autoAnimationStart={true}
      sequentialAnimationMode={true}
    />
  )
}
