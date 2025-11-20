import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import nawabiChicken from "@/assets/hero-meals/nawabi-chicken.png";
import palakMurgh from "@/assets/hero-meals/palak-murgh.png";
import scrambledEggMasala from "@/assets/hero-meals/scrambled-egg-masala.png";
import teriyakiChicken from "@/assets/hero-meals/teriyaki-chicken.png";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const meals = [
    { image: nawabiChicken, name: "Nawabi Chicken", calories: "450 cal", nutrition: "High Protein" },
    { image: palakMurgh, name: "Palak Murgh", calories: "380 cal", nutrition: "Iron Rich" },
    { image: scrambledEggMasala, name: "Scrambled Egg Masala", calories: "320 cal", nutrition: "Balanced" },
    { image: teriyakiChicken, name: "Teriyaki Chicken", calories: "410 cal", nutrition: "Asian Fusion" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % meals.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [meals.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-orange-50 flex items-center overflow-hidden py-12">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">
          {/* Left Side: Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                Backed by Our Nutritionists.
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                Loved by Your Gut.
              </span>
            </h1>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-700 font-medium">Nutritionist Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-700 font-medium">Smart-Packaged</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-700 font-medium">Daily Fresh</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the perfect blend of science and nature with our <strong className="text-green-600">nutritionist-approved meals</strong>, delivered in <strong className="text-green-600">patented smart-packaging</strong> that preserves every nutrient, every flavor, just for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                variant="default" 
                size="lg" 
                className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#plans-pricing">
                  Explore our plans
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#menu-preview">
                  Check our yummy meals
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side: Flex Cards Animation */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-2xl">
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center px-4">
              {/* Flex card container */}
              <div className="flex items-center justify-center gap-2 lg:gap-3 w-full perspective-1000">
                {meals.map((meal, index) => {
                  const isActive = index === activeIndex % meals.length;
                  const position = index - (activeIndex % meals.length);
                  
                  return (
                    <div
                      key={index}
                      className="relative transition-all duration-700 ease-out"
                      style={{
                        flex: isActive ? '3' : '0.5',
                        height: isActive ? '400px' : '300px',
                        zIndex: isActive ? 20 : 10 - Math.abs(position),
                        opacity: isActive ? 1 : 0.6,
                      }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-gradient-to-br from-white to-gray-50">
                        <img 
                          src={meal.image} 
                          alt={meal.name}
                          className="w-full h-full object-cover transition-transform duration-700"
                          style={{
                            transform: isActive ? 'scale(1)' : 'scale(1.2)',
                          }}
                          loading="eager"
                        />
                        
                        {/* Gradient overlay for non-active cards */}
                        {!isActive && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        )}
                        
                        {/* Card details - visible on active card */}
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 lg:p-8 animate-fade-in">
                            <div className="text-white space-y-2 font-safira">
                              <div className="flex items-center gap-2 text-sm lg:text-base text-green-400 font-semibold">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span>Featured Meal</span>
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-bold">{meal.name}</h3>
                              <div className="flex items-center gap-3 text-sm lg:text-base flex-wrap">
                                <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full font-semibold whitespace-nowrap">
                                  {meal.calories}
                                </span>
                                <span className="px-3 py-1.5 bg-orange-500/30 backdrop-blur-sm rounded-full font-medium whitespace-nowrap">
                                  {meal.nutrition}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Card number indicator for non-active cards */}
                        {!isActive && (
                          <div className="absolute top-4 left-4 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-gray-800 shadow-lg">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Progress indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {meals.map((_, index) => (
                  <div
                    key={index}
                    className="h-1.5 rounded-full bg-white/30 backdrop-blur-sm transition-all duration-700"
                    style={{
                      width: index === activeIndex % meals.length ? '32px' : '12px',
                      backgroundColor: index === activeIndex % meals.length ? 'rgb(34, 197, 94)' : 'rgba(255, 255, 255, 0.3)',
                    }}
                  ></div>
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