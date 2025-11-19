import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import customer1 from "@/assets/testimonials/customer-1.jpg";
import customer2 from "@/assets/testimonials/customer-2.jpg";
import customer3 from "@/assets/testimonials/customer-3.jpg";
import customer4 from "@/assets/testimonials/customer-4.jpg";
import customer5 from "@/assets/testimonials/customer-5.jpg";
import customer6 from "@/assets/testimonials/customer-6.jpg";

const TestimonialsSection = () => {
  const testimonialsRow1 = [
    {
      quote: "I've tried countless meal plans, but nothing compares to this one. Every sip feels like a warm hug! My mornings are incomplete without it.",
      name: "Olivia Richardson",
      location: "New York, USA",
      image: customer1,
      bgColor: "bg-pink-100"
    },
    {
      quote: "As a tea lover, I appreciate the rich flavors and premium quality. The blend has become my go-to for relaxation after a long day!",
      name: "Sophia Mitchell",
      location: "London, UK",
      image: customer2,
      bgColor: "bg-yellow-100"
    },
    {
      quote: "I never knew tea could taste this good! The flavors are so vibrant. Plus, the packaging is beautiful—perfect for gifting too!",
      name: "Aisha Khan",
      location: "Dubai, UAE",
      image: customer3,
      bgColor: "bg-orange-100"
    },
    {
      quote: "The variety of blends is amazing! Whether I need a morning energy boost or a calming bedtime tea, this brand has it all. Highly recommend!",
      name: "Emily Sanders",
      location: "Sydney, Australia",
      image: customer4,
      bgColor: "bg-green-100"
    }
  ];

  const testimonialsRow2 = [
    {
      quote: "This meal plan has changed my daily routine for the better! Delicious and refreshing. Love the natural ingredients!",
      name: "Priya Deshmukh",
      location: "Mumbai, India",
      image: customer5,
      bgColor: "bg-blue-100"
    },
    {
      quote: "I'm obsessed with the quality! Fresh ingredients and gives me the perfect balance. A must-try for all food enthusiasts!",
      name: "Mia Lawrence",
      location: "Toronto, Canada",
      image: customer6,
      bgColor: "bg-purple-100"
    },
    {
      quote: "Simply delicious! Every meal feels premium, and I love supporting a brand that values quality. Will definitely order again!",
      name: "Olivia Richardson",
      location: "New York, USA",
      image: customer1,
      bgColor: "bg-pink-100"
    },
    {
      quote: "The perfect blend for every occasion! From breakfast to dinner, these meals never disappoint. Absolutely love it!",
      name: "Sophia Mitchell",
      location: "London, UK",
      image: customer2,
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            What people are saying?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—see what our customers have to say about their experience!
          </p>
        </div>
      </div>

      {/* First Row - Moving Right to Left */}
      <div className="mb-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonialsRow1.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className={`${testimonial.bgColor} rounded-2xl p-6 h-full transition-transform hover:scale-105 duration-300`}>
                  <p className="text-gray-700 italic text-sm md:text-base leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Second Row - Moving Left to Right (Opposite Direction) */}
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4500,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4" dir="rtl">
            {testimonialsRow2.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3" dir="ltr">
                <div className={`${testimonial.bgColor} rounded-2xl p-6 h-full transition-transform hover:scale-105 duration-300`}>
                  <p className="text-gray-700 italic text-sm md:text-base leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
