import { useState, useEffect } from "react";
import { FaTwitch, FaYoutube, FaDiscord } from "react-icons/fa";
import pfp from "@/assets/pfp.png";
import { emitSectionNavigate } from "@/lib/scrollEvents";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    emitSectionNavigate(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <img
            src={pfp}
            alt="blip profile"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border border-primary/40 shadow-[0_0_8px_rgba(255,0,150,0.6)] group-hover:shadow-[0_0_14px_rgba(255,0,150,0.9)] transition-all duration-300"
          />

          <span className="font-display text-xl tracking-[0.2em] text-primary text-glow group-hover:opacity-90 transition-opacity">
            blip
          </span>
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["ABOUT", "SCHEDULE", "SOCIALS", "SUPPORT"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="group relative font-display text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {item}

              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {[
            {
              icon: <FaTwitch />,
              url: "https://www.twitch.tv/blipr6",
            },
            {
              icon: <FaYoutube />,
              url: "https://www.youtube.com/@blipR6",
            },
            {
              icon: <FaDiscord />,
              url: "https://discord.gg/S9MueNj96E",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-muted-foreground hover:text-primary transition-colors duration-300 text-lg"
            >
              {item.icon}

              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;