import { useState, useEffect, useRef } from "react";
import heroImage from "@/assets/background-image.png";

const TWITCH_CHANNEL = "blipr6";

const getParents = () => {
  const parents = new Set<string>();
  parents.add("localhost");
  parents.add(window.location.hostname);
  return Array.from(parents);
};

const buildEmbedUrl = () => {
  const params = new URLSearchParams();
  params.set("channel", TWITCH_CHANNEL);
  params.set("muted", "false");
  params.set("autoplay", "true");
  getParents().forEach((p) => params.append("parent", p));
  return `https://player.twitch.tv/?${params.toString()}`;
};

const HeroSection = () => {
  const [isLive, setIsLive] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let liveDetected = false;

    const handleLoad = () => {
      // Give Twitch player a moment to initialize
      setTimeout(() => {
        try {
          // If video actually started rendering,
          // iframe dimensions update due to player UI
          const rect = iframe.getBoundingClientRect();

          // Live player forces repaint + height stabilization
          if (rect.height > 0) {
            liveDetected = true;
            setIsLive(true);
          }
        } catch {
          setIsLive(false);
        }
      }, 2500);
    };

    iframe.addEventListener("load", handleLoad);

    // retry check every 30s
    const interval = setInterval(() => {
      if (!liveDetected) {
        iframe.src = buildEmbedUrl() + "&t=" + Date.now();
      }
    }, 30000);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      clearInterval(interval);
    };
  }, []);

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

      {/* Content — two-column on md+ */}
      <div className="relative z-20 container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: branding */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
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
            Twitch Streamer · Rainbow Six Siege · Arc Raiders
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

          <LiveStatusBadge isLive={isLive} />
        </div>

        {/* Right: embedded stream */}
        <div className="w-full animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="tactical-border bg-card box-glow overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                ref={iframeRef}
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
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

const LiveStatusBadge = ({ isLive }: { isLive: boolean }) => {
  return (
    <a
      href="https://www.twitch.tv/blipr6"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-3 px-6 py-3 tactical-border font-display text-sm tracking-widest uppercase
        transition-all duration-300 hover:scale-105
        ${isLive
          ? 'border-destructive text-destructive box-glow-amber'
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
