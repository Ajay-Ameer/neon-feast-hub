import { useCart } from "@/contexts/CartContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SectionHeader from "@/components/ui/section-header";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalItems, getTotalCalories } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/10">
        {/* Decorative vegetables background */}
        <div className="fixed inset-0 opacity-[0.15] pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-accent/40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-secondary/30 animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-14 h-14 rounded-full bg-primary/40 animate-pulse delay-3000"></div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <SectionHeader
            title="Your Meal Cart"
            subtitle="Review your selected meals before ordering"
          />
          
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Start adding some delicious meals to your cart!</p>
            <Button asChild>
              <a href="/meal-hub">Browse Meals</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const totalNutrition = items.reduce((acc, item) => ({
    calories: acc.calories + (item.nutrition.calories * item.quantity),
    protein: acc.protein + (item.nutrition.protein * item.quantity),
    carbs: acc.carbs + (item.nutrition.carbs * item.quantity),
    fat: acc.fat + (item.nutrition.fat * item.quantity),
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/10">
      {/* Decorative vegetables background */}
      <div className="fixed inset-0 opacity-[0.15] pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-accent/40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-secondary/30 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 rounded-full bg-primary/40 animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <SectionHeader
          title="Your Meal Cart"
          subtitle={`${getTotalItems()} items • ${getTotalCalories()} total calories`}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover border-2 border-border/30"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {item.nutrition.calories} cal
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.nutrition.protein}g protein
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.nutrition.carbs}g carbs
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.nutrition.fat}g fat
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Items:</span>
                  <span className="font-medium">{getTotalItems()}</span>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-medium">Total Nutrition</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span>Calories:</span>
                      <span>{Math.round(totalNutrition.calories)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Protein:</span>
                      <span>{Math.round(totalNutrition.protein)}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carbs:</span>
                      <span>{Math.round(totalNutrition.carbs)}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fat:</span>
                      <span>{Math.round(totalNutrition.fat)}g</span>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Need More Meals?</h4>
                  <Button variant="secondary" asChild className="w-full">
                    <a href="/meal-hub">Continue Shopping</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;