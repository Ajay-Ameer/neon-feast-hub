import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, ChefHat, Leaf, Scale, Dumbbell, Heart, Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

  const featureComparison = [
    { feature: "Fresh Daily Delivery", wellness: true, weightLoss: true, muscleGain: true, diabetes: true },
    { feature: "Nutritionist Designed", wellness: true, weightLoss: true, muscleGain: true, diabetes: true },
    { feature: "Customizable Portions", wellness: true, weightLoss: false, muscleGain: true, diabetes: false },
    { feature: "Calorie Controlled", wellness: false, weightLoss: true, muscleGain: false, diabetes: true },
    { feature: "High Protein Focus", wellness: false, weightLoss: true, muscleGain: true, diabetes: false },
    { feature: "Low-GI Recipes", wellness: false, weightLoss: false, muscleGain: false, diabetes: true },
    { feature: "AI Tracking Support", wellness: false, weightLoss: true, muscleGain: false, diabetes: false },
    { feature: "Pre/Post Workout Timing", wellness: false, weightLoss: false, muscleGain: true, diabetes: false },
    { feature: "Metabolism Boosting", wellness: false, weightLoss: true, muscleGain: false, diabetes: false },
    { feature: "Immunity Boosting", wellness: true, weightLoss: false, muscleGain: false, diabetes: false },
    { feature: "Blood Sugar Control", wellness: false, weightLoss: false, muscleGain: false, diabetes: true },
    { feature: "Macro-Nutrient Balanced", wellness: true, weightLoss: false, muscleGain: true, diabetes: true },
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
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50/20">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your health with our scientifically designed meal plans, crafted by nutritionists and delivered fresh daily.
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
          <>
            {/* Plan Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-16">
              {plans.map((plan) => (
                <Card key={plan.id} className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 flex justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                        {plan.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl mb-3 text-gray-900 font-bold">{plan.name}</CardTitle>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      ₹{plan.price.toLocaleString()}
                      <span className="text-sm text-gray-500 font-normal">/month</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      {plan.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="text-xs text-gray-500">Perfect for</div>
                        <div className="text-xs font-medium text-gray-900">{plan.idealFor}</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Clock className="h-4 w-4 text-orange-500" />
                        </div>
                        <div className="text-xs text-gray-500">Delivery</div>
                        <div className="text-xs font-medium text-gray-900">{plan.deliveryTime}</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <ChefHat className="h-4 w-4 text-purple-600" />
                        </div>
                        <div className="text-xs text-gray-500">Meals</div>
                        <div className="text-xs font-medium text-gray-900">{plan.mealsPerDay}</div>
                      </div>
                    </div>

                    <Button 
                      className={`w-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white' 
                          : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                      }`}
                      size="lg"
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Feature Comparison Table */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-6 py-8 text-center">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
                  Compare Plan Features
                </h2>
                <p className="text-green-50 text-sm md:text-base">
                  Find the perfect match for your health goals
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b border-gray-200">
                      <TableHead className="font-bold text-gray-900 text-base w-1/4 py-4">Features</TableHead>
                      <TableHead className="text-center font-bold text-gray-900 text-sm md:text-base py-4">
                        <div className="flex flex-col items-center gap-2">
                          <Leaf className="h-6 w-6 text-green-600" />
                          <span>Wellness</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-center font-bold text-gray-900 text-sm md:text-base py-4">
                        <div className="flex flex-col items-center gap-2">
                          <Scale className="h-6 w-6 text-orange-600" />
                          <span>Weight Loss</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-center font-bold text-gray-900 text-sm md:text-base py-4">
                        <div className="flex flex-col items-center gap-2">
                          <Dumbbell className="h-6 w-6 text-blue-600" />
                          <span>Muscle Gain</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-center font-bold text-gray-900 text-sm md:text-base py-4">
                        <div className="flex flex-col items-center gap-2">
                          <Heart className="h-6 w-6 text-red-600" />
                          <span>Diabetes</span>
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {featureComparison.map((row, index) => (
                      <TableRow 
                        key={index} 
                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-green-50/30 transition-colors`}
                      >
                        <TableCell className="font-medium text-gray-900 py-4">{row.feature}</TableCell>
                        <TableCell className="text-center py-4">
                          {row.wellness ? (
                            <div className="flex justify-center">
                              <div className="bg-green-100 rounded-full p-1.5">
                                <Check className="h-5 w-5 text-green-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="bg-gray-100 rounded-full p-1.5">
                                <X className="h-5 w-5 text-gray-400" />
                              </div>
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          {row.weightLoss ? (
                            <div className="flex justify-center">
                              <div className="bg-orange-100 rounded-full p-1.5">
                                <Check className="h-5 w-5 text-orange-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="bg-gray-100 rounded-full p-1.5">
                                <X className="h-5 w-5 text-gray-400" />
                              </div>
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          {row.muscleGain ? (
                            <div className="flex justify-center">
                              <div className="bg-blue-100 rounded-full p-1.5">
                                <Check className="h-5 w-5 text-blue-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="bg-gray-100 rounded-full p-1.5">
                                <X className="h-5 w-5 text-gray-400" />
                              </div>
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          {row.diabetes ? (
                            <div className="flex justify-center">
                              <div className="bg-red-100 rounded-full p-1.5">
                                <Check className="h-5 w-5 text-red-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="bg-gray-100 rounded-full p-1.5">
                                <X className="h-5 w-5 text-gray-400" />
                              </div>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-green-50/30 px-6 py-6 text-center border-t border-gray-200">
                <p className="text-gray-700 text-sm md:text-base font-medium">
                  Still unsure? All plans include fresh daily delivery and nutritionist-designed meals. 
                  <span className="text-green-600 font-semibold"> Choose any plan to get started!</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Plans;