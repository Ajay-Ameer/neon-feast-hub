import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Target, 
  Zap, 
  Globe2,
  Users,
  Lightbulb,
  ArrowRight
} from "lucide-react";

const Mission = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              ✨ Our Purpose
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient-food">Mission, Vision</span><br />
              <span className="text-gradient-warm">& Motivation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the driving force behind ZestyMonk and our commitment to transforming lives through healthy, convenient nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-warm-amber to-rich-orange flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gradient-food">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To help people live healthier lives through personalized nutrition and daily fresh meals. 
                We believe that eating well should be effortless, delicious, and perfectly tailored to your unique needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By combining cutting-edge nutrition science with innovative food technology, we deliver 
                restaurant-quality healthy meals right to your doorstep every morning - all you need to do is heat and enjoy.
              </p>
            </div>
            <Card className="card-elegant p-8">
              <CardContent className="space-y-6 p-0">
                <h3 className="text-2xl font-playfair font-bold text-gradient-warm">What Drives Us</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Heart className="h-5 w-5" />, text: "Making healthy eating accessible to everyone" },
                    { icon: <Zap className="h-5 w-5" />, text: "Saving time without compromising on nutrition" },
                    { icon: <Users className="h-5 w-5" />, text: "Building a community of health-conscious individuals" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fresh-green to-warm-amber flex items-center justify-center text-white mt-1">
                        {item.icon}
                      </div>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="card-elegant p-8 order-2 lg:order-1">
              <CardContent className="space-y-6 p-0">
                <h3 className="text-2xl font-playfair font-bold text-gradient-warm">Our Vision for 2030</h3>
                <div className="space-y-4">
                  {[
                    { number: "1M+", text: "Lives transformed through better nutrition" },
                    { number: "50+", text: "Cities across India and beyond" },
                    { number: "#1", text: "Most trusted healthy meal delivery brand" }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="text-2xl font-playfair font-bold text-gradient-food">{stat.number}</div>
                      <p className="text-muted-foreground">{stat.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fresh-green to-warm-amber flex items-center justify-center">
                  <Globe2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gradient-food">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most trusted global brand for convenient, tech-powered healthy eating. 
                We envision a world where nutritious, personalized meals are as accessible as ordering a coffee.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through continuous innovation in food technology and nutrition science, we aim to make healthy living 
                the easiest choice for millions of people worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-spice-red to-rich-orange flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-gradient-food">
                Why We Exist
              </h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ZestyMonk exists because we believe everyone deserves to feel their best, and nutrition is the foundation of that journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Time Poverty",
                description: "Busy professionals struggle to find time for meal planning, shopping, and cooking healthy meals.",
                solution: "We deliver ready-to-eat, nutritious meals every morning."
              },
              {
                title: "Nutrition Confusion",
                description: "Contradictory diet advice makes it hard to know what's truly healthy for your body.",
                solution: "Our nutritionists create personalized plans based on your specific goals."
              },
              {
                title: "Taste Compromise",
                description: "Healthy food options often sacrifice flavor, making long-term adherence difficult.",
                solution: "Our chefs craft delicious recipes that make healthy eating irresistibly tasty."
              }
            ].map((problem, index) => (
              <Card key={index} className="card-elegant p-6 text-center group">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-playfair font-bold text-gradient-warm">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {problem.description}
                  </p>
                  <div className="h-px bg-gradient-to-r from-warm-amber to-rich-orange"></div>
                  <p className="text-foreground font-medium">
                    {problem.solution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="appetizing" size="lg" className="text-lg px-8 py-4">
              <ArrowRight className="mr-2" />
              Start Your Health Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;