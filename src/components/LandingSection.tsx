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
  params.set("autoplay", "true");
  getParents().forEach((p) => params.append("parent", p));
  return `https://player.twitch.tv/?${params.toString()}`;
};

const LandingSection = () => {
  const [isLive, setIsLive] = useState(false);
  const detectionRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = detectionRef.current;
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
      if (!liveDetected && detectionRef.current) {
        detectionRef.current.src = buildEmbedUrl() + "&t=" + Date.now();
      }
    }, 30000);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden scanline-overlay">

      {/* Hidden Live Detection Iframe */}
      <iframe
        ref={detectionRef}
        src={buildEmbedUrl()}
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
        title="Live detection"
        aria-hidden="true"
        tabIndex={-1}
      />

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
            blip
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground mb-3">
            Twitch Streamer · Rainbow Six Siege · Arc Raiders
          </p>

          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="font-display text-xs tracking-widest text-muted-foreground">
              R6 MAIN: NØKK
            </span>
            <span className="text-tactical-line">|</span>
            <span className="font-display text-xs tracking-widest text-muted-foreground">
              ROLE: ATTACKER
            </span>
          </div>
        </div>

        {/* ===== STREAM EMBED ===== */}
        <div
          className="w-full max-w-6xl animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="tactical-border bg-card box-glow overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={buildEmbedUrl()}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title="blip's Twitch Stream"
              />
            </div>
          </div>
        </div>

        {/* ===== PERSONAL MESSAGE ===== */}
        <div
          className="mt-14 max-w-3xl text-center space-y-6 text-muted-foreground leading-relaxed animate-slide-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          <p className="text-lg text-foreground font-medium">
            Hi, I’m Blip.
          </p>

          <p>
            I went most of my life without playing video games at all, and when I finally decided
            to try one, I picked Rainbow Six Siege — which might be one of the hardest ways to get
            introduced to gaming. It wasn’t easy, but I stuck with it. And somewhere along the way,
            I fell in love — not just with the game, but with the community around it. The voice chats,
            the inside jokes, the random teammates that turn into friends… that’s what really hooked me.
          </p>

          <p>
            I’m still pretty new, still learning, and definitely still making questionable plays.
            Siege can be intense, but I like keeping things light. I’m here for the laughs, the vibes,
            and the moments we get to share — not just the rank. So if you need a break from the pressure,
            come hang out. Queue casual. Make dumb plays. Laugh about it. The game’s more fun when
            we don’t take ourselves too seriously, queens.
          </p>

          <p>
            I’m starting to branch out into new games (Arc Raiders being one of them), and I have big
            dreams of doing this full-time someday. For now, I’m just really grateful you’re here.
          </p>

          <p className="text-primary font-medium">
            Yahs queen. 💀✨
          </p>

          <p className="text-sm opacity-70">
            (Cheeto and Mochi approve.)
          </p>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default LandingSection;