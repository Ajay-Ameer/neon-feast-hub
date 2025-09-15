import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SectionHeader from "@/components/ui/section-header";
import { Clock, Users, Star, Flame, Zap, Heart } from "lucide-react";
import breakfastBowl from "@/assets/meal-breakfast-bowl.jpg";
import buddhaBowl from "@/assets/meal-buddha-bowl.jpg";
import salmonSalad from "@/assets/meal-salmon-salad.jpg";
import ketoChicken from "@/assets/meal-keto-chicken.jpg";

interface Meal {
  id: string;
  name: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  rating: number;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
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
    calories: 420,
    protein: 22,
    carbs: 18,
    fat: 28,
    rating: 4.8,
    difficulty: "Easy",
    ingredients: [
      "3 large eggs",
      "1/2 avocado, sliced",
      "5 cherry tomatoes, halved",
      "2 tbsp olive oil",
      "Fresh herbs (parsley, chives)",
      "Salt and pepper to taste",
      "1 slice whole grain toast"
    ],
    instructions: [
      "Heat olive oil in a non-stick pan over medium heat",
      "Scramble the eggs until fluffy and creamy",
      "Toast the bread and place in bowl",
      "Top with scrambled eggs, avocado slices, and tomatoes",
      "Garnish with fresh herbs and season to taste"
    ],
    tags: ["High Protein", "Low Carb", "Gluten Free"],
    dietaryTags: ["Vegetarian", "Keto Friendly"],
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
    calories: 380,
    protein: 14,
    carbs: 52,
    fat: 16,
    rating: 4.6,
    difficulty: "Medium",
    ingredients: [
      "1 cup quinoa, cooked",
      "1 cup roasted sweet potato",
      "1/2 cup chickpeas",
      "1 cup mixed greens",
      "1/4 cup red cabbage, shredded",
      "2 tbsp tahini",
      "1 tbsp lemon juice",
      "1 tsp maple syrup"
    ],
    instructions: [
      "Cook quinoa according to package instructions",
      "Roast sweet potato and chickpeas in the oven",
      "Prepare tahini dressing by mixing tahini, lemon, and maple syrup",
      "Arrange all ingredients in a bowl",
      "Drizzle with dressing and serve"
    ],
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
    calories: 320,
    protein: 28,
    carbs: 12,
    fat: 18,
    rating: 4.7,
    difficulty: "Easy",
    ingredients: [
      "150g fresh salmon fillet",
      "2 cups mixed greens",
      "1/2 cucumber, sliced",
      "1/4 red onion, thinly sliced",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tsp Dijon mustard",
      "Fresh dill"
    ],
    instructions: [
      "Season and pan-sear salmon until cooked through",
      "Prepare vinaigrette with olive oil, lemon, and mustard",
      "Arrange mixed greens, cucumber, and onion in bowl",
      "Top with flaked salmon",
      "Drizzle with vinaigrette and garnish with dill"
    ],
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
    calories: 290,
    protein: 32,
    carbs: 8,
    fat: 14,
    rating: 4.5,
    difficulty: "Easy",
    ingredients: [
      "300g chicken breast, sliced",
      "1 cup broccoli florets",
      "1 bell pepper, sliced",
      "2 tbsp coconut oil",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp soy sauce (low sodium)",
      "Fresh herbs"
    ],
    instructions: [
      "Heat coconut oil in a wok or large pan",
      "Stir-fry chicken until golden and cooked through",
      "Add garlic and ginger, cook for 30 seconds",
      "Add vegetables and stir-fry until crisp-tender",
      "Season with soy sauce and garnish with herbs"
    ],
    tags: ["High Protein", "Low Carb", "Quick & Easy"],
    dietaryTags: ["Keto Friendly", "Gluten Free", "Dairy Free"],
    cuisineType: "Asian",
    mealType: "Dinner"
  }
];

const filterCategories = [
  {
    name: "Meal Type",
    options: ["Breakfast", "Lunch", "Dinner", "Snack"]
  },
  {
    name: "Dietary Tags",
    options: ["Vegetarian", "Vegan", "Keto Friendly", "Gluten Free", "Dairy Free", "Pescatarian"]
  },
  {
    name: "Cuisine Type",
    options: ["Continental", "Mediterranean", "Asian", "Mexican", "Indian"]
  },
  {
    name: "Difficulty",
    options: ["Easy", "Medium", "Hard"]
  }
];

const MealHub = () => {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

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
              
              <div className="mt-6 grid grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Flame className="h-6 w-6 mx-auto text-orange-500 mb-2" />
                  <div className="text-2xl font-bold text-sage-800">{selectedMeal.calories}</div>
                  <div className="text-sm text-sage-600">Calories</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Zap className="h-6 w-6 mx-auto text-blue-500 mb-2" />
                  <div className="text-2xl font-bold text-sage-800">{selectedMeal.protein}g</div>
                  <div className="text-sm text-sage-600">Protein</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Heart className="h-6 w-6 mx-auto text-green-500 mb-2" />
                  <div className="text-2xl font-bold text-sage-800">{selectedMeal.carbs}g</div>
                  <div className="text-sm text-sage-600">Carbs</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Star className="h-6 w-6 mx-auto text-yellow-500 mb-2" />
                  <div className="text-2xl font-bold text-sage-800">{selectedMeal.fat}g</div>
                  <div className="text-sm text-sage-600">Fat</div>
                </div>
              </div>
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
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-sage-800 mb-4">Ingredients</h3>
                  <ul className="space-y-2">
                    {selectedMeal.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2 text-sage-600">
                        <div className="w-2 h-2 rounded-full bg-fresh-400"></div>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-sage-800 mb-4">Instructions</h3>
                  <ol className="space-y-3">
                    {selectedMeal.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-3 text-sage-600">
                        <span className="flex-shrink-0 w-6 h-6 bg-fresh-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        {instruction}
                      </li>
                    ))}
                  </ol>
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
        
        {/* Filters */}
        <div className="mb-8 space-y-6">
          {filterCategories.map(category => (
            <div key={category.name}>
              <h3 className="text-lg font-orbitron font-semibold text-sage-800 mb-3">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.options.map(option => {
                  const isActive = activeFilters[category.name]?.includes(option);
                  return (
                    <Button
                      key={option}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleFilter(category.name, option)}
                      className={isActive 
                        ? "bg-fresh-500 text-white hover:bg-fresh-600" 
                        : "border-sage-300 text-sage-700 hover:bg-sage-50"
                      }
                    >
                      {option}
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
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
                    <span>{meal.calories} cal</span>
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
                
                <Button 
                  variant="fresh" 
                  className="w-full mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMeal(meal);
                  }}
                >
                  View Recipe
                </Button>
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