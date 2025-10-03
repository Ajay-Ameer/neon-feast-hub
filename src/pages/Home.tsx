import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star,
  ChefHat,
  Truck,
  Package,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/ui/hero-section";
import HowItWorks from "@/components/ui/how-it-works";
import WhyChooseUs from "@/components/ui/why-choose-us";
import MenuPreview from "@/components/ui/menu-preview";
import TestimonialsSection from "@/components/ui/testimonials-section";
import PlansPricing from "@/components/ui/plans-pricing";
import ClosingCTA from "@/components/ui/closing-cta";

// Import vegetable silhouettes
import chilliSilhouette from "@/assets/vegetables/chili-silhouette.png";
import broccoliSilhouette from "@/assets/vegetables/broccoli-silhouette.png";
import spinachSilhouette from "@/assets/vegetables/spinach-silhouette.png";
import bellPepperSilhouette from "@/assets/vegetables/bell-pepper-silhouette.png";
import kaleSilhouette from "@/assets/vegetables/kale-silhouette.png";
import avocadoSilhouette from "@/assets/vegetables/avocado-silhouette.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-orange-50/20 relative overflow-hidden">

      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* How It Works */}
      <HowItWorks />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Menu Preview */}
      <MenuPreview />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Plans & Pricing */}
      <PlansPricing />

      {/* Closing CTA */}
      <ClosingCTA />
    </div>
  );
};

export default Home;