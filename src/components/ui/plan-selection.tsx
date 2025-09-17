import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calculator, User, Heart, Zap, Shield, Star, ChefHat } from "lucide-react";

interface UserProfile {
  gender: string;
  age: number;
  height: number;
  weight: number;
  foodPreference: string;
}

interface MealOption {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}

interface PlanSelectionProps {
  planName: string;
  basePrice: number;
  onPlanSelect: (selectedMeals: string[], duration: number, userProfile: UserProfile) => void;
}

const PlanSelection = ({ planName, basePrice, onPlanSelect }: PlanSelectionProps) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    gender: "",
    age: 0,
    height: 0,
    weight: 0,
    foodPreference: ""
  });
  
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<number>(14);
  const [showSampleMenu, setShowSampleMenu] = useState(false);

  const mealOptions: MealOption[] = [
    {
      id: "breakfast",
      name: "Breakfast",
      description: "Energizing morning meals to kickstart your day",
      price: 270,
      icon: <Heart className="h-5 w-5" />
    },
    {
      id: "lunch",
      name: "Lunch",
      description: "Balanced midday meals to sustain your energy",
      price: 270,
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: "snack",
      name: "Snack",
      description: "Healthy snacks to curb cravings",
      price: 270,
      icon: <Shield className="h-5 w-5" />
    },
    {
      id: "dinner",
      name: "Dinner",
      description: "Nourishing evening meals for recovery",
      price: 270,
      icon: <Star className="h-5 w-5" />
    }
  ];

  const durationOptions = [
    { days: 14, label: "14 Days", discount: 0 },
    { days: 30, label: "30 Days", discount: 10 },
    { days: 45, label: "45 Days", discount: 15 }
  ];

  const sampleMenus = {
    breakfast: ["Power Breakfast Bowl", "Chia Pudding Parfait", "Greek Yogurt Berry Bowl"],
    lunch: ["Rainbow Buddha Bowl", "Mediterranean Quinoa Salad", "Fresh Salmon Salad"],
    snack: ["Mixed Nuts & Seeds", "Fruit Bowl with Yogurt", "Veggie Sticks with Hummus"],
    dinner: ["Keto Chicken Stir-Fry", "Lentil Curry Bowl", "Zucchini Noodle Bolognese"]
  };

  const calculateBMI = () => {
    if (userProfile.height && userProfile.weight) {
      const heightInMeters = userProfile.height / 100;
      return (userProfile.weight / (heightInMeters * heightInMeters)).toFixed(1);
    }
    return null;
  };

  const calculateTotalPrice = () => {
    const mealsPerDay = selectedMeals.length;
    const dailyPrice = mealsPerDay * 270;
    const totalDays = selectedDuration;
    const subtotal = dailyPrice * totalDays;
    
    const duration = durationOptions.find(d => d.days === selectedDuration);
    const discount = duration ? duration.discount : 0;
    const discountAmount = (subtotal * discount) / 100;
    
    return {
      subtotal,
      discount: discountAmount,
      total: subtotal - discountAmount
    };
  };

  const handleMealSelection = (mealId: string) => {
    setSelectedMeals(prev => 
      prev.includes(mealId) 
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId]
    );
  };

  const handleSubmit = () => {
    if (selectedMeals.length > 0 && calculateTotalPrice().total >= 23000) {
      onPlanSelect(selectedMeals, selectedDuration, userProfile);
    }
  };

  const pricing = calculateTotalPrice();
  const isValidSelection = selectedMeals.length > 0 && pricing.total >= 23000;

  return (
    <div className="space-y-8">
      {/* User Profile Form */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient-food">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select onValueChange={(value) => setUserProfile(prev => ({ ...prev, gender: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age (years)</Label>
              <Input
                type="number"
                placeholder="Enter age"
                onChange={(e) => setUserProfile(prev => ({ ...prev, age: parseInt(e.target.value) || 0 }))}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                type="number"
                placeholder="Enter height"
                onChange={(e) => setUserProfile(prev => ({ ...prev, height: parseInt(e.target.value) || 0 }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                type="number"
                placeholder="Enter weight"
                onChange={(e) => setUserProfile(prev => ({ ...prev, weight: parseInt(e.target.value) || 0 }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="foodPreference">Food Preference</Label>
            <Select onValueChange={(value) => setUserProfile(prev => ({ ...prev, foodPreference: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select your food preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                <SelectItem value="ovo-vegetarian">Ovo Vegetarian</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {calculateBMI() && (
            <div className="flex items-center gap-2 p-3 bg-fresh-green/10 rounded-lg">
              <Calculator className="h-5 w-5 text-fresh-green" />
              <span className="text-sm">
                Your BMI: <span className="font-bold text-fresh-green">{calculateBMI()}</span>
              </span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sample Menu Dialog */}
      <Dialog open={showSampleMenu} onOpenChange={setShowSampleMenu}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            <ChefHat className="h-4 w-4 mr-2" />
            View Sample Menu for {planName}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Sample Menu - {planName}</DialogTitle>
            <DialogDescription>
              Here's what you can expect from your meal plan
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(sampleMenus).map(([mealType, items]) => (
              <div key={mealType} className="space-y-2">
                <h4 className="font-semibold capitalize text-gradient-food">{mealType}</h4>
                <ul className="space-y-1">
                  {items.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-warm-amber/10 rounded-lg">
            <p className="text-sm text-center text-muted-foreground">
              <strong>Note:</strong> This is a sample menu - menu plan would change every week and you can also swap the items as per your need.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Meal Selection */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="text-gradient-food">Select Your Meals</CardTitle>
          <p className="text-sm text-muted-foreground">Choose your preferred meals (minimum ₹23,000/month required)</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {mealOptions.map((meal) => (
              <div key={meal.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <Checkbox
                  id={meal.id}
                  checked={selectedMeals.includes(meal.id)}
                  onCheckedChange={() => handleMealSelection(meal.id)}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {meal.icon}
                    <Label htmlFor={meal.id} className="font-medium cursor-pointer">
                      {meal.name}
                    </Label>
                    <Badge variant="outline">₹{meal.price}/day</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{meal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Duration Selection */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="text-gradient-food">Choose Duration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {durationOptions.map((option) => (
              <div
                key={option.days}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedDuration === option.days 
                    ? 'border-fresh-green bg-fresh-green/10' 
                    : 'border-border hover:border-fresh-green/50'
                }`}
                onClick={() => setSelectedDuration(option.days)}
              >
                <div className="text-center">
                  <div className="font-bold text-lg">{option.label}</div>
                  {option.discount > 0 && (
                    <Badge className="mt-1 bg-warm-amber text-white">
                      Save {option.discount}%
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Summary */}
      {selectedMeals.length > 0 && (
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="text-gradient-food">Price Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Meals per day: {selectedMeals.length}</span>
                <span>₹{selectedMeals.length * 270}/day</span>
              </div>
              <div className="flex justify-between">
                <span>Duration: {selectedDuration} days</span>
                <span>₹{pricing.subtotal.toLocaleString()}</span>
              </div>
              {pricing.discount > 0 && (
                <div className="flex justify-between text-fresh-green">
                  <span>Discount:</span>
                  <span>-₹{pricing.discount.toLocaleString()}</span>
                </div>
              )}
              <div className="border-t pt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-gradient-fresh">₹{pricing.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {pricing.total < 23000 && (
              <div className="p-3 bg-warm-amber/10 rounded-lg">
                <p className="text-sm text-center text-warm-amber">
                  Minimum order value is ₹23,000. Add more meals or increase duration.
                </p>
              </div>
            )}

            <Button 
              variant="fresh" 
              className="w-full" 
              disabled={!isValidSelection}
              onClick={handleSubmit}
            >
              Proceed with Selected Plan
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PlanSelection;