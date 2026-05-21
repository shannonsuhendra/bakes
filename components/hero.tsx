export function Hero() {
  return (
    <section className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] mt-16 md:mt-20 flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-left">
            <h1 className="font-[family-name:var(--font-title)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              nom nom
            </h1>
            <div className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-md space-y-4">
              <p>
                Hi! I&apos;m Shannon—a 24-year-old home baker who loves baking to bring people together. For me, baking is more than just making desserts; it&apos;s a way to create warm moments, share comfort, and connect with people through food.
              </p>
              <p>
                My goal is to grow this passion into a small bakery experience where I can share my creations with a wider community—through pop-ups, events, and, hopefully one day, a dedicated space that feels warm, welcoming, and personal.
              </p>
              <p>
                At the heart of it, I want every bake to feel like a small moment of happiness—simple, comforting, and made to be shared.
              </p>
            </div>
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
