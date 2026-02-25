import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface GameEvent {
  id: string;
  title: string;
  date: string;
  game: string;
  spotsLeft: number;
  totalSpots: number;
  description: string;
}

const upcomingEvents: GameEvent[] = [
  {
    id: "1",
    title: "VIEWER NIGHT: R6 SIEGE",
    date: "2026-03-07",
    game: "Rainbow Six Siege",
    spotsLeft: 3,
    totalSpots: 5,
    description: "Squad up with the community! Casual matches, good vibes.",
  },
  {
    id: "2",
    title: "ARK RAIDERS RAID PARTY",
    date: "2026-03-14",
    game: "Ark Raiders",
    spotsLeft: 8,
    totalSpots: 10,
    description: "Survival co-op stream — loot, build, survive together.",
  },
];

const EventsSection = () => {
  return (
    <section className="relative py-24 scanline-overlay">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px flex-1 bg-tactical-line" />
          <h2 className="font-display text-2xl tracking-[0.2em] text-secondary">
            // OPERATIONS
          </h2>
          <span className="h-px flex-1 bg-tactical-line" />
        </div>

        <p className="text-center font-body text-muted-foreground mb-12">
          Sign up for upcoming viewer events and play with the squad
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ event }: { event: GameEvent }) => {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || username.trim().length > 100) {
      toast({ title: "Please enter a valid username", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({
      title: "🎯 Entry submitted!",
      description: `You've been entered for ${event.title}`,
    });
  };

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-card tactical-border p-6 box-glow relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/70 to-transparent" />

      <div className="flex items-center justify-between mb-4">
        <span className="font-display text-xs tracking-widest text-secondary">
          {formattedDate}
        </span>
        <span className="font-display text-xs tracking-widest text-muted-foreground">
          {event.spotsLeft}/{event.totalSpots} SLOTS
        </span>
      </div>

      <h3 className="font-display text-lg tracking-wider text-foreground mb-2">
        {event.title}
      </h3>

      <p className="font-body text-sm text-muted-foreground mb-6">
        {event.description}
      </p>

      {/* Spots bar */}
      <div className="w-full h-1 bg-muted rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-secondary rounded-full transition-all duration-500"
          style={{ width: `${((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100}%` }}
        />
      </div>

      {submitted ? (
        <div className="text-center py-3">
          <span className="font-display text-sm tracking-widest text-primary">
            ✓ ENTRY CONFIRMED
          </span>
        </div>
      ) : (
        <form onSubmit={handleSignup} className="flex gap-2">
          <Input
            placeholder="Your gamertag..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={100}
            className="bg-muted border-tactical-line font-display text-sm tracking-wider placeholder:text-muted-foreground/50 focus:border-primary"
          />
          <Button
            type="submit"
            variant="outline"
            className="font-display text-xs tracking-widest border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground whitespace-nowrap"
          >
            ENTER
          </Button>
        </form>
      )}
    </div>
  );
};

export default EventsSection;
