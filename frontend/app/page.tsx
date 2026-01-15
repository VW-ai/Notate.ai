import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import { CaptureSection } from "@/components/sections/capture-section"
import { HabitsSection } from "@/components/sections/habits-section"
import { OrganizeSection } from "@/components/sections/organize-section"
import { UseSection } from "@/components/sections/use-section"
import Team from "@/components/team"
import Footer from "@/components/footer"
import { ProgressDots } from "@/components/progress-dots"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ProgressDots />
      <Hero />
      <CaptureSection />
      <HabitsSection />
      <OrganizeSection />
      <UseSection />
      <Team />
      <Footer />
    </main>
  )
}
