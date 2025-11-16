import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  Youtube,
  HelpCircle
} from "lucide-react";

const Contact = () => {
  const faqs = [
    {
      question: "How do you keep meals fresh?",
      answer: "We use our patented retort packaging technology that seals in freshness while preserving 98% of nutrients. This advanced thermal processing eliminates harmful bacteria while maintaining the food's natural taste, texture, and nutritional value. Our meals stay fresh for up to 12 months without refrigeration, but we deliver them fresh daily for the best experience."
    },
    {
      question: "What is retort packaging?",
      answer: "Retort packaging is a specialized thermal processing technique that sterilizes food in sealed pouches. Our patented version uses precise temperature and pressure control to eliminate bacteria while preserving nutrients and flavors. Unlike traditional preservatives, this process naturally extends shelf life without any artificial additives, making it safer and healthier than conventional food preservation methods."
    },
    {
      question: "How long does food stay fresh?",
      answer: "Our retort-packed meals maintain peak freshness for 12-18 months when stored properly. However, for optimal taste and nutrition, we recommend consuming them within 6 months. All meals come with clear 'best by' dates. Once opened, consume immediately or store in the refrigerator for up to 2 days."
    },
    {
      question: "Can I pause my subscription?",
      answer: "Absolutely! You can pause your subscription anytime through your account dashboard or by contacting our support team. Pauses can be set for 1 week to 3 months. We understand that life happens - whether you're traveling, have changing schedules, or need a break, we're flexible with your needs."
    },
    {
      question: "What if I miss delivery?",
      answer: "No worries! Our delivery partners will attempt redelivery the same day. If you're still unavailable, they'll leave the package in a safe location (if permitted) or with a trusted neighbor. You can also reschedule delivery through our app or track your delivery in real-time to ensure you're available."
    },
    {
      question: "Are meals customizable?",
      answer: "Yes! We offer extensive customization options. You can specify dietary preferences (vegetarian, vegan, gluten-free), food allergies, spice levels, and ingredient preferences. Our nutritionists work with you to create meal plans that match your taste preferences while meeting your health goals. You can update preferences anytime through your account."
    },
    {
      question: "Do you use preservatives?",
      answer: "No artificial preservatives whatsoever! Our patented retort technology naturally preserves food safety and freshness without chemicals. We use only natural ingredients - fresh vegetables, premium proteins, herbs, and spices. Our commitment to clean eating means zero artificial colors, flavors, or preservatives in any of our meals."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with no penalty fees. We require 24 hours notice to avoid charges for the next delivery. You can cancel through your account dashboard, our mobile app, or by contacting customer support. We also offer pause options if you're not ready to cancel completely."
    },
    {
      question: "Where do you source ingredients?",
      answer: "We partner with certified organic farms and trusted suppliers across India who meet our strict quality standards. All vegetables are sourced from pesticide-free farms, proteins come from ethical suppliers, and spices are directly sourced from their regions of origin. We maintain full traceability and conduct regular quality audits of all our suppliers."
    },
    {
      question: "How do I heat the meals?",
      answer: "Super simple! You can heat meals in three ways: 1) Microwave: 2-3 minutes (pierce the pouch first), 2) Boiling water: Submerge sealed pouch for 5-7 minutes, 3) Pan: Transfer contents to a pan and heat for 3-4 minutes. Detailed heating instructions are printed on every package, and we include heating tips in your first delivery."
    },
    {
      question: "What are your delivery timings?",
      answer: "We deliver fresh meals daily between 6 AM - 10 AM to ensure they're ready for your day. You can choose your preferred delivery time slot during subscription setup. For special occasions or specific timing needs, contact our support team 24 hours in advance. Weekend and holiday deliveries follow the same schedule unless otherwise specified."
    },
    {
      question: "Do you cater to special diets?",
      answer: "Yes! We specialize in personalized nutrition for various needs: diabetes-friendly, heart-healthy, weight loss, muscle gain, PCOS, thyroid, pregnancy nutrition, and more. Our in-house nutritionists and chefs create specialized meal plans that are both healthy and delicious. Just share your requirements during signup or through your account settings."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              💬 Get in Touch & Find Answers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient-food">We're Here</span><br />
              <span className="text-gradient-warm">To Help You</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our meal plans? Need nutrition advice? Or just want to say hello? 
              Browse our FAQs or reach out to our friendly team.
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

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              ❓ FAQ
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-playfair font-bold">
              <span className="text-gradient-food">Frequently Asked</span>{" "}
              <span className="text-gradient-warm">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our meals, delivery, and services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border border-border hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-playfair font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-gradient-food">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="input-elegant"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="input-elegant"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="input-elegant"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className="input-elegant"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your query..." 
                      rows={6}
                      className="input-elegant"
                    />
                  </div>

                  <Button className="w-full button-elegant group" size="lg">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Company Info */}
            <div className="space-y-8">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-gradient-food">
                    Visit Our Kitchen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-warm-amber to-rich-orange">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">ZestyMonk Central Kitchen</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        123, Health Street, Wellness District<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-semibold mb-4">Our Business Hours</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">6:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday - Sunday</span>
                        <span className="font-medium">6:00 AM - 10:00 PM</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-gradient-food">
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Stay connected with us on social media for daily meal inspiration, 
                    nutrition tips, and exclusive offers.
                  </p>
                  <div className="flex gap-4">
                    {[
                      { icon: <Facebook className="h-5 w-5" />, color: "from-blue-500 to-blue-600" },
                      { icon: <Instagram className="h-5 w-5" />, color: "from-pink-500 to-purple-600" },
                      { icon: <Twitter className="h-5 w-5" />, color: "from-blue-400 to-blue-500" },
                      { icon: <Youtube className="h-5 w-5" />, color: "from-red-500 to-red-600" }
                    ].map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className={`rounded-full bg-gradient-to-r ${social.color} hover:scale-110 transition-transform border-0`}
                      >
                        <span className="text-white">{social.icon}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6 text-warm-amber" />
          <h2 className="text-3xl font-playfair font-bold mb-4">
            <span className="text-gradient-food">Still Need Help?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is available 7 days a week to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="button-elegant" 
              size="lg"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Chat
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = 'tel:+919876543210'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;