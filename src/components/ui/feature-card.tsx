import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: string;
  step?: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, gradient, step, className = "" }: FeatureCardProps) => {
  return (
    <Card className={`card-glow fresh-border text-center p-6 relative overflow-hidden group ${className}`}>
      {step && (
        <div className="absolute top-4 right-4 text-6xl font-orbitron font-black opacity-10 text-fresh-green">
          {step}
        </div>
      )}
      <CardContent className="space-y-4 p-0">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-fresh border-2 border-fresh-green/50 flex items-center justify-center text-white float-animation hover-glow transition-all duration-300 hover:border-fresh-green hover:shadow-[0_0_20px_hsl(var(--fresh-green)/0.3)]">
          {icon}
        </div>
        <h3 className="text-xl font-orbitron font-bold text-fresh-green">
          {title}
        </h3>
        <p className="text-muted-foreground font-exo">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;