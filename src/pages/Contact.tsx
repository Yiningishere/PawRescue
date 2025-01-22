import { Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Adjust import if necessary
import { Textarea } from '@/components/ui/textarea'; // Adjust import if necessary

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                We'd love to hear from you! Whether you have questions about adoption, partnership opportunities, or simply want to get involved, feel free to reach out to us using the contact form below or via the provided information.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  <span>Email: info@yourorganization.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  <span>Phone: (123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  <span>Address: 123 Rescue Road, City, State, ZIP Code</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" className="mt-1" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Have More Questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Our team is here to help. Contact us directly or fill out the form above.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline">Visit Our FAQ</Button>
                  <Button>Call Us</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
