import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PlanSelectionComponent from "@/components/ui/plan-selection";
import NavigationBreadcrumb from "@/components/ui/navigation-breadcrumb";

const PlanSelection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const planName = searchParams.get('plan') || 'General Wellness Plan';
  const planType = searchParams.get('type') || 'wellness';
  const basePrice = parseInt(searchParams.get('price') || '260');

  const handlePlanSelect = (selectedMeals: string[], duration: number, userProfile: any) => {
    // Store the selection data for the menu calendar
    sessionStorage.setItem('planSelection', JSON.stringify({
      planName,
      planType,
      basePrice,
      selectedMeals,
      duration,
      userProfile
    }));
    
    // Navigate to menu calendar
    navigate('/menu-calendar');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-warm-amber/5">
      <NavigationBreadcrumb />
      
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-food">
              Choose Your Perfect Plan
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your health with our scientifically designed meal plans, crafted by nutritionists and delivered fresh daily.
            </p>
          </div>

          <PlanSelectionComponent
            planName={planName}
            basePrice={basePrice}
            planType={planType}
            onPlanSelect={handlePlanSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;
