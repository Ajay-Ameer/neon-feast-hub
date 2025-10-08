import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Heart,
  Leaf,
  Zap,
  Shield
} from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Keto Diet Guide: Complete Nutrition for Beginners",
      excerpt: "Master the ketogenic lifestyle with our comprehensive guide covering macros, meal timing, and delicious keto-friendly recipes that support weight loss and mental clarity.",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Keto",
      image: "🥥",
      featured: true
    },
    {
      title: "Paleo Diet Essentials: Eating Like Our Ancestors",
      excerpt: "Discover how the Paleo diet can transform your health by focusing on whole, unprocessed foods. Learn about allowed foods, meal prep tips, and long-term benefits.",
      author: "Nutritionist Ravi Kumar",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Paleo",
      image: "🥩",
      featured: false
    },
    {
      title: "Plant-Based Protein: Complete Amino Acid Guide",
      excerpt: "Everything you need about combining plant proteins for complete amino acid profiles. Includes meal plans and protein-rich vegetarian recipes.",
      author: "Chef Meera Patel",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Vegetarian",
      image: "🌱",
      featured: false
    },
    {
      title: "Intermittent Fasting: Science-Backed Meal Timing",
      excerpt: "Learn the proven benefits of intermittent fasting, different methods (16:8, 5:2, OMAD), and how to combine it with our meal plans for optimal results.",
      author: "Dr. Arjun Mehta",
      date: "2024-01-08",
      readTime: "9 min read",
      category: "Fasting",
      image: "⏰",
      featured: true
    },
    {
      title: "Micronutrients: The Hidden Key to Optimal Health",
      excerpt: "Deep dive into essential vitamins and minerals often missing from modern diets. Discover food sources and how our meals ensure complete nutrition.",
      author: "Nutrition Scientist Dr. Sarah Kim",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Nutrition",
      image: "🧪",
      featured: false
    },
    {
      title: "Meal Prep Mastery: Weekly Planning for Busy Lives",
      excerpt: "Transform your nutrition with strategic meal planning. Learn batch cooking techniques, storage methods, and how to maintain variety in your healthy diet.",
      author: "Chef Nutrition Expert Maya Singh",
      date: "2024-01-03",
      readTime: "5 min read",
      category: "Meal Prep",
      image: "📋",
      featured: false
    },
    {
      title: "Gut Health Revolution: Probiotics and Digestive Wellness",
      excerpt: "Understand the gut-brain connection and how fermented foods, prebiotics, and proper nutrition support your microbiome for better health and immunity.",
      author: "Dr. Digestive Health Specialist Raj Patel",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Gut Health",
      image: "🦠",
      featured: false
    },
    {
      title: "Anti-Inflammatory Foods: Nature's Medicine Cabinet",
      excerpt: "Combat chronic inflammation with powerful anti-inflammatory foods. Learn which ingredients to include and avoid for reducing disease risk naturally.",
      author: "Functional Medicine Dr. Lisa Chen",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Inflammation",
      image: "🍓",
      featured: false
    }
  ];

  const categories = [
    { name: "All", icon: <Heart className="h-4 w-4" />, active: true },
    { name: "Keto", icon: <Leaf className="h-4 w-4" />, active: false },
    { name: "Paleo", icon: <Zap className="h-4 w-4" />, active: false },
    { name: "Nutrition", icon: <Shield className="h-4 w-4" />, active: false },
    { name: "Meal Prep", icon: <Heart className="h-4 w-4" />, active: false }
  ];

  return (
    <div className="min-h-screen page-bg">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-warm-amber border-warm-amber px-4 py-1">
              📖 Knowledge Hub
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient-sunrise">Nutrition Insights</span><br />
              <span className="text-gradient-warm">& Wellness Tips</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the science behind healthy eating, get expert nutrition advice, 
              and learn how ZestyMonk is revolutionizing meal delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "fresh" : "outline"}
                className="flex items-center gap-2 transition-all duration-300"
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-playfair font-bold text-gradient-sunrise mb-8 text-center">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{post.image}</div>
                    <div className="flex-1">
                      <Badge variant="outline" className="text-xs mb-2">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-xl font-playfair font-bold text-gradient-food group-hover:text-gradient-warm transition-all">
                        {post.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="fresh" className="w-full group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-playfair font-bold text-gradient-sunrise mb-8 text-center">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="text-3xl text-center mb-3">{post.image}</div>
                  <Badge variant="outline" className="text-xs w-fit">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg font-playfair font-bold text-gradient-food group-hover:text-gradient-warm transition-all">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author.split(' ')[0]}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gradient-sunrise">
              Stay Updated with Nutrition Insights
            </h2>
            <p className="text-xl text-muted-foreground">
              Get weekly nutrition tips, healthy recipes, and the latest in food science 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-warm-amber"
              />
              <Button variant="fresh" className="px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;