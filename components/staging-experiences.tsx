import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { STAGING_EXPERIENCES, type StagingExperience } from "@/lib/staging-experiences"

export function StagingExperiences() {
  return (
    <section id="staging" className="py-20 border-t border-border/50 bg-secondary/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Behind the counter
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground">
            My Staging Experiences
          </h2>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-8 md:px-10 lg:px-12">
        <div className="flex flex-col gap-24 md:gap-32">
          {STAGING_EXPERIENCES.map((experience) => (
            <StagingExperienceRow key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StagingExperienceRow({ experience }: { experience: StagingExperience }) {
  const imageOnRight = experience.imagePosition === "right"

  return (
    <div
      className={`grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 items-center ${
        imageOnRight ? "md:grid-cols-[1fr_auto]" : "md:grid-cols-[auto_1fr]"
      }`}
    >
      <div
        className={`flex flex-col justify-center min-w-0 ${
          imageOnRight ? "" : "md:col-start-2"
        }`}
      >
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
          {experience.date}
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 md:mb-6 leading-tight">
          {experience.venue}
        </h3>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {experience.description}
        </p>
      </div>

      <div
        className={`w-full max-w-xs sm:max-w-sm mx-auto ${
          imageOnRight ? "md:mx-0" : "md:col-start-1 md:row-start-1 md:mx-0"
        }`}
      >
        <ExperienceCarousel images={experience.images} label={experience.venue} />
      </div>
    </div>
  )
}

function ExperienceCarousel({ images, label }: { images: string[]; label: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
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
    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-muted group/carousel">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
              <img
                src={img}
                alt={`${label} — ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all opacity-0 group-hover/carousel:opacity-100 md:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all opacity-0 group-hover/carousel:opacity-100 md:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-foreground" : "bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
