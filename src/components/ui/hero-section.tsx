import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle, Shield, Heart, ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentMeal, setCurrentMeal] = useState(0);
  
  const meals = [
    { emoji: "🥗", name: "Fresh Salad Bowl", calories: "320 cal" },
    { emoji: "🍲", name: "Protein Power Bowl", calories: "450 cal" },
    { emoji: "🥙", name: "Wrap Delight", calories: "380 cal" },
    { emoji: "🍱", name: "Balanced Bento", calories: "420 cal" },
    { emoji: "🥘", name: "Hearty Curry", calories: "390 cal" },
    { emoji: "🍜", name: "Nourishing Soup", calories: "280 cal" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMeal((prev) => (prev + 1) % meals.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [meals.length]);

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Motivational Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-fresh-green/8 rounded-full blur-3xl pulse-health"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-vitality-orange/8 rounded-full blur-3xl pulse-health delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-success-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Motivational Health Focus */}
          <div className="space-y-6 md:space-y-10 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-success-green/10 border border-success-green/20">
                <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-exo font-medium text-success-green">Your Health Transformation Starts Here</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold leading-tight">
                <span className="text-gradient-fresh">Healthy Food</span>
                <br />
                <span className="text-foreground">Delivered Fresh</span>
                <br />
                <span className="text-gradient-vitality">Every Morning!</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 font-exo leading-relaxed">
                Experience the future of nutrition with our <strong className="text-fresh-green">personalized meal plans</strong>, 
                crafted fresh daily and delivered using patented smart packaging 
                technology that locks in <strong className="text-vitality-orange">flavor and nutrition</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button variant="fresh" size="lg" className="text-base md:text-lg px-6 md:px-10 py-4 md:py-6 font-orbitron font-semibold bounce-in">
                Start My Transformation
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-10 py-4 md:py-6 font-orbitron border-2 border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white health-border">
                View Meal Plans
              </Button>
            </div>

            {/* Health-focused Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
              <div className="flex items-center gap-3 p-3 rounded-lg health-card">
                <div className="health-icon w-10 h-10 flex items-center justify-center">
                  <span className="text-lg">🚚</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-fresh-green font-orbitron">Free Delivery</div>
                  <div className="text-xs text-muted-foreground font-exo">Daily, Fresh & Fast</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg vitality-card">
                <div className="vitality-icon w-10 h-10 flex items-center justify-center">
                  <span className="text-lg">🎯</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-vitality-orange font-orbitron">Custom Plans</div>
                  <div className="text-xs text-muted-foreground font-exo">Tailored for You</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg health-card">
                <div className="health-icon w-10 h-10 flex items-center justify-center">
                  <span className="text-lg">✨</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-success-green font-orbitron">Quality Assured</div>
                  <div className="text-xs text-muted-foreground font-exo">Premium Ingredients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Meal Display */}
          <div className="relative order-first lg:order-last">
            <div className="relative mx-auto w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
              {/* Motivational Background Rings */}
              <div className="absolute inset-0 bg-gradient-fresh rounded-full opacity-10 pulse-health"></div>
              <div className="absolute inset-4 bg-gradient-vitality rounded-full opacity-15 pulse-health delay-500"></div>
              
              {/* Enhanced Meal Card */}
              <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border-2 border-fresh-green/20 health-card float-gentle">
                <div className="text-center space-y-4 md:space-y-6">
                  <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl bounce-in" key={currentMeal}>
                    {meals[currentMeal].emoji}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-orbitron font-bold text-fresh-green">
                      {meals[currentMeal].name}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vitality-orange/10 border border-vitality-orange/20">
                      <span className="text-sm font-exo font-medium text-vitality-orange">
                        {meals[currentMeal].calories}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Indicators */}
                  <div className="flex justify-center space-x-3 pt-2">
                    {meals.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          index === currentMeal 
                            ? 'bg-fresh-green progress-glow' 
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Health Indicator */}
                  <div className="flex items-center justify-center gap-2 text-sm text-success-green font-exo">
                    <span className="text-lg">💚</span>
                    <span>Heart-Healthy Choice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;