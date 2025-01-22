import { MapPin, Calendar, Clock, Phone, Mail, Camera, AlertTriangle } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// This would typically come from an API/database
const sightingsData = {
  '1': {
    id: 1,
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2274&auto=format&fit=crop',
    location: 'Central Park, NY',
    description: 'Golden retriever mix, seems lost and hungry. The dog appears to be well-groomed, suggesting it might be a lost pet rather than a stray.',
    date: '2024-02-10',
    time: '14:30',
    status: 'Under Investigation',
    reporter: 'John Smith',
    additionalDetails: {
      appearance: 'Medium-sized golden retriever mix, wearing a faded blue collar but no tags',
      behavior: 'Friendly but cautious, approaches people slowly',
      lastSeen: 'Near the Bethesda Fountain',
      urgency: 'Medium - appears hungry but not in immediate danger',
    },
    updates: [
      {
        date: '2024-02-10',
        time: '15:30',
        note: 'Local volunteer dispatched to the area',
      },
      {
        date: '2024-02-10',
        time: '16:15',
        note: 'Area searched but dog not found. Will continue monitoring.',
      },
    ],
  },
  '2': {
    id: 2,
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2394&auto=format&fit=crop',
    location: 'Downtown Seattle',
    description: 'Husky, appears to be injured. Limping on front right paw and seems distressed.',
    date: '2024-02-09',
    time: '09:15',
    status: 'Rescued',
    reporter: 'Sarah Johnson',
    additionalDetails: {
      appearance: 'Adult husky, black and white, no collar',
      behavior: 'Distressed and limping, but not aggressive',
      lastSeen: 'Pike Place Market area',
      urgency: 'High - injured and in busy area',
    },
    updates: [
      {
        date: '2024-02-09',
        time: '10:00',
        note: 'Emergency response team en route',
      },
      {
        date: '2024-02-09',
        time: '10:45',
        note: 'Dog successfully rescued and taken to vet',
      },
    ],
  },
  '3': {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2449&auto=format&fit=crop',
    location: 'Miami Beach',
    description: 'Small terrier mix, very scared. Hiding under parked cars and running from people.',
    date: '2024-02-08',
    time: '16:45',
    status: 'Pending',
    reporter: 'Maria Garcia',
    additionalDetails: {
      appearance: 'Small terrier mix, tan color, appears young',
      behavior: 'Very scared, hiding under vehicles',
      lastSeen: 'Ocean Drive, near 5th Street',
      urgency: 'Medium - scared but in relatively safe area',
    },
    updates: [
      {
        date: '2024-02-08',
        time: '17:30',
        note: 'Local rescue notified, planning capture strategy',
      },
    ],
  },
};

export default function SightingDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const sighting = sightingsData[id as keyof typeof sightingsData];

  const handleOfferHelp = () => {
    toast({
      title: "Help Offered",
      description: "Thank you for offering to help! We'll contact you with more details.",
    });
  };

  const handleSubmitUpdate = () => {
    toast({
      title: "Update Submitted",
      description: "Thank you for providing additional information about this sighting.",
    });
  };

  if (!sighting) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sighting Not Found</h1>
          <p className="text-muted-foreground">This sighting doesn't exist or has been removed.</p>
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
                src={sighting.image}
                alt="Dog sighting"
                className="w-full h-[400px] object-cover rounded-t-lg"
              />
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium">
                  {sighting.status}
                </span>
              </div>
            </div>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {sighting.location}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {sighting.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {sighting.time}
                    </span>
                  </div>
                </div>
                {/* Desktop button */}
                <Button onClick={handleOfferHelp} className="hidden md:flex">
                  Offer Help
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{sighting.description}</p>
              {/* Mobile button */}
              <Button onClick={handleOfferHelp} className="w-full md:hidden">
                Offer Help
              </Button>
            </CardContent>
          </Card>

          {/* Additional Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Sighting Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Appearance</h4>
                    <p className="text-muted-foreground">{sighting.additionalDetails.appearance}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Behavior</h4>
                    <p className="text-muted-foreground">{sighting.additionalDetails.behavior}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Last Seen</h4>
                    <p className="text-muted-foreground">{sighting.additionalDetails.lastSeen}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Urgency Level</h4>
                    <p className="text-muted-foreground">{sighting.additionalDetails.urgency}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Status Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sighting.updates.map((update, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4" />
                        {update.date}
                        <Clock className="w-4 h-4 ml-2" />
                        {update.time}
                      </div>
                      <p>{update.note}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact and Updates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      Emergency Hotline: (555) 123-4567
                    </p>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      report@pawrescue.org
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full">Contact Emergency Team</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Provide Update</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Have you seen this dog? Provide any additional information..."
                    className="min-h-[100px]"
                  />
                  <Button onClick={handleSubmitUpdate} className="w-full">
                    Submit Update
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}