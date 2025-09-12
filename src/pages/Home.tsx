import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star,
  ChefHat,
  Truck,
  Package,
  Users
} from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";
import processIcons from "@/assets/process-icons.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-bg py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-neon-green border-neon-green px-4 py-1">
                  🚀 Revolutionary Food Tech
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-orbitron font-black leading-tight">
                  <span className="text-gradient-neon pulse-neon">Healthy Food</span><br />
                  <span className="text-gradient-food">Delivered Fresh</span><br />
                  <span className="text-neon-yellow">Every Morning!</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience the future of nutrition with our AI-powered meal plans, 
                  cooked fresh daily and delivered using patented retort packaging technology 
                  that keeps nutrients intact and flavors explosive!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Zap className="mr-2" />
                  Start My Transformation
                </Button>
                <Button variant="outline" size="lg" className="text-lg border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black">
                  View Meal Plans
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-neon-green" />
                  <span>Fresh Daily Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-neon-blue" />
                  <span>Patented Tech</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-neon-pink" />
                  <span>Nutrient Intact</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-orange/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Fresh, healthy ZestyMonk meal with vibrant vegetables" 
                className="relative z-10 w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-orbitron font-bold text-gradient-neon">
              How ZestyMonk Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four simple steps to transform your health and taste buds forever
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Personalized Nutrition",
                description: "AI analyzes your health goals, dietary preferences, and nutritional needs",
                color: "neon-green",
                step: "01"
              },
              {
                icon: <ChefHat className="h-8 w-8" />,
                title: "We Cook Fresh",
                description: "Expert chefs prepare your meals with the finest ingredients daily",
                color: "neon-orange",
                step: "02"
              },
              {
                icon: <Package className="h-8 w-8" />,
                title: "Patented Packaging",
                description: "Revolutionary retort technology preserves nutrients and enhances flavor",
                color: "neon-pink",
                step: "03"
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: "Daily Delivery",
                description: "Fresh meals delivered to your doorstep every morning, ready to heat and eat",
                color: "neon-yellow",
                step: "04"
              }
            ].map((step, index) => (
              <Card key={index} className="card-glow text-center p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-orbitron font-black opacity-10">
                  {step.step}
                </div>
                <CardContent className="space-y-4 p-0">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-${step.color} to-${step.color}/70 flex items-center justify-center text-black`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ZestyMonk */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-orbitron font-bold text-gradient-food">
              Why Choose ZestyMonk?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another meal delivery service - we're your health transformation partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Patented Technology",
                description: "Our exclusive retort packaging keeps nutrients 98% intact while enhancing flavors",
                gradient: "from-neon-blue to-neon-purple"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Personalized Nutrition",
                description: "AI-powered meal planning based on your unique health profile and goals",
                gradient: "from-neon-pink to-neon-orange"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fresh Daily Delivery",
                description: "No meal prep, no cooking stress - just heat and enjoy restaurant-quality meals",
                gradient: "from-neon-green to-neon-yellow"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "100% Natural",
                description: "No preservatives, no artificial additives - just pure, wholesome ingredients",
                gradient: "from-neon-yellow to-neon-green"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Chef-Crafted",
                description: "Every meal designed by nutrition experts and prepared by professional chefs",
                gradient: "from-neon-orange to-neon-pink"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Instant Results",
                description: "Feel the energy boost and health improvements from day one",
                gradient: "from-neon-purple to-neon-blue"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-glow p-6 group">
                <CardContent className="space-y-4 p-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-black group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-orbitron font-bold text-gradient-neon">
              Choose Your Health Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored nutrition plans for every lifestyle and health goal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Weight Loss",
                description: "Burn fat, boost metabolism",
                price: "₹2,999",
                color: "neon-green",
                features: ["Calorie-controlled", "Fat-burning foods", "Portion optimized"]
              },
              {
                name: "Muscle Gain",
                description: "Build strength, gain muscle",
                price: "₹3,499",
                color: "neon-orange",
                features: ["High protein", "Recovery foods", "Performance focused"]
              },
              {
                name: "Diabetic-Friendly",
                description: "Blood sugar management",
                price: "₹3,299",
                color: "neon-pink",
                features: ["Low glycemic", "Sugar-free", "Doctor approved"]
              },
              {
                name: "General Wellness",
                description: "Balanced nutrition",
                price: "₹2,799",
                color: "neon-yellow",
                features: ["All nutrients", "Immunity boost", "Energy focused"]
              }
            ].map((plan, index) => (
              <Card key={index} className="card-glow p-6 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-background to-card opacity-90"></div>
                <CardContent className="relative z-10 space-y-4 p-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${plan.color} to-${plan.color}/70 mx-auto flex items-center justify-center`}>
                    <Heart className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                  <div className="space-y-2">
                    <div className={`text-2xl font-bold text-${plan.color}`}>
                      {plan.price}
                    </div>
                    <div className="text-xs text-muted-foreground">per month</div>
                  </div>
                  <ul className="space-y-1 text-sm">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-1">
                        <CheckCircle className="h-3 w-3 text-neon-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-neon-green text-neon-green hover:bg-neon-green hover:text-black">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="text-lg px-8">
              View All Plans & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-orbitron font-bold text-gradient-food">
              What Our Members Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real transformations, real results, real taste explosions!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Software Engineer",
                content: "Lost 15kg in 3 months! The meals are so delicious, I never felt like I was on a diet. ZestyMonk changed my life!",
                rating: 5,
                image: "👩‍💻"
              },
              {
                name: "Rohit Kumar",
                role: "Fitness Trainer",
                content: "As a trainer, I recommend ZestyMonk to all my clients. The muscle gain plan is perfect - high protein and incredibly tasty!",
                rating: 5,
                image: "🏋️‍♂️"
              },
              {
                name: "Dr. Anjali Mehta",
                role: "Diabetologist",
                content: "The diabetic-friendly plan is scientifically sound. My patients love the taste and their blood sugar levels have improved significantly.",
                rating: 5,
                image: "👩‍⚕️"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card-glow p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-neon-yellow text-neon-yellow" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-green to-neon-yellow flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-green/10 to-neon-orange/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-orbitron font-bold text-gradient-neon">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of healthy, happy ZestyMonk members. Your taste buds and body will thank you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Zap className="mr-2" />
                Start My Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              🔥 Limited time: First week FREE for new members!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;