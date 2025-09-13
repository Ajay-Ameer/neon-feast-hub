import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";

const FAQ = () => {
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
      question: "What's included in nutrition consultation?",
      answer: "Our nutrition consultation includes a comprehensive health assessment, goal setting, personalized meal plan creation, and ongoing support. You'll get a detailed analysis of your current eating habits, recommendations for improvement, and a customized meal plan. Follow-up consultations help track progress and make adjustments as needed."
    },
    {
      question: "Do you deliver on weekends?",
      answer: "Currently, we deliver Monday through Saturday. Sunday is our kitchen prep day to ensure fresh meal preparation for the week ahead. However, you can schedule deliveries to skip certain days or receive double portions on specific days to accommodate your schedule."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              ❓ Questions & Answers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient-food">Frequently Asked</span><br />
              <span className="text-gradient-warm">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about ZestyMonk meal subscriptions, delivery, 
              nutrition plans, and our patented food technology.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Card className="card-elegant p-8">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-playfair font-semibold text-lg hover:text-warm-amber py-6">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-warm-amber mt-1 flex-shrink-0" />
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-gradient-food">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Can't find what you're looking for? Our friendly support team is here to help you 
              with any questions about your meal plans or account.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="fresh" size="lg" className="text-lg px-8 py-4">
                <MessageCircle className="mr-2" />
                Chat on WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-warm-amber text-warm-amber hover:bg-warm-amber hover:text-white">
                <Phone className="mr-2" />
                Call Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "New to ZestyMonk?",
                description: "Learn about our meal plans and how to get started",
                action: "View Plans",
                color: "from-warm-amber to-rich-orange"
              },
              {
                title: "Account Issues?",
                description: "Help with login, billing, or subscription management",
                action: "Contact Support",
                color: "from-fresh-green to-warm-amber"
              },
              {
                title: "Nutrition Questions?",
                description: "Speak with our certified nutritionists",
                action: "Book Consultation",
                color: "from-golden-yellow to-warm-amber"
              }
            ].map((card, index) => (
              <Card key={index} className="card-elegant p-6 text-center group hover:scale-105 transition-transform">
                <CardContent className="space-y-4 p-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} mx-auto flex items-center justify-center text-white`}>
                    <HelpCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-gradient-food">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {card.description}
                  </p>
                  <Button variant="vitality" className="w-full">
                    {card.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;