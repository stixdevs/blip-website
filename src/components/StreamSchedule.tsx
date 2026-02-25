interface ScheduleDay {
  day: string;
  time: string;
  game: string;
  active: boolean;
}

const schedule: ScheduleDay[] = [
  { day: "MON", time: "—", game: "", active: false },
  { day: "TUE", time: "8PM EST", game: "R6 Siege", active: true },
  { day: "WED", time: "—", game: "", active: false },
  { day: "THU", time: "8PM EST", game: "R6 Siege", active: true },
  { day: "FRI", time: "9PM EST", game: "Variety", active: true },
  { day: "SAT", time: "3PM EST", game: "Ark Raiders", active: true },
  { day: "SUN", time: "—", game: "", active: false },
];

const StreamSchedule = () => {
  return (
    <section id="schedule" className="relative py-24 scanline-overlay">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px flex-1 bg-tactical-line" />
          <h2 className="font-display text-2xl tracking-[0.2em] text-primary text-glow">
            // STREAM SCHEDULE
          </h2>
          <span className="h-px flex-1 bg-tactical-line" />
        </div>

        <p className="text-center font-body text-muted-foreground mb-12">
          Catch Blip live on Twitch — times may vary, follow for notifications!
        </p>

        <div className="grid grid-cols-7 gap-2 max-w-3xl mx-auto">
          {schedule.map((s) => (
            <div
              key={s.day}
              className={`text-center p-4 tactical-border transition-all ${
                s.active
                  ? "bg-card box-glow border-primary/30"
                  : "bg-muted/30 opacity-50"
              }`}
            >
              <span className="font-display text-xs tracking-widest text-muted-foreground block mb-2">
                {s.day}
              </span>
              <span className={`font-display text-sm tracking-wider block ${s.active ? "text-primary" : "text-muted-foreground"}`}>
                {s.time}
              </span>
              {s.game && (
                <span className="font-body text-xs text-muted-foreground block mt-1">
                  {s.game}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamSchedule;
