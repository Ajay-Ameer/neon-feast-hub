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
      title: "The Science Behind Our Retort Packaging Technology",
      excerpt: "Discover how our patented packaging keeps nutrients intact while maintaining freshness for days without preservatives.",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      image: "🔬",
      featured: true
    },
    {
      title: "5 Superfoods That Boost Your Metabolism Naturally",
      excerpt: "Learn about powerful ingredients we incorporate into our weight loss meals to help you burn calories more efficiently.",
      author: "Nutritionist Ravi Kumar",
      date: "2024-01-12",
      readTime: "4 min read",
      category: "Nutrition",
      image: "🥑",
      featured: false
    },
    {
      title: "Plant-Based Protein: Complete Guide for Vegetarians",
      excerpt: "Everything you need to know about getting complete protein from plant sources in your daily meals.",
      author: "Chef Meera Patel",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Vegetarian",
      image: "🌱",
      featured: false
    },
    {
      title: "Managing Diabetes Through Strategic Meal Planning",
      excerpt: "How our diabetic-friendly plans help maintain stable blood sugar levels while enjoying delicious, satisfying meals.",
      author: "Dr. Arjun Mehta",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Health",
      image: "🩺",
      featured: true
    },
    {
      title: "Post-Workout Nutrition: Timing is Everything",
      excerpt: "Maximize your muscle gain with the right nutrients at the right time. Our muscle gain plan explained.",
      author: "Fitness Expert Karan Singh",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "Fitness",
      image: "💪",
      featured: false
    },
    {
      title: "The Psychology of Food Colors and Appetite",
      excerpt: "How we use color psychology in our meal presentation to enhance your eating experience and satisfaction.",
      author: "Food Psychologist Dr. Anita Roy",
      date: "2024-01-03",
      readTime: "4 min read",
      category: "Psychology",
      image: "🎨",
      featured: false
    }
  ];

  const categories = [
    { name: "All", icon: <Heart className="h-4 w-4" />, active: true },
    { name: "Nutrition", icon: <Leaf className="h-4 w-4" />, active: false },
    { name: "Technology", icon: <Zap className="h-4 w-4" />, active: false },
    { name: "Health", icon: <Shield className="h-4 w-4" />, active: false }
  ];

  return (
    <div className="min-h-screen">
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
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "appetizing" : "outline"}
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-playfair font-bold text-gradient-sunrise mb-8 text-center">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Card key={index} className="card-elegant group hover:shadow-glow transition-all duration-300">
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
                  <Button variant="harvest" className="w-full group">
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
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-playfair font-bold text-gradient-sunrise mb-8 text-center">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="card-elegant group hover:shadow-glow transition-all duration-300">
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
              <Button variant="appetizing" className="px-6">
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