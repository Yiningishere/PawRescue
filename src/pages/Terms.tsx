import { Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                Welcome to YourOrganization! By using our website and services, you agree to the following terms and conditions. Please read them carefully before using our platform.
              </p>
            </CardContent>
          </Card>

          {/* Terms and Conditions Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                These terms and conditions outline the rules and guidelines that govern your use of our website and services. They cover the following aspects:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Use of Website and Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Adoption Process</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Adoption Fees and Payments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Rescued Dogs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Disclaimer</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Liability</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Use of Website and Services */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Use of Website and Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                By accessing and using our website and services, you agree to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Comply with all applicable laws and regulations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Not use our services for any illegal activity</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Respect the rights of others, including intellectual property rights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Provide accurate and up-to-date information</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Adoption Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Adoption Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The adoption process is governed by the following terms:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Completing the adoption application form</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Providing accurate and complete information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Undergoing a background check and home visit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Agreeing to the adoption contract and paying the adoption fee</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Committing to the welfare and long-term care of the adopted dog</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Adoption Fees and Payments */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Adoption Fees and Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Adoption fees and payment terms are as follows:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Adoption fees range from $150-$300 depending on the dog's age, size, and medical needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Payment must be made before the adoption is finalized</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Adoption fees contribute to the care and welfare of our rescued dogs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Rescued Dogs */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Rescued Dogs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Information about the rescued dogs and their care:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>All dogs are spayed/neutered, vaccinated, and microchipped</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>We provide an initial medical examination for all dogs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Deworming treatment is included in the adoption fee</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We make no warranties, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </CardContent>
          </Card>

          {/* Liability */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                In no event will YourOrganization be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Need More Information?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions or need further clarification about our terms and conditions, please feel free to contact us.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline">Visit Our FAQ</Button>
                  <Button>Contact Us</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
