import { MapPin, Heart, Calendar, Phone, Mail } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

// This would typically come from an API/database
const dogsData = {
  '1': {
    id: 1,
    name: 'Max',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2274&auto=format&fit=crop',
    location: 'Central Park, NY',
    description: 'Friendly golden retriever mix, seems lost and hungry.',
    status: 'Needs Rescue',
    age: '2 years',
    gender: 'Male',
    breed: 'Golden Retriever Mix',
    weight: '65 lbs',
    health: 'Good overall health, needs vaccinations',
    temperament: 'Friendly, good with kids and other dogs',
    additionalPhotos: [
      'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2262&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=2574&auto=format&fit=crop',
    ],
  },
  '2': {
    id: 2,
    name: 'Luna',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2394&auto=format&fit=crop',
    location: 'Downtown Seattle',
    description: 'Sweet husky, very gentle and good with people.',
    status: 'Available for Adoption',
    age: '1 year',
    gender: 'Female',
    breed: 'Siberian Husky',
    weight: '45 lbs',
    health: 'Excellent health, all vaccinations up to date',
    temperament: 'Gentle, social, great with other dogs',
    additionalPhotos: [
      'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590419690008-905895e8fe0d?q=80&w=2787&auto=format&fit=crop',
    ],
  },
  '3': {
    id: 3,
    name: 'Charlie',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2449&auto=format&fit=crop',
    location: 'Miami Beach',
    description: 'Energetic terrier mix, needs a loving home.',
    status: 'Available for Adoption',
    age: '6 months',
    gender: 'Male',
    breed: 'Terrier Mix',
    weight: '25 lbs',
    health: 'Perfect health, recently neutered and vaccinated',
    temperament: 'Playful, energetic, needs training',
    additionalPhotos: [
      'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=2340&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610041518868-f9c85f1e0f59?q=80&w=2340&auto=format&fit=crop',
    ],
  },
  '4': {
    id: 4,
    name: 'Bella',
    image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b?q=80&w=2196&auto=format&fit=crop',
    location: 'Los Angeles',
    description: 'Gentle labrador mix, great with kids.',
    status: 'Available for Adoption',
    age: '3 years',
    gender: 'Female',
    breed: 'Labrador Mix',
    weight: '55 lbs',
    health: 'Good health, slight arthritis in back leg',
    temperament: 'Calm, patient, excellent with children',
    additionalPhotos: [
      'https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=2787&auto=format&fit=crop',
    ],
  },
  '5': {
    id: 5,
    name: 'Rocky',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2340&auto=format&fit=crop',
    location: 'Chicago',
    description: 'Playful german shepherd, needs training.',
    status: 'Needs Rescue',
    age: '1.5 years',
    gender: 'Male',
    breed: 'German Shepherd',
    weight: '75 lbs',
    health: 'Generally healthy, needs dental cleaning',
    temperament: 'Intelligent, protective, needs experienced owner',
    additionalPhotos: [
      'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2787&auto=format&fit=crop',
    ],
  },
  '6': {
    id: 6,
    name: 'Daisy',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=2340&auto=format&fit=crop',
    location: 'Houston',
    description: 'Sweet beagle mix, loves attention.',
    status: 'Available for Adoption',
    age: '4 years',
    gender: 'Female',
    breed: 'Beagle Mix',
    weight: '30 lbs',
    health: 'Excellent health, all medical needs met',
    temperament: 'Affectionate, food-motivated, good with all ages',
    additionalPhotos: [
      'https://images.unsplash.com/photo-1544087205-d09363b6bcc1?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?q=80&w=2787&auto=format&fit=crop',
    ],
  },
};

export default function DogDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const dog = dogsData[id as keyof typeof dogsData];

  const handleAdoptRequest = () => {
    toast({
      title: "Adoption Request Sent",
      description: "We'll contact you soon about adopting " + dog.name,
    });
  };

  const handleFosterRequest = () => {
    toast({
      title: "Foster Request Sent",
      description: "Thank you for offering to foster " + dog.name,
    });
  };

  if (!dog) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Dog Not Found</h1>
          <p className="text-muted-foreground">The dog you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Image and Basic Info */}
          <Card className="mb-8">
            <div className="relative">
              <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-[400px] object-cover rounded-t-lg"
              />
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium">
                  {dog.status}
                </span>
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl mb-2">{dog.name}</CardTitle>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {dog.location}
                  </p>
                </div>
                <Button onClick={() => handleAdoptRequest()} className="hidden md:flex">
                  <Heart className="w-4 h-4 mr-2" />
                  Adopt {dog.name}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p className="font-medium">{dog.age}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Gender</p>
                  <p className="font-medium">{dog.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Breed</p>
                  <p className="font-medium">{dog.breed}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Weight</p>
                  <p className="font-medium">{dog.weight}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{dog.description}</p>
              <div className="md:hidden">
                <Button onClick={() => handleAdoptRequest()} className="w-full mb-4">
                  <Heart className="w-4 h-4 mr-2" />
                  Adopt {dog.name}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Health & Behavior</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Health Status</h4>
                    <p className="text-muted-foreground">{dog.health}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Temperament</h4>
                    <p className="text-muted-foreground">{dog.temperament}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {dog.additionalPhotos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${dog.name} photo ${index + 2}`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact and Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Interested in {dog.name}?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Contact Information</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      (555) 123-4567
                    </p>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      adopt@pawrescue.org
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Available Options</h4>
                  <div className="flex flex-col gap-3">
                    <Button onClick={() => handleAdoptRequest()}>
                      <Heart className="w-4 h-4 mr-2" />
                      Start Adoption Process
                    </Button>
                    <Button variant="outline" onClick={() => handleFosterRequest()}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Offer to Foster
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}