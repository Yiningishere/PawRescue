import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FAQ() {
  const faqs = [
    {
      category: "Adoption Process",
      questions: [
        {
          q: "How does the adoption process work?",
          a: "Our adoption process involves filling out an application, home visit, meet and greet with the dog, and final paperwork. The entire process usually takes 1-2 weeks.",
        },
        {
          q: "What are the adoption fees?",
          a: "Adoption fees range from $150-$300, which covers vaccinations, microchipping, spaying/neutering, and initial medical care.",
        },
        {
          q: "Can I adopt if I live in an apartment?",
          a: "Yes! We evaluate each situation individually. Many dogs thrive in apartments with proper exercise and care.",
        },
      ],
    },
    {
      category: "Fostering",
      questions: [
        {
          q: "What does fostering involve?",
          a: "Fostering involves providing temporary care for a dog in your home until they find their forever family. We provide all necessary supplies and medical care.",
        },
        {
          q: "How long does fostering last?",
          a: "Foster periods vary from a few weeks to a few months, depending on the dog's needs and adoption timeline.",
        },
      ],
    },
    {
      category: "Reporting Strays",
      questions: [
        {
          q: "What should I do if I find a stray dog?",
          a: "First, ensure your safety. If the dog appears friendly, check for ID tags. Report the sighting through our website or contact our emergency hotline.",
        },
        {
          q: "Will you pick up the stray dog?",
          a: "If we have available resources and the dog is in immediate danger, we'll arrange pickup. Otherwise, we'll guide you on how to help safely.",
        },
      ],
    },
    {
      category: "Medical Care",
      questions: [
        {
          q: "What medical care do rescued dogs receive?",
          a: "All dogs receive full veterinary checkups, vaccinations, deworming, spaying/neutering, and treatment for any specific medical conditions.",
        },
        {
          q: "Do you help with medical expenses after adoption?",
          a: "We provide guidance and resources for ongoing care. In special cases, we may assist with specific medical issues identified before adoption.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

          {faqs.map((category, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}

          {/* Contact Section */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact us directly and we'll be happy to help.
                </p>
                <div className="flex justify-center gap-4">
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    Call Us
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a href="mailto:help@pawrescue.org" className="text-primary hover:underline">
                    Email Us
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}