import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart } from "lucide-react";

interface PlanCardProps {
  name: string;
  description: string;
  price: string;
  color: string;
  features: string[];
}

const PlanCard = ({ name, description, price, color, features }: PlanCardProps) => {
  return (
    <Card className="card-glow cyber-border p-6 text-center relative overflow-hidden group hover-glow">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-card opacity-90"></div>
      <CardContent className="relative z-10 space-y-4 p-0">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${color} to-${color}/70 mx-auto flex items-center justify-center float-animation`}>
          <Heart className="h-6 w-6 text-black" />
        </div>
        <h3 className="text-xl font-orbitron font-bold text-foreground">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm font-exo">
          {description}
        </p>
        <div className="space-y-2">
          <div className={`text-2xl font-bold text-${color} font-orbitron`}>
            {price}
          </div>
          <div className="text-xs text-muted-foreground font-exo">per month</div>
        </div>
        <ul className="space-y-1 text-sm">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center justify-center space-x-1">
              <CheckCircle className="h-3 w-3 text-neon-cyan" />
              <span className="font-exo">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full cyber-border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 font-orbitron">
          Choose Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlanCard;