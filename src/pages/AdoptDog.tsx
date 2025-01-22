// src/pages/AdoptDog.tsx
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function AdoptDog() {
  const { id } = useParams();
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

  const dog = dogs.find((d) => d.id === parseInt(id as string, 10));

  if (!dog) {
    return <div>Dog not found</div>;
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Adopt {dog.name}</h1>
        <Card>
          <img
            src={dog.image}
            alt={dog.name}
            className="w-full h-64 object-cover rounded-t-lg"
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
            <p className="text-muted-foreground mb-4">{dog.description}</p>
            <div className="flex gap-4">
              <Button className="w-full md:w-auto">Adopt</Button>
              <Button className="w-full md:w-auto" variant="outline">
                Contact Shelter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
