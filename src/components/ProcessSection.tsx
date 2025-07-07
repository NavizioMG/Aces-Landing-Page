import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Contact us for a completely confidential discussion about your case. We'll assess your situation and explain how we can help.",
    icon: "🤝",
    duration: "30 minutes",
    features: ["100% Confidential", "No Obligation", "Expert Advice"]
  },
  {
    number: "02", 
    title: "Custom Investigation Plan",
    description: "Our licensed investigators develop a tailored approach based on your specific needs, timeline, and budget.",
    icon: "📋",
    duration: "24-48 hours",
    features: ["Personalized Strategy", "Clear Timeline", "Transparent Pricing"]
  },
  {
    number: "03",
    title: "Professional Investigation",
    description: "Our experienced team conducts discreet surveillance and gathers evidence using legal, professional methods.",
    icon: "🔍",
    duration: "1-2 weeks",
    features: ["Licensed Investigators", "Latest Technology", "Legal Methods"]
  },
  {
    number: "04",
    title: "Detailed Report & Evidence",
    description: "Receive a comprehensive report with all findings, photographic evidence, and documentation for legal proceedings.",
    icon: "📄",
    duration: "2-3 days",
    features: ["Court-Admissible", "Photo/Video Evidence", "Expert Testimony"]
  }
];

export const ProcessSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process ensures you get the truth you need with complete confidentiality and professionalism.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary opacity-30 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-card rounded-2xl p-6 card-premium hover-lift mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                      {step.number}
                    </div>
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <div className="text-xs text-primary font-medium mb-3">⏱️ {step.duration}</div>
                    <div className="space-y-1">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-success flex items-center justify-center gap-1">
                          <span className="w-1 h-1 bg-success rounded-full"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-16 bg-gradient-to-b from-primary to-primary-light opacity-30"></div>
              )}
              <Card className="card-premium hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{step.icon}</span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      <div className="text-sm text-primary font-medium mb-3">⏱️ {step.duration}</div>
                      <div className="flex flex-wrap gap-2">
                        {step.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Why Choose Our Process */}
        <div className="bg-card rounded-2xl p-8 card-premium text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Why Our Process Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-semibold mb-2">100% Confidential</h4>
              <p className="text-sm text-muted-foreground">Your privacy is our top priority. All communications and investigations are completely confidential.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚖️</div>
              <h4 className="font-semibold mb-2">Legally Admissible</h4>
              <p className="text-sm text-muted-foreground">All evidence is collected using legal methods and can be used in court proceedings.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold mb-2">Results-Driven</h4>
              <p className="text-sm text-muted-foreground">Our systematic approach ensures thorough investigations with actionable results.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take the first step toward uncovering the truth. Our confidential consultation is completely free with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-trust text-lg px-8 py-3" onClick={scrollToForm}>
              Get Free Consultation
            </Button>
            <Button variant="outline" className="text-lg px-8 py-3" asChild>
              <a href="tel:214-451-3185">Call Now: (214) 451-3185</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};