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
import FoodCarousel from "@/components/FoodCarousel";
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
    <div className="min-h-screen bg-gradient-to-br from-cream-pure via-emerald-subtle to-coral-subtle relative overflow-hidden">
      {/* Floating Vegetable Silhouettes - Elegant Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img src={chilliSilhouette} alt="" className="absolute top-16 left-12 w-16 h-16 opacity-40 animate-float-gentle filter drop-shadow-sm" style={{color: 'hsl(var(--emerald-deep))'}} />
        <img src={spinachSilhouette} alt="" className="absolute top-32 right-24 w-20 h-20 opacity-30 animate-float-elegant filter drop-shadow-sm" style={{color: 'hsl(var(--emerald-rich))'}} />
        <img src={broccoliSilhouette} alt="" className="absolute bottom-48 left-16 w-18 h-18 opacity-35 animate-float-smooth filter drop-shadow-sm" style={{color: 'hsl(var(--coral-warm))'}} />
        <img src={bellPepperSilhouette} alt="" className="absolute bottom-32 right-32 w-14 h-14 opacity-25 animate-float-gentle filter drop-shadow-sm" style={{color: 'hsl(var(--emerald-soft))'}} />
        <img src={kaleSilhouette} alt="" className="absolute top-1/2 left-1/4 w-22 h-22 opacity-20 animate-float-elegant filter drop-shadow-sm" style={{color: 'hsl(var(--emerald-deep))'}} />
        <img src={avocadoSilhouette} alt="" className="absolute bottom-1/3 right-1/4 w-16 h-16 opacity-30 animate-float-smooth filter drop-shadow-sm" style={{color: 'hsl(var(--coral-bright))'}} />
        <img src={chilliSilhouette} alt="" className="absolute top-1/3 right-16 w-12 h-12 opacity-25 animate-float-gentle filter drop-shadow-sm" style={{color: 'hsl(var(--emerald-rich))'}} />
        <img src={spinachSilhouette} alt="" className="absolute bottom-16 left-1/3 w-18 h-18 opacity-35 animate-float-elegant filter drop-shadow-sm" style={{color: 'hsl(var(--coral-soft))'}} />
        <img src={broccoliSilhouette} alt="" className="absolute top-1/4 left-1/2 w-14 h-14 opacity-20 animate-float-smooth filter drop-shadow-sm" style={{color: 'hsl(var(--emerald-deep))'}} />
        <img src={bellPepperSilhouette} alt="" className="absolute bottom-1/4 right-1/3 w-16 h-16 opacity-30 animate-float-gentle filter drop-shadow-sm" style={{color: 'hsl(var(--coral-warm))'}} />
        
        {/* Additional subtle decorative elements */}
        <div className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-emerald-light/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-1/4 w-40 h-40 bg-gradient-to-br from-coral-light/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-emerald-subtle/30 to-transparent rounded-full blur-lg"></div>
      </div>

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

      {/* Food Carousel */}
      <FoodCarousel />

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