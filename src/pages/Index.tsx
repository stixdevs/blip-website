import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import SocialLinks from "@/components/SocialLinks";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProfileSection />
      <SocialLinks />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Index;
