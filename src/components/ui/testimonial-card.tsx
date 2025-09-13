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
    <Card className="card-glow cyber-border p-6 hover-glow">
      <CardContent className="space-y-4 p-0">
        <div className="flex justify-center space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-neon-cyan text-neon-cyan animate-pulse" />
          ))}
        </div>
        <p className="text-muted-foreground italic leading-relaxed font-exo">
          "{content}"
        </p>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center text-2xl hover-glow">
            {image}
          </div>
          <div>
            <div className="font-bold text-foreground font-orbitron">{name}</div>
            <div className="text-sm text-muted-foreground font-exo">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;