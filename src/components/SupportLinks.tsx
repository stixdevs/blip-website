import { ExternalLink } from "lucide-react";
import { FaDonate, FaGift, FaEtsy } from "react-icons/fa";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SupportLink {
  name: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  active: boolean;
}

const links: SupportLink[] = [
  {
    name: "TIPS",
    url: "https://streamelements.com/blipr6/tip",
    description: "Tip directly on streamelements",
    icon: <FaDonate />,
    active: true,
  },
  {
    name: "THRONE",
    url: "https://throne.com/blipr6",
    description: "Gift a wishlist item",
    icon: <FaGift />,
    active: true,
  },
  {
    name: "ETSY MERCH",
    url: "#",
    description: "Coming soon ✨",
    icon: <FaEtsy />,
    active: false,
  },
];

const SupportLinks = () => {
  const heading = useScrollReveal();
  const grid = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="support" className="relative py-12 scanline-overlay">
      <div className="container mx-auto px-6">
        <div
          ref={heading.ref}
          className={`reveal-up ${heading.isVisible ? "reveal-visible" : "reveal-hidden"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px flex-1 bg-tactical-line" />
            <h2 className="font-display text-2xl tracking-[0.2em] text-secondary text-glow">
              // support
            </h2>
            <span className="h-px flex-1 bg-tactical-line" />
          </div>

          <p className="text-center font-body text-muted-foreground mb-14">
            Support blip — Never required, always appreciated.
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

export default SupportLinks;
