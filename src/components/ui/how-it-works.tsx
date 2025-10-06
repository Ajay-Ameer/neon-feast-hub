import choosePlan from "@/assets/how-it-works/choose-plan.jpg";
import selectMeals from "@/assets/how-it-works/select-meals.jpg";
import prepareMeals from "@/assets/how-it-works/prepare-meals.jpg";
import delivery from "@/assets/how-it-works/delivery.jpg";
import enjoyMeal from "@/assets/how-it-works/enjoy-meal.jpg";

const HowItWorks = () => {
  const steps = [
    {
      image: choosePlan,
      title: "Choose Your Plan",
      description: "Select a meal plan that perfectly aligns with your health goals and lifestyle.",
      number: "1"
    },
    {
      image: selectMeals,
      title: "Select Your Meals",
      description: "Pick from over 400 delicious recipes tailored to your preferences.",
      number: "2"
    },
    {
      image: prepareMeals,
      title: "We Prepare & Deliver",
      description: "Freshly prepared by our chefs and delivered to your door between 6-9 AM.",
      number: "3"
    },
    {
      image: enjoyMeal,
      title: "Heat & Enjoy",
      description: "Simply heat your meal and enjoy restaurant-quality food in minutes.",
      number: "4"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50/30 via-white to-green-50/20 relative">      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Enjoy your choice of healthy, delicious meals
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Expertly tailored to support better health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group text-center"
            >
              {/* Circular Image with Number Badge */}
              <div className="relative mb-6 inline-block">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {step.number}
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;