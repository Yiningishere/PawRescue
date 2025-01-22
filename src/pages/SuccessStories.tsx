import { Calendar, Heart, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SuccessStories() {
  const stories = [
    {
      title: "Max's Journey from Streets to Stardom",
      excerpt: "Once a scared stray, Max is now a certified therapy dog bringing joy to hospital patients.",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2274&auto=format&fit=crop",
      author: "Sarah Johnson",
      date: "February 15, 2024",
      likes: 245,
    },
    {
      title: "Luna's Second Chance at Life",
      excerpt: "Found injured and alone, Luna's recovery story touched hearts and found her perfect family.",
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2394&auto=format&fit=crop",
      author: "Michael Chen",
      date: "February 10, 2024",
      likes: 189,
    },
    {
      title: "Charlie's Tale of Transformation",
      excerpt: "From a timid rescue to a confident companion, Charlie's story inspires hope.",
      image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2449&auto=format&fit=crop",
      author: "Emily Rodriguez",
      date: "February 5, 2024",
      likes: 156,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
            <p className="text-muted-foreground">
              Every rescue dog has a story. Here are some of our favorite happy endings that show the
              power of love and second chances.
            </p>
          </div>

          {/* Featured Story */}
          <Card className="mb-12">
            <div className="relative">
              <img
                src={stories[0].image}
                alt={stories[0].title}
                className="w-full h-[400px] object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{stories[0].title}</h2>
                <div className="flex items-center gap-4 text-white/80">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {stories[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {stories[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {stories[0].likes}
                  </span>
                </div>
              </div>
            </div>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">{stories[0].excerpt}</p>
              <Button>Read Full Story</Button>
            </CardContent>
          </Card>

          {/* More Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.slice(1).map((story, index) => (
              <Card key={index}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {story.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {story.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {story.likes}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{story.excerpt}</p>
                  <Button variant="outline">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Share Your Story Section */}
          <Card className="mt-12">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Have a Success Story to Share?</h3>
                <p className="text-muted-foreground mb-4">
                  We'd love to hear about your experience with your rescued companion.
                </p>
                <Button>Share Your Story</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}