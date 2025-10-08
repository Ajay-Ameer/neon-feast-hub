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
      setRotation((prev) => (prev + 0.2) % 360);
    }, 20);

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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
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

          {/* Right Side: Meal Carousel Animation - Vertical Semi Circle */}
          <div className="flex-1 relative w-full max-w-xl lg:max-w-2xl">
            <div className="relative mx-auto h-[600px] flex items-center justify-center overflow-visible">
              {/* Rotating food items in vertical semi-circle (top to bottom) */}
              {meals.map((meal, index) => {
                const angle = (rotation + (index * (360 / meals.length))) % 360;
                
                // Only show items in right semi-circle (270° to 90° going clockwise - top to bottom)
                const isInRightHalf = angle >= 270 || angle <= 90;
                
                if (!isInRightHalf) return null;
                
                // Adjust angle to semi-circle range for vertical movement
                const semiAngle = angle >= 270 ? angle - 270 : angle + 90;
                const radius = 250;
                
                // Calculate position in vertical semi-circle (top to bottom on right side)
                const radians = ((semiAngle - 90) * Math.PI) / 180;
                const x = Math.cos(radians) * radius;
                const y = Math.sin(radians) * radius;
                
                // Item is at center (90 degrees = middle right of semi-circle)
                const isAtCenter = Math.abs(semiAngle - 90) < 10;
                
                // Smooth, elegant scaling based on distance from center with zoom out effect
                const distanceFromCenter = Math.abs(semiAngle - 90);
                const scale = isAtCenter ? 1.4 : Math.max(0.4, 1 - (distanceFromCenter / 90) * 0.6);
                const opacity = isAtCenter ? 1 : Math.max(0.2, 1 - (distanceFromCenter / 90) * 0.8);
                const zIndex = isAtCenter ? 50 : Math.round(10 + (1 - distanceFromCenter / 90) * 20);
                
                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-out"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                  >
                    <div className="relative">
                      <div className={`${isAtCenter ? 'w-80 h-80' : 'w-20 h-20'} rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-700`}>
                        <img 
                          src={meal.image} 
                          alt={meal.name}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                      {isAtCenter && (
                        <div className="absolute -right-64 top-1/2 transform -translate-y-1/2 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-green-100 whitespace-nowrap animate-fade-in">
                          <p className="text-xl font-bold text-gray-900 mb-2">{meal.name}</p>
                          <div className="flex items-center gap-3">
                            <span className="text-base font-semibold text-green-600">{meal.calories}</span>
                            <span className="text-sm text-gray-400">•</span>
                            <span className="text-sm text-orange-600 font-medium">{meal.nutrition}</span>
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