import { ClipboardCheck, ChefHat, UtensilsCrossed, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: "Pick Your Plan",
      description: "Choose from personalized meal plans designed for your health goals and dietary preferences.",
      number: "1"
    },
    {
      icon: <ChefHat className="w-10 h-10" />,
      title: "We Cook Fresh Daily",
      description: "Our expert chefs prepare your meals fresh every day using premium ingredients and smart-packaging technology.",
      number: "2"
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "We deliver straight to your door",
      description: "Fresh meals delivered directly to your doorstep with our temperature-controlled delivery system.",
      number: "3"
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10" />,
      title: "Enjoy at Home",
      description: "Heat and enjoy restaurant-quality meals at home. Zero prep, zero stress, just pure nutrition and flavor.",
      number: "4"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From personalized planning to your doorstep – experience the future of nutrition in 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-6 pt-4">
                  <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mx-auto group-hover:bg-green-100 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Connection Arrow for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-300 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-green-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;