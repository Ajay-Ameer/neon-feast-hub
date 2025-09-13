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
    <Card className="card-glow fresh-border p-6 text-center relative overflow-hidden group hover-glow">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-card opacity-90"></div>
      <CardContent className="relative z-10 space-y-4 p-0">
        <div className="w-12 h-12 rounded-full bg-gradient-fresh border-2 border-fresh-green/50 mx-auto flex items-center justify-center float-animation hover-glow transition-all duration-300 hover:border-fresh-green hover:shadow-[0_0_20px_hsl(var(--fresh-green)/0.3)]">
          <Heart className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-orbitron font-bold text-fresh-green">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm font-exo">
          {description}
        </p>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-fresh-green font-orbitron">
            {price}
          </div>
          <div className="text-xs text-muted-foreground font-exo">per month</div>
        </div>
        <ul className="space-y-1 text-sm">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center justify-center space-x-1">
              <CheckCircle className="h-3 w-3 text-fresh-green" />
              <span className="font-exo">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full fresh-border border-fresh-green text-fresh-green hover:bg-fresh-green/10 font-orbitron">
          Choose Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlanCard;