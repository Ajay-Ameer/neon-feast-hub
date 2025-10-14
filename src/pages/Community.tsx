import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, TrendingUp, Award, MessageCircle, Calendar } from "lucide-react";

const Community = () => {
  const communityStats = [
    { icon: Users, label: "Active Members", value: "50,000+", color: "text-neon-green" },
    { icon: Heart, label: "Success Stories", value: "2,500+", color: "text-neon-pink" },
    { icon: TrendingUp, label: "Avg Weight Loss", value: "8 kg", color: "text-neon-yellow" },
    { icon: Award, label: "Challenges Completed", value: "10,000+", color: "text-neon-orange" },
  ];

  const communityGroups = [
    {
      title: "Keto Warriors",
      members: "12,500+",
      description: "Share recipes, tips, and support for your ketogenic lifestyle journey",
      activity: "Very Active",
    },
    {
      title: "Fitness First",
      members: "18,000+",
      description: "Combine your meal plan with workout routines and fitness challenges",
      activity: "Very Active",
    },
    {
      title: "Vegan Vibes",
      members: "8,300+",
      description: "Plant-based meal enthusiasts sharing their favorite dishes and nutrition tips",
      activity: "Active",
    },
    {
      title: "Weight Loss Champions",
      members: "15,600+",
      description: "Celebrate milestones, share progress, and motivate each other on your journey",
      activity: "Very Active",
    },
    {
      title: "Meal Prep Masters",
      members: "6,200+",
      description: "Learn advanced meal prep techniques and time-saving kitchen hacks",
      activity: "Active",
    },
    {
      title: "Nutrition Nerds",
      members: "9,400+",
      description: "Dive deep into nutritional science, macros, and evidence-based eating",
      activity: "Active",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-neon-green to-neon-yellow text-black border-0">
            Join Our Community
          </Badge>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gradient-neon">
            ZestyMonk Community
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with thousands of health enthusiasts on their wellness journey
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {communityStats.map((stat, index) => (
            <Card key={index} className="card-glass border-border/40 text-center">
              <CardContent className="pt-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-gradient-neon mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Description */}
        <Card className="card-glass border-border/40 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient-neon">Why Join Our Community?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              The ZestyMonk community is more than just a group of customers – it's a supportive ecosystem of individuals committed to transforming their health and lifestyle. Share your journey, get inspired by others, and access exclusive resources.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-neon-green mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Daily Support</h3>
                  <p className="text-sm text-muted-foreground">Get answers, tips, and motivation from peers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-neon-yellow mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Weekly Challenges</h3>
                  <p className="text-sm text-muted-foreground">Participate in fun health challenges with rewards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-neon-pink mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert Access</h3>
                  <p className="text-sm text-muted-foreground">Connect with nutritionists and fitness coaches</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Groups */}
        <div>
          <h2 className="text-3xl font-orbitron font-bold mb-6 text-gradient-neon">Community Groups</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {communityGroups.map((group, index) => (
              <Card key={index} className="card-glass border-border/40 hover:border-neon-green/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 text-gradient-neon">{group.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {group.members} members
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-neon-green/40 text-neon-green">
                      {group.activity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 mb-4">{group.description}</p>
                  <Button className="w-full bg-gradient-to-r from-neon-green to-neon-yellow text-black hover:opacity-90">
                    Join Group
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
