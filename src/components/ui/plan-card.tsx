import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlanCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  gradient?: string;
  className?: string;
}

const PlanCard = ({ title, description, price, features, popular, gradient, className = "" }: PlanCardProps) => {
  return (
    <Card className={`${popular ? 'vitality-card ring-2 ring-vitality-orange/50' : 'health-card'} p-8 relative overflow-hidden transition-all duration-300 ${className}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gradient-vitality text-white px-6 py-2 rounded-full text-sm font-orbitron font-bold shadow-lg">
            ⭐ Most Popular Choice
          </div>
        </div>
      )}
      <CardContent className="space-y-8 p-0 pt-6">
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-orbitron font-bold text-fresh-green">
            {title}
          </h3>
          <p className="text-muted-foreground font-exo leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="text-center space-y-2">
          <div className="text-4xl font-playfair font-bold text-foreground">
            {price}
          </div>
          <div className="text-sm text-muted-foreground font-exo bg-fresh-green/10 px-3 py-1 rounded-full inline-block">
            per month • Cancel anytime
          </div>
        </div>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4 font-exo">
              <div className="w-6 h-6 rounded-full bg-gradient-fresh flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-muted-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-3 pt-2">
          <Button 
            variant={popular ? "vitality" : "fresh"} 
            className="w-full font-orbitron font-semibold py-6 text-lg"
          >
            {popular ? "🚀 Start Transformation" : "Choose Plan"}
          </Button>
          
          {popular && (
            <div className="text-center">
              <span className="text-xs text-success-green font-exo">
                💚 Join 50,000+ Happy Members
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanCard;