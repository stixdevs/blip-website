import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import ProfileSection from "@/components/ProfileSection";
import StreamSchedule from "@/components/StreamSchedule";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <ProfileSection />
      <StreamSchedule />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Index;
