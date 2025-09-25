import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyClientsLoveUs from "@/components/WhyClientsLoveUs";
import WhatWeDo from "@/components/WhatWeDo";
import Reviews from "@/components/Reviews";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyClientsLoveUs />
      <WhatWeDo />
      <Reviews />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
