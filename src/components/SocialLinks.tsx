import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { FaTwitch, FaYoutube, FaDiscord } from "react-icons/fa";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { onSectionNavigate } from "@/lib/scrollEvents";

interface SocialLink {
  name: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  active: boolean;
}

const links: SocialLink[] = [
  {
    name: "TWITCH",
    url: "https://www.twitch.tv/blipr6",
    description: "Live streams & VODs",
    icon: <FaTwitch />,
    active: true,
  },
  {
    name: "YOUTUBE",
    url: "https://www.youtube.com/@blipR6",
    description: "Live streams, highlights & content",
    icon: <FaYoutube />,
    active: true,
  },
  {
    name: "DISCORD",
    url: "https://discord.gg/S9MueNj96E",
    description: "Join the community",
    icon: <FaDiscord />,
    active: true,
  }
];

const SocialLinks = () => {
  const heading = useScrollReveal();
  const grid = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  useEffect(() => {
    return onSectionNavigate(() => {
      heading.reset();
      grid.reset();
    });
  }, [heading.reset, grid.reset]);

  return (
    <section id="socials" className="relative py-12 scanline-overlay">
      <div className="container mx-auto px-6">
        <div
          ref={heading.ref}
          className={`reveal-up ${heading.isVisible ? "reveal-visible" : "reveal-hidden"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px flex-1 bg-tactical-line" />
            <h2 className="font-display text-2xl tracking-[0.2em] text-primary text-glow">
              // socials
            </h2>
            <span className="h-px flex-1 bg-tactical-line" />
          </div>

          <p className="text-center font-body text-muted-foreground mb-14">
            Connect with blip across platforms — follow, subscribe, and join the community!
          </p>
        </div>

        <div
          ref={grid.ref}
          className={`grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] reveal-stagger ${grid.isVisible ? "reveal-visible" : "reveal-hidden"}`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.active ? link.url : undefined}
              target={link.active ? "_blank" : undefined}
              rel={link.active ? "noopener noreferrer" : undefined}
              className={`group relative p-6 bg-card tactical-border transition-all duration-300 box-glow ${
                link.active
                  ? "hover:border-primary cursor-pointer"
                  : "opacity-60 cursor-default"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl text-muted-foreground group-hover:text-primary transition-colors">
                  {link.icon}
                </span>

                {link.active && (
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </div>

              <h3 className="font-display text-lg tracking-widest text-foreground group-hover:text-primary transition-colors mb-1">
                {link.name}
              </h3>

              <p className="font-body text-sm text-muted-foreground">
                {link.description}
              </p>

              {link.active && (
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
