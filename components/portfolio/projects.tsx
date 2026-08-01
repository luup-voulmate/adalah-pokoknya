'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { GithubIcon } from './brand-icons'

const projects = [
  {
    name: 'Personal Website',
    description:
      'A premium dark portfolio built to showcase my work with smooth animations and glassmorphism.',
    image: '/project-personal.png',
    stack: ['Next.js', 'Tailwind', 'Motion'],
    githubLink: 'https://github.com/yourusername/personal-website',
    liveLink: 'https://aidilaaw.my.id' // ← pake ini
  },
  {
    name: 'WhatsApp Bot',
    description:
      'An automated messaging bot handling commands, replies, and workflows through a clean interface.',
    image: '/project-bot.png',
    stack: ['Node.js', 'Express', 'API'],
    githubLink: 'https://github.com/yourusername/whatsapp-bot',
    liveLink: 'https://your-bot-demo.com' // ← atau null kalo ga ada
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A collection of projects where I explored ideas, solved problems, and refined my craft."
      />

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.1}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-ring">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-5">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <GithubIcon className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
