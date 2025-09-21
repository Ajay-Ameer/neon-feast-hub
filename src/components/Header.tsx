import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap, ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { user, profile, signOut } = useAuth();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Plans", href: "/plans" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Meal Hub", href: "/meal-hub" },
    ...(user ? [{ name: "My Portal", href: "/customer-portal" }] : []),
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue hover-glow">
              <Zap className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-orbitron font-bold text-gradient-cyber pulse-cyber">
              ZestyMonk
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-neon-cyan transition-colors duration-200 font-exo font-medium hover-glow"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Cart and User Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild className="relative">
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge variant="default" className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Link>
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-gradient-to-r from-neon-cyan to-neon-blue text-black">
                        {profile?.first_name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {profile?.first_name && profile?.last_name 
                          ? `${profile.first_name} ${profile.last_name}`
                          : profile?.first_name || 'User'
                        }
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/customer-portal" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>My Portal</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button variant="fresh" size="lg" className="fresh-border" asChild>
                  <Link to="/plans">Start My Plan</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-neon-cyan transition-colors hover-glow"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg z-50">
            <div className="px-4 py-4 md:py-6 space-y-3 md:space-y-4 max-h-screen overflow-y-auto">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-foreground hover:text-neon-cyan transition-colors duration-200 font-exo font-medium py-3 text-lg hover-glow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="ghost" asChild className="relative justify-start w-full">
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                  {getTotalItems() > 0 && (
                    <Badge variant="default" className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Link>
              </Button>
              
              {user ? (
                <>
                  <div className="pt-4 pb-2 border-t">
                    <p className="text-sm font-medium">
                      {profile?.first_name && profile?.last_name 
                        ? `${profile.first_name} ${profile.last_name}`
                        : profile?.first_name || 'User'
                      }
                    </p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <Button variant="ghost" asChild className="justify-start w-full">
                    <Link to="/customer-portal" onClick={() => setIsMenuOpen(false)}>
                      <User className="h-5 w-5 mr-2" />
                      My Portal
                    </Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      signOut();
                    }}
                    className="justify-start w-full"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                  </Button>
                  <Button variant="fresh" size="lg" className="w-full mt-2 fresh-border" asChild>
                    <Link to="/plans" onClick={() => setIsMenuOpen(false)}>Start My Plan</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;