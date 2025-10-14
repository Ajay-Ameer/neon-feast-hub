import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Bell, Info } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      title: "Festive Season Special: 30% Off All Plans",
      date: "October 12, 2025",
      type: "Promotion",
      priority: "high",
      content: "Celebrate the festive season with us! Get 30% off on all subscription plans when you sign up before October 31st. Use code FESTIVE30 at checkout.",
    },
    {
      title: "Temporary Service Adjustment - Bangalore Zone 4",
      date: "October 8, 2025",
      type: "Service Update",
      priority: "medium",
      content: "Due to local roadwork, deliveries in Bangalore Zone 4 may experience slight delays (30-45 mins) from Oct 10-15. We appreciate your patience.",
    },
    {
      title: "New Customer Support Hours",
      date: "October 1, 2025",
      type: "Operations",
      priority: "low",
      content: "Our customer support is now available 24/7! Reach us anytime via chat, email, or phone for any assistance you need.",
    },
    {
      title: "Mobile App Update Required",
      date: "September 25, 2025",
      type: "Technical",
      priority: "medium",
      content: "Please update to version 3.5.0 for enhanced performance and new features including meal swap notifications and improved order tracking.",
    },
    {
      title: "Referral Program Enhanced",
      date: "September 20, 2025",
      type: "Program",
      priority: "low",
      content: "Refer friends and both get ₹500 off! Now with unlimited referrals and faster reward processing within 24 hours of signup.",
    },
  ];

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-5 w-5 text-neon-orange" />;
      case "medium":
        return <Bell className="h-5 w-5 text-neon-yellow" />;
      default:
        return <Info className="h-5 w-5 text-neon-blue" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    const styles = {
      high: "bg-gradient-to-r from-neon-orange to-neon-pink text-white",
      medium: "bg-gradient-to-r from-neon-yellow to-neon-orange text-black",
      low: "bg-gradient-to-r from-neon-blue to-neon-green text-white",
    };
    return styles[priority as keyof typeof styles] || styles.low;
  };

  return (
    <div className="min-h-screen py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-neon-orange to-neon-pink text-white border-0">
            Important Updates
          </Badge>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gradient-neon">
            Announcements
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Important notifications, promotions, and service updates for our community
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="space-y-6">
          {announcements.map((item, index) => (
            <Card key={index} className="card-glass border-border/40 hover:border-neon-orange/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="mt-1">{getPriorityIcon(item.priority)}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Badge variant="outline" className="border-neon-green/40 text-neon-green">
                        {item.type}
                      </Badge>
                      <Badge className={`${getPriorityBadge(item.priority)} border-0`}>
                        {item.priority.toUpperCase()}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2 text-gradient-neon">{item.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
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

export default Announcements;
