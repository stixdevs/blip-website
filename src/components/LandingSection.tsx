import { useState, useEffect, useRef } from "react";
import bgImage from "@/assets/background-image.png";

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

const LandingSection = () => {
  const [isLive, setIsLive] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let liveDetected = false;

    const handleLoad = () => {
      setTimeout(() => {
        try {
          const rect = iframe.getBoundingClientRect();
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden scanline-overlay">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Night sky with pink glow"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20 flex flex-col items-center">

        {/* ===== TOP BRANDING ===== */}
        <div className="text-center max-w-3xl mb-10 animate-slide-in-up">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-display text-sm tracking-[0.3em] text-primary uppercase animate-flicker">
              LIVE ON TWITCH
            </span>
            <span className="h-px w-12 bg-primary" />
          </div>

          <h1 className="font-display text-6xl md:text-8xl text-primary text-glow tracking-wider mb-4">
            BLIP
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground mb-3">
            Twitch Streamer · Rainbow Six Siege · Arc Raiders
          </p>

          <div className="flex justify-center items-center gap-3 mb-6">
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

        {/* ===== LARGE STREAM EMBED ===== */}
        <div
          className="w-full max-w-6xl animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="tactical-border bg-card box-glow overflow-hidden">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                ref={iframeRef}
                src={buildEmbedUrl()}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title="Blip's Twitch Stream"
              />
            </div>

            <div className="flex items-center justify-between px-5 py-3 border-t border-border">
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
        ${
          isLive
            ? "border-destructive text-destructive box-glow-amber"
            : "text-muted-foreground hover:text-primary hover:border-primary"
        }
      `}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full ${
          isLive
            ? "bg-destructive animate-live-pulse"
            : "bg-muted-foreground"
        }`}
      />
      {isLive ? "LIVE NOW" : "OFFLINE"}
    </a>
  );
};

export default LandingSection;