import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Truck, Clock, MapPin, Shield, Phone } from "lucide-react";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              🚚 Delivery Information
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient-food">Shipping &</span><br />
              <span className="text-gradient-warm">Delivery Terms</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Fresh, nutritious meals delivered to your doorstep every morning. 
              Here's everything you need to know about our delivery service.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Daily Morning Delivery",
                description: "Fresh meals delivered between 6 AM - 10 AM",
                color: "from-warm-amber to-rich-orange"
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "25+ Cities Covered",
                description: "Expanding delivery network across India",
                color: "from-fresh-green to-warm-amber"
              },
              {
                icon: <Truck className="h-6 w-6" />,
                title: "Temperature Controlled",
                description: "Insulated vehicles maintain optimal freshness",
                color: "from-golden-yellow to-warm-amber"
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Contact-Free Delivery",
                description: "Safe, hygienic delivery practices",
                color: "from-spice-red to-rich-orange"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-elegant p-6 text-center">
                <CardContent className="space-y-4 p-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} mx-auto flex items-center justify-center text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-gradient-food">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Card className="card-elegant p-8">
            <CardContent className="p-0 space-y-8">
              
              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Delivery Areas & Coverage</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Current Service Cities</h3>
                    <p className="mb-4">ZestyMonk currently delivers fresh meals to the following cities:</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="font-medium text-foreground">Metro Cities</p>
                        <ul className="text-sm space-y-1">
                          <li>• Bangalore</li>
                          <li>• Mumbai</li>
                          <li>• Delhi NCR</li>
                          <li>• Hyderabad</li>
                          <li>• Chennai</li>
                          <li>• Pune</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Tier-2 Cities</p>
                        <ul className="text-sm space-y-1">
                          <li>• Mysore</li>
                          <li>• Coimbatore</li>
                          <li>• Kochi</li>
                          <li>• Ahmedabad</li>
                          <li>• Jaipur</li>
                          <li>• Indore</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Expanding To</p>
                        <ul className="text-sm space-y-1">
                          <li>• Lucknow</li>
                          <li>• Bhubaneswar</li>
                          <li>• Chandigarh</li>
                          <li>• Guwahati</li>
                          <li>• Trivandrum</li>
                          <li>• Nagpur</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Delivery Zone Check</h3>
                    <p>Enter your pincode during signup to check if delivery is available in your area. We're rapidly expanding and may reach your location soon if not currently serviced.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Delivery Schedule & Timing</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Standard Delivery Window</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Breakfast & Lunch Combo:</strong> 6:00 AM - 9:00 AM</li>
                      <li><strong>Lunch Only:</strong> 11:00 AM - 1:00 PM</li>
                      <li><strong>Dinner Only:</strong> 6:00 PM - 8:00 PM</li>
                      <li><strong>All Meals Combo:</strong> 6:00 AM - 9:00 AM (all meals included)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Delivery Days</h3>
                    <p>We deliver Monday through Saturday. Sunday is our kitchen preparation day to ensure fresh ingredients and meal prep for the week ahead.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Holiday Schedule</h3>
                    <p>During major festivals and national holidays, delivery schedules may be adjusted. Customers are notified 48 hours in advance of any schedule changes.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Customer Unavailability Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">First Delivery Attempt</h3>
                    <p>Our delivery partner will call you 15 minutes before arrival. If you're unavailable, they will wait for 10 minutes and attempt to contact you via phone.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Redelivery Options</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Same-day redelivery (if notified before 2 PM)</li>
                      <li>Safe drop-off with trusted neighbor (with your permission)</li>
                      <li>Secure drop-off at designated safe location</li>
                      <li>Reschedule to next available delivery slot</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Multiple Failed Attempts</h3>
                    <p>After 2 failed delivery attempts, the order will be canceled and a credit note issued for your next delivery. We may also pause your subscription to avoid repeated failed deliveries.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Delivery Guarantee & Disclaimers</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Our Commitment</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>99% on-time delivery rate within promised window</li>
                      <li>Fresh meals maintained at optimal temperature</li>
                      <li>Hygienic packaging and contact-free delivery</li>
                      <li>Real-time tracking and delivery notifications</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Force Majeure Events</h3>
                    <p>ZestyMonk is not liable for delivery delays or cancellations due to circumstances beyond our control, including but not limited to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Natural disasters (floods, earthquakes, cyclones)</li>
                      <li>Government restrictions or curfews</li>
                      <li>Strikes, bandhs, or civil unrest</li>
                      <li>Severe weather conditions affecting transportation</li>
                      <li>Technical failures in delivery tracking systems</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Delivery Address Changes</h3>
                    <p>Address changes must be made at least 24 hours before scheduled delivery. Same-day address changes may not be possible due to route optimization.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Customer Responsibilities</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Receiving Deliveries</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Ensure someone is available during delivery window</li>
                      <li>Provide accurate and complete delivery address</li>
                      <li>Keep your phone accessible for delivery coordination</li>
                      <li>Inspect meals immediately upon delivery</li>
                      <li>Report any issues within 2 hours of delivery</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Special Instructions</h3>
                    <p>You can provide specific delivery instructions such as gate codes, building numbers, or preferred drop-off locations through your account settings or by informing customer support.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Meal Storage</h3>
                    <p>Our retort-packed meals don't require refrigeration but should be stored in a cool, dry place. Once opened, consume immediately or refrigerate and consume within 24 hours.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Delivery Support</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For any delivery-related queries, issues, or special requests:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Delivery Helpline:</strong> +91 98765 43210</p>
                  <p><strong>WhatsApp Support:</strong> +91 98765 43210</p>
                  <p><strong>Email:</strong> delivery@zestymonk.com</p>
                  <p><strong>Live Chat:</strong> Available on our website and mobile app</p>
                  <p><strong>Emergency Contact:</strong> Available 24/7 for delivery emergencies</p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-gradient-food">
              Track Your Daily Deliveries
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Download our mobile app for real-time delivery tracking, easy rescheduling, 
              and instant communication with delivery partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="fresh" size="lg" className="text-lg px-8 py-4">
                <Phone className="mr-2" />
                Download Mobile App
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-warm-amber text-warm-amber hover:bg-warm-amber hover:text-white">
                Track Current Order
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPolicy;