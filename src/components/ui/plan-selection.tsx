import { useState, useEffect } from "react";
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
  planType: string;
  onPlanSelect: (selectedMeals: string[], duration: number, userProfile: UserProfile) => void;
}

const PlanSelection = ({ planName, basePrice, planType, onPlanSelect }: PlanSelectionProps) => {
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

  // Load saved data on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setUserProfile({
        gender: profile.gender || "",
        age: profile.age || 0,
        height: profile.height || 0,
        weight: profile.weight || 0,
        foodPreference: profile.foodPreference || ""
      });
      setSelectedMeals(profile.selectedMeals || []);
      setSelectedDuration(profile.duration || 14);
    }
  }, []);

  const mealOptions: MealOption[] = [
    {
      id: "breakfast",
      name: "Breakfast",
      description: "Energizing morning meals to kickstart your day",
      price: 290,
      icon: <Heart className="h-5 w-5" />
    },
    {
      id: "lunch",
      name: "Lunch",
      description: "Balanced midday meals to sustain your energy",
      price: 320,
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: "snack",
      name: "Snack",
      description: "Healthy snacks to curb cravings",
      price: 260,
      icon: <Shield className="h-5 w-5" />
    },
    {
      id: "dinner",
      name: "Dinner",
      description: "Nourishing evening meals for recovery",
      price: 340,
      icon: <Star className="h-5 w-5" />
    }
  ];

  const durationOptions = [
    { days: 14, label: "14 Days", discount: 0 },
    { days: 30, label: "30 Days", discount: 5 },
    { days: 45, label: "45 Days", discount: 8 },
    { days: 90, label: "90 Days", discount: 12 }
  ];

  const deliveryZones = [
    { id: "zone1", name: "City Center (0-5km)", charge: 50 },
    { id: "zone2", name: "Extended Area (5-15km)", charge: 80 },
    { id: "zone3", name: "Outskirts (15-25km)", charge: 120 }
  ];

  const [selectedZone, setSelectedZone] = useState<string>("zone1");
  const [swapCount, setSwapCount] = useState<number>(0);

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
    // Base meal prices with food preference multiplier
    const foodPrefMultiplier = {
      vegetarian: 1.0,
      "ovo-vegetarian": 1.1,
      "non-vegetarian": 1.25
    };
    
    // Plan type multiplier
    const planMultiplier = {
      "weight-loss": 1.0,
      "muscle-gain": 1.15,
      "wellness": 0.95
    };

    const selectedMealsPrices = selectedMeals.map(mealId => {
      const meal = mealOptions.find(m => m.id === mealId);
      const basePrice = meal ? meal.price : 260;
      const prefMultiplier = foodPrefMultiplier[userProfile.foodPreference as keyof typeof foodPrefMultiplier] || 1.0;
      const planMult = planMultiplier[planType as keyof typeof planMultiplier] || 1.0;
      return Math.max(260, basePrice * prefMultiplier * planMult); // Minimum ₹260 per meal
    });

    const dailyMealCost = selectedMealsPrices.reduce((sum, price) => sum + price, 0);
    const totalDays = selectedDuration;
    const foodSubtotal = dailyMealCost * totalDays;

    // Kitchen charges (2% of food cost)
    const kitchenCharges = foodSubtotal * 0.02;

    // Delivery charges
    const selectedZoneData = deliveryZones.find(z => z.id === selectedZone);
    const totalDeliveryCharges = (selectedZoneData?.charge || 50) * totalDays;

    // Swap charges
    const swapCharges = swapCount * 10;

    // Duration discount
    const duration = durationOptions.find(d => d.days === selectedDuration);
    const discount = duration ? duration.discount : 0;
    const discountAmount = (foodSubtotal * discount) / 100;

    // Subtotal before tax
    const subtotalBeforeTax = foodSubtotal + kitchenCharges + totalDeliveryCharges + swapCharges - discountAmount;

    // GST (18%)
    const gst = subtotalBeforeTax * 0.18;

    const finalTotal = subtotalBeforeTax + gst;

    return {
      foodSubtotal,
      kitchenCharges,
      deliveryCharges: totalDeliveryCharges,
      swapCharges,
      discount: discountAmount,
      gst,
      total: finalTotal,
      dailyMealCost,
      selectedMealsPrices
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
    if (selectedMeals.length > 0) {
      // Save user profile to localStorage for persistence
      const profileData = { ...userProfile, selectedMeals, duration: selectedDuration, selectedZone, swapCount };
      localStorage.setItem('userProfile', JSON.stringify(profileData));
      
      onPlanSelect(selectedMeals, selectedDuration, userProfile);
    }
  };

  const pricing = calculateTotalPrice();
  const isValidSelection = selectedMeals.length > 0;

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={userProfile.gender} onValueChange={(value) => setUserProfile(prev => ({ ...prev, gender: value }))}>
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
                value={userProfile.age || ""}
                onChange={(e) => setUserProfile(prev => ({ ...prev, age: parseInt(e.target.value) || 0 }))}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                type="number"
                placeholder="Enter height"
                value={userProfile.height || ""}
                onChange={(e) => setUserProfile(prev => ({ ...prev, height: parseInt(e.target.value) || 0 }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                type="number"
                placeholder="Enter weight"
                value={userProfile.weight || ""}
                onChange={(e) => setUserProfile(prev => ({ ...prev, weight: parseInt(e.target.value) || 0 }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="foodPreference">Food Preference</Label>
            <Select value={userProfile.foodPreference} onValueChange={(value) => setUserProfile(prev => ({ ...prev, foodPreference: value }))}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <p className="text-sm text-muted-foreground">Choose your preferred meals - pricing varies by plan type and food preference</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      {/* Duration & Delivery Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="text-gradient-food">Choose Duration</CardTitle>
            <p className="text-sm text-muted-foreground">Longer plans offer better savings</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
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
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold">{option.label}</div>
                      {option.discount > 0 && (
                        <Badge variant="secondary" className="mt-1 text-xs">
                          Save {option.discount}%
                        </Badge>
                      )}
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      {option.days > 30 ? "Best Value" : option.days > 14 ? "Popular" : "Starter"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="text-gradient-food">Delivery Zone</CardTitle>
            <p className="text-sm text-muted-foreground">Select your location for delivery</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {deliveryZones.map((zone) => (
                <div
                  key={zone.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedZone === zone.id 
                      ? 'border-fresh-green bg-fresh-green/10' 
                      : 'border-border hover:border-fresh-green/50'
                  }`}
                  onClick={() => setSelectedZone(zone.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{zone.name}</div>
                      <div className="text-sm text-muted-foreground">
                        ₹{zone.charge}/delivery
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Price Summary */}
      {selectedMeals.length > 0 && (
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="text-gradient-food">Price Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Food Cost ({selectedMeals.length} meals × {selectedDuration} days):</span>
                <span>₹{pricing.foodSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Kitchen Charges (2%):</span>
                <span>₹{pricing.kitchenCharges.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Delivery Charges ({selectedDuration} days):</span>
                <span>₹{pricing.deliveryCharges.toLocaleString()}</span>
              </div>
              {pricing.swapCharges > 0 && (
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Swap Charges ({swapCount} swaps):</span>
                  <span>₹{pricing.swapCharges.toLocaleString()}</span>
                </div>
              )}
              {pricing.discount > 0 && (
                <div className="flex justify-between text-fresh-green">
                  <span>Duration Discount ({durationOptions.find(d => d.days === selectedDuration)?.discount}%):</span>
                  <span>-₹{pricing.discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>GST (18%):</span>
                <span>₹{pricing.gst.toLocaleString()}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount:</span>
                  <span className="text-gradient-fresh">₹{Math.round(pricing.total).toLocaleString()}</span>
                </div>
                <div className="text-xs text-muted-foreground text-center mt-1">
                  Daily average: ₹{Math.round(pricing.total / selectedDuration).toLocaleString()}
                </div>
              </div>
            </div>

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