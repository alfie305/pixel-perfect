import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuePropsStrip from "@/components/ValuePropsStrip";
import FeaturedLog from "@/components/FeaturedLog";
import SignalCategories from "@/components/SignalCategories";
import RecentLogs from "@/components/RecentLogs";
import Testimonials from "@/components/Testimonials";
import AboutStrip from "@/components/AboutStrip";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropsStrip />
        <FeaturedLog />
        <SignalCategories />
        <RecentLogs />
        <Testimonials />
        <AboutStrip />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
