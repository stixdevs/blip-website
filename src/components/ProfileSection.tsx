const ProfileSection = () => {
  return (
    <section id="about" className="relative py-24 scanline-overlay">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px flex-1 bg-tactical-line" />
          <h2 className="font-display text-2xl tracking-[0.2em] text-primary text-glow">
            // OPERATOR PROFILE ✦
          </h2>
          <span className="h-px flex-1 bg-tactical-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile art placeholder */}
          <div className="relative tactical-border bg-card box-glow aspect-[3/4] flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="text-center p-8 relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full tactical-border flex items-center justify-center animate-pulse-glow">
                <span className="font-display text-3xl text-primary">N</span>
              </div>
              <p className="font-display text-sm tracking-[0.2em] text-primary mb-2">
                [ ART INCOMING ]
              </p>
              <p className="font-body text-sm text-muted-foreground max-w-xs">
                Nøkk cosplay art with two feline operators will be deployed here
              </p>
            </div>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/50" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/50" />
          </div>

          {/* Dossier info */}
          <div className="flex flex-col justify-center space-y-6">
            <DossierField label="CODENAME" value="Blip" />
            <DossierField label="PRIMARY GAME" value="Tom Clancy's Rainbow Six Siege" />
            <DossierField label="FAVORITE OPERATOR" value="NØKK — HEL Presence Reduction" />
            <DossierField label="SECONDARY GAME" value="Ark Raiders" />
            <DossierField label="SPECIAL UNITS" value="🐱 Cat #1  ·  🐱 Cat #2" />
            <DossierField label="STATUS" value="Ready for deployment" />

            <div className="pt-4">
              <p className="font-body text-muted-foreground leading-relaxed">
                A tactical operator specializing in stealth gameplay and chaotic energy. 
                Known for clutch plays, wholesome community vibes, and being accompanied 
                by two furry co-streamers who occasionally walk across the keyboard at 
                critical moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DossierField = ({ label, value }: { label: string; value: string }) => (
  <div className="border-b border-tactical-line pb-3">
    <span className="font-display text-xs tracking-[0.2em] text-muted-foreground block mb-1">
      {label}
    </span>
    <span className="font-display text-base tracking-wider text-foreground">
      {value}
    </span>
  </div>
);

export default ProfileSection;
