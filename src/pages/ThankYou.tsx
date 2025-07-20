import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Phone, MessageSquare } from 'lucide-react';

interface ThankYouProps {
  city?: string;
  phone?: string;
}

const ThankYou = ({ 
  city = "Dallas", 
  phone = "(214) 451-3185"
}: ThankYouProps) => {
  useEffect(() => {
    // Track conversion for analytics (Meta Pixel, Google Analytics)
    console.log('Thank you page viewed - conversion tracked');
    
    // Placeholder for tracking scripts - easily replaceable
    if (typeof window !== 'undefined') {
      // Google Analytics conversion tracking
      // gtag('event', 'conversion', { 'send_to': 'CONVERSION_ID' });
      
      // Meta Pixel conversion tracking  
      // fbq('track', 'Lead');
    }
  }, []);

  const smsLink = `sms:${phone.replace(/[^\d]/g, '')}?body=Hi, I submitted a contact form and need immediate help with my investigation. Please call me back.`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-success/5 via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Animation */}
          <div className="mb-8 animate-scale-in">
            <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
              <Check className="w-12 h-12 text-success-foreground" strokeWidth={3} />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Thank you for contacting <br />
            <span className="text-primary">Aces Private Investigations – {city}!</span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We've received your request. One of our licensed investigators will reach out shortly. 
            <span className="block mt-2 font-semibold text-foreground">
              If urgent, please call {phone}.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="btn-trust" asChild>
              <a href={`tel:${phone}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={smsLink} className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Send us an SMS
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <Card className="card-premium">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Information is 100% Secure</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="font-semibold mb-2">Completely Confidential</h3>
                    <p className="text-sm text-muted-foreground text-center">All communications protected</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h3 className="font-semibold mb-2">Licensed & Bonded</h3>
                    <p className="text-sm text-muted-foreground text-center">Fully licensed investigators</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">⚖️</span>
                    </div>
                    <h3 className="font-semibold mb-2">Legal & Ethical</h3>
                    <p className="text-sm text-muted-foreground text-center">Strict legal guidelines</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="card-premium">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                  <span className="ml-2 font-semibold">4.9/5 Client Rating</span>
                </div>
                
                <blockquote className="text-lg italic text-muted-foreground mb-4 max-w-2xl mx-auto">
                  "ACES helped me through the most difficult time in my life. They were professional, 
                  compassionate, and got me the truth I needed to move forward."
                </blockquote>
                <p className="text-sm text-muted-foreground">- Sarah M., {city}</p>
                
                <div className="grid grid-cols-2 gap-8 mt-8 max-w-md mx-auto">
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Cases Solved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Want to learn more about our services?
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/" className="hover:text-primary transition-colors">← Back to Main Site</a>
            <a href="#process" className="hover:text-primary transition-colors">Our Process</a>
            <a href="#services" className="hover:text-primary transition-colors">Other Services</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;