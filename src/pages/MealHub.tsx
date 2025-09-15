import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SectionHeader from "@/components/ui/section-header";
import { useCart } from "@/contexts/CartContext";
import { Clock, Users, Star, Flame, Zap, Heart, Plus, Minus, ShoppingCart } from "lucide-react";
import breakfastBowl from "@/assets/meal-breakfast-bowl.jpg";
import buddhaBowl from "@/assets/meal-buddha-bowl.jpg";
import salmonSalad from "@/assets/meal-salmon-salad.jpg";
import ketoChicken from "@/assets/meal-keto-chicken.jpg";

interface Ingredient {
  name: string;
  amount: string;
  benefits: string;
  icon: string;
}

interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
  vitamins: string[];
  minerals: string[];
}

interface Meal {
  id: string;
  name: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  rating: number;
  difficulty: string;
  ingredients: Ingredient[];
  nutrition: NutritionInfo;
  tags: string[];
  dietaryTags: string[];
  cuisineType: string;
  mealType: string;
}

const meals: Meal[] = [
  {
    id: "1",
    name: "Power Breakfast Bowl",
    description: "A nutrient-packed breakfast bowl with scrambled eggs, avocado, and fresh vegetables to fuel your morning.",
    image: breakfastBowl,
    cookTime: "15 min",
    servings: 1,
    rating: 4.8,
    difficulty: "Easy",
    ingredients: [
      {
        name: "Eggs",
        amount: "3 large",
        benefits: "High in protein and vitamin B12, supports muscle building and brain health",
        icon: "🥚"
      },
      {
        name: "Avocado",
        amount: "1/2 medium",
        benefits: "Rich in healthy monounsaturated fats and potassium, supports heart health",
        icon: "🥑"
      },
      {
        name: "Cherry Tomatoes",
        amount: "5 pieces",
        benefits: "High in lycopene and vitamin C, powerful antioxidant properties",
        icon: "🍅"
      },
      {
        name: "Olive Oil",
        amount: "2 tbsp",
        benefits: "Contains oleic acid, reduces inflammation and supports heart health",
        icon: "🫒"
      }
    ],
    nutrition: {
      calories: 420,
      protein: 22,
      carbs: 18,
      fat: 28,
      fiber: 12,
      sugar: 8,
      sodium: 340,
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin K", "Folate"],
      minerals: ["Potassium", "Iron", "Magnesium"]
    },
    tags: ["High Protein", "Low Carb", "Heart Healthy"],
    dietaryTags: ["Vegetarian", "Keto Friendly", "Gluten Free"],
    cuisineType: "Continental",
    mealType: "Breakfast"
  },
  {
    id: "2",
    name: "Rainbow Buddha Bowl",
    description: "A vibrant and colorful bowl packed with quinoa, roasted vegetables, and creamy tahini dressing.",
    image: buddhaBowl,
    cookTime: "25 min",
    servings: 2,
    rating: 4.6,
    difficulty: "Medium",
    ingredients: [
      {
        name: "Quinoa",
        amount: "1 cup cooked",
        benefits: "Complete protein with all 9 essential amino acids, supports muscle health",
        icon: "🌾"
      },
      {
        name: "Sweet Potato",
        amount: "1 cup roasted",
        benefits: "High in beta-carotene and fiber, supports eye health and digestion",
        icon: "🍠"
      },
      {
        name: "Chickpeas",
        amount: "1/2 cup",
        benefits: "High in protein and fiber, helps stabilize blood sugar levels",
        icon: "🫘"
      },
      {
        name: "Mixed Greens",
        amount: "1 cup",
        benefits: "Rich in iron, folate, and antioxidants, supports immune system",
        icon: "🥬"
      }
    ],
    nutrition: {
      calories: 380,
      protein: 14,
      carbs: 52,
      fat: 16,
      fiber: 18,
      sugar: 12,
      sodium: 280,
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin E", "Folate"],
      minerals: ["Iron", "Magnesium", "Phosphorus"]
    },
    tags: ["Plant Based", "High Fiber", "Antioxidant Rich"],
    dietaryTags: ["Vegan", "Gluten Free", "Dairy Free"],
    cuisineType: "Mediterranean",
    mealType: "Lunch"
  },
  {
    id: "3",
    name: "Fresh Salmon Salad",
    description: "Light and refreshing salmon salad with mixed greens, cucumber, and zesty lemon vinaigrette.",
    image: salmonSalad,
    cookTime: "20 min",
    servings: 1,
    rating: 4.7,
    difficulty: "Easy",
    ingredients: [
      {
        name: "Salmon Fillet",
        amount: "150g fresh",
        benefits: "Rich in omega-3 fatty acids, supports brain and heart health",
        icon: "🐟"
      },
      {
        name: "Mixed Greens",
        amount: "2 cups",
        benefits: "High in vitamins A, C, K and folate, supports bone health",
        icon: "🥬"
      },
      {
        name: "Cucumber",
        amount: "1/2 medium",
        benefits: "High water content and silica, supports hydration and skin health",
        icon: "🥒"
      },
      {
        name: "Lemon",
        amount: "1 medium",
        benefits: "High in vitamin C and citrus flavonoids, boosts immune system",
        icon: "🍋"
      }
    ],
    nutrition: {
      calories: 320,
      protein: 28,
      carbs: 12,
      fat: 18,
      fiber: 6,
      sugar: 8,
      sodium: 420,
      vitamins: ["Vitamin D", "Vitamin B12", "Vitamin C"],
      minerals: ["Selenium", "Potassium", "Phosphorus"]
    },
    tags: ["Omega-3 Rich", "Low Carb", "Heart Healthy"],
    dietaryTags: ["Pescatarian", "Gluten Free", "Dairy Free"],
    cuisineType: "Mediterranean",
    mealType: "Lunch"
  },
  {
    id: "4",
    name: "Keto Chicken Stir-Fry",
    description: "A satisfying low-carb stir-fry with tender chicken and crisp vegetables in aromatic herbs.",
    image: ketoChicken,
    cookTime: "18 min",
    servings: 2,
    rating: 4.5,
    difficulty: "Easy",
    ingredients: [
      {
        name: "Chicken Breast",
        amount: "300g sliced",
        benefits: "Lean protein source, supports muscle growth and weight management",
        icon: "🍗"
      },
      {
        name: "Broccoli",
        amount: "1 cup florets",
        benefits: "High in vitamin C and sulforaphane, supports detoxification",
        icon: "🥦"
      },
      {
        name: "Bell Pepper",
        amount: "1 medium",
        benefits: "Rich in vitamin C and antioxidants, supports immune function",
        icon: "🫑"
      },
      {
        name: "Coconut Oil",
        amount: "2 tbsp",
        benefits: "Contains MCTs, provides quick energy and supports metabolism",
        icon: "🥥"
      }
    ],
    nutrition: {
      calories: 290,
      protein: 32,
      carbs: 8,
      fat: 14,
      fiber: 4,
      sugar: 5,
      sodium: 380,
      vitamins: ["Vitamin C", "Vitamin B6", "Niacin"],
      minerals: ["Selenium", "Phosphorus", "Potassium"]
    },
    tags: ["High Protein", "Low Carb", "Quick & Easy"],
    dietaryTags: ["Keto Friendly", "Gluten Free", "Dairy Free"],
    cuisineType: "Asian",
    mealType: "Dinner"
  },
  {
    id: "5",
    name: "Mediterranean Quinoa Salad",
    description: "Fresh quinoa salad with olives, feta, and Mediterranean vegetables.",
    image: buddhaBowl,
    cookTime: "20 min",
    servings: 2,
    rating: 4.4,
    difficulty: "Easy",
    ingredients: [
      {
        name: "Quinoa",
        amount: "1 cup",
        benefits: "Complete protein, gluten-free grain alternative",
        icon: "🌾"
      },
      {
        name: "Feta Cheese",
        amount: "100g",
        benefits: "Rich in calcium and probiotics, supports bone health",
        icon: "🧀"
      },
      {
        name: "Kalamata Olives",
        amount: "1/4 cup",
        benefits: "Healthy fats and vitamin E, anti-inflammatory properties",
        icon: "🫒"
      }
    ],
    nutrition: {
      calories: 350,
      protein: 16,
      carbs: 45,
      fat: 12,
      fiber: 8,
      sugar: 6,
      sodium: 450,
      vitamins: ["Vitamin A", "Vitamin K"],
      minerals: ["Calcium", "Iron"]
    },
    tags: ["Mediterranean", "High Fiber"],
    dietaryTags: ["Vegetarian", "Gluten Free"],
    cuisineType: "Mediterranean",
    mealType: "Lunch"
  },
  {
    id: "6",
    name: "Grilled Turkey Wrap",
    description: "Lean turkey with fresh vegetables wrapped in whole grain tortilla.",
    image: ketoChicken,
    cookTime: "12 min",
    servings: 1,
    rating: 4.3,
    difficulty: "Easy",
    ingredients: [
      {
        name: "Turkey Breast",
        amount: "120g",
        benefits: "Low-fat protein, rich in selenium and phosphorus",
        icon: "🦃"
      },
      {
        name: "Whole Grain Tortilla",
        amount: "1 large",
        benefits: "Complex carbohydrates and fiber for sustained energy",
        icon: "🌯"
      }
    ],
    nutrition: {
      calories: 285,
      protein: 24,
      carbs: 28,
      fat: 8,
      fiber: 4,
      sugar: 3,
      sodium: 520,
      vitamins: ["B6", "Niacin"],
      minerals: ["Selenium", "Phosphorus"]
    },
    tags: ["High Protein", "Portable"],
    dietaryTags: ["Dairy Free"],
    cuisineType: "American",
    mealType: "Lunch"
  },
  {
    id: "7",
    name: "Chia Pudding Parfait",
    description: "Creamy chia pudding layered with fresh berries and nuts.",
    image: breakfastBowl,
    cookTime: "10 min prep",
    servings: 1,
    rating: 4.6,
    difficulty: "Easy",
    ingredients: [
      {
        name: "Chia Seeds",
        amount: "3 tbsp",
        benefits: "Omega-3 fatty acids and fiber, supports heart health",
        icon: "🌰"
      },
      {
        name: "Almond Milk",
        amount: "1 cup",
        benefits: "Low calorie, vitamin E rich dairy alternative",
        icon: "🥛"
      }
    ],
    nutrition: {
      calories: 220,
      protein: 8,
      carbs: 18,
      fat: 12,
      fiber: 15,
      sugar: 8,
      sodium: 160,
      vitamins: ["Vitamin E"],
      minerals: ["Calcium", "Magnesium"]
    },
    tags: ["Superfood", "Make Ahead"],
    dietaryTags: ["Vegan", "Gluten Free"],
    cuisineType: "American",
    mealType: "Breakfast"
  },
  {
    id: "8",
    name: "Lentil Curry Bowl",
    description: "Hearty red lentil curry with aromatic spices and coconut milk.",
    image: buddhaBowl,
    cookTime: "30 min",
    servings: 3,
    rating: 4.5,
    difficulty: "Medium",
    ingredients: [
      {
        name: "Red Lentils",
        amount: "1 cup",
        benefits: "High protein legume, rich in folate and iron",
        icon: "🫘"
      },
      {
        name: "Coconut Milk",
        amount: "400ml",
        benefits: "Healthy saturated fats, supports immune system",
        icon: "🥥"
      }
    ],
    nutrition: {
      calories: 310,
      protein: 18,
      carbs: 42,
      fat: 8,
      fiber: 16,
      sugar: 6,
      sodium: 380,
      vitamins: ["Folate", "Vitamin B6"],
      minerals: ["Iron", "Magnesium"]
    },
    tags: ["Plant Protein", "Warming"],
    dietaryTags: ["Vegan", "Gluten Free"],
    cuisineType: "Indian",
    mealType: "Dinner"
  },
  {
    id: "9",
    name: "Greek Yogurt Berry Bowl",
    description: "Protein-rich Greek yogurt topped with antioxidant-rich berries.",
    image: breakfastBowl,
    cookTime: "5 min",
    servings: 1,
    rating: 4.7,
    difficulty: "Easy",
    ingredients: [
      {
        name: "Greek Yogurt",
        amount: "200g",
        benefits: "High protein, probiotics for digestive health",
        icon: "🥛"
      },
      {
        name: "Mixed Berries",
        amount: "1/2 cup",
        benefits: "Antioxidants and vitamin C, supports immune function",
        icon: "🫐"
      }
    ],
    nutrition: {
      calories: 180,
      protein: 20,
      carbs: 18,
      fat: 2,
      fiber: 4,
      sugar: 15,
      sodium: 80,
      vitamins: ["Vitamin C", "B12"],
      minerals: ["Calcium", "Potassium"]
    },
    tags: ["High Protein", "Probiotic"],
    dietaryTags: ["Vegetarian", "Gluten Free"],
    cuisineType: "Mediterranean",
    mealType: "Breakfast"
  },
  {
    id: "10",
    name: "Zucchini Noodle Bolognese",
    description: "Low-carb zucchini noodles with rich turkey bolognese sauce.",
    image: ketoChicken,
    cookTime: "25 min",
    servings: 2,
    rating: 4.4,
    difficulty: "Medium",
    ingredients: [
      {
        name: "Zucchini",
        amount: "2 large",
        benefits: "Low calorie, high water content, supports hydration",
        icon: "🥒"
      },
      {
        name: "Ground Turkey",
        amount: "300g",
        benefits: "Lean protein, lower in saturated fat than beef",
        icon: "🦃"
      }
    ],
    nutrition: {
      calories: 260,
      protein: 28,
      carbs: 12,
      fat: 10,
      fiber: 4,
      sugar: 8,
      sodium: 420,
      vitamins: ["Vitamin C", "B6"],
      minerals: ["Potassium", "Selenium"]
    },
    tags: ["Low Carb", "High Protein"],
    dietaryTags: ["Gluten Free", "Dairy Free"],
    cuisineType: "Italian",
    mealType: "Dinner"
  },
  {
    id: "11",
    name: "Avocado Toast Supreme",
    description: "Multigrain toast topped with smashed avocado and superfood toppings.",
    image: breakfastBowl,
    cookTime: "8 min",
    servings: 1,
    rating: 4.5,
    difficulty: "Easy",
    ingredients: [
      {
        name: "Multigrain Bread",
        amount: "2 slices",
        benefits: "Complex carbs and fiber, sustained energy release",
        icon: "🍞"
      },
      {
        name: "Avocado",
        amount: "1 medium",
        benefits: "Monounsaturated fats, supports heart health",
        icon: "🥑"
      }
    ],
    nutrition: {
      calories: 340,
      protein: 12,
      carbs: 32,
      fat: 20,
      fiber: 14,
      sugar: 4,
      sodium: 320,
      vitamins: ["Vitamin K", "Folate"],
      minerals: ["Potassium", "Magnesium"]
    },
    tags: ["Heart Healthy", "Fiber Rich"],
    dietaryTags: ["Vegetarian", "Dairy Free"],
    cuisineType: "American",
    mealType: "Breakfast"
  },
  {
    id: "12",
    name: "Asian Sesame Salad",
    description: "Crunchy Asian-inspired salad with sesame ginger dressing.",
    image: salmonSalad,
    cookTime: "15 min",
    servings: 2,
    rating: 4.3,
    difficulty: "Easy",
    ingredients: [
      {
        name: "Mixed Asian Greens",
        amount: "3 cups",
        benefits: "Rich in vitamins A and K, supports bone health",
        icon: "🥬"
      },
      {
        name: "Sesame Seeds",
        amount: "2 tbsp",
        benefits: "Healthy fats and lignans, supports hormone balance",
        icon: "🌰"
      }
    ],
    nutrition: {
      calories: 195,
      protein: 8,
      carbs: 15,
      fat: 12,
      fiber: 6,
      sugar: 8,
      sodium: 280,
      vitamins: ["Vitamin A", "Vitamin K"],
      minerals: ["Calcium", "Magnesium"]
    },
    tags: ["Fresh", "Crunchy"],
    dietaryTags: ["Vegetarian", "Dairy Free"],
    cuisineType: "Asian",
    mealType: "Lunch"
  },
  {
    id: "13",
    name: "Sweet Potato Black Bean Bowl",
    description: "Nutritious bowl with roasted sweet potato and protein-rich black beans.",
    image: buddhaBowl,
    cookTime: "35 min",
    servings: 2,
    rating: 4.6,
    difficulty: "Medium",
    ingredients: [
      {
        name: "Sweet Potato",
        amount: "2 medium",
        benefits: "Beta-carotene and vitamin A, supports eye health",
        icon: "🍠"
      },
      {
        name: "Black Beans",
        amount: "1 cup",
        benefits: "High fiber and protein, supports digestive health",
        icon: "🫘"
      }
    ],
    nutrition: {
      calories: 320,
      protein: 14,
      carbs: 58,
      fat: 4,
      fiber: 18,
      sugar: 12,
      sodium: 240,
      vitamins: ["Vitamin A", "Vitamin C"],
      minerals: ["Iron", "Potassium"]
    },
    tags: ["Plant Based", "High Fiber"],
    dietaryTags: ["Vegan", "Gluten Free"],
    cuisineType: "Mexican",
    mealType: "Dinner"
  },
  {
    id: "14",
    name: "Herb Crusted Cod",
    description: "Flaky white fish with Mediterranean herb crust and lemon.",
    image: salmonSalad,
    cookTime: "22 min",
    servings: 2,
    rating: 4.5,
    difficulty: "Medium",
    ingredients: [
      {
        name: "Cod Fillet",
        amount: "400g",
        benefits: "Lean protein, rich in vitamin B12 and selenium",
        icon: "🐟"
      },
      {
        name: "Fresh Herbs",
        amount: "1/4 cup",
        benefits: "Antioxidants and anti-inflammatory compounds",
        icon: "🌿"
      }
    ],
    nutrition: {
      calories: 240,
      protein: 32,
      carbs: 4,
      fat: 8,
      fiber: 1,
      sugar: 2,
      sodium: 380,
      vitamins: ["Vitamin B12", "Vitamin D"],
      minerals: ["Selenium", "Phosphorus"]
    },
    tags: ["Lean Protein", "Low Carb"],
    dietaryTags: ["Pescatarian", "Gluten Free"],
    cuisineType: "Mediterranean",
    mealType: "Dinner"
  }
];

