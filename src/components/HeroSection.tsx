import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-investigator.jpg';

interface HeroSectionProps {
  city: string;
  phone: string;
}

export const HeroSection = ({ city, phone }: HeroSectionProps) => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="trust-badge bg-white/20 text-white border border-white/30">
              ✓ Licensed & Bonded
            </span>
            <span className="trust-badge bg-white/20 text-white border border-white/30">
              ✓ Ex-Law Enforcement
            </span>
            <span className="trust-badge bg-white/20 text-white border border-white/30">
              ✓ 15+ Years Experience
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {city}'s Most Trusted
            <span className="block text-trust-red">Private Investigators</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
            Discreet, Professional Infidelity Investigations
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Get the truth you deserve. Licensed investigators serving {city} and surrounding areas with complete confidentiality.
          </p>

          {/* Credibility Line */}
          <div className="mb-8">
            <p className="text-lg font-semibold text-white/90">
              Ex Law Enforcement | Prior Military | Federal Agents
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="btn-trust text-lg px-8 py-4 h-auto"
              onClick={scrollToForm}
            >
              Get a Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <a href={`tel:${phone.replace(/\D/g, '')}`}>
                Call Now: {phone}
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <span>📞 24/7 Available</span>
            <span>🔒 100% Confidential</span>
            <span>⚡ Quick Response</span>
            <span>📍 Local {city} Team</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};