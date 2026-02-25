import { ExternalLink } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  description: string;
  icon: string;
}

const links: SocialLink[] = [
  {
    name: "TWITCH",
    url: "https://twitch.tv",
    description: "Live streams & VODs",
    icon: "📡",
  },
  {
    name: "YOUTUBE",
    url: "https://youtube.com",
    description: "Highlights & content",
    icon: "▶",
  },
  {
    name: "DISCORD",
    url: "https://discord.gg",
    description: "Join the community",
    icon: "💬",
  },
  {
    name: "ETSY STORE",
    url: "https://etsy.com",
    description: "Merch & gear",
    icon: "🛒",
  },
];

const SocialLinks = () => {
  return (
    <section className="relative py-24 scanline-overlay">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px flex-1 bg-tactical-line" />
          <h2 className="font-display text-2xl tracking-[0.2em] text-primary text-glow">
            // CONNECT
          </h2>
          <span className="h-px flex-1 bg-tactical-line" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-card tactical-border transition-all duration-300 hover:border-primary box-glow opacity-0 animate-slide-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{link.icon}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-lg tracking-widest text-foreground group-hover:text-primary transition-colors mb-1">
                {link.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">{link.description}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
