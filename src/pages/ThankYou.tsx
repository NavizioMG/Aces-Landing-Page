import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import satisfiedClientsImage from '@/assets/satisfied-clients.jpg';

const ThankYou = () => {
  useEffect(() => {
    // Track conversion for analytics
    console.log('Thank you page viewed - conversion tracked');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-success/10 via-background to-primary/5 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Thank You Card */}
        <Card className="card-premium text-center mb-8">
          <CardHeader className="pb-6">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-success-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <CardTitle className="text-4xl font-bold text-success mb-4">
              Thank You!
            </CardTitle>
            <p className="text-2xl text-foreground">
              Your Confidential Case Review Has Been Received
            </p>
          </CardHeader>
          <CardContent className="pb-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We understand how difficult this situation must be for you. Our licensed investigators 
              are reviewing your case and will contact you with next steps shortly.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* What Happens Next */}
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-primary">⏱️</span>
                What Happens Next
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <h4 className="font-semibold">Case Review (Within 2 hours)</h4>
                  <p className="text-sm text-muted-foreground">A licensed investigator will review your case details and prepare a consultation strategy.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <h4 className="font-semibold">Confidential Contact (Within 24 hours)</h4>
                  <p className="text-sm text-muted-foreground">We'll call you at your preferred time to discuss your situation and answer any questions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <h4 className="font-semibold">Custom Investigation Plan (Same day)</h4>
                  <p className="text-sm text-muted-foreground">We'll develop a tailored approach with clear timelines and transparent pricing.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Immediate Contact Options */}
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-trust-red">📞</span>
                Need Immediate Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  If your situation is urgent or you have questions, don't wait. Our licensed investigators are standing by.
                </p>
                <Button className="btn-trust w-full mb-3" asChild>
                  <a href="tel:214-451-3185">
                    📞 Call Now: (214) 451-3185
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:info@acesprivateinvestigations.com">
                    ✉️ Email: info@acesprivateinvestigations.com
                  </a>
                </Button>
              </div>
              
              <div className="bg-success/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-success mb-2">24/7 Emergency Line</h4>
                <p className="text-sm text-success">Available around the clock for urgent investigations</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assurance Section */}
        <Card className="card-premium bg-gradient-to-br from-primary/10 to-primary/5 mb-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Your Information is 100% Secure</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="font-semibold mb-2">Completely Confidential</h4>
                <p className="text-sm text-muted-foreground">All communications and case details are strictly confidential and protected.</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-semibold mb-2">Licensed & Bonded</h4>
                <p className="text-sm text-muted-foreground">Our investigators are fully licensed, bonded, and insured for your protection.</p>
              </div>
              <div>
                <div className="text-3xl mb-3">⚖️</div>
                <h4 className="font-semibold mb-2">Legal & Ethical</h4>
                <p className="text-sm text-muted-foreground">All investigations follow strict legal and ethical guidelines.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Proof */}
        <Card className="card-premium">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">You're in Good Hands</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                    <span className="font-semibold">4.9/5 Client Rating</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Cases Solved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground border-l-4 border-primary pl-4">
                    "ACES helped me through the most difficult time in my life. They were professional, 
                    compassionate, and got me the truth I needed to move forward."
                  </blockquote>
                  <p className="text-xs text-muted-foreground">- Sarah M., Dallas</p>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src={satisfiedClientsImage} 
                  alt="Satisfied clients with investigator" 
                  className="rounded-lg w-full max-w-sm mx-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Want to learn more about our services?</p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="/" className="hover:text-primary transition-colors">← Back to Main Site</a>
            <a href="#" className="hover:text-primary transition-colors">Our Process</a>
            <a href="#" className="hover:text-primary transition-colors">Other Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;