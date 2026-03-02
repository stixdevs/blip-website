import profileArt from "@/assets/operator-art.png";

const ProfileSection = () => {
  return (
    <section id="about" className="relative py-12 scanline-overlay">
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
            <img
              src={profileArt}
              alt="blip as Nøkk with two cats, Cheeto & Mochie"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/50" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/50" />
          </div>

          {/* Dossier info */}
          <div className="flex flex-col justify-center space-y-6">
            <DossierField label="CODENAME" value="blip" />
            <DossierField label="PRIMARY GAME" value="Tom Clancy's Rainbow Six Siege" />
            <DossierField label="FAVORITE R6 OPERATOR" value="NØKK — HEL Presence Reduction" />
            <DossierField label="SECONDARY GAME" value="Arc Raiders" />
            <DossierField label="SPECIAL UNITS" value="🐈 cheeto  ·  🐈‍⬛ mochie" />
            <DossierField label="STATUS" value="Ready for chaos" />

            <div className="pt-4">
              <p className="font-body text-muted-foreground leading-relaxed">
                A stealth operator in theory, chaos operator in practice.
                Known for questionable decisions, accidental destruction,
                clutch moments that shouldn’t work, and a community that
                shows up equally for the gameplay and the laughs. Occasionally
                assisted by two furry co-streamers with zero tactical discipline.
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
