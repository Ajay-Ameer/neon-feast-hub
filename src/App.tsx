import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "@/contexts/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationBreadcrumb from "./components/ui/navigation-breadcrumb";
import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Plans from "./pages/Plans";
import PlanSelection from "./pages/PlanSelection";
import MenuCalendar from "./pages/MenuCalendar";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import MealHub from "./pages/MealHub";
import Cart from "./pages/Cart";
import Terms from "./pages/Terms";
import CancellationPolicy from "./pages/CancellationPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CustomerPortal from "./pages/CustomerPortal";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { AdminRoute } from "./components/AdminRoute";
import News from "./pages/News";
import Announcements from "./pages/Announcements";
import Releases from "./pages/Releases";
import Community from "./pages/Community";
import SocialEvents from "./pages/SocialEvents";
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <CartProvider>
            <BrowserRouter>
              <ScrollToTop />
              <div className="min-h-screen bg-background text-foreground">
                <Header />
                <NavigationBreadcrumb />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/plans" element={<Plans />} />
                    <Route path="/plan-selection" element={<PlanSelection />} />
                    <Route path="/menu-calendar" element={<MenuCalendar />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/meal-hub" element={<MealHub />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/customer-portal" element={
                      <ProtectedRoute>
                        <CustomerPortal />
                      </ProtectedRoute>
                    } />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cancellation-policy" element={<CancellationPolicy />} />
                    <Route path="/shipping-policy" element={<ShippingPolicy />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/admin" element={
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    } />
                    <Route path="/news" element={<News />} />
                    <Route path="/announcements" element={<Announcements />} />
                    <Route path="/releases" element={<Releases />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/social-events" element={<SocialEvents />} />
                    <Route path="/careers" element={<Careers />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </CartProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
