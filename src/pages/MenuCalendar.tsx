import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuCalendarComponent from "@/components/ui/menu-calendar";
import NavigationBreadcrumb from "@/components/ui/navigation-breadcrumb";

const MenuCalendar = () => {
  const navigate = useNavigate();
  const [planData, setPlanData] = useState<any>(null);

  useEffect(() => {
    // Load plan selection data
    const savedData = sessionStorage.getItem('planSelection');
    if (savedData) {
      setPlanData(JSON.parse(savedData));
    } else {
      // If no data, redirect back to plans
      navigate('/plans');
    }
  }, [navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  if (!planData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-warm-amber/5 flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-warm-amber/5">
      <NavigationBreadcrumb />
      
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <MenuCalendarComponent
            selectedMeals={planData.selectedMeals}
            duration={planData.duration}
            onBack={handleBack}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCalendar;
