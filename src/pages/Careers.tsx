import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, TrendingUp, Heart, Users, Sparkles } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Free meal plans, gym memberships, and comprehensive health insurance for you and your family",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Clear career progression paths, regular training programs, and skill development workshops",
    },
    {
      icon: Users,
      title: "Inclusive Culture",
      description: "Diverse, supportive work environment with strong emphasis on work-life balance",
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "Work with cutting-edge food tech, AI-powered nutrition tools, and sustainable practices",
    },
  ];

  const openPositions = [
    {
      title: "Senior Nutritionist",
      department: "Health & Nutrition",
      location: "Bangalore",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead our nutrition team in developing personalized meal plans and conducting nutritional research.",
    },
    {
      title: "Full Stack Developer",
      department: "Technology",
      location: "Bangalore / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain our web platform, mobile apps, and internal tools using modern tech stack.",
    },
    {
      title: "Head Chef - Cloud Kitchen",
      department: "Culinary",
      location: "Mumbai",
      type: "Full-time",
      experience: "7+ years",
      description: "Oversee kitchen operations, menu development, and maintain our high quality standards.",
    },
    {
      title: "Supply Chain Manager",
      department: "Operations",
      location: "Delhi",
      type: "Full-time",
      experience: "4+ years",
      description: "Optimize our supply chain, manage vendor relationships, and ensure timely deliveries.",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Bangalore",
      type: "Full-time",
      experience: "3+ years",
      description: "Create intuitive user experiences for our digital platforms and design our brand materials.",
    },
    {
      title: "Customer Success Lead",
      department: "Customer Experience",
      location: "Pune",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and lead our customer success team to deliver exceptional service experiences.",
    },
    {
      title: "Marketing Manager - Digital",
      department: "Marketing",
      location: "Bangalore",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive our digital marketing strategy, manage campaigns, and grow our online presence.",
    },
    {
      title: "Quality Assurance Specialist",
      department: "Quality",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2+ years",
      description: "Ensure food safety standards, conduct quality audits, and maintain compliance protocols.",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-neon-green to-neon-yellow text-black border-0">
            Join Our Team
          </Badge>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gradient-neon">
            Careers at ZestyMonk
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Help us revolutionize healthy eating and make a real impact on people's lives
          </p>
        </div>

        {/* Why Join Us */}
        <Card className="card-glass border-border/40 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient-neon">Why ZestyMonk?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 leading-relaxed mb-6">
              At ZestyMonk, we're not just delivering meals – we're transforming lives through nutrition, technology, and sustainability. Join a passionate team that's making healthy living accessible to millions across India.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-neon-green/20 to-neon-yellow/20">
                    <benefit.icon className="h-6 w-6 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-orbitron font-bold mb-6 text-gradient-neon">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="card-glass border-border/40 hover:border-neon-green/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-xl text-gradient-neon">{position.title}</CardTitle>
                    <Badge variant="outline" className="border-neon-green/40 text-neon-green">
                      {position.type}
                    </Badge>
                  </div>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4 text-neon-yellow" />
                      {position.department}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-neon-pink" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-neon-orange" />
                      {position.experience}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/90 text-sm leading-relaxed">{position.description}</p>
                  <Button className="w-full bg-gradient-to-r from-neon-green to-neon-yellow text-black hover:opacity-90">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="card-glass border-border/40 mt-12 text-center">
          <CardContent className="py-8">
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-gradient-neon">
              Don't see a position that fits?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for health and innovation. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button className="bg-gradient-to-r from-neon-pink to-neon-orange text-white hover:opacity-90">
              Send Your Resume
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Careers;
