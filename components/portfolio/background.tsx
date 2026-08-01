'use client'

import { useEffect, useState } from 'react'

type Star = {
  left: string
  top: string
  size: number
  delay: string
  duration: string
}

export function Background() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 60 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 4 + 3}s`,
    }))
    setStars(generated)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* animated gradient orbs */}
      <div className="animate-drift absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[120px]" />
      <div className="animate-drift-slow absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="animate-drift absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-chart-5/15 blur-[120px]" />

      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(0.97 0.02 260 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.97 0.02 260 / 0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* stars */}
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-foreground/70"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration} ease-in-out ${star.delay} infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}
