import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { EVENTS, type Event } from "@/lib/events"

export function EventsSection() {
  return (
    <section id="events" className="py-20 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Gatherings &amp; celebrations
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground">
            My Events
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <article className="group">
      <div className="aspect-square overflow-hidden rounded-sm mb-5 bg-muted relative">
        {event.images.length > 1 ? (
          <EventCarousel images={event.images} name={event.name} />
        ) : (
          <img
            src={event.images[0]}
            alt={event.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>
      <h3 className="text-xl font-medium text-foreground group-hover:text-muted-foreground transition-colors">
        {event.name}
      </h3>
      <p className="mt-2 text-muted-foreground text-base md:text-lg leading-relaxed">
        {event.description}
       </p>
    </article>
  )
}

function EventCarousel({ images, name }: { images: string[]; name: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    emblaApi?.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative h-full group/carousel">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
              <img
                src={img}
                alt={`${name} — ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-foreground" : "bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
