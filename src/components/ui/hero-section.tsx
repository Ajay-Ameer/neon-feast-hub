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
  const [rotation, setRotation] = useState(0);
  
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
      setRotation((prev) => prev + 0.5);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-orange-50 flex items-center overflow-hidden py-12">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-12">
          {/* Level 1: Title */}
          <div className="w-full text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 max-w-5xl mx-auto">
              <span className="text-gray-800">Food is a lifestyle, enhance it with</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                Our Gut friendly delicacies
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">
                Delivered Fresh to your door steps
              </span>
            </h1>
          </div>

          {/* Level 2: Subtitle */}
          <div className="w-full text-center">
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Personalized meal plans, freshly crafted daily, delivered with patented smart-packaging 
              technology that locks in <strong className="text-green-600">flavor and health</strong>.
            </p>
          </div>

          {/* Level 3: CTA Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
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

          {/* Level 4: Semi-Circular Track Animation */}
          <div className="relative w-full max-w-4xl mt-8">
            <div className="relative mx-auto h-[600px] flex items-center justify-center">
              {/* Semi-circular track background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] border-4 border-dashed border-green-300/40 rounded-full" 
                     style={{ clipPath: 'polygon(0 50%, 0 100%, 100% 100%, 100% 50%)' }}>
                </div>
              </div>

              {/* Rotating food items */}
              {meals.map((meal, index) => {
                const angle = (rotation + (index * (360 / meals.length))) % 360;
                const radius = 200;
                
                // Only show items on the bottom semi-circle (180 to 360 degrees)
                const adjustedAngle = 180 + (angle % 180);
                const adjustedRadians = (adjustedAngle * Math.PI) / 180;
                
                const x = Math.cos(adjustedRadians) * radius;
                const y = Math.sin(adjustedRadians) * radius;
                
                // Calculate if item is at center (90 degrees = bottom center)
                const normalizedAngle = angle % 180;
                const isAtCenter = Math.abs(normalizedAngle - 90) < 12;
                const scale = isAtCenter ? 1 : 0.6;
                const opacity = isAtCenter ? 1 : 0.7;
                const zIndex = isAtCenter ? 50 : 10;
                
                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-500 ease-out"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                  >
                    <div className="relative">
                      <div className={`${isAtCenter ? 'w-48 h-48' : 'w-28 h-28'} rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500`}>
                        <img 
                          src={meal.image} 
                          alt={meal.name}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                      {isAtCenter && (
                        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-2xl border border-green-100 whitespace-nowrap animate-fade-in">
                          <p className="text-lg font-bold text-gray-900 mb-1">{meal.name}</p>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm font-semibold text-green-600">{meal.calories}</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-orange-600 font-medium">{meal.nutrition}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;