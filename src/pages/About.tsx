import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Globe,
  Target,
  Lightbulb,
  Rocket
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-neon-orange border-neon-orange px-4 py-1">
              🚀 Our Story
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-orbitron font-black leading-tight">
              <span className="text-gradient-neon">Revolutionizing</span><br />
              <span className="text-gradient-food">Healthy Living</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At ZestyMonk, we believe that healthy food shouldn't be boring, complicated, or time-consuming. 
              We're on a mission to make nutritious eating irresistibly delicious and effortlessly convenient.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Rocket className="mr-2" />
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-gradient-neon">
                The ZestyMonk Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2023 by a team of passionate nutritionists, food scientists, and tech innovators, 
                  ZestyMonk was born from a simple frustration: why does healthy food have to taste boring 
                  and why is eating well so complicated?
                </p>
                <p>
                  Our founders, Dr. Arjun Patel (Nutritionist) and Meera Singh (Food Tech Engineer), 
                  spent years researching how to preserve nutrients while maximizing flavor. 
                  The breakthrough came with our patented retort packaging technology.
                </p>
                <p>
                  Today, we're proud to serve over 50,000+ health-conscious individuals across India, 
                  delivering not just meals, but transformation, convenience, and pure food joy.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-yellow/20 rounded-3xl blur-3xl"></div>
              <Card className="card-glow p-8 relative z-10">
                <CardContent className="space-y-6 p-0">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-orbitron font-bold text-neon-green">50K+</div>
                      <div className="text-sm text-muted-foreground">Happy Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-orbitron font-bold text-neon-orange">1M+</div>
                      <div className="text-sm text-muted-foreground">Meals Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-orbitron font-bold text-neon-pink">98%</div>
                      <div className="text-sm text-muted-foreground">Nutrient Retention</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-orbitron font-bold text-neon-yellow">25+</div>
                      <div className="text-sm text-muted-foreground">Cities Served</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-orbitron font-bold text-gradient-food">
              Patented Retort Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The science behind keeping your food fresh, nutritious, and explosively flavorful
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "98% Nutrient Retention",
                description: "Our patented process preserves vitamins, minerals, and antioxidants that traditional cooking methods destroy",
                color: "neon-green"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Flavor Lock Technology",
                description: "Seals in natural flavors and aromas, making every bite taste like it was just prepared",
                color: "neon-orange"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Zero Preservatives",
                description: "No artificial additives needed - our technology naturally extends freshness without chemicals",
                color: "neon-pink"
              }
            ].map((tech, index) => (
              <Card key={index} className="card-glow p-6 text-center">
                <CardContent className="space-y-4 p-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${tech.color} to-${tech.color}/70 mx-auto flex items-center justify-center text-black`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-foreground">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-orbitron font-bold text-gradient-neon">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that drive everything we do at ZestyMonk
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Health First",
                description: "Every decision we make prioritizes your health and wellbeing",
                color: "neon-pink"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Quality Excellence",
                description: "We never compromise on ingredient quality or preparation standards",
                color: "neon-orange"
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovation",
                description: "Constantly pushing boundaries in food technology and nutrition science",
                color: "neon-yellow"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Customer Love",
                description: "Your success and satisfaction fuel our passion every single day",
                color: "neon-green"
              }
            ].map((value, index) => (
              <Card key={index} className="card-glow p-6 text-center group">
                <CardContent className="space-y-4 p-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${value.color} to-${value.color}/70 mx-auto flex items-center justify-center text-black group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-orbitron font-bold text-gradient-food">
              Our Mission Goes Beyond Food
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're building a healthier India, one meal at a time. Our mission extends beyond just delivering food - 
              we're creating a movement of health-conscious individuals who refuse to compromise on taste or convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Target className="mr-2" />
                Read Our Full Mission
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;