const filterCategories = [
  {
    name: "Meal Type",
    icon: "🍽️",
    options: ["Breakfast", "Lunch", "Dinner", "Snack"]
  },
  {
    name: "Dietary Tags",
    icon: "🌱",
    options: ["Vegetarian", "Vegan", "Keto Friendly", "Gluten Free", "Dairy Free", "Pescatarian"]
  },
  {
    name: "Cuisine Type",
    icon: "🌍",
    options: ["Continental", "Mediterranean", "Asian", "Mexican", "Indian", "American", "Italian"]
  },
  {
    name: "Difficulty",
    icon: "⚡",
    options: ["Easy", "Medium", "Hard"]
  }
];

const MealHub = () => {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { addToCart } = useCart();

  const toggleFilter = (category: string, option: string) => {
    setActiveFilters(prev => {
      const categoryFilters = prev[category] || [];
      const isActive = categoryFilters.includes(option);
      
      if (isActive) {
        return {
          ...prev,
          [category]: categoryFilters.filter(f => f !== option)
        };
      } else {
        return {
          ...prev,
          [category]: [...categoryFilters, option]
        };
      }
    });
  };

  const updateQuantity = (mealId: string, change: number) => {
    setQuantities(prev => {
      const current = prev[mealId] || 0;
      const newQuantity = Math.max(0, current + change);
      return { ...prev, [mealId]: newQuantity };
    });
  };

  const filteredMeals = meals.filter(meal => {
    return Object.entries(activeFilters).every(([category, filters]) => {
      if (filters.length === 0) return true;
      
      switch (category) {
        case "Meal Type":
          return filters.includes(meal.mealType);
        case "Dietary Tags":
          return filters.some(filter => meal.dietaryTags.includes(filter));
        case "Cuisine Type":
          return filters.includes(meal.cuisineType);
        case "Difficulty":
          return filters.includes(meal.difficulty);
        default:
          return true;
      }
    });
  });

  if (selectedMeal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 to-fresh-50 py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            onClick={() => setSelectedMeal(null)}
            className="mb-6 hover:bg-fresh-100"
          >
            ← Back to Meal Hub
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <img 
                src={selectedMeal.image} 
                alt={selectedMeal.name}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              
              {/* Macro Nutrients */}
              <div className="mt-6 grid grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Flame className="h-6 w-6 mx-auto text-orange-500 mb-2" />
                  <div className="text-2xl font-bold text-sage-800">{selectedMeal.nutrition.calories}</div>
                  <div className="text-sm text-sage-600">Calories</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Zap className="h-6 w-6 mx-auto text-blue-500 mb-2" />
                  <div className="text-2xl font-bold text-sage-800">{selectedMeal.nutrition.protein}g</div>
                  <div className="text-sm text-sage-600">Protein</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Heart className="h-6 w-6 mx-auto text-green-500 mb-2" />
                  <div className="text-2xl font-bold text-sage-800">{selectedMeal.nutrition.carbs}g</div>
                  <div className="text-sm text-sage-600">Carbs</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Star className="h-6 w-6 mx-auto text-yellow-500 mb-2" />
                  <div className="text-2xl font-bold text-sage-800">{selectedMeal.nutrition.fat}g</div>
                  <div className="text-sm text-sage-600">Fat</div>
                </div>
              </div>

              {/* Micro Nutrients */}
              <Card className="mt-6 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-sage-800 mb-4">Complete Nutrition Profile</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex justify-between">
                        <span className="text-sage-600">Fiber:</span>
                        <span className="font-semibold">{selectedMeal.nutrition.fiber}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sage-600">Sugar:</span>
                        <span className="font-semibold">{selectedMeal.nutrition.sugar}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sage-600">Sodium:</span>
                        <span className="font-semibold">{selectedMeal.nutrition.sodium}mg</span>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2">
                        <span className="text-sage-600 text-xs">Vitamins:</span>
                        <div className="text-xs">{selectedMeal.nutrition.vitamins.join(", ")}</div>
                      </div>
                      <div>
                        <span className="text-sage-600 text-xs">Minerals:</span>
                        <div className="text-xs">{selectedMeal.nutrition.minerals.join(", ")}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-playfair font-bold text-sage-800 mb-4">
                  {selectedMeal.name}
                </h1>
                <p className="text-lg text-sage-600 font-exo leading-relaxed">
                  {selectedMeal.description}
                </p>
                
                <div className="flex items-center gap-4 mt-4 text-sage-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{selectedMeal.cookTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{selectedMeal.servings} serving{selectedMeal.servings > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{selectedMeal.rating}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedMeal.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-fresh-100 text-fresh-700 hover:bg-fresh-200">
                      {tag}
                    </Badge>
                  ))}
                  {selectedMeal.dietaryTags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-sage-300 text-sage-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Ingredients with Benefits */}
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-sage-800 mb-4">Highlight Ingredients</h3>
                  <div className="space-y-4">
                    {selectedMeal.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-sage-50 rounded-lg">
                        <span className="text-2xl">{ingredient.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-sage-800">{ingredient.name}</h4>
                            <span className="text-sm text-sage-600">{ingredient.amount}</span>
                          </div>
                          <p className="text-sm text-sage-600">{ingredient.benefits}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Order Controls */}
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-sage-800 mb-4">Order This Meal</h3>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(selectedMeal.id, -1)}
                      disabled={(quantities[selectedMeal.id] || 0) === 0}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl font-bold text-sage-800 min-w-[3ch] text-center">
                      {quantities[selectedMeal.id] || 0}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(selectedMeal.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button className="ml-4 bg-fresh-600 hover:bg-fresh-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-fresh-50">
      <div className="container mx-auto px-4 py-8">
        <SectionHeader 
          title="Meal Hub"
          subtitle="Discover delicious, nutritious meals crafted for your health journey"
          gradient="fresh"
        />
        
        {/* Redesigned Filters */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filterCategories.map(category => (
              <Card key={category.name} className="bg-white shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{category.icon}</span>
                    <h3 className="font-orbitron font-semibold text-sage-800">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {category.options.map(option => {
                      const isActive = activeFilters[category.name]?.includes(option);
                      return (
                        <Button
                          key={option}
                          variant={isActive ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleFilter(category.name, option)}
                          className={`text-xs h-7 ${isActive 
                            ? "bg-fresh-500 text-white hover:bg-fresh-600" 
                            : "border-sage-300 text-sage-700 hover:bg-sage-50"
                          }`}
                        >
                          {option}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Separator className="my-8 bg-sage-200" />
        
        {/* Meal Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeals.map(meal => (
            <Card 
              key={meal.id} 
              className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedMeal(meal)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={meal.image} 
                  alt={meal.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold text-sage-800">{meal.rating}</span>
                </div>
                <Badge className="absolute top-3 left-3 bg-fresh-500 text-white">
                  {meal.mealType}
                </Badge>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <h3 className="text-xl font-orbitron font-bold text-sage-800 group-hover:text-fresh-600 transition-colors">
                  {meal.name}
                </h3>
                
                <p className="text-sage-600 text-sm line-clamp-2 font-exo">
                  {meal.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-sage-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{meal.cookTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{meal.servings} serving{meal.servings > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="h-4 w-4" />
                    <span>{meal.nutrition.calories} cal</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {meal.tags.slice(0, 2).map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-fresh-100 text-fresh-700">
                      {tag}
                    </Badge>
                  ))}
                  {meal.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs bg-sage-100 text-sage-600">
                      +{meal.tags.length - 2} more
                    </Badge>
                  )}
                </div>

                {/* Quantity and Add Controls */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQuantity(meal.id, -1);
                      }}
                      disabled={(quantities[meal.id] || 0) === 0}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-bold text-sage-800 min-w-[2ch] text-center">
                      {quantities[meal.id] || 0}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQuantity(meal.id, 1);
                      }}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="fresh" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMeal(meal);
                      }}
                      className="text-xs"
                    >
                      View Details
                    </Button>
                    {(quantities[meal.id] || 0) > 0 && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(meal, quantities[meal.id] || 0);
                          setQuantities(prev => ({ ...prev, [meal.id]: 0 }));
                        }}
                        className="text-xs"
                      >
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredMeals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sage-600 text-lg font-exo">No meals found matching your filters.</p>
            <Button 
              variant="outline" 
              onClick={() => setActiveFilters({})}
              className="mt-4"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealHub;