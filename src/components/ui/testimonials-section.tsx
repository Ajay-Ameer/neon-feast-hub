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
      quote: "Lost 12kg in 3 months with the weight loss plan! The portion sizes are perfect and the variety keeps me excited for every meal.",
      name: "Priya Lakshmi",
      location: "Chennai, Tamil Nadu",
      image: customer1,
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50"
    },
    {
      quote: "The muscle gain plan helped me add 6kg of lean muscle. High protein meals taste amazing and delivery is always on time!",
      name: "Karthik Rajesh",
      location: "Coimbatore, Tamil Nadu",
      image: customer2,
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50"
    },
    {
      quote: "As a working mom, the family plan is a lifesaver! Nutritious meals for the whole family without any cooking stress.",
      name: "Deepa Suresh",
      location: "Madurai, Tamil Nadu",
      image: customer3,
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50"
    },
    {
      quote: "The keto plan made my weight loss journey effortless. Down 2 dress sizes and feeling more energetic than ever!",
      name: "Arjun Kumar",
      location: "Trichy, Tamil Nadu",
      image: customer4,
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    }
  ];

  const testimonialsRow2 = [
    {
      quote: "Maintenance plan keeps me fit year-round. Fresh ingredients, balanced nutrition, and delicious taste—perfect combination!",
      name: "Anjali Ramesh",
      location: "Salem, Tamil Nadu",
      image: customer5,
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50"
    },
    {
      quote: "The diabetic-friendly plan has been life-changing. Blood sugar levels are stable and I never feel deprived of good food!",
      name: "Venkatesh Iyer",
      location: "Vellore, Tamil Nadu",
      image: customer6,
      bgColor: "bg-gradient-to-br from-fuchsia-50 to-pink-50"
    },
    {
      quote: "Athlete plan fuels my training perfectly! High protein, clean ingredients, and portion sizes that match my active lifestyle.",
      name: "Meera Balaji",
      location: "Erode, Tamil Nadu",
      image: customer1,
      bgColor: "bg-gradient-to-br from-lime-50 to-green-50"
    },
    {
      quote: "Weight gain plan helped me reach my goal weight healthily. Every meal is nutritious and perfectly portioned for my needs.",
      name: "Sanjay Krishnan",
      location: "Thanjavur, Tamil Nadu",
      image: customer2,
      bgColor: "bg-gradient-to-br from-sky-50 to-indigo-50"
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

      {/* First Row - Moving Left to Right */}
      <div className="mb-8">
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
            {testimonialsRow1.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className={`${testimonial.bgColor} rounded-2xl p-6 h-full transition-all hover:shadow-lg duration-300 border border-gray-100`}>
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

      {/* Second Row - Moving Right to Left (Opposite Direction) */}
      <div>
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
            {testimonialsRow2.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3" dir="ltr">
                <div className={`${testimonial.bgColor} rounded-2xl p-6 h-full transition-all hover:shadow-lg duration-300 border border-gray-100`}>
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
