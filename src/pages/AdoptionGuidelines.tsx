import { Check, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdoptionGuidelines() {
  const requirements = [
    "Must be at least 21 years old",
    "Valid government-issued ID",
    "Proof of residence (utility bill or lease agreement)",
    "If renting, landlord's written permission",
    "Veterinary references if you have/had pets",
    "Home visit approval",
    "Adoption fee payment",
  ];

  const process = [
    {
      step: 1,
      title: "Application Submission",
      description: "Fill out our comprehensive adoption application form with your details and preferences.",
    },
    {
      step: 2,
      title: "Initial Review",
      description: "Our team reviews your application and checks references within 2-3 business days.",
    },
    {
      step: 3,
      title: "Home Visit",
      description: "A volunteer visits your home to ensure it's safe and suitable for a dog.",
    },
    {
      step: 4,
      title: "Meet and Greet",
      description: "Meet your potential new family member and spend time getting to know them.",
    },
    {
      step: 5,
      title: "Final Approval",
      description: "Once approved, complete the adoption contract and pay the adoption fee.",
    },
    {
      step: 6,
      title: "Welcome Home",
      description: "Take your new family member home and begin your journey together!",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Adoption Guidelines</h1>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                Thank you for considering adoption! Our guidelines ensure that our dogs find loving,
                permanent homes where they can thrive. Please review the requirements and process
                carefully before submitting an application.
              </p>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Basic Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Adoption Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Adoption Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {process.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Adoption Fees */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Adoption Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our adoption fees range from $150-$300 depending on the dog's age, size, and medical
                needs. The fee includes:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Spaying/neutering</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Vaccinations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Microchipping</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Initial medical examination</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Deworming treatment</span>
                </li>
              </ul>
              <div className="flex items-center gap-2 p-4 bg-primary/10 rounded-lg">
                <Info className="w-5 h-5 text-primary" />
                <p className="text-sm">
                  All adoption fees contribute directly to the care of our rescued dogs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Ready to Adopt?</h3>
                <p className="text-muted-foreground mb-4">
                  View our available dogs and start your adoption journey today.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline">View Available Dogs</Button>
                  <Button>Start Application</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}