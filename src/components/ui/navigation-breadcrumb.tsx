import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NavigationBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const routeNames: Record<string, string> = {
    'about': 'About Us',
    'plans': 'Meal Plans',
    'contact': 'Contact Us',
    'blog': 'Nutrition Blog',
    'faq': 'FAQ',
    'mission': 'Our Mission',
    'terms': 'Terms & Conditions',
    'privacy-policy': 'Privacy Policy',
    'cancellation-policy': 'Cancellation Policy',
    'shipping-policy': 'Shipping Policy',
  };

  if (location.pathname === '/') {
    return null; // Don't show breadcrumbs on home page
  }

  return (
    <div className="bg-background/80 backdrop-blur-sm border-b border-border py-4">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-1 text-warm-amber hover:text-rich-orange transition-colors">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const displayName = routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1);

              return (
                <div key={name} className="flex items-center gap-2">
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="text-fresh-green font-medium">
                        {displayName}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link 
                          to={routeTo} 
                          className="text-warm-amber hover:text-rich-orange transition-colors"
                        >
                          {displayName}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default NavigationBreadcrumb;