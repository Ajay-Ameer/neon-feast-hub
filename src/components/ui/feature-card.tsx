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
    <Card className={`card-glow cyber-border text-center p-6 relative overflow-hidden group ${className}`}>
      {step && (
        <div className="absolute top-4 right-4 text-6xl font-orbitron font-black opacity-10 text-neon-cyan">
          {step}
        </div>
      )}
      <CardContent className="space-y-4 p-0">
        <div className={`mx-auto w-16 h-16 rounded-full ${gradient || 'bg-gradient-to-r from-neon-cyan to-neon-blue'} flex items-center justify-center text-white float-animation hover-glow`}>
          {icon}
        </div>
        <h3 className="text-xl font-orbitron font-bold text-foreground">
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