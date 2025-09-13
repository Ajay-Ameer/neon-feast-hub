import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle, Shield, Heart, ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const mealImages = [
    { name: "Grilled Quinoa Bowl", emoji: "🥗" },
    { name: "Spiced Paneer Curry", emoji: "🍛" },
    { name: "Grilled Salmon", emoji: "🐟" },
    { name: "Fresh Fruit Medley", emoji: "🍓" },
    { name: "Herb-Crusted Chicken", emoji: "🍗" },
    { name: "Vegetable Stir-fry", emoji: "🥒" },
    { name: "Lentil Power Bowl", emoji: "🍲" },
    { name: "Sweet Potato Delight", emoji: "🍠" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mealImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative hero-bg py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="fresh-border text-fresh-green border-fresh-green/50 px-4 py-2 font-orbitron">
                🌱 Revolutionary Food Tech
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-orbitron font-bold leading-tight">
                <span className="text-gradient-fresh pulse-fresh">Healthy Food</span><br />
                <span className="text-gradient-vitality">Delivered Fresh</span><br />
                <span className="text-tech-blue">Every Morning!</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-exo">
                Experience the future of nutrition with our AI-powered meal plans, 
                cooked fresh daily and delivered using patented retort packaging technology 
                that keeps nutrients intact and flavors explosive!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="fresh" className="text-lg px-8 py-4 group">
                <Zap className="mr-2 group-hover:rotate-12 transition-transform" />
                Start My Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="text-lg border-warm-orange text-warm-orange hover:bg-warm-orange/10 group">
                <Play className="mr-2 w-5 h-5" />
                View Meal Plans
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 hover-glow">
                <CheckCircle className="h-5 w-5 text-fresh-green" />
                <span className="font-exo text-foreground">Fresh Daily Delivery</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow">
                <Shield className="h-5 w-5 text-tech-blue" />
                <span className="font-exo text-foreground">Patented Tech</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow">
                <Heart className="h-5 w-5 text-warm-orange" />
                <span className="font-exo text-foreground">Nutrient Intact</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fresh-green/10 to-warm-orange/10 rounded-3xl blur-3xl animate-pulse"></div>
            
            {/* Infinite Scroll Gallery */}
            <div className="relative z-10 h-96 overflow-hidden rounded-3xl bg-gradient-to-br from-light-green to-light-orange shadow-2xl">
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-6 animate-pulse">
                {mealImages.map((meal, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 transform ${
                      index === currentIndex ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
                    }`}
                  >
                    <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 h-full flex flex-col items-center justify-center card-glow">
                      <div className="text-6xl mb-2 filter drop-shadow-lg">
                        {meal.emoji}
                      </div>
                      <p className="text-sm font-medium text-center text-foreground">
                        {meal.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;