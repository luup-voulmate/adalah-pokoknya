'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react'
import type { MouseEvent } from 'react'

const codeLines = [
  { t: 'const', v: ' developer', o: ' = {' },
  { t: '  name:', v: " 'Fabian',", o: '' },
  { t: '  role:', v: " 'Creative Developer',", o: '' },
  { t: '  stack:', v: " ['Next.js', 'React'],", o: '' },
  { t: '  passion:', v: " 'design + code',", o: '' },
  { t: '', v: '}', o: '' },
]

export function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 20,
  })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  })

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      id="home"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-4 pt-28 pb-16 md:flex-row md:gap-8"
    >
      <div className="flex-1 text-center md:text-left">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for new projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          Hi, I&apos;m{' '}
          <span className="text-glow bg-gradient-to-r from-primary via-chart-3 to-accent bg-clip-text text-transparent">
            Fabian
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg"
        >
          Creative Developer crafting modern digital experiences through code and
          design. I build fast, elegant, and thoughtful interfaces where
          technology meets creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start"
        >
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 sm:w-auto"
          >
            View My Work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/60 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-8 md:justify-start"
        >
          {[
            { k: '2+', v: 'Years Learning' },
            { k: '10+', v: 'Projects Built' },
            { k: '15+', v: 'Technologies' },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-2xl font-bold text-foreground">{s.k}</div>
              <div className="text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* floating code card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
        className="relative w-full max-w-sm flex-1"
      >
        <div className="glass glow-ring relative rounded-2xl p-1.5">
          <div className="flex items-center gap-1.5 px-3 py-2">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-chart-1/70" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              developer.ts
            </span>
          </div>
          <div className="rounded-xl bg-background/60 p-4 font-mono text-sm leading-relaxed">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                className="whitespace-pre"
              >
                <span className="text-muted-foreground/50">
                  {String(i + 1).padStart(2, '0')}
                </span>{' '}
                <span className="text-accent">{line.t}</span>
                <span className="text-primary">{line.v}</span>
                <span className="text-muted-foreground">{line.o}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="glass glow-ring absolute -right-4 -top-4 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          Design + Code
        </motion.div>
      </motion.div>
    </section>
  )
}
