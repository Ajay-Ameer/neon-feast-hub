import { Star } from "lucide-react";
import fitWoman1 from "@/assets/testimonials/fit-woman-1.jpg";
import fitMan1 from "@/assets/testimonials/fit-man-1.jpg";
import fitWoman2 from "@/assets/testimonials/fit-woman-2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Lost 15kg in 3 months",
      content: "The meals are so delicious, I never felt like I was on a diet. ZestyMonk changed my life!",
      rating: 5,
      image: fitWoman1,
      result: "15kg Lost"
    },
    {
      name: "Rohit Kumar",
      role: "Gained 8kg Muscle",
      content: "The muscle gain plan is perfect - high protein and incredibly tasty! My strength increased by 40%.",
      rating: 5,
      image: fitMan1,
      result: "8kg Muscle Gained"
    },
    {
      name: "Anjali Mehta",
      role: "Achieved Dream Body",
      content: "From size 14 to size 8! The transformation is real. I feel confident and energetic every day.",
      rating: 5,
      image: fitWoman2,
      result: "3 Sizes Down"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-green-50/30 to-white relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Real Transformations, Real Results
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied customers who have transformed their health with ZestyMonk
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full group">
                  {/* Image with Result Badge */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      {testimonial.result}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Stars */}
                    <div className="flex justify-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-600 leading-relaxed italic text-center">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Profile */}
                    <div className="text-center pt-4 border-t">
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-green-600 text-sm font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;