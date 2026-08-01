'use client'

import { Code, Heart, Gauge, Sparkles } from 'lucide-react'
import { Reveal } from './reveal'

const values = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Readable, maintainable, and thoughtfully structured.',
  },
  {
    icon: Heart,
    title: 'User Experience',
    description: 'Designed around people, not just pixels.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Fast, optimized, and smooth on every device.',
  },
  {
    icon: Sparkles,
    title: 'Creativity',
    description: 'Details and motion that make products memorable.',
  },
]

export function Philosophy() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <div className="glass glow-ring relative overflow-hidden rounded-3xl px-6 py-16 md:px-12">
        <div className="animate-drift-slow absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            My Approach
          </span>
          <blockquote className="mt-4 text-balance text-2xl font-semibold leading-snug md:text-3xl">
            &ldquo;Great websites are not only functional they create
            experiences.&rdquo;
          </blockquote>
        </Reveal>

        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-background/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
