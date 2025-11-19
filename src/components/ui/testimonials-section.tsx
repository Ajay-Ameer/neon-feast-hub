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
      quote: "Lost 15kg in 4 months with the weight loss plan! The meals are tasty and kept me full. I feel healthier and more confident now.",
      name: "Priya Lakshmi",
      location: "Chennai, Tamil Nadu",
      image: customer1,
      bgColor: "bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100"
    },
    {
      quote: "The muscle gain plan helped me build 7kg of muscle. High-protein meals are delicious and fit perfectly into my workout routine!",
      name: "Karthik Rajesh",
      location: "Coimbatore, Tamil Nadu",
      image: customer2,
      bgColor: "bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"
    },
    {
      quote: "Weight loss plan changed my life! Down from 85kg to 68kg. The variety of meals made it easy to stick with the plan.",
      name: "Deepa Suresh",
      location: "Madurai, Tamil Nadu",
      image: customer3,
      bgColor: "bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100"
    },
    {
      quote: "Muscle gain meals are perfect for my fitness goals. Gained lean muscle while enjoying every bite. Best decision I made!",
      name: "Arjun Kumar",
      location: "Trichy, Tamil Nadu",
      image: customer4,
      bgColor: "bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"
    },
    {
      quote: "The maintenance plan keeps me at my ideal weight. Fresh, balanced meals delivered daily. No more meal prep stress!",
      name: "Anjali Ramesh",
      location: "Salem, Tamil Nadu",
      image: customer5,
      bgColor: "bg-gradient-to-br from-violet-50 via-purple-50 to-violet-100"
    },
    {
      quote: "Weight loss meals made dieting feel easy. Lost 10kg without feeling hungry. The taste is amazing and portions are just right!",
      name: "Venkatesh Iyer",
      location: "Vellore, Tamil Nadu",
      image: customer6,
      bgColor: "bg-gradient-to-br from-fuchsia-50 via-pink-50 to-fuchsia-100"
    }
  ];

  const testimonialsRow2 = [
    {
      quote: "Muscle gain plan exceeded my expectations! Added 8kg of solid muscle in 5 months. Meals are packed with protein and flavor.",
      name: "Meera Balaji",
      location: "Erode, Tamil Nadu",
      image: customer1,
      bgColor: "bg-gradient-to-br from-lime-50 via-green-50 to-lime-100"
    },
    {
      quote: "Maintenance plan is exactly what I needed. Keeps me energized and fit without any extra effort. Love the convenience!",
      name: "Sanjay Krishnan",
      location: "Thanjavur, Tamil Nadu",
      image: customer2,
      bgColor: "bg-gradient-to-br from-sky-50 via-indigo-50 to-sky-100"
    },
    {
      quote: "Weight loss journey became enjoyable with these meals. Lost 18kg and my energy levels are through the roof. Highly recommend!",
      name: "Lakshmi Pradeep",
      location: "Karur, Tamil Nadu",
      image: customer3,
      bgColor: "bg-gradient-to-br from-red-50 via-rose-50 to-red-100"
    },
    {
      quote: "The muscle gain meals helped me transform my physique. Gained quality muscle mass and strength. Results speak for themselves!",
      name: "Rajesh Kumar",
      location: "Tirunelveli, Tamil Nadu",
      image: customer4,
      bgColor: "bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100"
    },
    {
      quote: "Maintenance plan fits my lifestyle perfectly. Consistent energy, great taste, and no cooking hassle. It's been a game-changer!",
      name: "Divya Selvam",
      location: "Hosur, Tamil Nadu",
      image: customer5,
      bgColor: "bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100"
    },
    {
      quote: "Weight loss plan made me lose 14kg in 3 months. Delicious meals that don't feel like diet food. Finally reached my goal weight!",
      name: "Naveen Prabhu",
      location: "Dindigul, Tamil Nadu",
      image: customer6,
      bgColor: "bg-gradient-to-br from-indigo-50 via-violet-50 to-indigo-100"
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
            direction: "rtl"
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4" dir="rtl">
            {testimonialsRow1.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3" dir="ltr">
                <div className={`${testimonial.bgColor} rounded-2xl p-6 h-full transition-all hover:shadow-xl duration-500 border border-gray-200`}>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
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
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonialsRow2.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className={`${testimonial.bgColor} rounded-2xl p-6 h-full transition-all hover:shadow-xl duration-500 border border-gray-200`}>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
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
