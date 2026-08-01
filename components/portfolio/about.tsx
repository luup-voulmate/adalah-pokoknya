'use client'

import Image from 'next/image'
import { Code2, Palette, BrainCircuit, Rocket } from 'lucide-react'
import { Reveal } from './reveal'

const interests = [
  { icon: Code2, label: 'Web Development' },
  { icon: Palette, label: 'UI/UX Design' },
  { icon: BrainCircuit, label: 'Artificial Intelligence' },
  { icon: Rocket, label: 'Digital Innovation' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="glow-ring absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
            <div className="glass overflow-hidden rounded-3xl p-2">
              <Image
                src="/fabian-avatar.png"
                alt="Portrait of Fabian, creative developer"
                width={480}
                height={560}
                className="h-auto w-full rounded-2xl object-cover"
                priority={false}
              />
            </div>
            <div className="glass glow-ring absolute -bottom-5 -right-2 rounded-2xl px-4 py-3 md:-right-6">
              <div className="font-mono text-xs text-muted-foreground">
                currently
              </div>
              <div className="text-sm font-semibold">Building & Learning</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Who I Am
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              A creative developer driven by curiosity
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              I&apos;m Fabian, a developer who loves living at the intersection of
              technology and design. I enjoy turning ideas into polished,
              interactive experiences — obsessing over the small details that make
              a product feel alive.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              My interests span across several areas that keep me constantly
              exploring and building:
            </p>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {interests.map((item, i) => (
              <Reveal key={item.label} delay={0.15 + i * 0.08}>
                <div className="glass group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:border-primary/40">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary transition-transform group-hover:scale-110">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex gap-8">
            {[
              { k: '2+', v: 'Years Learning' },
              { k: '10+', v: 'Projects Completed' },
              { k: '15+', v: 'Technologies Mastered' },
            ].map((s, i) => (
              <Reveal key={s.v} delay={0.3 + i * 0.08}>
                <div>
                  <div className="text-2xl font-bold text-primary">{s.k}</div>
                  <div className="text-xs text-muted-foreground">{s.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
