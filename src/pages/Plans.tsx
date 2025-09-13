import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Star, 
  Heart, 
  Zap, 
  Shield, 
  Users,
  Calendar,
  Phone,
  ChefHat
} from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Weight Loss Plan",
      description: "Scientifically designed meals to help you shed pounds while staying energized",
      features: [
        "1200-1500 calories per day",
        "High protein, low carb focus",
        "Metabolism boosting ingredients",
        "Weekly body composition tracking",
        "Dedicated nutritionist support",
        "Both Vegetarian & Non-Vegetarian options"
      ],
      weeklyPrice: "₹5,999",
      monthlyPrice: "₹22,999",
      originalPrice: "₹26,000",
      popular: false,
      icon: <Heart className="h-6 w-6" />,
      color: "from-spice-red to-rich-orange"
    },
    {
      name: "Muscle Gain Plan",
      description: "Power-packed meals to fuel your workouts and build lean muscle mass",
      features: [
        "2000-2500 calories per day",
        "High protein (30g+ per meal)",
        "Pre & post workout meal timing",
        "Creatine and BCAA enriched options",
        "Fitness trainer consultation",
        "Both Vegetarian & Non-Vegetarian options"
      ],
      weeklyPrice: "₹6,499",
      monthlyPrice: "₹24,999",
      originalPrice: "₹28,000",
      popular: true,
      icon: <Zap className="h-6 w-6" />,
      color: "from-warm-amber to-golden-yellow"
    },
    {
      name: "Diabetic-Friendly Plan",
      description: "Carefully balanced meals to help manage blood sugar levels naturally",
      features: [
        "Low glycemic index ingredients",
        "Portion-controlled carbohydrates",
        "High fiber, nutrient-dense meals",
        "Blood sugar tracking integration",
        "Diabetic specialist consultation",
        "Both Vegetarian & Non-Vegetarian options"
      ],
      weeklyPrice: "₹6,199",
      monthlyPrice: "₹23,999",
      originalPrice: "₹27,000",
      popular: false,
      icon: <Shield className="h-6 w-6" />,
      color: "from-fresh-green to-warm-amber"
    },
    {
      name: "General Wellness Plan",
      description: "Balanced nutrition for overall health and vitality",
      features: [
        "1600-1800 calories per day",
        "Balanced macro & micronutrients",
        "Seasonal ingredient variety",
        "Immunity boosting superfoods",
        "Monthly health check-ins",
        "Both Vegetarian & Non-Vegetarian options"
      ],
      weeklyPrice: "₹5,699",
      monthlyPrice: "₹21,999",
      originalPrice: "₹25,000",
      popular: false,
      icon: <Star className="h-6 w-6" />,
      color: "from-golden-yellow to-warm-amber"
    }
  ];

  const includedBenefits = [
    { icon: <ChefHat className="h-5 w-5" />, text: "Fresh meals prepared daily by expert chefs" },
    { icon: <Users className="h-5 w-5" />, text: "Personal nutritionist support & guidance" },
    { icon: <Calendar className="h-5 w-5" />, text: "Flexible meal customization options" },
    { icon: <Phone className="h-5 w-5" />, text: "24/7 customer support via WhatsApp" },
    { icon: <Shield className="h-5 w-5" />, text: "Patented retort packaging technology" },
    { icon: <Heart className="h-5 w-5" />, text: "No preservatives, 100% natural ingredients" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              🍽️ Choose Your Plan
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient-food">Simple, Transparent</span><br />
              <span className="text-gradient-warm">Meal Subscription Plans</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the perfect plan tailored to your health goals. All plans include fresh daily delivery, 
              nutritionist support, and our patented packaging technology.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`card-elegant relative ${plan.popular ? 'ring-2 ring-warm-amber' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-warm-amber to-rich-orange text-white font-semibold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} mx-auto flex items-center justify-center text-white mb-4`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-xl font-playfair font-bold text-gradient-food">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-muted-foreground">Weekly</span>
                        <div className="text-2xl font-playfair font-bold text-gradient-warm">
                          {plan.weeklyPrice}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Monthly</span>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-3xl font-playfair font-bold text-gradient-food">
                            {plan.monthlyPrice}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            {plan.originalPrice}
                          </span>
                        </div>
                        <div className="text-xs text-fresh-green font-medium">
                          Save {Math.round((1 - parseInt(plan.monthlyPrice.replace(/[₹,]/g, '')) / parseInt(plan.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-fresh-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Button 
                      variant={plan.popular ? "fresh" : "vitality"} 
                      className="w-full"
                    >
                      Subscribe Now
                    </Button>
                    <Button variant="outline" className="w-full text-sm">
                      Try for 3 Days - ₹299
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Included Benefits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-gradient-food">
              Included with Every Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No hidden costs, no surprises. Every ZestyMonk subscription includes these premium benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-background/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-warm-amber to-rich-orange flex items-center justify-center text-white flex-shrink-0">
                  {benefit.icon}
                </div>
                <p className="text-muted-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-gradient-food">
              Still Not Sure Which Plan is Right?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Chat with our nutrition experts for a free consultation. We'll help you choose the perfect plan 
              based on your goals, lifestyle, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="fresh" size="lg" className="text-lg px-8 py-4">
                <Phone className="mr-2" />
                Free Nutrition Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-warm-amber text-warm-amber hover:bg-warm-amber hover:text-white">
                WhatsApp Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;