const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-tactical-line">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-xs tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} Blip // All rights reserved
        </p>
        <p className="font-body text-xs text-muted-foreground/50 mt-2">
          Built with stix's unpaid labor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
