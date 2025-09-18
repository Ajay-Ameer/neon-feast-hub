import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, ChefHat } from "lucide-react";
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
      id: "weight-loss",
      name: "Weight Loss Plan",
      description: "Scientifically designed to help you lose weight healthily",
      price: 25000,
      features: [
        "1200-1500 calories per day",
        "High protein, controlled portions",
        "Metabolism boosting ingredients",
        "Weekly progress tracking"
      ],
      popular: false,
      icon: "💪",
      idealFor: "Weight Loss",
      deliveryTime: "Daily",
      mealsPerDay: "Up to 4"
    },
    {
      id: "muscle-gain",
      name: "Muscle Gain Plan", 
      description: "High-protein meals to support muscle building",
      price: 28000,
      features: [
        "2000-2500 calories per day",
        "High protein (30g+ per meal)",
        "Pre & post workout timing",
        "Muscle recovery nutrients"
      ],
      popular: true,
      icon: "🏋️",
      idealFor: "Athletes",
      deliveryTime: "Daily",
      mealsPerDay: "Up to 4"
    },
    {
      id: "wellness",
      name: "General Wellness",
      description: "Balanced nutrition for overall health",
      price: 23000,
      features: [
        "1600-1800 calories per day",
        "Balanced macro nutrients",
        "Immunity boosting foods",
        "Seasonal variety"
      ],
      popular: false,
      icon: "🌟",
      idealFor: "Everyone",
      deliveryTime: "Daily", 
      mealsPerDay: "Up to 4"
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
                  <div className="text-4xl mb-2">{plan.icon}</div>
                  <CardTitle className="text-2xl mb-2 text-gradient-food">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-fresh-green mb-2">
                    ₹{plan.price.toLocaleString()}
                    <span className="text-sm text-muted-foreground font-normal">/month</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
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
                    variant="fresh" 
                    className="w-full"
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