import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StagingExperiences } from "@/components/staging-experiences"
import { EventsSection } from "@/components/events-section"
import { BakesGallery } from "@/components/bakes-gallery"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StagingExperiences />
      <EventsSection />
      <BakesGallery />
      <Footer />
    </main>
  )
}
