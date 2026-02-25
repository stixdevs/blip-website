import heroImage from "@/assets/hero-operator.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline-overlay">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Night sky with pink glow"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <span className="font-display text-sm tracking-[0.3em] text-primary uppercase animate-flicker">
            📺 LIVE ON TWITCH
          </span>
          <span className="h-px w-12 bg-primary" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-glow text-primary tracking-wider mb-4 animate-slide-in-up">
          BLIP
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-2 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
          Twitch Streamer · Rainbow Six Siege · Ark Raiders
        </p>

        <div className="flex items-center gap-2 mt-2 mb-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="font-display text-xs tracking-widest text-muted-foreground">
            MAIN: NØKK
          </span>
          <span className="text-tactical-line">|</span>
          <span className="font-display text-xs tracking-widest text-muted-foreground">
            ROLE: ATTACKER
          </span>
        </div>

        <LiveStatusBadge />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

const LiveStatusBadge = () => {
  const isLive = false;

  return (
    <a
      href="https://www.twitch.tv/blipr6"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-3 px-6 py-3 tactical-border font-display text-sm tracking-widest uppercase
        transition-all duration-300 hover:scale-105
        ${isLive
          ? 'border-destructive text-destructive box-glow-amber animate-pulse-glow'
          : 'text-muted-foreground hover:text-primary hover:border-primary'
        }
      `}
    >
      <span className={`w-2.5 h-2.5 rounded-full ${isLive ? 'bg-destructive animate-live-pulse' : 'bg-muted-foreground'}`} />
      {isLive ? 'LIVE NOW' : 'OFFLINE'}
    </a>
  );
};

export default HeroSection;
