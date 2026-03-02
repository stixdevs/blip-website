const TWITCH_CHANNEL = "blipr6";

const getParents = () => {
  const parents = new Set<string>();
  parents.add("localhost");
  // Add the current hostname so it always works in whatever environment
  parents.add(window.location.hostname);
  return Array.from(parents);
};

const buildEmbedUrl = () => {
  const params = new URLSearchParams();
  params.set("channel", TWITCH_CHANNEL);
  params.set("muted", "true");
  getParents().forEach((p) => params.append("parent", p));
  return `https://player.twitch.tv/?${params.toString()}`;
};

const TwitchEmbed = () => {
  return (
    <section className="relative py-12 scanline-overlay">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px flex-1 bg-tactical-line" />
          <h2 className="font-display text-xl tracking-[0.2em] text-primary text-glow">
            // LIVE STREAM ✦
          </h2>
          <span className="h-px flex-1 bg-tactical-line" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="tactical-border bg-card box-glow overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={buildEmbedUrl()}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title="Blip's Twitch Stream"
              />
            </div>

            <div className="flex items-center justify-between px-4 py-3 border-t border-border">
              <span className="font-display text-sm tracking-wider text-foreground">
                blipr6
              </span>
              <a
                href="https://www.twitch.tv/blipr6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs tracking-widest px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
              >
                OPEN IN TWITCH →
              </a>
            </div>
          </div>

          <p className="text-center font-body text-sm text-muted-foreground mt-4">
            When Blip is live, the stream appears above automatically. Follow on Twitch for notifications!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwitchEmbed;
