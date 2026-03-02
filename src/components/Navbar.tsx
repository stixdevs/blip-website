import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-xl tracking-[0.2em] text-primary text-glow">
          BLIP
        </button>
        <div className="hidden md:flex items-center gap-8">
          {["ABOUT", "SCHEDULE", "CONNECT"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-display text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </button>
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
