"use client"

import { useState, useEffect } from 'react'
import SlotCounter from 'react-slot-counter'

interface AnimatedCounterProps {
  value: number
  duration?: number
}

export function AnimatedCounter({ value, duration = 1500 }: AnimatedCounterProps) {
  const [startAnimation, setStartAnimation] = useState(false)
  const [finalValue, setFinalValue] = useState<number | null>(null)

  useEffect(() => {
    // Wait a bit for cache/API to load, then capture the value and start animation
    const timer = setTimeout(() => {
      setFinalValue(value)
      setStartAnimation(true)
    }, 300) // Delay to let cache/API update first

    return () => clearTimeout(timer)
  }, []) // Only run once on mount

  // Update final value if it changes after animation started
  useEffect(() => {
    if (startAnimation && value !== finalValue) {
      setFinalValue(value)
    }
  }, [value, startAnimation, finalValue])

  // Show 9999 before animation starts
  if (!startAnimation || finalValue === null) {
    return <span className="inline-block" style={{ minWidth: '200px' }}>9,999</span>
  }

  return (
    <SlotCounter
      value={finalValue.toLocaleString()}
      startValue="9999"
      duration={duration / 1000}
      animateOnVisible={false}
      dummyCharacters={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
      autoAnimationStart={true}
      sequentialAnimationMode={true}
    />
  )
}
