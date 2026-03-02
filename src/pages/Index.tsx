import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TwitchEmbed from "@/components/TwitchEmbed";
import ProfileSection from "@/components/ProfileSection";
import StreamSchedule from "@/components/StreamSchedule";
import SocialLinks from "@/components/SocialLinks";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TwitchEmbed />
      <ProfileSection />
      <StreamSchedule />
      <SocialLinks />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Index;
