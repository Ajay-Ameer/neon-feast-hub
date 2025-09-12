import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              💬 Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient-food">We're Here</span><br />
              <span className="text-gradient-warm">To Help You</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our meal plans? Need nutrition advice? Or just want to say hello? 
              Our friendly team is always ready to help you on your healthy eating journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email Support",
                info: "support@zestymonk.com",
                description: "Get detailed answers to your questions",
                color: "from-warm-amber to-rich-orange"
              },
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Phone Support",
                info: "+91 98765 43210",
                description: "Speak directly with our team",
                color: "from-fresh-green to-warm-amber"
              },
              {
                icon: <MessageCircle className="h-6 w-6" />,
                title: "WhatsApp Chat",
                info: "+91 98765 43210",
                description: "Quick responses via WhatsApp",
                color: "from-golden-yellow to-warm-amber"
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Support Hours",
                info: "6 AM - 10 PM",
                description: "7 days a week support",
                color: "from-spice-red to-rich-orange"
              }
            ].map((contact, index) => (
              <Card key={index} className="card-elegant p-6 text-center group hover:scale-105 transition-transform">
                <CardContent className="space-y-4 p-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${contact.color} mx-auto flex items-center justify-center text-white`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-gradient-food">
                    {contact.title}
                  </h3>
                  <p className="text-lg font-semibold text-foreground">
                    {contact.info}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-elegant p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-playfair font-bold text-gradient-food">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..." 
                      rows={5}
                    />
                  </div>
                  <Button variant="appetizing" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Company Info */}
            <div className="space-y-8">
              <Card className="card-elegant p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-playfair font-bold text-gradient-food flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-2">
                  <p className="text-foreground font-medium">ZestyMonk Technologies Pvt. Ltd.</p>
                  <p className="text-muted-foreground">
                    #42, Brigade Gateway,<br />
                    Rajajinagar, Bangalore - 560010<br />
                    Karnataka, India
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-playfair font-bold text-gradient-food">
                    Follow Us
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Stay connected for daily nutrition tips, recipes, and healthy living inspiration.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex gap-4">
                    {[
                      { icon: <Instagram className="h-5 w-5" />, color: "from-spice-red to-rich-orange" },
                      { icon: <Facebook className="h-5 w-5" />, color: "from-warm-amber to-golden-yellow" },
                      { icon: <Twitter className="h-5 w-5" />, color: "from-fresh-green to-warm-amber" },
                      { icon: <Youtube className="h-5 w-5" />, color: "from-rich-orange to-spice-red" }
                    ].map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className={`bg-gradient-to-r ${social.color} text-white border-none hover:scale-110 transition-transform`}
                      >
                        {social.icon}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-playfair font-bold text-gradient-food">
                    Quick Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <Button variant="harvest" className="w-full justify-start">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-gradient-food">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Check out our comprehensive FAQ section for instant answers to common questions about our meal plans, 
              delivery, and nutrition services.
            </p>
            <Button variant="outline" size="lg" className="text-lg border-warm-amber text-warm-amber hover:bg-warm-amber hover:text-white">
              Browse FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;