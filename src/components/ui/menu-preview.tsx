import { useState, useEffect } from "react";
import grilledQuinoaBowl from "@/assets/meals/grilled-quinoa-bowl.jpg";
import spicedPaneerCurry from "@/assets/meals/spiced-paneer-curry.jpg";
import grilledSalmon from "@/assets/meals/grilled-salmon.jpg";
import freshFruitMedley from "@/assets/meals/fresh-fruit-medley.jpg";
import mediterraneanBowl from "@/assets/meals/mediterranean-bowl.jpg";
import chickenWrap from "@/assets/meals/chicken-wrap.jpg";
import powerBowl from "@/assets/meals/power-bowl.jpg";
import grilledChickenQuinoa from "@/assets/meals/grilled-chicken-quinoa.jpg";
import salmonTeriyakiBowl from "@/assets/meals/salmon-teriyaki-bowl.jpg";
import buddhaBowlDeluxe from "@/assets/meals/buddha-bowl-deluxe.jpg";

const MenuPreview = () => {
  const [currentMealIndex, setCurrentMealIndex] = useState(0);
  
  const sampleMeals = [
    {
      image: grilledQuinoaBowl,
      name: "Grilled Quinoa Bowl",
      description: "Protein-packed",
      calories: "420 cal",
      nutrition: "High Protein • Complete Amino Acids"
    },
    {
      image: spicedPaneerCurry,
      name: "Spiced Paneer Curry",
      description: "Rich in taste, heart-healthy",
      calories: "385 cal",
      nutrition: "Traditional • Calcium Rich"
    },
    {
      image: grilledSalmon,
      name: "Grilled Salmon",
      description: "Omega-3 goodness",
      calories: "350 cal",
      nutrition: "Heart Healthy • Brain Boost"
    },
    {
      image: freshFruitMedley,
      name: "Fresh Fruit Medley",
      description: "Naturally sweet, colorful",
      calories: "125 cal",
      nutrition: "Vitamin C • Antioxidants"
    },
    {
      image: mediterraneanBowl,
      name: "Mediterranean Bowl",
      description: "Fresh & vibrant",
      calories: "395 cal",
      nutrition: "Mediterranean Diet • Healthy Fats"
    },
    {
      image: chickenWrap,
      name: "Lean Chicken Wrap",
      description: "Balanced nutrition",
      calories: "375 cal",
      nutrition: "Balanced • Heart-Healthy"
    },
    {
      image: powerBowl,
      name: "Quinoa Power Bowl",
      description: "Plant-based energy",
      calories: "485 cal",
      nutrition: "Plant-Based • High Fiber"
    },
    {
      image: grilledChickenQuinoa,
      name: "Grilled Chicken Quinoa",
      description: "Lean protein perfection",
      calories: "410 cal",
      nutrition: "Lean Protein • Complete Nutrition"
    },
    {
      image: salmonTeriyakiBowl,
      name: "Salmon Teriyaki Bowl",
      description: "Asian-inspired healthy",
      calories: "445 cal",
      nutrition: "Omega-3 Rich • Anti-Inflammatory"
    },
    {
      image: buddhaBowlDeluxe,
      name: "Buddha Bowl Deluxe",
      description: "Colorful superfood mix",
      calories: "520 cal",
      nutrition: "Superfood • Plant Power"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMealIndex((prev) => (prev + 1) % sampleMeals.length);
    }, 3000);

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

        {/* Rotating Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentMealIndex * (100 / 4)}%)` }}
            >
              {sampleMeals.map((meal, index) => (
                <div 
                  key={index}
                  className="w-1/4 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group overflow-hidden h-full">
                    {/* Image */}
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <img 
                        src={meal.image} 
                        alt={meal.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {meal.name}
                      </h3>
                      <p className="text-green-600 font-medium text-sm">
                        {meal.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">
                          <span>{meal.calories}</span>
                        </div>
                        
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium text-xs">
                          <span>{meal.nutrition}</span>
                        </div>
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