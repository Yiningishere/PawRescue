// src/pages/Home.tsx
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

export default function Home() {
  const dogs = [
    {
      id: 1,
      name: 'Max',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2274&auto=format&fit=crop',
      location: 'Central Park, NY',
      description: 'Friendly golden retriever mix, seems lost and hungry.',
      status: 'Needs Rescue',
    },
    {
      id: 2,
      name: 'Luna',
      image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2394&auto=format&fit=crop',
      location: 'Downtown Seattle',
      description: 'Sweet husky, very gentle and good with people.',
      status: 'Available for Adoption',
    },
    {
      id: 3,
      name: 'Charlie',
      image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2449&auto=format&fit=crop',
      location: 'Miami Beach',
      description: 'Energetic terrier mix, needs a loving home.',
      status: 'Available for Adoption',
    },
  ];

  const videos = [
    {
      id: 1,
      src: 'https://www.youtube.com/embed/B83nmCSwRuw',
      alt: 'Video of a rescued dog',
    },
    {
      id: 2,
      src: 'https://www.youtube.com/embed/jhxns1ZwyMU',
      alt: 'Video of a dog adoption process',
    },
    {
      id: 3,
      src: 'https://www.youtube.com/embed/wl4m1Rqmq-Y',
      alt: 'Video of volunteers in action',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section h-[600px] flex items-center justify-center text-white">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-5xl font-bold">Help Save a Stray</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Together we can make a difference in the lives of stray dogs. Report sightings, rescue, or
            adopt a furry friend today.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/report">Report a Sighting</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
              <Link to="/dogs">Adopt a Dog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
            <div className="text-muted-foreground">Dogs Rescued</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1,800+</div>
            <div className="text-muted-foreground">Successful Adoptions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Active Volunteers</div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="videos-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Heartwarming Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="relative w-full h-64">
                <iframe
                  src={video.src}
                  title={video.alt}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sightings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Sightings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogs.map((dog) => (
              <Card key={dog.id}>
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{dog.name}</CardTitle>
                    <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {dog.status}
                    </span>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {dog.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dog.description}</p>
                  <Button className="w-full mt-4" asChild>
                    <Link to={`/dogs/${dog.id}`}>Help This Dog</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="report-section py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Report a Stray Dog</h2>
              <p className="text-muted-foreground">
                Help us locate and rescue stray dogs by reporting sightings in your area.
              </p>
            </div>
            <Card>
              <CardContent className="space-y-4 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <Input placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Input placeholder="Enter the location where you saw the dog" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    placeholder="Describe the dog and its condition (color, size, behavior, etc.)"
                    rows={4}
                  />
                </div>
                <Button className="w-full">Submit Report</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
