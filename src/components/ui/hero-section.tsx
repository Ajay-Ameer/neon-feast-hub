import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative hero-bg py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="cyber-border text-neon-cyan border-neon-cyan/50 px-4 py-2 font-orbitron">
                🚀 Revolutionary Food Tech
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-orbitron font-bold leading-tight">
                <span className="text-gradient-cyber pulse-cyber">Healthy Food</span><br />
                <span className="text-gradient-plasma">Delivered Fresh</span><br />
                <span className="text-neon-blue">Every Morning!</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-exo">
                Experience the future of nutrition with our AI-powered meal plans, 
                cooked fresh daily and delivered using patented retort packaging technology 
                that keeps nutrients intact and flavors explosive!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-cyber text-lg px-8 py-4">
                <Zap className="mr-2" />
                Start My Transformation
              </Button>
              <Button variant="outline" className="btn-plasma text-lg border-neon-purple text-neon-purple hover:bg-neon-purple/20">
                View Meal Plans
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 hover-glow">
                <CheckCircle className="h-5 w-5 text-neon-cyan" />
                <span className="font-exo">Fresh Daily Delivery</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow">
                <Shield className="h-5 w-5 text-neon-blue" />
                <span className="font-exo">Patented Tech</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow">
                <Heart className="h-5 w-5 text-plasma-pink" />
                <span className="font-exo">Nutrient Intact</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-3xl blur-3xl animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="Fresh, healthy ZestyMonk meal with vibrant vegetables" 
              className="relative z-10 w-full rounded-3xl shadow-2xl hover-glow transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;