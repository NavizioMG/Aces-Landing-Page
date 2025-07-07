import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  phone: string;
  city: string;
}

export const Header = ({ phone, city }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Trust Bar */}
      <div className="bg-trust-red text-trust-red-foreground py-2 px-4">
        <div className="container mx-auto flex items-center justify-center text-sm font-medium">
          <span className="mr-2">🔒</span>
          100% Confidential • Licensed & Insured • Available 24/7
          <span className="ml-4 font-semibold">CALL NOW: {phone}</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ACES Private Investigations</h1>
                <p className="text-sm text-muted-foreground">{city}, Texas</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#process" className="text-foreground hover:text-primary transition-colors">How It Works</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-trust-red font-semibold hover:text-trust-red/80 transition-colors">
                {phone}
              </a>
              <Button className="btn-trust">Get Free Consultation</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
                <a href="#process" className="text-foreground hover:text-primary transition-colors">How It Works</a>
                <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Reviews</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
                <div className="pt-4 border-t border-border">
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="block text-trust-red font-semibold mb-3">
                    {phone}
                  </a>
                  <Button className="btn-trust w-full">Get Free Consultation</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};