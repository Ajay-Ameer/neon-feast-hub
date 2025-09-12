import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              📄 Legal Information
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient-food">Terms &</span><br />
              <span className="text-gradient-warm">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Please read these terms and conditions carefully before using ZestyMonk's services.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Card className="card-elegant p-8">
            <CardContent className="p-0 space-y-8">
              
              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using ZestyMonk's website, mobile application, or services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">2. Service Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ZestyMonk Technologies Pvt. Ltd. provides personalized meal subscription and delivery services, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Customized meal planning based on dietary preferences and health goals</li>
                  <li>Fresh meal preparation using our patented retort packaging technology</li>
                  <li>Daily delivery of ready-to-eat nutritious meals</li>
                  <li>Nutritionist consultation and support services</li>
                  <li>Online platform for subscription management</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">3. User Obligations</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Account Responsibility</h3>
                    <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Accurate Information</h3>
                    <p>You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proper Use</h3>
                    <p>You agree to use our services only for lawful purposes and in accordance with these Terms of Service.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">4. Subscription and Payment</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Subscription Plans</h3>
                    <p>We offer various subscription plans (weekly, monthly) with different meal options. All prices are clearly displayed on our website and are subject to change with 30 days notice.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Payment Terms</h3>
                    <p>Payments are processed automatically based on your chosen billing cycle. All payments must be made in Indian Rupees (INR) through our secure payment gateway.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Failed Payments</h3>
                    <p>If payment fails, we will attempt to charge your payment method up to 3 times. Continued payment failure may result in service suspension.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">5. Service Availability and Limitations</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Delivery Areas</h3>
                    <p>Our services are currently available in select cities across India. Delivery areas may be modified at our discretion with reasonable notice.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Service Interruptions</h3>
                    <p>We may temporarily suspend services for maintenance, updates, or due to circumstances beyond our control (natural disasters, strikes, government orders).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Meal Customization</h3>
                    <p>While we strive to accommodate dietary preferences and restrictions, we cannot guarantee that our meals will meet all individual dietary needs or medical requirements.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content on ZestyMonk's platforms, including but not limited to recipes, meal plans, nutritional information, 
                  logos, trademarks, and proprietary packaging technology, are the intellectual property of ZestyMonk Technologies Pvt. Ltd.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">7. Liability Disclaimer</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Service Limitations</h3>
                    <p>ZestyMonk provides meal delivery services but is not responsible for individual health outcomes. Always consult healthcare professionals for medical dietary advice.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Delivery Limitations</h3>
                    <p>We are not liable for delivery delays due to factors beyond our control, including but not limited to weather conditions, traffic, or customer unavailability.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Allergies and Dietary Restrictions</h3>
                    <p>While we make every effort to accommodate dietary restrictions, we cannot guarantee complete absence of allergens. Customers with severe allergies should exercise caution.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Either party may terminate this agreement at any time. ZestyMonk reserves the right to terminate or suspend 
                  accounts that violate these terms or engage in fraudulent activity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Upon termination, your access to services will cease, but these terms will continue to apply to any outstanding obligations.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction 
                  of the courts in Bangalore, Karnataka, India.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> legal@zestymonk.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> ZestyMonk Technologies Pvt. Ltd., #42, Brigade Gateway, Rajajinagar, Bangalore - 560010</p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Terms;