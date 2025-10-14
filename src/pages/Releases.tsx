import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Sparkles, Zap } from "lucide-react";

const Releases = () => {
  const releases = [
    {
      version: "3.5.0",
      date: "October 2025",
      type: "Major Release",
      title: "AI-Powered Personalization Engine",
      features: [
        "Smart meal recommendations based on your taste preferences and health goals",
        "Automated grocery list generation for DIY cooking days",
        "Enhanced nutrition tracking with detailed macro breakdowns",
        "New meal swap interface with dietary filter improvements",
        "Performance optimizations reducing app load time by 40%",
      ],
    },
    {
      version: "3.4.0",
      date: "September 2025",
      type: "Feature Release",
      title: "Social & Community Features",
      features: [
        "Share your favorite meals with friends",
        "Community recipe reviews and ratings",
        "Join local health challenges and events",
        "Connect with nutrition coaches in-app",
        "New rewards program for active community members",
      ],
    },
    {
      version: "3.3.5",
      date: "August 2025",
      type: "Update",
      title: "Enhanced Delivery Experience",
      features: [
        "Real-time delivery tracking with live GPS",
        "30-minute delivery window notifications",
        "Contactless delivery preferences",
        "Delivery feedback system",
        "Bug fixes for order history display",
      ],
    },
    {
      version: "3.3.0",
      date: "July 2025",
      type: "Major Release",
      title: "Subscription Management Overhaul",
      features: [
        "Flexible pause and resume options",
        "Mid-cycle plan upgrades and downgrades",
        "Custom delivery schedules for each day",
        "Family plan management dashboard",
        "Improved billing transparency",
      ],
    },
  ];

  const getTypeIcon = (type: string) => {
    if (type === "Major Release") return <Rocket className="h-5 w-5 text-neon-pink" />;
    if (type === "Feature Release") return <Sparkles className="h-5 w-5 text-neon-yellow" />;
    return <Zap className="h-5 w-5 text-neon-green" />;
  };

  const getTypeBadge = (type: string) => {
    const styles = {
      "Major Release": "bg-gradient-to-r from-neon-pink to-neon-orange text-white",
      "Feature Release": "bg-gradient-to-r from-neon-yellow to-neon-green text-black",
      "Update": "bg-gradient-to-r from-neon-blue to-neon-green text-white",
    };
    return styles[type as keyof typeof styles] || styles.Update;
  };

  return (
    <div className="min-h-screen py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-neon-pink to-neon-orange text-white border-0">
            Product Updates
          </Badge>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gradient-neon">
            Release Notes
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track our journey of continuous improvement and new feature launches
          </p>
        </div>

        {/* Releases Timeline */}
        <div className="space-y-8">
          {releases.map((release, index) => (
            <Card key={index} className="card-glass border-border/40 hover:border-neon-pink/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="mt-1">{getTypeIcon(release.type)}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Badge variant="outline" className="border-neon-green/40 text-neon-green font-mono">
                        v{release.version}
                      </Badge>
                      <Badge className={`${getTypeBadge(release.type)} border-0`}>
                        {release.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2 text-gradient-neon">{release.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Released {release.date}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {release.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-2 flex-shrink-0" />
                      <span className="text-foreground/90 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Releases;
