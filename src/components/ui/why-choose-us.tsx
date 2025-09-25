import { Shield, Brain, Truck, Clock, Award, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Patented Packaging",
      description: "Locks in nutrients & flavor with our revolutionary smart-packaging technology that preserves freshness.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Personalized Nutrition",
      description: "AI-designed plans for your unique health goals, dietary preferences, and lifestyle needs.",
      gradient: "from-blue-500 to-green-600"
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Fresh Daily Delivery",
      description: "Zero prep, zero stress, just fresh meals delivered to your door every single day.",
      gradient: "from-orange-500 to-green-600"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Time-Saving Convenience",
      description: "Save hours weekly with ready-to-eat gourmet meals that fit your busy lifestyle perfectly.",
      gradient: "from-purple-500 to-green-600"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Chef-Crafted Quality",
      description: "Restaurant-quality meals designed by professional chefs using premium, locally-sourced ingredients.",
      gradient: "from-amber-500 to-green-600"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Health-First Approach",
      description: "Every meal is nutritionally balanced by certified dietitians to support your wellness journey.",
      gradient: "from-red-500 to-green-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-green-50/50 to-emerald-50/30 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another meal delivery service - we're your health transformation partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group h-full"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Bottom accent */}
              <div className={`w-16 h-1 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto mt-6 opacity-60 group-hover:opacity-100 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;