import { useEffect, useRef, useState } from "react";
import { Brain, ChefHat, Package, Truck } from "lucide-react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Personalized Nutrition",
      description: "AI analyzes your health goals, dietary preferences, and lifestyle to create your perfect meal plan.",
      color: "fresh-green"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Cook Fresh",
      description: "Expert chefs prepare your meals daily using the finest ingredients and innovative cooking techniques.",
      color: "warm-orange"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Smart Packaging",
      description: "Patented retort technology preserves nutrients and flavors while extending freshness.",
      color: "tech-blue"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Daily Delivery",
      description: "Fresh meals delivered to your doorstep every morning, ready to fuel your transformation.",
      color: "vibrant-green"
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-light-green/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient-fresh">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered personalization to your doorstep – experience the future of nutrition
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border rounded-full overflow-hidden">
            <div 
              className="w-full bg-gradient-fresh transition-all duration-1000 ease-out"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center transition-all duration-1000 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step Circle */}
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center z-10 transition-all duration-500 ${
                    index <= activeStep 
                      ? `bg-gradient-fresh border-fresh-green text-white scale-110` 
                      : 'bg-background border-border text-muted-foreground'
                  }`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div 
                  className={`lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'
                  } transition-all duration-1000 ${
                    index <= activeStep ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-8'
                  }`}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-fresh-green/20 hover:border-fresh-green/40 transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-fresh text-white`}>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold mb-4 text-fresh-green">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;