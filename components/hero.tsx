export function Hero() {
  return (
    <section className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] mt-16 md:mt-20 flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-left">
            <h1 className="font-[family-name:var(--font-title)] text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground mb-6">
              nom nom
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-md">
              Hi! I&apos;m Shannon—a home baker who loves baking to bring people together.
            </p>
          </div>
          <div className="flex-1 w-full max-w-md md:max-w-none">
            <div className="relative aspect-[4/3] md:aspect-square max-h-[60vh] rounded-2xl overflow-hidden">
              <img
                src="/bakes/images/shannon-baking.jpg"
                alt="Shannon baking in her home kitchen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
