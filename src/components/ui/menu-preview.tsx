import { useState, useEffect } from "react";
import nawabiChicken from "@/assets/hero-meals/nawabi-chicken.png";
import palakMurgh from "@/assets/hero-meals/palak-murgh.png";
import scrambledEggMasala from "@/assets/hero-meals/scrambled-egg-masala.png";
import teriyakiChicken from "@/assets/hero-meals/teriyaki-chicken.png";

const MenuPreview = () => {
  const [currentMealIndex, setCurrentMealIndex] = useState(0);
  
  const sampleMeals = [
    {
      image: nawabiChicken,
      name: "Nawabi Chicken",
      description: "Royal taste with rich spices",
      calories: "450 cal",
      nutrition: "High Protein • Traditional Spices"
    },
    {
      image: palakMurgh,
      name: "Palak Murgh",
      description: "Spinach & chicken perfection",
      calories: "380 cal",
      nutrition: "Iron Rich • High Protein"
    },
    {
      image: scrambledEggMasala,
      name: "Scrambled Egg Masala",
      description: "Spicy protein-packed breakfast",
      calories: "320 cal",
      nutrition: "High Protein • Energy Boost"
    },
    {
      image: teriyakiChicken,
      name: "Teriyaki Chicken",
      description: "Asian-inspired healthy delight",
      calories: "410 cal",
      nutrition: "Lean Protein • Asian Fusion"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMealIndex((prev) => (prev + 1) % sampleMeals.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sampleMeals.length]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50/30 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Sample Meals You'll Love
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Fresh, delicious, and nutritious meals crafted by our expert chefs
          </p>
        </div>

        {/* Continuous Carousel - duplicated items for seamless loop */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-[2000ms] ease-in-out"
              style={{ transform: `translateX(-${currentMealIndex * 100}%)` }}
            >
              {/* Duplicate meals array for continuous effect */}
              {[...sampleMeals, ...sampleMeals, ...sampleMeals].map((meal, index) => (
                <div 
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-gradient-to-br from-green-50/50 to-orange-50/30 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 group overflow-hidden h-full relative">
                    {/* Circular Image Container */}
                    <div className="mb-6 overflow-hidden rounded-full mx-auto w-48 h-48 shadow-lg border-4 border-white">
                      <img 
                        src={meal.image} 
                        alt={meal.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3 text-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {meal.name}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium">
                        {meal.description}
                      </p>
                      
                      {/* Calories and Add Button */}
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-2xl font-bold text-gray-900">
                          {meal.calories}
                        </span>
                        
                        <button className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                          <span className="text-2xl font-light leading-none">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {sampleMeals.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentMealIndex 
                    ? 'bg-green-500 w-8' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;