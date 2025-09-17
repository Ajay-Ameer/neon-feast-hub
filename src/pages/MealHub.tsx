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
  cost: number;
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
    cost: 285,
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
    cost: 320,
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
    cost: 425,
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
    cost: 295,
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
    cost: 275,
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
    cost: 265,
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
    cost: 245,
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
    cost: 270,
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
    cost: 255,
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
    cost: 305,
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
    cost: 195,
    ingredients: [
      {
        name: "Multigrain Bread",
        amount: "2 slices",
        benefits: "Complex carbohydrates and fiber for sustained energy",
        icon: "🍞"
      },
      {
        name: "Avocado",
        amount: "1 medium",
        benefits: "Rich in healthy fats and potassium, supports heart health",
        icon: "🥑"
      }
    ],
    nutrition: {
      calories: 340,
      protein: 12,
      carbs: 28,
      fat: 22,
      fiber: 14,
      sugar: 6,
      sodium: 380,
      vitamins: ["Vitamin K", "Folate"],
      minerals: ["Potassium", "Magnesium"]
    },
    tags: ["Trendy", "Heart Healthy"],
    dietaryTags: ["Vegetarian", "Dairy Free"],
    cuisineType: "Modern",
    mealType: "Breakfast"
  },
  {
    id: "12",
    name: "Thai Green Curry",
    description: "Aromatic green curry with tender vegetables and coconut milk.",
    image: buddhaBowl,
    cookTime: "22 min",
    servings: 2,
    rating: 4.6,
    cost: 290,
    ingredients: [
      {
        name: "Green Curry Paste",
        amount: "3 tbsp",
        benefits: "Contains anti-inflammatory herbs and spices",
        icon: "🌶️"
      },
      {
        name: "Coconut Milk",
        amount: "400ml",
        benefits: "Healthy fats and natural sweetness",
        icon: "🥥"
      }
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 22,
      fat: 18,
      fiber: 6,
      sugar: 12,
      sodium: 420,
      vitamins: ["Vitamin C", "Vitamin A"],
      minerals: ["Iron", "Potassium"]
    },
    tags: ["Spicy", "Aromatic"],
    dietaryTags: ["Vegan", "Gluten Free"],
    cuisineType: "Thai",
    mealType: "Dinner"
  },
  {
    id: "13",
    name: "Smoked Chicken Salad",
    description: "Tender smoked chicken with crisp vegetables and herb dressing.",
    image: salmonSalad,
    cookTime: "15 min",
    servings: 1,
    rating: 4.4,
    cost: 315,
    ingredients: [
      {
        name: "Smoked Chicken",
        amount: "150g",
        benefits: "High protein with smoky flavor, supports muscle building",
        icon: "🍗"
      },
      {
        name: "Mixed Greens",
        amount: "2 cups",
        benefits: "Rich in vitamins and antioxidants",
        icon: "🥬"
      }
    ],
    nutrition: {
      calories: 280,
      protein: 30,
      carbs: 8,
      fat: 14,
      fiber: 4,
      sugar: 6,
      sodium: 480,
      vitamins: ["Vitamin A", "Vitamin C"],
      minerals: ["Iron", "Phosphorus"]
    },
    tags: ["High Protein", "Smoky"],
    dietaryTags: ["Gluten Free", "Dairy Free"],
    cuisineType: "American",
    mealType: "Lunch"
  },
  {
    id: "14",
    name: "Stuffed Bell Peppers",
    description: "Colorful bell peppers stuffed with quinoa, herbs and vegetables.",
    image: ketoChicken,
    cookTime: "35 min",
    servings: 2,
    rating: 4.3,
    cost: 280,
    ingredients: [
      {
        name: "Bell Peppers",
        amount: "4 large",
        benefits: "High in vitamin C and antioxidants",
        icon: "🫑"
      },
      {
        name: "Quinoa",
        amount: "1 cup",
        benefits: "Complete protein and fiber for satiety",
        icon: "🌾"
      }
    ],
    nutrition: {
      calories: 240,
      protein: 12,
      carbs: 38,
      fat: 6,
      fiber: 8,
      sugar: 14,
      sodium: 320,
      vitamins: ["Vitamin C", "Vitamin A"],
      minerals: ["Potassium", "Magnesium"]
    },
    tags: ["Colorful", "Filling"],
    dietaryTags: ["Vegetarian", "Gluten Free"],
    cuisineType: "Mediterranean",
    mealType: "Dinner"
  }
];

