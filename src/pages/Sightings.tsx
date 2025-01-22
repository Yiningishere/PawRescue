import { MapPin, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function Sightings() {
  const { toast } = useToast();

  const handleOfferHelp = (_id: number) => {
    toast({
      title: "Help Offered",
      description: "Thank you for offering to help! We'll contact you with more details.",
    });
  };

  const sightings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2274&auto=format&fit=crop',
      location: 'Central Park, NY',
      description: 'Golden retriever mix, seems lost and hungry',
      date: '2024-02-10',
      time: '14:30',
      status: 'Under Investigation',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2394&auto=format&fit=crop',
      location: 'Downtown Seattle',
      description: 'Husky, appears to be injured',
      date: '2024-02-09',
      time: '09:15',
      status: 'Rescued',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2449&auto=format&fit=crop',
      location: 'Miami Beach',
      description: 'Small terrier mix, very scared',
      date: '2024-02-08',
      time: '16:45',
      status: 'Pending',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Recent Sightings</h1>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Input placeholder="Search by location" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="investigating">Under Investigation</SelectItem>
              <SelectItem value="rescued">Rescued</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sightings List */}
        <div className="space-y-6">
          {sightings.map((sighting) => (
            <Card key={sighting.id}>
              <div className="flex flex-col md:flex-row">
                <img
                  src={sighting.image}
                  alt="Dog sighting"
                  className="w-full md:w-48 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
                <div className="flex-1">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {sighting.location}
                      </CardTitle>
                      <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {sighting.status}
                      </span>
                    </div>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {sighting.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {sighting.time}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{sighting.description}</p>
                    {/* Desktop buttons */}
                    <div className="hidden md:flex gap-4">
                      <Button variant="outline" asChild>
                        <Link to={`/sightings/${sighting.id}`}>View Details</Link>
                      </Button>
                      <Button onClick={() => handleOfferHelp(sighting.id)}>
                        Offer Help
                      </Button>
                    </div>
                    {/* Mobile buttons - stack vertically */}
                    <div className="flex flex-col gap-3 md:hidden">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/sightings/${sighting.id}`}>View Details</Link>
                      </Button>
                      <Button 
                        className="w-full"
                        onClick={() => handleOfferHelp(sighting.id)}
                      >
                        Offer Help
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}