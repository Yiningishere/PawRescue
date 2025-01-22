import { Calendar, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Blog() {
  const posts = [
    {
      title: "5 Ways to Help Stray Dogs in Your Community",
      excerpt: "Discover practical ways you can make a difference in the lives of stray dogs...",
      author: "Sarah Johnson",
      date: "February 15, 2024",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2969&auto=format&fit=crop",
      category: "Community",
    },
    {
      title: "Understanding Dog Body Language",
      excerpt: "Learn how to interpret different dog behaviors and what they mean...",
      author: "Dr. Michael Chen",
      date: "February 12, 2024",
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2394&auto=format&fit=crop",
      category: "Education",
    },
    {
      title: "Success Story: Luna's Journey Home",
      excerpt: "Read about Luna's incredible transformation from a scared stray to a beloved family member...",
      author: "Emily Rodriguez",
      date: "February 10, 2024",
      image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2449&auto=format&fit=crop",
      category: "Success Stories",
    },
    {
      title: "Winter Care Tips for Stray Dogs",
      excerpt: "Essential tips for helping stray dogs survive during cold weather...",
      author: "Mark Wilson",
      date: "February 8, 2024",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2969&auto=format&fit=crop",
      category: "Care Tips",
    },
    {
      title: "The Impact of Fostering",
      excerpt: "Discover how fostering saves lives and helps dogs find their forever homes...",
      author: "Lisa Thompson",
      date: "February 5, 2024",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2340&auto=format&fit=crop",
      category: "Fostering",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">PawRescue Blog</h1>

          {/* Featured Post */}
          <Card className="mb-12">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-[400px] object-cover rounded-t-lg"
            />
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-sm text-primary font-medium">{posts[0].category}</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {posts[0].date}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {posts[0].author}
                </span>
              </div>
              <CardTitle className="text-2xl">{posts[0].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{posts[0].excerpt}</p>
              <Button>Read More</Button>
            </CardContent>
          </Card>

          {/* Recent Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-primary font-medium">{post.category}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-12">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Get the latest updates on our rescue efforts and success stories.
                </p>
                <div className="flex gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border"
                  />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}