import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactFormProps {
  city: string;
  phone: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  caseType: string;
  message: string;
}

export const ContactForm = ({ city, phone, onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    caseType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      onSubmit?.(formData);
      setIsSubmitting(false);
      // Redirect to thank you page
      window.location.href = '/thank-you';
    }, 1000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Your Free, Confidential Consultation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Speak with a licensed investigator today. Your information is completely confidential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Investigation</CardTitle>
                <p className="text-muted-foreground">
                  Fill out this secure form and we'll contact you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="case-type">Type of Investigation *</Label>
                    <Select onValueChange={(value) => handleChange('caseType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select investigation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="infidelity">Infidelity/Cheating Spouse</SelectItem>
                        <SelectItem value="surveillance">Surveillance</SelectItem>
                        <SelectItem value="background">Background Check</SelectItem>
                        <SelectItem value="custody">Child Custody</SelectItem>
                        <SelectItem value="missing">Missing Person</SelectItem>
                        <SelectItem value="insurance">Insurance Fraud</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Brief Description (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Briefly describe your situation... (completely confidential)"
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-trust w-full text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>🔒 Your information is 100% confidential and secure</p>
                    <p>We typically respond within 2 hours during business hours</p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="card-premium">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Immediate Assistance</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-trust-red text-xl">📞</span>
                      <div>
                        <p className="font-semibold">Call Now</p>
                        <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-trust-red font-semibold text-lg">
                          {phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary text-xl">📧</span>
                      <div>
                        <p className="font-semibold">Email Us</p>
                        <a href="mailto:info@acesprivateinvestigations.com" className="text-primary">
                          info@acesprivateinvestigations.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-success text-xl">📍</span>
                      <div>
                        <p className="font-semibold">Local Office</p>
                        <p className="text-muted-foreground">Serving {city} & Surrounding Areas</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium bg-gradient-to-br from-success/10 to-success/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-success">Why Choose ACES?</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      Licensed Texas Private Investigators
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      Ex-Law Enforcement & Military Background
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      15+ Years Combined Experience
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      100% Confidential Investigations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      Available 24/7 for Emergencies
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};