import { ExternalLink } from "lucide-react";
import { FaTwitch } from "react-icons/fa";

interface ScheduleDay {
  day: string;
  time: string;
  game: string;
  active: boolean;
}

const schedule: ScheduleDay[] = [
  { day: "MON", time: "6PM EST", game: "R6 Siege", active: true },
  { day: "TUE", time: "—", game: "", active: false },
  { day: "WED", time: "6PM EST", game: "R6 Siege", active: true },
  { day: "THU", time: "—", game: "", active: false },
  { day: "FRI", time: "6PM EST", game: "R6 Siege", active: true },
  { day: "SAT", time: "6PM EST", game: "R6 Siege", active: true },
  { day: "SUN", time: "—", game: "", active: false },
];

const TWITCH_URL = "https://twitch.tv/blipr6";

const StreamSchedule = () => {
  const todayIndex = new Date().getDay(); // 0 = Sun
  const dayMap = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = dayMap[todayIndex];

  return (
    <section id="schedule" className="relative py-28 scanline-overlay">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px flex-1 bg-tactical-line" />
          <h2 className="font-display text-2xl tracking-[0.2em] text-primary text-glow">
            // SCHEDULE
          </h2>
          <span className="h-px flex-1 bg-tactical-line" />
        </div>

        <p className="text-center font-body text-muted-foreground mb-14">
          Catch Blip live on Twitch — times may vary, follow for notifications!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto place-items-center">
          {schedule.map((s) => {
            const isToday = s.day === today;
            const isClickable = isToday && s.active;

            const CardContent = (
              <div
                className={`group relative w-full max-w-[160px] text-center p-5 bg-card tactical-border transition-all duration-300 box-glow overflow-hidden
                ${
                  isToday
                    ? "border-primary"
                    : s.active
                    ? "border-primary/30"
                    : "opacity-50"
                }
                ${
                  isClickable
                    ? "hover:border-primary cursor-pointer"
                    : ""
                }`}
              >
                {/* Background fade — ONLY for today */}
                {isClickable && (
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                )}

                {/* Twitch icon centered — ONLY for today */}
                {isClickable && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <span className="font-display text-xs tracking-widest text-primary mb-2">
                      WATCH ON
                    </span>
                    <FaTwitch className="text-primary text-4xl drop-shadow-xl" />
                  </div>
                )}

                {/* External link icon — ONLY on hover */}
                {isClickable && (
                  <ExternalLink className="absolute top-3 right-3 w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
                )}

                {/* Main content */}
                <div
                  className={`relative z-0 transition-opacity duration-300 ${
                    isClickable ? "group-hover:opacity-30" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-xs tracking-widest text-muted-foreground">
                      {s.day}
                    </span>
                  </div>

                  <span
                    className={`font-display text-base tracking-wider block mb-1 ${
                      s.active ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.time}
                  </span>

                  {s.game && (
                    <span className="font-body text-xs text-muted-foreground">
                      {s.game}
                    </span>
                  )}
                </div>

                {/* Bottom bar (SocialLinks style) */}
                {isClickable && (
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full z-30" />
                )}
              </div>
            );

            return (
              <div key={s.day} className="w-full flex flex-col items-center">
                {/* Always reserve space for TODAY label */}
                <div className="h-4 flex items-center justify-center mb-2">
                  {isToday && (
                    <span className="text-[10px] font-display tracking-wider text-primary">
                      TODAY
                    </span>
                  )}
                </div>

                {isClickable ? (
                  <a
                    href={TWITCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div className="w-full flex justify-center">
                    {CardContent}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StreamSchedule;