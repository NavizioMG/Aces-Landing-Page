import { Card, CardContent } from '@/components/ui/card';

interface FooterProps {
  city: string;
  phone: string;
}

export const Footer = ({ city, phone }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">A</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">ACES Private Investigations</h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Licensed, bonded, and insured private investigators serving {city} and surrounding areas. 
              Professional, confidential investigation services you can trust.
            </p>
            <div className="flex gap-4">
              <span className="text-xs bg-primary-foreground/20 px-2 py-1 rounded">Licensed</span>
              <span className="text-xs bg-primary-foreground/20 px-2 py-1 rounded">Bonded</span>
              <span className="text-xs bg-primary-foreground/20 px-2 py-1 rounded">Insured</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Infidelity Investigations</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Child Custody Cases</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Background Checks</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Surveillance Services</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Missing Persons</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Insurance Fraud</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-primary-foreground/80 transition-colors">
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@acesprivateinvestigations.com" className="hover:text-primary-foreground/80 transition-colors">
                  info@acesprivateinvestigations.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span className="text-primary-foreground/80">{city}, Texas</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏰</span>
                <span className="text-primary-foreground/80">24/7 Emergency Services</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-primary-foreground transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#contact-form" className="hover:text-primary-foreground transition-colors">Free Consultation</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Service Areas</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
            <span>Dallas</span>
            <span>•</span>
            <span>Houston</span>
            <span>•</span>
            <span>Austin</span>
            <span>•</span>
            <span>San Antonio</span>
            <span>•</span>
            <span>Fort Worth</span>
            <span>•</span>
            <span>Plano</span>
            <span>•</span>
            <span>Irving</span>
            <span>•</span>
            <span>Arlington</span>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Professional Affiliations</h4>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-primary-foreground/60">
            <span>Texas DPS Licensed</span>
            <span>•</span>
            <span>TALI Member</span>
            <span>•</span>
            <span>NALI Certified</span>
            <span>•</span>
            <span>BBB Accredited</span>
            <span>•</span>
            <span>Bonded & Insured</span>
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-trust-red text-trust-red-foreground mb-8">
          <CardContent className="p-6 text-center">
            <h4 className="text-lg font-semibold mb-2">24/7 Emergency Services</h4>
            <p className="text-sm mb-3">Urgent investigation needed? We're available around the clock for emergency cases.</p>
            <a 
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="text-lg font-bold hover:underline"
            >
              {phone}
            </a>
          </CardContent>
        </Card>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {currentYear} ACES Private Investigations. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Sitemap</a>
            </div>
          </div>
          <p className="mt-4 text-xs">
            License #: Private Investigator License - Texas Department of Public Safety
          </p>
        </div>
      </div>
    </footer>
  );
};