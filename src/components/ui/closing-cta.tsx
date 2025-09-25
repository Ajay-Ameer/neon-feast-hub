import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ClosingCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
      {/* Background overlay with food pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Join thousands of healthy, happy ZestyMonk members today.
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            Your taste buds and body will thank you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-4">
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/plans">View Meal Plans</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold transition-all duration-300"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <p className="text-sm text-white/80 font-medium pt-4">
            🌱 Limited time: First week FREE for new members!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;