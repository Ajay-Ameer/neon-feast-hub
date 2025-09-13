import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const FoodCarousel = () => {
  const foodItems = [
    {
      name: "Grilled Quinoa Bowl",
      emoji: "🥗",
      description: "Protein-rich superfood delight"
    },
    {
      name: "Spiced Paneer Curry",
      emoji: "🍛",
      description: "Traditional flavors, modern nutrition"
    },
    {
      name: "Grilled Salmon",
      emoji: "🐟",
      description: "Omega-3 powerhouse"
    },
    {
      name: "Fresh Fruit Medley",
      emoji: "🍓",
      description: "Nature's candy, perfectly portioned"
    },
    {
      name: "Herb-Crusted Chicken",
      emoji: "🍗",
      description: "Lean protein, maximum flavor"
    },
    {
      name: "Vegetable Stir-fry",
      emoji: "🥒",
      description: "Colorful nutrition explosion"
    },
    {
      name: "Lentil Power Bowl",
      emoji: "🍲",
      description: "Plant-based protein paradise"
    },
    {
      name: "Sweet Potato Delight",
      emoji: "🍠",
      description: "Complex carbs, simple pleasure"
    }
  ];

  return (
    <div className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-orbitron font-bold text-gradient-cyber pulse-cyber mb-2">
            Delicious Meals Waiting for You
          </h3>
          <p className="text-muted-foreground font-exo">
            Fresh, flavorful, and perfectly crafted for your health goals
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {foodItems.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="group cursor-pointer">
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-background to-card/50 backdrop-blur-sm cyber-border shadow-soft transition-all duration-500 hover-glow hover:scale-105">
                    <div className="text-center space-y-3">
                      <div className="text-4xl md:text-5xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 float-animation">
                        {item.emoji}
                      </div>
                      <h4 className="font-orbitron font-semibold text-foreground text-sm md:text-base">
                        {item.name}
                      </h4>
                      <p className="text-xs text-muted-foreground font-exo">
                        {item.description}
                      </p>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default FoodCarousel;