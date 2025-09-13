import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-neon-green to-neon-yellow">
                <Zap className="h-5 w-5 text-black" />
              </div>
              <span className="text-lg font-orbitron font-bold text-gradient-neon">
                ZestyMonk
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Revolutionizing healthy eating with personalized nutrition plans and 
              fresh daily meal delivery using our patented retort packaging technology.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-neon-pink hover:scale-110 transition-transform cursor-pointer" />
              <Facebook className="h-5 w-5 text-neon-blue hover:scale-110 transition-transform cursor-pointer" />
              <Twitter className="h-5 w-5 text-neon-yellow hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-neon-green">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Mission", href: "/mission" },
                { name: "Plans & Pricing", href: "/plans" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-neon-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-neon-orange">Support</h3>
            <ul className="space-y-2">
              {[
                { name: "FAQ", href: "/faq" },
                { name: "Contact Us", href: "/contact" },
                { name: "Blog", href: "/blog" },
                { name: "Mission", href: "/mission" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-neon-pink transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-neon-pink">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Cancellation Policy", href: "/cancellation-policy" },
                { name: "Shipping Policy", href: "/shipping-policy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-neon-yellow transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-neon-yellow">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-neon-green" />
                <span className="text-muted-foreground text-sm">hello@zestymonk.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-neon-orange" />
                <span className="text-muted-foreground text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-neon-pink" />
                <span className="text-muted-foreground text-sm">WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ZestyMonk. All rights reserved. Designed with 💚 for healthy living.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;