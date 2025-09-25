import grilledQuinoaBowl from "@/assets/meals/grilled-quinoa-bowl.jpg";
import spicedPaneerCurry from "@/assets/meals/spiced-paneer-curry.jpg";
import grilledSalmon from "@/assets/meals/grilled-salmon.jpg";
import freshFruitMedley from "@/assets/meals/fresh-fruit-medley.jpg";

const MenuPreview = () => {
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
    }
  ];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {sampleMeals.map((meal, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group overflow-hidden"
            >
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
                <h3 className="text-xl font-bold text-gray-900">
                  {meal.name}
                </h3>
                <p className="text-green-600 font-medium">
                  {meal.description}
                </p>
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                    <span>{meal.calories}</span>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium text-xs">
                    <span>{meal.nutrition}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;