const MealHub = () => {
  const { addToCart } = useCart();
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>(meals);
  const [selectedMealType, setSelectedMealType] = useState<string>("All");
  const [selectedDietaryTag, setSelectedDietaryTag] = useState<string>("All");
  const [selectedCuisine, setSelectedCuisine] = useState<string>("All");
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const uniqueMealTypes = ["All", ...Array.from(new Set(meals.map(meal => meal.mealType)))];
  const uniqueDietaryTags = ["All", ...Array.from(new Set(meals.flatMap(meal => meal.dietaryTags)))];
  const uniqueCuisines = ["All", ...Array.from(new Set(meals.map(meal => meal.cuisineType)))];

  const filterMeals = (mealType: string, dietaryTag: string, cuisine: string) => {
    let filtered = meals;

    if (mealType !== "All") {
      filtered = filtered.filter(meal => meal.mealType === mealType);
    }

    if (dietaryTag !== "All") {
      filtered = filtered.filter(meal => meal.dietaryTags.includes(dietaryTag));
    }

    if (cuisine !== "All") {
      filtered = filtered.filter(meal => meal.cuisineType === cuisine);
    }

    setFilteredMeals(filtered);
  };

  const handleMealTypeChange = (mealType: string) => {
    setSelectedMealType(mealType);
    filterMeals(mealType, selectedDietaryTag, selectedCuisine);
  };

  const handleDietaryTagChange = (dietaryTag: string) => {
    setSelectedDietaryTag(dietaryTag);
    filterMeals(selectedMealType, dietaryTag, selectedCuisine);
  };

  const handleCuisineChange = (cuisine: string) => {
    setSelectedCuisine(cuisine);
    filterMeals(selectedMealType, selectedDietaryTag, cuisine);
  };

  const updateQuantity = (mealId: string, newQuantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [mealId]: Math.max(0, newQuantity)
    }));
  };

  const handleAddToCart = (meal: Meal) => {
    const quantity = quantities[meal.id] || 1;
    addToCart(meal, quantity);
    setQuantities(prev => ({ ...prev, [meal.id]: 0 }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-light-green/5 to-light-orange/5">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Fresh Meal Hub"
            subtitle="Discover delicious, nutritious meals crafted by our expert chefs. Each meal is designed to fuel your body and delight your taste buds."
            gradient="fresh"
          />
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              {/* Meal Type Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Meal Type:</span>
                {uniqueMealTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedMealType === type ? "fresh" : "outline"}
                    size="sm"
                    onClick={() => handleMealTypeChange(type)}
                    className="h-8 text-xs"
                  >
                    {type}
                  </Button>
                ))}
              </div>

              {/* Dietary Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Diet:</span>
                {uniqueDietaryTags.slice(0, 4).map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedDietaryTag === tag ? "vitality" : "outline"}
                    size="sm"
                    onClick={() => handleDietaryTagChange(tag)}
                    className="h-8 text-xs"
                  >
                    {tag}
                  </Button>
                ))}
              </div>

              {/* Cuisine Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Cuisine:</span>
                {uniqueCuisines.slice(0, 4).map((cuisine) => (
                  <Button
                    key={cuisine}
                    variant={selectedCuisine === cuisine ? "hero" : "outline"}
                    size="sm"
                    onClick={() => handleCuisineChange(cuisine)}
                    className="h-8 text-xs"
                  >
                    {cuisine}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meals Grid */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMeals.map((meal) => (
              <Card key={meal.id} className="card-elegant overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={meal.image} 
                    alt={meal.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {meal.rating}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {meal.cookTime}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-fresh-green to-warm-amber text-white font-bold">
                      ₹{meal.cost}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gradient-food group-hover:text-gradient-warm transition-colors">
                        {meal.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {meal.servings}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {meal.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {meal.dietaryTags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-fresh-green text-fresh-green">
                        {tag}
                      </Badge>
                    ))}
                    {meal.tags.slice(0, 1).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-warm-amber text-warm-amber">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Separator />

                  {/* Nutrition Breakdown */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-gradient-food">Nutrition Per Serving</h4>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-gradient-warm">{meal.nutrition.calories}</div>
                        <div className="text-xs text-muted-foreground">Calories</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-gradient-fresh">{meal.nutrition.protein}g</div>
                        <div className="text-xs text-muted-foreground">Protein</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-gradient-vitality">{meal.nutrition.carbs}g</div>
                        <div className="text-xs text-muted-foreground">Carbs</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-gradient-warm">{meal.nutrition.fat}g</div>
                        <div className="text-xs text-muted-foreground">Fat</div>
                      </div>
                    </div>

                    {/* Micro/Macro Details */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-muted-foreground">Fiber:</span> <span className="font-medium">{meal.nutrition.fiber}g</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Sugar:</span> <span className="font-medium">{meal.nutrition.sugar}g</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Sodium:</span> <span className="font-medium">{meal.nutrition.sodium}mg</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-xs">
                          <span className="text-muted-foreground">Vitamins:</span> <span className="font-medium">{meal.nutrition.vitamins.join(", ")}</span>
                        </div>
                        <div className="text-xs">
                          <span className="text-muted-foreground">Minerals:</span> <span className="font-medium">{meal.nutrition.minerals.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Ingredients & Benefits */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-gradient-food">Key Ingredients & Benefits</h4>
                    <div className="space-y-2">
                      {meal.ingredients.slice(0, 2).map((ingredient, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 rounded-lg bg-background/50">
                          <span className="text-lg">{ingredient.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm">{ingredient.name} - {ingredient.amount}</div>
                            <div className="text-xs text-muted-foreground leading-relaxed">{ingredient.benefits}</div>
                          </div>
                        </div>
                      ))}
                      {meal.ingredients.length > 2 && (
                        <div className="text-xs text-muted-foreground text-center">
                          +{meal.ingredients.length - 2} more ingredients
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Quantity & Add to Cart */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">Quantity:</span>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(meal.id, (quantities[meal.id] || 1) - 1)}
                          disabled={(quantities[meal.id] || 1) <= 1}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {quantities[meal.id] || 1}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(meal.id, (quantities[meal.id] || 1) + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <Button 
                      variant="fresh" 
                      className="w-full"
                      onClick={() => handleAddToCart(meal)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart - ₹{meal.cost * (quantities[meal.id] || 1)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MealHub;