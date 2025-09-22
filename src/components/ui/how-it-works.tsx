import { useEffect, useRef, useState } from "react";
import { Brain, ChefHat, Package, Truck, User, Calendar, Clock, CheckCircle } from "lucide-react";

// Import vegetable images
import chilliPepper from "@/assets/vegetables/chili-pepper.jpg";
import broccoli from "@/assets/vegetables/broccoli.jpg";
import spinach from "@/assets/vegetables/spinach.jpg";
import bellPepper from "@/assets/vegetables/bell-pepper.jpg";
import kale from "@/assets/vegetables/kale.jpg";
import avocado from "@/assets/vegetables/avocado.jpg";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Pick your healthy meal plan",
      description: "Choose from 7 meals/10 meals/14 meals based on your dietary preferences and health goals.",
      color: "fresh-green",
      number: "1"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Receive freshly prepared meals",
      description: "Nutrition & Tasty meals delivered to your home using smart packaging technology.",
      color: "vitality-orange",
      number: "2"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Unbox & Keep Fresh in Fridge",
      description: "Store your meals in the fridge and enjoy them fresh throughout the week.",
      color: "success-green",
      number: "3"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const stepIndex = Math.min(Math.floor(scrollProgress * steps.length), steps.length - 1);
          setActiveStep(Math.max(0, stepIndex));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-pastel-green/30 to-pastel-orange/20 relative overflow-hidden">
      {/* Vegetable Photos */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <img src={chilliPepper} alt="" className="absolute top-20 left-10 w-16 h-16 object-cover rounded-full transform -rotate-12 animate-float-slow border-2 border-fresh-green/30" />
        <img src={spinach} alt="" className="absolute top-40 right-20 w-14 h-14 object-cover rounded-full transform rotate-12 animate-float-medium border-2 border-success-green/30" />
        <img src={broccoli} alt="" className="absolute bottom-40 left-20 w-12 h-12 object-cover rounded-full transform rotate-45 animate-float-fast border-2 border-vitality-orange/30" />
        <img src={bellPepper} alt="" className="absolute bottom-20 right-40 w-14 h-14 object-cover rounded-full transform -rotate-45 animate-float-slow border-2 border-fresh-green/30" />
        <img src={kale} alt="" className="absolute top-60 left-1/2 w-12 h-12 object-cover rounded-full transform rotate-12 animate-float-medium border-2 border-success-green/30" />
        <img src={chilliPepper} alt="" className="absolute bottom-60 right-10 w-16 h-16 object-cover rounded-full transform -rotate-12 animate-float-fast border-2 border-vitality-orange/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-orbitron font-bold mb-4 md:mb-6">
            <span className="text-gradient-fresh">How It Works</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            From AI-powered personalization to your doorstep – experience the future of nutrition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Numbered Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border-2 border-fresh-green/20 hover:border-fresh-green/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-vitality-orange to-fresh-green rounded-full flex items-center justify-center text-white font-orbitron font-bold text-lg md:text-2xl shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-4 md:mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-fresh-green/20 to-vitality-orange/20 rounded-xl md:rounded-2xl flex items-center justify-center text-fresh-green mb-4 mx-auto group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-orbitron font-bold text-fresh-green group-hover:text-vitality-orange transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-fresh-green to-vitality-orange rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              
              {/* Connection Line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-fresh-green to-vitality-orange transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-fresh-green/30 shadow-lg">
            <CheckCircle className="w-5 h-5 text-success-green" />
            <span className="text-sm font-exo font-medium text-success-green">Join 50,000+ healthy food lovers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;