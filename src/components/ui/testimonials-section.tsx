import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Lost 15kg in 3 months! The meals are so delicious, I never felt like I was on a diet. ZestyMonk changed my life!",
      rating: 5,
      image: "👩‍💻"
    },
    {
      name: "Rohit Kumar",
      role: "Fitness Trainer",
      content: "As a trainer, I recommend ZestyMonk to all my clients. The muscle gain plan is perfect - high protein and incredibly tasty!",
      rating: 5,
      image: "🏋️‍♂️"
    },
    {
      name: "Dr. Anjali Mehta",
      role: "Diabetologist",
      content: "The diabetic-friendly plan is scientifically sound. My patients love the taste and their blood sugar levels have improved significantly.",
      rating: 5,
      image: "👩‍⚕️"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-full"
            >
              {/* Quote Mark */}
              <div className="text-4xl text-green-500 mb-4">"</div>
              
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                {testimonial.content}
              </p>
              
              {/* Profile */}
              <div className="border-t pt-6">
                <div className="text-4xl mb-3">{testimonial.image}</div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-green-600 text-sm font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;