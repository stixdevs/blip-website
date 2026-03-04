import { FaTwitch, FaYoutube, FaDiscord, FaDonate, FaGift, FaEtsy } from "react-icons/fa";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import pfp from "@/assets/pfp.png";

interface LinkItem {
  name: string;
  url: string;
  icon: React.ReactNode;
  external: boolean;
  active: boolean;
}

const linkItems: LinkItem[] = [
  {
    name: "blipr6.com",
    url: "/",
    icon: <Globe className="w-5 h-5" />,
    external: false,
    active: true,
  },
  {
    name: "Tips — StreamElements",
    url: "https://streamelements.com/blipr6/tip",
    icon: <FaDonate className="text-lg" />,
    external: true,
    active: true,
  },
  {
    name: "Throne — Send a Gift!",
    url: "https://throne.com/blipr6",
    icon: <FaGift className="text-lg" />,
    external: true,
    active: true,
  },
  {
    name: "Etsy Merch — Coming Soon ✨",
    url: "#",
    icon: <FaEtsy className="text-lg" />,
    external: false,
    active: false,
  },
];

const socials = [
  { icon: <FaTwitch />, url: "https://www.twitch.tv/blipr6" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/@blipR6" },
  { icon: <FaDiscord />, url: "https://discord.gg/S9MueNj96E" },
];

const Links = () => {
  return (
    <div className="min-h-screen bg-background flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Profile Picture */}
        <img
          src={pfp}
          alt="blip profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-primary/60 shadow-[0_0_20px_rgba(255,0,150,0.4)]"
        />

        {/* Username */}
        <div className="text-center">
          <h1 className="font-display text-2xl tracking-[0.15em] text-primary text-glow">
            @blipr6
          </h1>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Rainbow Six Siege streamer & content creator
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Link Boxes */}
        <div className="w-full flex flex-col gap-3 mt-4">
          {linkItems.map((item) => {
            const classes = `group relative flex items-center gap-4 w-full p-4 bg-card tactical-border transition-all duration-300 box-glow ${
              item.active
                ? "hover:border-primary cursor-pointer"
                : "opacity-50 cursor-default"
            }`;

            const content = (
              <>
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  {item.icon}
                </span>
                <span className="font-display text-sm tracking-widest text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </span>
                {item.active && (
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                )}
              </>
            );

            if (!item.active) {
              return (
                <div key={item.name} className={classes}>
                  {content}
                </div>
              );
            }

            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={item.name} to={item.url} className={classes}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Links;
