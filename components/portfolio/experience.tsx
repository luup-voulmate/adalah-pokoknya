'use client'

import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const timeline = [
  {
    year: '2024',
    title: 'Started exploring programming',
    description:
      'Took my first steps into code — learning the fundamentals of the web, HTML, CSS, and JavaScript.',
  },
  {
    year: '2025',
    title: 'Built personal projects and web applications',
    description:
      'Moved into modern frameworks like React and Next.js, shipping real projects and refining my design sense.',
  },
  {
    year: '2026',
    title: 'Growing as a Creative Developer',
    description:
      'Focusing on premium interfaces, animations, and blending AI, design, and engineering into experiences.',
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl scroll-mt-24 px-4 py-24"
    >
      <SectionHeading
        eyebrow="Journey"
        title="My path so far"
        description="A short timeline of how I've been growing as a developer."
      />

      <div className="relative mt-8 pl-8">
        <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-border to-transparent" />

        <div className="flex flex-col gap-8">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[29px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                  <span className="absolute h-4 w-4 animate-ping rounded-full bg-primary/50" />
                </span>
                <div className="glass rounded-2xl p-5 transition-colors hover:border-primary/40">
                  <span className="font-mono text-sm font-bold text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
