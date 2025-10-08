import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, ChefHat, Leaf, Scale, Dumbbell, Heart } from "lucide-react";
import PlanSelection from "@/components/ui/plan-selection";
import MenuCalendar from "@/components/ui/menu-calendar";

interface UserProfile {
  gender: string;
  age: number;
  height: number;
  weight: number;
  foodPreference: string;
}

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showMenuCalendar, setShowMenuCalendar] = useState(false);
  const [planDetails, setPlanDetails] = useState<{
    selectedMeals: string[];
    duration: number;
    userProfile: UserProfile;
  } | null>(null);

  const plans = [
    {
      id: "wellness",
      name: "General Wellness Plan",
      description: "Balanced nutrition for everyday health - perfectly balanced nutritious meals designed for optimal health, immunity, and sustained energy",
      price: 23000,
      features: [
        "Freshly cooked meals delivered daily",
        "Nutrient-dense recipes designed by certified nutritionists",
        "Customizable portion sizes to match your activity level",
        "Balanced 1600-1800 calories per day",
        "Perfect macro-nutrient ratio (40-30-30)",
        "Immunity-boosting superfoods & antioxidants"
      ],
      popular: false,
      icon: <Leaf className="w-12 h-12" />,
      idealFor: "Everyone",
      deliveryTime: "Daily Fresh",
      mealsPerDay: "Up to 4",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "weight-loss",
      name: "Weight Loss Plan",
      description: "Smart meals for sustainable fat loss - scientifically designed calorie-deficit meals that help you lose weight healthily while maintaining energy",
      price: 25000,
      features: [
        "Calorie-controlled meals optimized for fat loss",
        "Portion guidance and daily targets",
        "AI tracking support for progress monitoring",
        "Precisely calculated 1200-1500 calories per day",
        "High protein content with controlled portions",
        "Metabolism-boosting ingredients & thermogenic spices"
      ],
      popular: true,
      icon: <Scale className="w-12 h-12" />,
      idealFor: "Weight Loss",
      deliveryTime: "Daily Fresh",
      mealsPerDay: "Up to 4",
      color: "from-orange-500 to-red-500"
    },
    {
      id: "muscle-gain",
      name: "Muscle Gain Plan", 
      description: "Protein-packed meals for strength & growth - performance-focused high-protein meals engineered to maximize muscle growth and strength",
      price: 28000,
      features: [
        "High-protein recipes to support muscle building",
        "Muscle-building nutrition optimized for recovery",
        "Recovery-focused design with strategic meal timing",
        "Calorie surplus of 2000-2500 calories per day",
        "Premium high-quality protein (30-40g per meal)",
        "Strategic pre & post-workout meal timing"
      ],
      popular: false,
      icon: <Dumbbell className="w-12 h-12" />,
      idealFor: "Athletes & Fitness Enthusiasts",
      deliveryTime: "Daily Fresh",
      mealsPerDay: "Up to 5",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "diabetes",
      name: "Diabetes Management Plan",
      description: "Scientifically balanced for sugar control - carefully designed meals with low-GI recipes to help manage blood sugar levels effectively",
      price: 26000,
      features: [
        "Low-GI recipes for stable blood sugar control",
        "Dietitian-approved meals with balanced carbohydrates",
        "Stable energy support throughout the day",
        "Portion-controlled servings to prevent spikes",
        "Expert guidance on meal timing and nutrition",
        "Regular monitoring and personalized adjustments"
      ],
      popular: false,
      icon: <Heart className="w-12 h-12" />,
      idealFor: "Diabetes Management",
      deliveryTime: "Daily Fresh",
      mealsPerDay: "Up to 4",
      color: "from-red-500 to-pink-600"
    }
  ];

  const handlePlanSelect = (selectedMeals: string[], duration: number, userProfile: UserProfile) => {
    setPlanDetails({ selectedMeals, duration, userProfile });
    setShowMenuCalendar(true);
  };

  const handleBackToPlanSelection = () => {
    setShowMenuCalendar(false);
    setPlanDetails(null);
  };

  if (showMenuCalendar && planDetails) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-12">
          <MenuCalendar
            selectedMeals={planDetails.selectedMeals}
            duration={planDetails.duration}
            onBack={handleBackToPlanSelection}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-food">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your health with our scientifically designed meal plans
          </p>
        </div>

        {selectedPlan ? (
          <PlanSelection
            planName={plans.find(p => p.id === selectedPlan)?.name || ""}
            basePrice={plans.find(p => p.id === selectedPlan)?.price || 0}
            planType={selectedPlan}
            onPlanSelect={handlePlanSelect}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className={`card-elegant relative ${plan.popular ? 'ring-2 ring-fresh-green' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-fresh-green text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {plan.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent font-bold">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent mb-3">
                    ₹{plan.price.toLocaleString()}
                    <span className="text-base text-muted-foreground font-normal">/month</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-fresh-green flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-fresh-green" />
                      </div>
                      <div className="text-xs text-muted-foreground">Perfect for</div>
                      <div className="text-sm font-medium">{plan.idealFor}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="h-4 w-4 text-warm-amber" />
                      </div>
                      <div className="text-xs text-muted-foreground">Delivery</div>
                      <div className="text-sm font-medium">{plan.deliveryTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <ChefHat className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="text-xs text-muted-foreground">Meals</div>
                      <div className="text-sm font-medium">{plan.mealsPerDay}</div>
                    </div>
                  </div>

                  <Button 
                    variant={plan.popular ? "hero" : "fresh"}
                    size="lg"
                    className="w-full text-base font-bold"
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Select {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plans;