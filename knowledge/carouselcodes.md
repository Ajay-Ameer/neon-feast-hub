# Carousel Component Code

This file contains the carousel component code that was removed from the menu preview section.

## Original Carousel Implementation

```jsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FoodCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const meals = [
    {
      image: "/path/to/meal1.jpg",
      name: "Meal 1",
      description: "Description",
      calories: "400 cal"
    },
    // ... more meals
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % meals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + meals.length) % meals.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {meals.map((meal, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img 
                src={meal.image} 
                alt={meal.name}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {meals.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCarousel;
```

## Embla Carousel Implementation

```jsx
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
```

## CSS for Embla Carousel

```css
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
```