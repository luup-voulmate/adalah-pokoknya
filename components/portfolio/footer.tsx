import { Code2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2 font-mono text-sm font-bold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Code2 className="h-3.5 w-3.5" />
          </span>
          Fabian
        </div>
        <div className="text-sm text-muted-foreground">
          <p>© 2026 Fabian Portfolio</p>
          <p className="text-xs">
            Creative Developer &amp; Web Design Enthusiast
          </p>
        </div>
      </div>
    </footer>
  )
}
