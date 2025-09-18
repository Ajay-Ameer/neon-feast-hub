import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Calendar, Settings } from "lucide-react";
import MenuCalendar from "@/components/ui/menu-calendar";

interface UserProfile {
  gender: string;
  age: string;
  height: string;
  weight: string;
  foodPreference: string;
  selectedMeals: string[];
  duration: number;
}

const CustomerPortal = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [activeSection, setActiveSection] = useState<"overview" | "menu">("overview");

  useEffect(() => {
    // Load user profile from localStorage
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
  }, []);

  const calculateBMI = (height: number, weight: number) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Underweight", color: "text-blue-600" };
    if (bmi < 25) return { category: "Normal", color: "text-green-600" };
    if (bmi < 30) return { category: "Overweight", color: "text-amber-600" };
    return { category: "Obese", color: "text-red-600" };
  };

  if (!userProfile) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gradient-food mb-6">Customer Portal</h1>
          <Card className="card-elegant">
            <CardContent className="p-8">
              <User className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-4">No Active Plan Found</h2>
              <p className="text-muted-foreground mb-6">
                You don't have an active meal plan yet. Start by creating your personalized plan.
              </p>
              <Button variant="fresh" size="lg" asChild>
                <a href="/plans">Create Your Plan</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const bmi = calculateBMI(parseFloat(userProfile.height), parseFloat(userProfile.weight));
  const bmiInfo = getBMICategory(parseFloat(bmi));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient-food mb-2">Customer Portal</h1>
          <p className="text-muted-foreground">Manage your meal plan and preferences</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
          <Button
            variant={activeSection === "overview" ? "default" : "outline"}
            onClick={() => setActiveSection("overview")}
            className="flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            Profile Overview
          </Button>
          <Button
            variant={activeSection === "menu" ? "default" : "outline"}
            onClick={() => setActiveSection("menu")}
            className="flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Menu Calendar
          </Button>
        </div>

        {activeSection === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Profile Information */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gradient-food">
                  <User className="h-5 w-5" />
                  Your Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Gender</label>
                    <p className="font-semibold capitalize">{userProfile.gender}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Age</label>
                    <p className="font-semibold">{userProfile.age} years</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Height</label>
                    <p className="font-semibold">{userProfile.height} cm</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Weight</label>
                    <p className="font-semibold">{userProfile.weight} kg</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Food Preference</label>
                  <p className="font-semibold capitalize">{userProfile.foodPreference}</p>
                </div>
                <div className="pt-4 border-t">
                  <label className="text-sm font-medium text-muted-foreground">BMI</label>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">{bmi}</span>
                    <span className={`font-medium ${bmiInfo.color}`}>({bmiInfo.category})</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Plan Information */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gradient-food">
                  <Settings className="h-5 w-5" />
                  Current Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div>
                   <label className="text-sm font-medium text-muted-foreground">Selected Meals</label>
                   <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
                     {userProfile.selectedMeals.map((meal) => (
                       <span
                         key={meal}
                         className="px-3 py-1 bg-fresh-green/10 text-fresh-green rounded-full text-sm font-medium capitalize"
                       >
                         {meal}
                       </span>
                     ))}
                   </div>
                   <p className="text-xs text-muted-foreground mt-2">
                     Your personalized menu includes these selected meal types
                   </p>
                 </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Plan Duration</label>
                  <p className="font-semibold">{userProfile.duration} days</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Total Cost</label>
                  <p className="text-2xl font-bold text-gradient-food">
                    ₹{(userProfile.selectedMeals.length * 270 * userProfile.duration).toLocaleString()}
                  </p>
                </div>
                <div className="pt-4">
                  <Button variant="outline" asChild className="w-full">
                    <a href="/plans">Modify Plan</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === "menu" && (
          <MenuCalendar
            selectedMeals={userProfile.selectedMeals}
            duration={userProfile.duration}
            onBack={() => setActiveSection("overview")}
          />
        )}
      </div>
    </div>
  );
};

export default CustomerPortal;