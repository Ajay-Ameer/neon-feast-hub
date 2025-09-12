import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Eye, Settings, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              🔒 Data Protection
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient-food">Privacy</span><br />
              <span className="text-gradient-warm">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy is fundamental to us. Learn how we collect, use, and protect 
              your personal information when you use ZestyMonk's services.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 2024 | Effective Date: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Data Protection",
                description: "Industry-standard encryption and security measures",
                color: "from-warm-amber to-rich-orange"
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: "Secure Storage",
                description: "Your data is stored in certified secure facilities",
                color: "from-fresh-green to-warm-amber"
              },
              {
                icon: <Eye className="h-6 w-6" />,
                title: "Transparency",
                description: "Clear information about data usage and sharing",
                color: "from-golden-yellow to-warm-amber"
              },
              {
                icon: <Settings className="h-6 w-6" />,
                title: "Your Control",
                description: "Manage your privacy preferences and data access",
                color: "from-spice-red to-rich-orange"
              }
            ].map((principle, index) => (
              <Card key={index} className="card-elegant p-6 text-center">
                <CardContent className="space-y-4 p-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${principle.color} mx-auto flex items-center justify-center text-white`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-gradient-food">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {principle.description}
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
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="mb-2">When you create an account or subscribe to our services, we collect:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Name, email address, and phone number</li>
                      <li>Delivery address and location preferences</li>
                      <li>Date of birth and gender (for personalized nutrition)</li>
                      <li>Payment information (processed securely through certified payment gateways)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Health & Nutrition Data</h3>
                    <p className="mb-2">To provide personalized meal plans, we may collect:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Dietary preferences and restrictions</li>
                      <li>Health goals (weight management, muscle gain, etc.)</li>
                      <li>Food allergies and medical dietary requirements</li>
                      <li>Activity level and lifestyle information</li>
                      <li>Body measurements (height, weight) - optional</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Usage Information</h3>
                    <p className="mb-2">We automatically collect information about how you use our services:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Website and app usage patterns</li>
                      <li>Device information (type, operating system, browser)</li>
                      <li>IP address and location data</li>
                      <li>Meal preferences and ordering history</li>
                      <li>Customer service interactions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Service Delivery</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Create and deliver personalized meal plans</li>
                      <li>Process orders and manage subscriptions</li>
                      <li>Coordinate meal delivery and logistics</li>
                      <li>Provide customer support and assistance</li>
                      <li>Send order confirmations and delivery updates</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personalization & Improvement</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Customize meal recommendations based on preferences</li>
                      <li>Analyze nutrition data to improve meal plans</li>
                      <li>Enhance website and app functionality</li>
                      <li>Develop new features and services</li>
                      <li>Conduct research for better nutrition solutions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Communication</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Send service-related notifications and updates</li>
                      <li>Share nutrition tips and healthy eating content</li>
                      <li>Notify you about new features and promotions</li>
                      <li>Respond to your questions and feedback</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Information Sharing & Disclosure</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">We DO NOT Sell Your Data</h3>
                    <p>ZestyMonk will never sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Service Providers</h3>
                    <p className="mb-2">We may share limited information with trusted partners who help us operate our business:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Payment processors (for secure transaction processing)</li>
                      <li>Delivery partners (name, phone, address for delivery coordination)</li>
                      <li>Cloud storage providers (for secure data hosting)</li>
                      <li>Analytics services (anonymized data for service improvement)</li>
                      <li>Customer service platforms (for support ticket management)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Legal Requirements</h3>
                    <p>We may disclose information when required by law, court order, or to protect our rights, safety, or the safety of others.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Data Security & Protection</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Security Measures</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>256-bit SSL encryption for all data transmission</li>
                      <li>Secure, certified data centers with 24/7 monitoring</li>
                      <li>Regular security audits and vulnerability assessments</li>
                      <li>Restricted access controls and employee training</li>
                      <li>Automated backup systems and disaster recovery plans</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Payment Security</h3>
                    <p>All payment information is processed through PCI DSS compliant payment processors. We do not store complete credit card information on our servers.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Data Retention</h3>
                    <p>We retain your information only as long as necessary to provide services and comply with legal obligations. Inactive accounts are reviewed annually for data purging.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Your Privacy Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Access & Control</h3>
                    <p className="mb-2">You have the right to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Access and review your personal information</li>
                      <li>Update or correct inaccurate data</li>
                      <li>Delete your account and associated data</li>
                      <li>Download your data in a portable format</li>
                      <li>Opt-out of marketing communications</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Communication Preferences</h3>
                    <p>You can control the types of communications you receive from us through your account settings or by using unsubscribe links in our emails.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Data Portability</h3>
                    <p>Upon request, we can provide your data in a structured, commonly used format for transfer to other services.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Cookies & Tracking Technologies</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Types of Cookies</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                      <li><strong>Performance Cookies:</strong> Help us understand how you use our site</li>
                      <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                      <li><strong>Marketing Cookies:</strong> Used to show relevant advertisements (with consent)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cookie Management</h3>
                    <p>You can control cookie preferences through your browser settings or our cookie preference center. Note that disabling certain cookies may affect website functionality.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ZestyMonk's services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it immediately.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Policy Updates</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of significant changes through:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                  <li>Email notification to your registered email address</li>
                  <li>Prominent notice on our website and mobile app</li>
                  <li>In-app notifications for significant policy changes</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-playfair font-bold text-gradient-food mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For any questions about this Privacy Policy or to exercise your privacy rights, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Privacy Officer:</strong> privacy@zestymonk.com</p>
                  <p><strong>Data Protection Team:</strong> dpo@zestymonk.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> ZestyMonk Technologies Pvt. Ltd., #42, Brigade Gateway, Rajajinagar, Bangalore - 560010</p>
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
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our privacy team is here to help you understand how we protect your data 
              and assist with any privacy-related requests or concerns.
            </p>
            <Button variant="appetizing" size="lg" className="text-lg px-8 py-4">
              <Mail className="mr-2" />
              Contact Privacy Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;