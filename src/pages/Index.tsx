import Navbar from "@/components/Navbar";
import LandingSection from "@/components/LandingSection";

import ProfileSection from "@/components/ProfileSection";
import StreamSchedule from "@/components/StreamSchedule";
import SocialLinks from "@/components/SocialLinks";
import SupportLinks from "@/components/SupportLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <LandingSection />
      
      <ProfileSection />
      <StreamSchedule />
      <SocialLinks />
      <SupportLinks />
      <Footer />
    </div>
  );
};

export default Index;
