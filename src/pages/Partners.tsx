import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PartnersPage() {
  const partnerBenefits = [
    "Promote your mission and services to a wider audience",
    "Access to our network of adopters and supporters",
    "Collaborate on fundraising events and adoption drives",
    "Receive discounted fees for dog placements",
    "Opportunities for volunteering and community involvement",
    "Exclusive resources for marketing and outreach",
    "Support from our experienced team in strategic planning",
  ];

  const partnerRequirements = [
    "Must be a registered nonprofit organization",
    "Valid government-issued ID and organization documents",
    "Proof of rescue operations and animal care services",
    "Background check of all staff and volunteers",
    "Agreement to follow our guidelines and policies",
    "Regular communication and reporting",
    "Commitment to the welfare and adoption of rescued animals",
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Partnership Guidelines</h1>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                Thank you for considering partnering with us! Our partnerships aim to extend our reach and support more rescued dogs by collaborating with like-minded organizations. Please review the benefits and requirements carefully before applying to partner with us.
              </p>
            </CardContent>
          </Card>

          {/* Partner Benefits */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Benefits of Partnering</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {partnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Partner Requirements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Partner Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {partnerRequirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Ready to Partner?</h3>
                <p className="text-muted-foreground mb-4">
                  Learn more about our partnership opportunities and join us in making a difference for rescued dogs.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline">Learn More</Button>
                  <Button>Apply to Partner</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
