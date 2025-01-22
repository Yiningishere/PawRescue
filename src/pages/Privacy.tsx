import { Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                At YourOrganization, we value the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website or interact with our services.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Policy Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Privacy Policy Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We are committed to protecting the privacy of our users. This policy covers the following aspects:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Data Collection" />
                  <span>Data Collection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Data Usage" />
                  <span>Data Usage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Data Sharing" />
                  <span>Data Sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Data Security" />
                  <span>Data Security</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Your Rights" />
                  <span>Your Rights</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We collect personal information when you interact with our website or services. This includes:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Adoption Application Forms" />
                  <span>Adoption Application Forms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Partner Application Forms" />
                  <span>Partner Application Forms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Contact Forms" />
                  <span>Contact Forms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Surveys and Feedback" />
                  <span>Surveys and Feedback</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We use the collected information to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Process and manage adoption applications" />
                  <span>Process and manage adoption applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Coordinate home visits and background checks" />
                  <span>Coordinate home visits and background checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Communicate with you regarding adoption and partner opportunities" />
                  <span>Communicate with you regarding adoption and partner opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Improve our services and website" />
                  <span>Improve our services and website</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We do not sell, rent, or share your personal information with third parties unless:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="You give us permission to do so" />
                  <span>You give us permission to do so</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="It is required by law" />
                  <span>It is required by law</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="It is necessary for the protection of our organization or its users" />
                  <span>It is necessary for the protection of our organization or its users</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We implement various security measures to protect your personal information, including:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Secure servers and encryption" />
                  <span>Secure servers and encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Access controls and monitoring" />
                  <span>Access controls and monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Regular security audits" />
                  <span>Regular security audits</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Access your personal information" />
                  <span>Access your personal information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Request corrections to your personal information" />
                  <span>Request corrections to your personal information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Request the deletion of your personal information" />
                  <span>Request the deletion of your personal information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Object to the processing of your personal information" />
                  <span>Object to the processing of your personal information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" aria-label="Withdraw your consent at any time" />
                  <span>Withdraw your consent at any time</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Have Questions About Privacy?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions or concerns about our privacy policy or how we handle your data, please contact us.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" ref="/faq">Visit Our FAQ</Button>
                  <Button ref="/contact">Contact Us</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
