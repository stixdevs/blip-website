import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl tracking-[0.2em] text-primary text-glow">
          BLIP
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["ABOUT", "SCHEDULE", "CONNECT", "EVENTS"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-display text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="https://www.twitch.tv/blipr6"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-xs tracking-widest px-4 py-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
        >
          📺 WATCH LIVE
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
