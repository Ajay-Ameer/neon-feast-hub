import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import mediterraneanBowl from "@/assets/meals/mediterranean-bowl.jpg";
import chickenWrap from "@/assets/meals/chicken-wrap.jpg";
import powerBowl from "@/assets/meals/power-bowl.jpg";
import grilledSalmon from "@/assets/meals/grilled-salmon.jpg";
import paneerCurry from "@/assets/meals/spiced-paneer-curry.jpg";
import buddhaBowl from "@/assets/meals/buddha-bowl-deluxe.jpg";
import grilledChickenQuinoa from "@/assets/meals/grilled-chicken-quinoa.jpg";
import salmonTeriyaki from "@/assets/meals/salmon-teriyaki-bowl.jpg";
import turkeyZucchini from "@/assets/meals/turkey-zucchini-noodles.jpg";
import tofuStirFry from "@/assets/meals/tofu-stir-fry.jpg";
import greekSalad from "@/assets/meals/greek-halloumi-salad.jpg";
import coconutCurry from "@/assets/meals/coconut-curry-lentils.jpg";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const meals = [
    { image: mediterraneanBowl, name: "Mediterranean Bowl", calories: "420 cal", nutrition: "High Protein" },
    { image: powerBowl, name: "Quinoa Power Bowl", calories: "485 cal", nutrition: "Plant-Based" },
    { image: chickenWrap, name: "Lean Chicken Wrap", calories: "375 cal", nutrition: "Balanced" },
    { image: grilledSalmon, name: "Grilled Salmon", calories: "390 cal", nutrition: "Omega-3 Rich" },
    { image: paneerCurry, name: "Spiced Paneer Curry", calories: "425 cal", nutrition: "Flavorful" },
    { image: buddhaBowl, name: "Buddha Bowl Deluxe", calories: "450 cal", nutrition: "Nutrient-Dense" },
    { image: grilledChickenQuinoa, name: "Grilled Chicken Quinoa", calories: "410 cal", nutrition: "Protein-Packed" },
    { image: salmonTeriyaki, name: "Salmon Teriyaki Bowl", calories: "445 cal", nutrition: "Asian Fusion" },
    { image: turkeyZucchini, name: "Turkey Zucchini Noodles", calories: "340 cal", nutrition: "Low-Carb" },
    { image: tofuStirFry, name: "Tofu Stir-Fry", calories: "380 cal", nutrition: "Vegan" },
    { image: greekSalad, name: "Greek Halloumi Salad", calories: "395 cal", nutrition: "Fresh & Light" },
    { image: coconutCurry, name: "Coconut Curry Lentils", calories: "405 cal", nutrition: "Comfort Food" }
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-knockout font-bold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                Gut loving delicacies
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">
                Delivered Fresh
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Personalized meal plans, freshly crafted daily, delivered with patented smart-packaging 
              technology that locks in <strong className="text-green-600">flavor and health</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="default" 
                size="lg" 
                className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/plans">Start My Transition</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold transition-all duration-300"
                asChild
              >
                <Link to="/plans">View Meal Plans</Link>
              </Button>
            </div>
          </div>

          {/* Right Side: Flex Cards Animation */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-2xl">
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center px-4">
              {/* Flex card container */}
              <div className="flex items-center justify-center gap-2 lg:gap-3 w-full perspective-1000">
                {meals.slice(0, 5).map((meal, index) => {
                  const isActive = index === activeIndex % 5;
                  const position = index - (activeIndex % 5);
                  
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
                            <div className="text-white space-y-2">
                              <div className="flex items-center gap-2 text-sm lg:text-base text-green-400 font-semibold">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span>Featured Meal</span>
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-bold">{meal.name}</h3>
                              <div className="flex items-center gap-4 text-sm lg:text-base">
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-semibold">
                                  {meal.calories}
                                </span>
                                <span className="px-3 py-1 bg-orange-500/30 backdrop-blur-sm rounded-full font-medium">
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
                {meals.slice(0, 5).map((_, index) => (
                  <div
                    key={index}
                    className="h-1.5 rounded-full bg-white/30 backdrop-blur-sm transition-all duration-700"
                    style={{
                      width: index === activeIndex % 5 ? '32px' : '12px',
                      backgroundColor: index === activeIndex % 5 ? 'rgb(34, 197, 94)' : 'rgba(255, 255, 255, 0.3)',
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