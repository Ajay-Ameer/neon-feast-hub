import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <Card className="health-card p-8 transition-all duration-300">
      <CardContent className="space-y-6 p-0">
        <div className="flex justify-center space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-vitality-orange text-vitality-orange drop-shadow-sm" />
          ))}
        </div>
        
        <blockquote className="text-muted-foreground italic leading-relaxed font-exo text-lg relative">
          <div className="absolute -top-2 -left-2 text-4xl text-fresh-green/20 font-playfair">"</div>
          {content}
          <div className="absolute -bottom-2 -right-2 text-4xl text-fresh-green/20 font-playfair">"</div>
        </blockquote>
        
        <div className="flex items-center space-x-4 pt-4 border-t border-fresh-green/10">
          <div className="w-16 h-16 rounded-full bg-gradient-fresh border-2 border-fresh-green/30 flex items-center justify-center text-3xl health-card shadow-md text-white">
            {image}
          </div>
          <div className="space-y-1">
            <div className="font-bold text-fresh-green font-orbitron text-lg">{name}</div>
            <div className="text-sm text-muted-foreground font-exo">{role}</div>
            <div className="flex items-center gap-1 text-xs text-success-green font-exo">
              <span>💚</span>
              <span>Verified Member</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;