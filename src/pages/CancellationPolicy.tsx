import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, RefreshCw, Shield, MessageCircle } from "lucide-react";

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              🔄 Cancellation & Refunds
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient-food">Cancellation &</span><br />
              <span className="text-gradient-warm">Refund Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe in transparency and flexibility. Here's everything you need to know about 
              cancellations, refunds, and modifications to your ZestyMonk subscription.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Clock className="h-6 w-6" />,
                title: "24-Hour Notice",
                description: "Cancel or modify orders with 24 hours notice",
                color: "from-warm-amber to-rich-orange"
              },
              {
                icon: <RefreshCw className="h-6 w-6" />,
                title: "Flexible Refunds",
                description: "Get refunds for undelivered or damaged meals",
                color: "from-fresh-green to-warm-amber"
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "No Hidden Fees",
                description: "No cancellation charges or processing fees",
                color: "from-golden-yellow to-warm-amber"
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

      {/* Detailed Policy */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Card className="card-elegant p-8">
            <CardContent className="p-0 space-y-8">
              
              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Subscription Cancellation</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How to Cancel</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Log into your ZestyMonk account and navigate to 'Subscription Settings'</li>
                      <li>Call our customer support at +91 98765 43210</li>
                      <li>Send a WhatsApp message to +91 98765 43210</li>
                      <li>Email us at support@zestymonk.com</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cancellation Timeline</h3>
                    <p>You can cancel your subscription at any time. To avoid being charged for the next delivery cycle, please cancel at least 24 hours before your next scheduled delivery.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Immediate Cancellation</h3>
                    <p>If you cancel with less than 24 hours notice, you will be charged for meals already prepared but will receive full credit for future deliveries.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Refund Eligibility</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Eligible for Full Refund</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Meals not delivered due to our error or delivery failure</li>
                      <li>Damaged or spoiled meals upon delivery</li>
                      <li>Incorrect meal delivery (wrong plan or dietary specifications)</li>
                      <li>Service cancellation within 24 hours of first order (trial period)</li>
                      <li>Technical errors resulting in duplicate charges</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Partial Refund Cases</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Late cancellation (less than 24 hours notice) - refund for undelivered portion</li>
                      <li>Service interruption due to circumstances beyond our control - prorated refund</li>
                      <li>Customer unavailability for delivery - meal credit for next delivery</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Non-Refundable Cases</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="mb-4">The following situations are not eligible for refunds:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Meals already delivered and consumed</li>
                    <li>Change of mind after successful delivery</li>
                    <li>Temporary dietary preference changes</li>
                    <li>Customer absence during delivery (unless notified in advance)</li>
                    <li>Meals refused at delivery without valid reason</li>
                    <li>Subscription charges for current billing cycle if meals have been delivered</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Refund Process</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How to Request a Refund</h3>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Contact our customer support within 48 hours of the issue</li>
                      <li>Provide your order number and describe the problem</li>
                      <li>Share photos if the issue is with meal quality or packaging</li>
                      <li>Our team will review and respond within 24 hours</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Processing Time</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Credit/Debit Card refunds: 5-7 business days</li>
                      <li>UPI/Digital wallet refunds: 1-3 business days</li>
                      <li>Bank transfer refunds: 3-5 business days</li>
                      <li>ZestyMonk wallet credit: Instant</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Refund Methods</h3>
                    <p>Refunds are processed to the original payment method used for the purchase. In some cases, we may offer ZestyMonk wallet credit for faster processing.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Pause vs Cancel</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Subscription Pause</h3>
                    <p>If you need a temporary break, consider pausing instead of cancelling. Pausing preserves your meal preferences and pricing, and you can resume anytime within 3 months.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">When to Choose Pause</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Traveling for vacation or business</li>
                      <li>Temporary dietary changes due to medical reasons</li>
                      <li>Seasonal preferences or festival periods</li>
                      <li>Budget considerations for a short period</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Contact for Assistance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our customer success team is here to help with any cancellation or refund questions:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> support@zestymonk.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>WhatsApp:</strong> +91 98765 43210</p>
                  <p><strong>Support Hours:</strong> 6 AM - 10 PM, 7 days a week</p>
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
              Need Help with Your Subscription?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our friendly customer success team is ready to assist you with cancellations, 
              refunds, or any questions about your ZestyMonk experience.
            </p>
            <Button variant="fresh" size="lg" className="text-lg px-8 py-4">
              <MessageCircle className="mr-2" />
              Chat with Support Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancellationPolicy;