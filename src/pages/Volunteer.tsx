import { Heart, Users, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Volunteer() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Thank you for volunteering! We'll contact you soon.",
    });
  };

  const opportunities = [
    {
      title: "Dog Walker",
      description: "Help exercise our rescue dogs and provide them with much-needed attention.",
      icon: <Heart className="w-6 h-6 text-primary" />,
      commitment: "2-4 hours/week",
    },
    {
      title: "Event Coordinator",
      description: "Organize and manage adoption events and fundraising activities.",
      icon: <Calendar className="w-6 h-6 text-primary" />,
      commitment: "5-10 hours/week",
    },
    {
      title: "Transport Volunteer",
      description: "Help transport dogs to vet appointments and adoption events.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
      commitment: "As needed",
    },
    {
      title: "Foster Parent",
      description: "Provide temporary homes for dogs awaiting permanent adoption.",
      icon: <Users className="w-6 h-6 text-primary" />,
      commitment: "Ongoing",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Volunteer With Us</h1>
          <p className="text-muted-foreground mb-8">
            Join our team of dedicated volunteers and make a difference in the lives of stray dogs.
          </p>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {opportunities.map((opportunity, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {opportunity.icon}
                    <div>
                      <CardTitle>{opportunity.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Time Commitment: {opportunity.commitment}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle>Volunteer Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Preferred Role</label>
                    <Input required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Why do you want to volunteer?</label>
                  <Textarea required rows={4} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Previous Experience</label>
                  <Textarea rows={4} />
                </div>

                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}