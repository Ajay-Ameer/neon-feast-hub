import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Scale, Dumbbell, Heart } from "lucide-react";

const PlansPricing = () => {
  const plans = [
    {
      icon: <Leaf className="w-8 h-8" />,
      name: "General Wellness Plan",
      tagline: "Balanced nutrition for everyday health",
      features: ["Freshly cooked meals", "Nutrient-dense recipes", "Customizable options"],
      cta: "Start Wellness Journey",
      color: "from-green-500 to-emerald-600",
      popular: false
    },
    {
      icon: <Scale className="w-8 h-8" />,
      name: "Weight Loss Plan",
      tagline: "Smart meals for sustainable fat loss",
      features: ["Calorie-controlled meals", "Portion guidance", "AI tracking support"],
      cta: "Start Losing Weight",
      color: "from-orange-500 to-red-500",
      popular: true
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      name: "Muscle Gain Plan",
      tagline: "Protein-packed meals for strength & growth",
      features: ["High-protein recipes", "Muscle-building nutrition", "Recovery-focused design"],
      cta: "Start Building Muscle",
      color: "from-blue-500 to-purple-600",
      popular: false
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: "Diabetes Management Plan",
      tagline: "Scientifically balanced for sugar control",
      features: ["Low-GI recipes", "Dietitian-approved meals", "Stable energy support"],
      cta: "Start Diabetes Care",
      color: "from-red-500 to-pink-600",
      popular: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50/20 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Choose Your Health Transformation Plan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Tailored meal plans designed by nutritionists, powered by AI, and delivered fresh to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              {/* Icon */}
              <div className="mb-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg`}>
                  {plan.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-green-600 font-medium text-sm">
                  {plan.tagline}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className={`w-full mt-6 border-2 hover:scale-105 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white' 
                      : 'border-green-500 text-green-600 hover:bg-green-500 hover:text-white'
                  }`}
                  asChild
                >
                  <Link to="/plans">{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansPricing;