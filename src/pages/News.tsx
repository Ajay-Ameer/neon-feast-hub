import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, TrendingUp } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      title: "ZestyMonk Expands to 50 New Cities",
      date: "October 10, 2025",
      category: "Expansion",
      content: "We're thrilled to announce our expansion to 50 new cities across India, bringing healthy, chef-crafted meals to over 2 million more health-conscious individuals.",
      trending: true,
    },
    {
      title: "New Keto-Friendly Meal Range Launched",
      date: "October 5, 2025",
      category: "Product",
      content: "Introducing our comprehensive keto meal range with 25+ new dishes designed by certified nutritionists to help you maintain ketosis while enjoying delicious food.",
      trending: true,
    },
    {
      title: "Partnership with India's Top Fitness Influencers",
      date: "September 28, 2025",
      category: "Partnership",
      content: "We've partnered with leading fitness influencers to bring you exclusive meal plans and workout guides, creating a holistic approach to your health journey.",
      trending: false,
    },
    {
      title: "Zero Waste Packaging Initiative Launched",
      date: "September 15, 2025",
      category: "Sustainability",
      content: "Our commitment to the planet: 100% biodegradable packaging across all meals by Q1 2026. Join us in making healthy eating sustainable for our planet.",
      trending: false,
    },
    {
      title: "AI-Powered Nutrition Recommendations Now Live",
      date: "August 30, 2025",
      category: "Technology",
      content: "Experience personalized meal suggestions powered by advanced AI that learns from your preferences, health goals, and dietary restrictions.",
      trending: false,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-neon-green to-neon-yellow text-black border-0">
            Latest Updates
          </Badge>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gradient-neon">
            News & Updates
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay informed about the latest developments, features, and initiatives from ZestyMonk
          </p>
        </div>

        {/* News Grid */}
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="card-glass border-border/40 hover:border-neon-green/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="border-neon-orange/40 text-neon-orange">
                        {item.category}
                      </Badge>
                      {item.trending && (
                        <Badge className="bg-gradient-to-r from-neon-pink to-neon-orange text-white border-0">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl mb-2 text-gradient-neon">{item.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-neon-yellow" />
                      {item.date}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 leading-relaxed">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
