import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrokerageMarquee from "@/components/BrokerageMarquee";
import NewsletterFeature from "@/components/NewsletterFeature";
import FeaturedLog from "@/components/FeaturedLog";
import TopicsFeature from "@/components/TopicsFeature";
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
        <BrokerageMarquee />
        <NewsletterFeature />
        <TopicsFeature />
        <section id="latest">
          <FeaturedLog />
        </section>
        <section id="logs">
          <SignalCategories />
          <RecentLogs />
        </section>
        <section id="the-analyst">
          <Testimonials />
        </section>
        <section id="protocol">
          <AboutStrip />
        </section>
        <section id="bottom-cta">
          <BottomCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
