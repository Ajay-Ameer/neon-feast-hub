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
    <Card className={`health-card text-center p-8 relative overflow-hidden group transition-all duration-300 ${className}`}>
      {step && (
        <div className="absolute top-4 right-4 text-5xl font-orbitron font-black opacity-8 text-fresh-green/30">
          {step}
        </div>
      )}
      <CardContent className="space-y-6 p-0">
        <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-fresh border border-fresh-green/30 flex items-center justify-center text-white float-gentle hover:scale-110 transition-all duration-300 shadow-md hover:shadow-fresh">
          <div className="text-2xl">
            {icon}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-orbitron font-bold text-fresh-green group-hover:text-gradient-fresh transition-all duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground font-exo leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Health-focused accent */}
        <div className="w-12 h-1 bg-gradient-fresh rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;