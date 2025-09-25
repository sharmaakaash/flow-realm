import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "5 Essential Features Every Modern POS System Should Have",
    excerpt: "Discover the must-have capabilities that separate leading POS solutions from the rest, and how they can transform your business operations.",
    readTime: "5 min read",
    category: "Features",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center"
  },
  {
    title: "How to Choose the Right POS System for Your Restaurant",
    excerpt: "A comprehensive guide to selecting the perfect point of sale solution that aligns with your restaurant's unique needs and growth goals.",
    readTime: "8 min read",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&crop=center"
  },
  {
    title: "The Future of Retail: Contactless Payments and Beyond",
    excerpt: "Explore emerging payment technologies and how they're reshaping customer experiences in the post-pandemic retail landscape.",
    readTime: "6 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of point of sale technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border shadow-card hover:shadow-card-hover transition-smooth group cursor-pointer h-full overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-card text-foreground px-8 py-4"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;