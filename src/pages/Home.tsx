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
import SectionHeader from "@/components/ui/section-header";
import FeatureCard from "@/components/ui/feature-card";
import PlanCard from "@/components/ui/plan-card";
import TestimonialCard from "@/components/ui/testimonial-card";

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

      {/* How It Works Animation */}
      <HowItWorks />

      {/* Why Choose ZestyMonk */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-subtle/30 to-cream-pure relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-light/5 via-transparent to-coral-light/5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeader 
            title="Why Choose ZestyMonk?"
            subtitle="We're not just another meal delivery service - we're your health transformation partner"
            gradient="fresh"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Patented Technology",
                description: "Our exclusive retort packaging keeps nutrients 98% intact while enhancing flavors",
                gradient: "bg-gradient-to-r from-emerald-deep to-emerald-rich"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Personalized Nutrition",
                description: "AI-powered meal planning based on your unique health profile and goals",
                gradient: "bg-gradient-to-r from-emerald-rich to-coral-warm"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fresh Daily Delivery",
                description: "No meal prep, no cooking stress - just heat and enjoy restaurant-quality meals",
                gradient: "bg-gradient-to-r from-coral-warm to-coral-bright"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "100% Natural",
                description: "No preservatives, no artificial additives - just pure, wholesome ingredients",
                gradient: "bg-gradient-to-r from-coral-bright to-emerald-deep"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Chef-Crafted",
                description: "Every meal designed by nutrition experts and prepared by professional chefs",
                gradient: "bg-gradient-to-r from-emerald-soft to-emerald-deep"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Instant Results",
                description: "Feel the energy boost and health improvements from day one",
                gradient: "bg-gradient-to-r from-coral-soft to-emerald-rich"
              }
            ].map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans Preview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cream-pure to-coral-subtle/20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-subtle/10 via-transparent to-coral-light/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeader 
            title="Choose Your Health Journey"
            subtitle="Tailored nutrition plans for every lifestyle and health goal"
            gradient="vitality"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                name: "Weight Loss (Veg/Non-Veg)",
                description: "Burn fat, boost metabolism",
                price: "₹22,999",
                color: "emerald-deep",
                features: ["Calorie-controlled", "Fat-burning foods", "Portion optimized"]
              },
              {
                name: "Muscle Gain (Veg/Non-Veg)",
                description: "Build strength, gain muscle",
                price: "₹24,999",
                color: "emerald-rich",
                features: ["High protein", "Recovery foods", "Performance focused"]
              },
              {
                name: "Diabetic-Friendly (Veg/Non-Veg)",
                description: "Blood sugar management",
                price: "₹23,999",
                color: "coral-warm",
                features: ["Low glycemic", "Sugar-free", "Doctor approved"]
              },
              {
                name: "General Wellness (Veg/Non-Veg)",
                description: "Balanced nutrition",
                price: "₹21,999",
                color: "emerald-soft",
                features: ["All nutrients", "Immunity boost", "Energy focused"]
              }
            ].map((plan, index) => (
              <PlanCard 
                key={index}
                title={plan.name}
                description={plan.description}
                price={plan.price}
                features={plan.features}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="fresh" size="lg" className="text-lg px-8" asChild>
              <Link to="/plans">View All Plans & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Food Carousel */}
      <FoodCarousel />

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-subtle/20 to-cream-pure relative">
        <div className="absolute inset-0 bg-gradient-to-r from-coral-subtle/10 via-transparent to-emerald-light/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeader 
            title="What Our Members Say"
            subtitle="Real transformations, real results, real taste explosions!"
            gradient="fresh"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Software Engineer",
                content: "Lost 15kg in 3 months! The meals are so delicious, I never felt like I was on a diet. ZestyMonk changed my life!",
                rating: 5,
                image: "👩‍💻"
              },
              {
                name: "Rohit Kumar",
                role: "Fitness Trainer",
                content: "As a trainer, I recommend ZestyMonk to all my clients. The muscle gain plan is perfect - high protein and incredibly tasty!",
                rating: 5,
                image: "🏋️‍♂️"
              },
              {
                name: "Dr. Anjali Mehta",
                role: "Diabetologist",
                content: "The diabetic-friendly plan is scientifically sound. My patients love the taste and their blood sugar levels have improved significantly.",
                rating: 5,
                image: "👩‍⚕️"
              }
            ].map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-emerald-deep to-emerald-rich relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-coral-warm/10 to-emerald-soft/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-emerald-light/5 to-coral-light/5"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-orbitron font-bold text-cream-pure drop-shadow-lg">
              Ready to Transform Your Health?
            </h2>
            <p className="text-lg md:text-xl text-cream-soft/90 font-exo font-medium">
              Join thousands of healthy, happy ZestyMonk members. Your taste buds and body will thank you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button variant="default" size="lg" className="text-lg px-8 py-4 bg-coral-warm hover:bg-coral-bright text-cream-pure font-semibold shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                <Link to="/plans">
                  <Zap className="mr-2" />
                  View Meal Plans
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-2 border-cream-pure text-cream-pure hover:bg-cream-pure hover:text-emerald-deep font-semibold transition-all duration-300" asChild>
                <Link to="/plans">Learn More</Link>
              </Button>
            </div>
            <p className="text-sm text-cream-soft/80 font-exo font-medium">
              🌱 Limited time: First week FREE for new members!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;