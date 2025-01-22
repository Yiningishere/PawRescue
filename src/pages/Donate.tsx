import { CreditCard, Heart, Gift, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function Donate() {
  const { toast } = useToast();

  const handleDonate = () => {
    toast({
      title: "Thank You!",
      description: "Your donation will help many dogs in need.",
    });
  };

  const donationOptions = [
    {
      amount: 25,
      description: "Provides food for one dog for a week",
      icon: <Coffee className="w-6 h-6" />,
    },
    {
      amount: 50,
      description: "Covers basic medical check-up and vaccines",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      amount: 100,
      description: "Sponsors emergency medical treatment",
      icon: <Gift className="w-6 h-6" />,
    },
    {
      amount: 200,
      description: "Supports a dog's complete rehabilitation",
      icon: <CreditCard className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Make a Difference Today</h1>
            <p className="text-muted-foreground">
              Your donation helps us rescue, rehabilitate, and rehome stray dogs in need.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">$25</p>
                  <p className="text-muted-foreground">Feeds a dog for a week</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">$50</p>
                  <p className="text-muted-foreground">Provides medical care</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">$100</p>
                  <p className="text-muted-foreground">Sponsors rehabilitation</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation Form */}
          <Card>
            <CardHeader>
              <CardTitle>Make a Donation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Preset Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {donationOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto py-4 flex flex-col items-center gap-2 justify-center"
                      onClick={() => handleDonate()}
                    >
                      {option.icon}
                      <span className="text-lg font-bold">${option.amount}</span>
                      <span className="text-xs text-center text-muted-foreground">
                        {option.description}
                      </span>
                    </Button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="space-y-4">
                  <label className="text-sm font-medium">Custom Amount</label>
                  <div className="flex gap-4">
                    <Input type="number" min="1" placeholder="Enter amount" className="flex-1" />
                    <Button onClick={() => handleDonate()}>Donate</Button>
                  </div>
                </div>

                {/* Monthly Donation Option */}
                <div className="pt-6 border-t">
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => handleDonate()}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Become a Monthly Donor
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>All donations are tax-deductible. Tax ID: 12-3456789</p>
            <p className="mt-2">
              For questions about donations, please contact us at{" "}
              <a href="mailto:donate@pawrescue.org" className="text-primary hover:underline">
                donate@pawrescue.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}