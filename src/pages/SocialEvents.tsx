import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const SocialEvents = () => {
  const upcomingEvents = [
    {
      title: "Healthy Cooking Workshop",
      date: "October 28, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Bangalore - Koramangala Community Center",
      attendees: "45/50",
      description: "Learn to prepare quick, nutritious meals with our expert chefs. Includes hands-on cooking session and recipe booklet.",
      status: "Few Spots Left",
      category: "Workshop",
    },
    {
      title: "5K Health Run",
      date: "November 5, 2025",
      time: "6:00 AM - 9:00 AM",
      location: "Mumbai - Bandra Bandstand",
      attendees: "280/300",
      description: "Join fellow ZestyMonk members for a refreshing morning run along the coast. Free fitness assessment and healthy breakfast included.",
      status: "Filling Fast",
      category: "Fitness",
    },
    {
      title: "Nutrition Q&A Session",
      date: "November 12, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Online - Zoom",
      attendees: "120/150",
      description: "Ask our certified nutritionists anything! Live Q&A covering meal planning, dietary concerns, and personalized nutrition tips.",
      status: "Open",
      category: "Education",
    },
    {
      title: "Yoga & Mindfulness Retreat",
      date: "November 18-19, 2025",
      time: "Full Weekend",
      location: "Pune - Lavasa Lake Resort",
      attendees: "35/40",
      description: "2-day wellness retreat combining yoga, meditation, and mindful eating. All meals included from our special retreat menu.",
      status: "Limited Seats",
      category: "Retreat",
    },
    {
      title: "Family Health Carnival",
      date: "December 3, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Delhi - Lodhi Garden",
      attendees: "450/500",
      description: "Fun-filled day with fitness games, cooking demos, nutrition talks, and activities for kids. Bring the whole family!",
      status: "Open",
      category: "Community",
    },
  ];

  const pastEvents = [
    {
      title: "Summer Detox Challenge",
      date: "September 2025",
      participants: "320",
      highlight: "Participants lost an average of 4kg in 30 days",
    },
    {
      title: "Chef Masterclass Series",
      date: "August 2025",
      participants: "180",
      highlight: "6-week series featuring celebrity chefs and nutritionists",
    },
    {
      title: "Mental Health & Wellness Day",
      date: "July 2025",
      participants: "250",
      highlight: "Raised ₹2 lakhs for mental health awareness",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Workshop: "border-neon-yellow/40 text-neon-yellow",
      Fitness: "border-neon-green/40 text-neon-green",
      Education: "border-neon-blue/40 text-neon-blue",
      Retreat: "border-neon-pink/40 text-neon-pink",
      Community: "border-neon-orange/40 text-neon-orange",
    };
    return colors[category as keyof typeof colors] || colors.Community;
  };

  return (
    <div className="min-h-screen py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-neon-pink to-neon-orange text-white border-0">
            Get Involved
          </Badge>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gradient-neon">
            Social Events
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our community events, workshops, and wellness activities across India
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-3xl font-orbitron font-bold mb-6 text-gradient-neon">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="card-glass border-border/40 hover:border-neon-green/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <Badge variant="outline" className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                        <Badge className="bg-gradient-to-r from-neon-green to-neon-yellow text-black border-0">
                          {event.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2 text-gradient-neon">{event.title}</CardTitle>
                      <CardDescription className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4 text-neon-yellow" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4 text-neon-green" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-neon-pink" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4 text-neon-orange" />
                          {event.attendees} registered
                        </div>
                      </CardDescription>
                    </div>
                    <Button className="bg-gradient-to-r from-neon-green to-neon-yellow text-black hover:opacity-90">
                      Register Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-orbitron font-bold mb-6 text-gradient-neon">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="card-glass border-border/40">
                <CardHeader>
                  <CardTitle className="text-xl text-gradient-neon">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-neon-green" />
                    <span className="text-sm text-foreground/90">{event.participants} participants</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">{event.highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialEvents;
