import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Replace, Check, Calendar as CalendarIcon } from "lucide-react";
import { format, addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface MenuCalendarProps {
  selectedMeals: string[];
  duration: number;
  onBack: () => void;
}

interface MealItem {
  id: string;
  name: string;
  type: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const MenuCalendar = ({ selectedMeals, duration, onBack }: MenuCalendarProps) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showDayMenu, setShowDayMenu] = useState(false);
  const [dayMenus, setDayMenus] = useState<Record<string, Record<string, MealItem>>>({});
  const [swapMode, setSwapMode] = useState<{ active: boolean; date: string; mealType: string; itemId: string }>({
    active: false,
    date: "",
    mealType: "",
    itemId: ""
  });

  // Sample meal items for each type
  const sampleMeals = {
    breakfast: [
      { id: "b1", name: "Power Breakfast Bowl", type: "breakfast", calories: 350, protein: 15, carbs: 45, fat: 12 },
      { id: "b2", name: "Chia Pudding Parfait", type: "breakfast", calories: 280, protein: 12, carbs: 35, fat: 10 },
      { id: "b3", name: "Greek Yogurt Berry Bowl", type: "breakfast", calories: 320, protein: 18, carbs: 40, fat: 8 }
    ],
    lunch: [
      { id: "l1", name: "Rainbow Buddha Bowl", type: "lunch", calories: 450, protein: 20, carbs: 55, fat: 15 },
      { id: "l2", name: "Mediterranean Quinoa Salad", type: "lunch", calories: 420, protein: 18, carbs: 50, fat: 14 },
      { id: "l3", name: "Fresh Salmon Salad", type: "lunch", calories: 380, protein: 25, carbs: 35, fat: 16 }
    ],
    snack: [
      { id: "s1", name: "Mixed Nuts & Seeds", type: "snack", calories: 180, protein: 8, carbs: 12, fat: 14 },
      { id: "s2", name: "Fruit Bowl with Yogurt", type: "snack", calories: 150, protein: 6, carbs: 28, fat: 2 },
      { id: "s3", name: "Veggie Sticks with Hummus", type: "snack", calories: 120, protein: 5, carbs: 18, fat: 4 }
    ],
    dinner: [
      { id: "d1", name: "Keto Chicken Stir-Fry", type: "dinner", calories: 400, protein: 30, carbs: 20, fat: 25 },
      { id: "d2", name: "Lentil Curry Bowl", type: "dinner", calories: 380, protein: 18, carbs: 45, fat: 12 },
      { id: "d3", name: "Zucchini Noodle Bolognese", type: "dinner", calories: 350, protein: 22, carbs: 25, fat: 18 }
    ]
  };

  // Generate initial menus for all days
  const generateInitialMenus = () => {
    const menus: Record<string, Record<string, MealItem>> = {};
    const startDate = new Date();
    
    for (let i = 0; i < duration; i++) {
      const date = addDays(startDate, i);
      const dateKey = format(date, 'yyyy-MM-dd');
      menus[dateKey] = {};
      
      selectedMeals.forEach(mealType => {
        const mealOptions = sampleMeals[mealType as keyof typeof sampleMeals];
        if (mealOptions) {
          // Rotate through options to provide variety
          const optionIndex = i % mealOptions.length;
          menus[dateKey][mealType] = mealOptions[optionIndex];
        }
      });
    }
    
    setDayMenus(menus);
  };

  // Initialize menus on component mount and check for swapped items
  useEffect(() => {
    generateInitialMenus();
    
    // Check for swapped items from meal hub
    const swappedItem = sessionStorage.getItem('swappedItem');
    if (swappedItem) {
      const { date, mealType, newMeal } = JSON.parse(swappedItem);
      setDayMenus(prev => ({
        ...prev,
        [date]: {
          ...prev[date],
          [mealType]: newMeal
        }
      }));
      sessionStorage.removeItem('swappedItem');
      toast({
        title: "Menu updated",
        description: `${newMeal.name} has been added to your ${format(new Date(date), 'MMMM d')} ${mealType} menu.`,
      });
    }
  }, []);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setShowDayMenu(true);
    }
  };

  const handleSwapItem = (date: string, mealType: string, itemId: string) => {
    const selectedDate = new Date(date);
    const today = new Date();
    const diffTime = selectedDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 3) {
      toast({
        title: "Cannot customize menu",
        description: "Menu customization is only allowed for deliveries 3 or more days away (minimum 36 hours notice required).",
        variant: "destructive",
      });
      return;
    }
    
    setSwapMode({ active: true, date, mealType, itemId });
    sessionStorage.setItem('swapMode', JSON.stringify({ date, mealType, itemId }));
    navigate('/meal-hub');
  };

  const getDayMenu = (date: Date) => {
    const dateKey = format(date, 'yyyy-MM-dd');
    return dayMenus[dateKey] || {};
  };

  const confirmAllMenus = () => {
    // Here you would typically save the confirmed menus to backend
    console.log('Confirmed menus:', dayMenus);
    alert('Menu plan confirmed successfully! Your personalized meal plan is ready.');
  };

  const startDate = new Date();
  const endDate = addDays(startDate, duration - 1);

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="mb-4 border-fresh-green text-fresh-green hover:bg-fresh-green/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Plan Selection
        </Button>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gradient-food">Your Menu Calendar</h2>
          <p className="text-muted-foreground">
            Plan duration: {duration} days ({format(startDate, 'MMM d')} - {format(endDate, 'MMM d, yyyy')})
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Calendar */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gradient-food">
              <CalendarIcon className="h-5 w-5" />
              Select Date to View Menu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) => 
                date < startDate || date > endDate
              }
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Daily Overview */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="text-gradient-food">
              {selectedDate ? format(selectedDate, 'EEEE, MMMM d') : 'Select a date'} Menu
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDate ? (
              <div className="space-y-4">
                {selectedMeals.map(mealType => {
                  const meal = getDayMenu(selectedDate)[mealType];
                  return meal ? (
                    <div key={mealType} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium capitalize">{mealType}:</span>
                          <span className="text-sm">{meal.name}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {meal.calories} cal • {meal.protein}g protein
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSwapItem(format(selectedDate, 'yyyy-MM-dd'), mealType, meal.id)}
                        className="border-fresh-green text-fresh-green hover:bg-fresh-green/10"
                      >
                        <Replace className="h-4 w-4 mr-1" />
                        Swap
                      </Button>
                    </div>
                  ) : null;
                })}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                Click on a date to view the menu for that day
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Summary Stats */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="text-gradient-food">Plan Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="text-center p-4 bg-fresh-green/10 rounded-lg">
              <div className="font-bold text-lg text-fresh-green">{selectedMeals.length}</div>
              <div className="text-sm text-muted-foreground">Meals per day</div>
            </div>
            <div className="text-center p-4 bg-warm-amber/10 rounded-lg">
              <div className="font-bold text-lg text-warm-amber">{duration}</div>
              <div className="text-sm text-muted-foreground">Total days</div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-lg">
              <div className="font-bold text-lg text-purple-600">{selectedMeals.length * duration}</div>
              <div className="text-sm text-muted-foreground">Total meals</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-lg">
              <div className="font-bold text-lg text-blue-600">
                ₹{(selectedMeals.length * 270 * duration).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total cost</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Confirm Button */}
      <div className="flex justify-center">
        <Button 
          size="lg" 
          onClick={confirmAllMenus} 
          className="px-8 bg-gradient-to-r from-fresh-green to-warm-amber hover:opacity-90 text-white shadow-lg"
        >
          <Check className="h-5 w-5 mr-2" />
          Confirm Menu Plan
        </Button>
      </div>

      {/* Day Menu Modal */}
      <Dialog open={showDayMenu} onOpenChange={setShowDayMenu}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {selectedDate && format(selectedDate, 'EEEE, MMMM d')} Menu
            </DialogTitle>
            <DialogDescription>
              Your planned meals for this day
            </DialogDescription>
          </DialogHeader>
          {selectedDate && (
            <div className="space-y-3">
              {selectedMeals.map(mealType => {
                const meal = getDayMenu(selectedDate)[mealType];
                return meal ? (
                  <div key={mealType} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="capitalize">
                        {mealType}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSwapItem(format(selectedDate, 'yyyy-MM-dd'), mealType, meal.id)}
                        className="text-fresh-green hover:bg-fresh-green/10"
                      >
                        <Replace className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="font-medium">{meal.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {meal.calories} cal • {meal.protein}g protein • {meal.carbs}g carbs • {meal.fat}g fat
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuCalendar;