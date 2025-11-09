import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, List, Calendar } from "lucide-react"
import Image from "next/image"

export default function TripleView() {
  return (
    <section id="views" className="px-6 py-20 md:py-32 bg-secondary/20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">Three Powerful Views</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Switch between views to work the way that fits your thinking
          </p>
        </div>

        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-transparent gap-2">
            <TabsTrigger
              value="timeline"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted text-foreground"
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Timeline</span>
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted text-foreground"
            >
              <List className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">List</span>
            </TabsTrigger>
            <TabsTrigger
              value="analysis"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted text-foreground"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Analysis</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="mt-0">
            <Card className="paper-card border-border/60">
              <CardHeader>
                <CardTitle>Timeline View</CardTitle>
                <CardDescription>See your calendar events and chronological notes in perfect harmony</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden border border-border/40">
                  <Image
                    src="/Timeline.png"
                    alt="Timeline view showing daily schedule organized by time periods"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <Card className="paper-card border-border/60">
              <CardHeader>
                <CardTitle>List View</CardTitle>
                <CardDescription>Apple Notes-style tri-pane browsing with powerful filters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden border border-border/40">
                  <Image
                    src="/List.png"
                    alt="List view showing tagged events, notes, and filtering options"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="mt-0">
            <Card className="paper-card border-border/60">
              <CardHeader>
                <CardTitle>Analysis View</CardTitle>
                <CardDescription>Charts, heatmaps, and insights into your time distribution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-0">
                <div className="relative rounded-t-lg overflow-hidden border-b-0 border border-border/40">
                  <Image
                    src="/Analysis1.png"
                    alt="Analytics overview showing time tracking and tag distribution"
                    width={1600}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="relative rounded-b-lg overflow-hidden border-t-0 border border-border/40">
                  <Image
                    src="/Analysis2.png"
                    alt="Detailed analytics with heatmaps, focus sessions, and insights"
                    width={1600}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
