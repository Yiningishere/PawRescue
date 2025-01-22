import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Dogs() {
  const dogs = [
    {
      id: 1,
      name: 'Max',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2274&auto=format&fit=crop',
      location: 'Central Park, NY',
      description: 'Friendly golden retriever mix, seems lost and hungry.',
      status: 'Needs Rescue',
      age: '2 years',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Luna',
      image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2394&auto=format&fit=crop',
      location: 'Downtown Seattle',
      description: 'Sweet husky, very gentle and good with people.',
      status: 'Available for Adoption',
      age: '1 year',
      gender: 'Female',
    },
    {
      id: 3,
      name: 'Charlie',
      image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2449&auto=format&fit=crop',
      location: 'Miami Beach',
      description: 'Energetic terrier mix, needs a loving home.',
      status: 'Available for Adoption',
      age: '6 months',
      gender: 'Male',
    },
    {
      id: 4,
      name: 'Bella',
      image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b?q=80&w=2196&auto=format&fit=crop',
      location: 'Los Angeles',
      description: 'Gentle labrador mix, great with kids.',
      status: 'Available for Adoption',
      age: '3 years',
      gender: 'Female',
    },
    {
      id: 5,
      name: 'Rocky',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2340&auto=format&fit=crop',
      location: 'Chicago',
      description: 'Playful german shepherd, needs training.',
      status: 'Needs Rescue',
      age: '1.5 years',
      gender: 'Male',
    },
    {
      id: 6,
      name: 'Daisy',
      image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=2340&auto=format&fit=crop',
      location: 'Houston',
      description: 'Sweet beagle mix, loves attention.',
      status: 'Available for Adoption',
      age: '4 years',
      gender: 'Female',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Available Dogs</h1>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Input placeholder="Search by name or location" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="adoption">Available for Adoption</SelectItem>
              <SelectItem value="rescue">Needs Rescue</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ages</SelectItem>
              <SelectItem value="puppy">Puppy (0-1 year)</SelectItem>
              <SelectItem value="young">Young (1-3 years)</SelectItem>
              <SelectItem value="adult">Adult (3+ years)</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Dogs Grid */}
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
                <div className="flex gap-4 mb-4">
                  <span className="text-sm text-muted-foreground">{dog.age}</span>
                  <span className="text-sm text-muted-foreground">{dog.gender}</span>
                </div>
                <p className="text-muted-foreground mb-4">{dog.description}</p>
                <Button className="w-full" asChild>
                  <Link to={`/dogs/${dog.id}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}