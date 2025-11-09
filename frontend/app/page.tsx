import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import TripleView from "@/components/triple-view"
import VideoShowcase from "@/components/video-showcase"
import Team from "@/components/team"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <TripleView />
      <VideoShowcase />
      <Team />
      <Footer />
    </main>
  )
}
