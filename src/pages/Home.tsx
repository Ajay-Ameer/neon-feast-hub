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
import FoodCarousel from "@/components/FoodCarousel";
import HeroSection from "@/components/ui/hero-section";
import HowItWorks from "@/components/ui/how-it-works";
import SectionHeader from "@/components/ui/section-header";
import FeatureCard from "@/components/ui/feature-card";
import PlanCard from "@/components/ui/plan-card";
import TestimonialCard from "@/components/ui/testimonial-card";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-pastel-green/20 to-pastel-orange/10 relative overflow-hidden">
      {/* Floating Vegetable Decorations */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-10 left-10 text-8xl text-fresh-green animate-float-slow">🥕</div>
        <div className="absolute top-20 right-20 text-6xl text-success-green animate-float-medium">🥬</div>
        <div className="absolute bottom-40 left-20 text-7xl text-vitality-orange animate-float-fast">🍅</div>
        <div className="absolute bottom-20 right-40 text-5xl text-fresh-green animate-float-slow">🥒</div>
        <div className="absolute top-1/2 left-1/4 text-6xl text-success-green animate-float-medium">🥦</div>
        <div className="absolute bottom-1/3 right-1/4 text-7xl text-vitality-orange animate-float-fast">🌶️</div>
        <div className="absolute top-1/3 right-10 text-5xl text-fresh-green animate-float-slow">🫑</div>
        <div className="absolute bottom-10 left-1/3 text-6xl text-success-green animate-float-medium">🥬</div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* How It Works Animation */}
      <HowItWorks />

      {/* Why Choose ZestyMonk */}
      <section className="py-20 bg-gradient-to-b from-light-green/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Why Choose ZestyMonk?"
            subtitle="We're not just another meal delivery service - we're your health transformation partner"
            gradient="fresh"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Patented Technology",
                description: "Our exclusive retort packaging keeps nutrients 98% intact while enhancing flavors",
                gradient: "bg-gradient-to-r from-fresh-green to-tech-blue"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Personalized Nutrition",
                description: "AI-powered meal planning based on your unique health profile and goals",
                gradient: "bg-gradient-to-r from-tech-blue to-warm-orange"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fresh Daily Delivery",
                description: "No meal prep, no cooking stress - just heat and enjoy restaurant-quality meals",
                gradient: "bg-gradient-to-r from-warm-orange to-accent-orange"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "100% Natural",
                description: "No preservatives, no artificial additives - just pure, wholesome ingredients",
                gradient: "bg-gradient-to-r from-accent-orange to-fresh-green"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Chef-Crafted",
                description: "Every meal designed by nutrition experts and prepared by professional chefs",
                gradient: "bg-gradient-to-r from-vibrant-green to-tech-blue"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Instant Results",
                description: "Feel the energy boost and health improvements from day one",
                gradient: "bg-gradient-to-r from-tech-blue to-fresh-green"
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
      <section className="py-20 bg-gradient-to-b from-background to-light-orange/10">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Choose Your Health Journey"
            subtitle="Tailored nutrition plans for every lifestyle and health goal"
            gradient="vitality"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Weight Loss (Veg/Non-Veg)",
                description: "Burn fat, boost metabolism",
                price: "₹22,999",
                color: "fresh-green",
                features: ["Calorie-controlled", "Fat-burning foods", "Portion optimized"]
              },
              {
                name: "Muscle Gain (Veg/Non-Veg)",
                description: "Build strength, gain muscle",
                price: "₹24,999",
                color: "tech-blue",
                features: ["High protein", "Recovery foods", "Performance focused"]
              },
              {
                name: "Diabetic-Friendly (Veg/Non-Veg)",
                description: "Blood sugar management",
                price: "₹23,999",
                color: "warm-orange",
                features: ["Low glycemic", "Sugar-free", "Doctor approved"]
              },
              {
                name: "General Wellness (Veg/Non-Veg)",
                description: "Balanced nutrition",
                price: "₹21,999",
                color: "vibrant-green",
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
            <Button variant="fresh" size="lg" className="text-lg px-8">
              View All Plans & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Food Carousel */}
      <FoodCarousel />

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="What Our Members Say"
            subtitle="Real transformations, real results, real taste explosions!"
            gradient="fresh"
          />

          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="py-20 bg-gradient-to-r from-light-green/20 to-light-orange/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fresh-green/5 to-warm-orange/5 animate-pulse"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-orbitron font-bold text-gradient-fresh pulse-fresh">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-muted-foreground font-exo">
              Join thousands of healthy, happy ZestyMonk members. Your taste buds and body will thank you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="fresh" size="lg" className="text-lg px-8 py-4">
                <Zap className="mr-2" />
                Start My Free Trial
              </Button>
              <Button variant="vitality" size="lg" className="text-lg">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-muted-foreground font-exo">
              🌱 Limited time: First week FREE for new members!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;