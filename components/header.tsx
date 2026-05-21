export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              window.history.replaceState(null, "", "/")
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="font-[family-name:var(--font-title)] text-2xl md:text-3xl font-bold tracking-tight text-foreground"
          >
            nom nom
          </a>
          <div className="flex items-center gap-8">
            <a
              href="#staging"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Staging
            </a>
            <a
              href="#events"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Events
            </a>
            <a 
              href="#bakes" 
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Bakes
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
