'use client'

import { Layers, Server, Wrench } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const groups = [
  {
    icon: Layers,
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Database'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        description="A modern toolkit for building fast, scalable, and beautiful digital products."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.12}>
            <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-ring">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
