import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { onSectionNavigate } from "@/lib/scrollEvents";

const Footer = () => {
  const footer = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    return onSectionNavigate(() => {
      footer.reset();
    });
  }, [footer.reset]);

  return (
    <footer className="relative py-12 mt-12 border-t border-tactical-line">
      <div
        ref={footer.ref}
        className={`container mx-auto px-6 text-center reveal-scale ${footer.isVisible ? "reveal-visible" : "reveal-hidden"}`}
      >
        <p className="font-display text-xs tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} blip // all rights reserved
        </p>
        <p className="font-body text-xs text-muted-foreground/50 mt-2">
          Built with stix's unpaid labor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
