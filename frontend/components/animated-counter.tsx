"use client"

import { useState, useEffect } from 'react'
import SlotCounter from 'react-slot-counter'

interface AnimatedCounterProps {
  value: number
  duration?: number
}

export function AnimatedCounter({ value, duration = 1500 }: AnimatedCounterProps) {
  const [animationState, setAnimationState] = useState<'pre' | 'animating' | 'complete'>('pre')
  const [finalValue, setFinalValue] = useState<number>(9999)

  useEffect(() => {
    if (animationState === 'pre') {
      // Wait for cache/API to load, then start animation
      const startTimer = setTimeout(() => {
        setFinalValue(value)
        setAnimationState('animating')

        // Mark as complete after animation duration
        const completeTimer = setTimeout(() => {
          setAnimationState('complete')
        }, duration + 100) // Extra 100ms buffer

        return () => clearTimeout(completeTimer)
      }, 300)

      return () => clearTimeout(startTimer)
    }
  }, [animationState, value, duration])

  // Show static 9999 before animation
  if (animationState === 'pre') {
    return <span className="inline-block" style={{ minWidth: '200px' }}>9,999</span>
  }

  // Show static final value after animation completes
  if (animationState === 'complete') {
    return <span className="inline-block">{finalValue.toLocaleString()}</span>
  }

  // Show animation
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
