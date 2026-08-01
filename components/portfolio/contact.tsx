'use client'

import { useState, type FormEvent } from 'react'
import { Send, Check } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { GithubIcon, InstagramIcon, TiktokIcon } from './brand-icons'

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/luup-voulmate' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/mhmd.fbynn' },
  { icon: TiktokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@colzhxy?_r=1&_t=ZS-98WfhyD3pv3' },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Have a project idea?"
        description="I'm always open to collaborating on interesting ideas. Send me a message and let's build something great."
      />

      <Reveal>
        <form
          onSubmit={handleSubmit}
          className="glass glow-ring rounded-2xl p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your idea..."
              className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
            disabled={sent}
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" />
                Message Sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex items-center justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
