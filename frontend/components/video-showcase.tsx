export default function VideoShowcase() {
  return (
    <section id="video" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">See Notate in Action</h2>
          <p className="text-lg text-muted-foreground">Watch how Notate transforms your productivity workflow</p>
        </div>

        <div className="paper-card p-4 md:p-8">
          <div className="relative rounded-lg overflow-hidden border border-border/40">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/nLYSbg00A9Q"
                title="Notate Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
