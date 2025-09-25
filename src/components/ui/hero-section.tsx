import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import mediterraneanBowl from "@/assets/meals/mediterranean-bowl.jpg";
import chickenWrap from "@/assets/meals/chicken-wrap.jpg";
import powerBowl from "@/assets/meals/power-bowl.jpg";

const HeroSection = () => {
  const [currentMeal, setCurrentMeal] = useState(0);
  
  const meals = [
    { 
      image: mediterraneanBowl,
      name: "Mediterranean Bowl", 
      calories: "420 cal",
      nutrition: "High Protein • Low Carb"
    },
    { 
      image: powerBowl,
      name: "Quinoa Power Bowl", 
      calories: "485 cal",
      nutrition: "Plant-Based • High Fiber"
    },
    { 
      image: chickenWrap,
      name: "Lean Chicken Wrap", 
      calories: "375 cal",
      nutrition: "Balanced • Heart-Healthy"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMeal((prev) => (prev + 1) % meals.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [meals.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-orange-50 flex items-center overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                  Delivered Fresh,
                </span>
                <br />
                <span className="text-gray-800">Powered by</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">
                  Nutrition AI
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Personalized meal plans, freshly crafted daily, delivered with patented smart-packaging 
                technology that locks in <strong className="text-green-600">flavor and health</strong>.
              </p>
            </div>

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

          {/* Right Content - Floating Meal Card */}
          <div className="relative order-first lg:order-last">
            <div className="relative mx-auto max-w-md">
              {/* Floating Meal Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500 animate-float">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto overflow-hidden rounded-2xl" key={currentMeal}>
                    <img 
                      src={meals[currentMeal].image} 
                      alt={meals[currentMeal].name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {meals[currentMeal].name}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
                        <span>{meals[currentMeal].calories}</span>
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium text-sm">
                        <span>{meals[currentMeal].nutrition}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Indicators */}
                  <div className="flex justify-center space-x-2">
                    {meals.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          index === currentMeal 
                            ? 'bg-green-500 w-8' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
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