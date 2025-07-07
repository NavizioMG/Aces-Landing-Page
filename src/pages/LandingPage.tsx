import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TrustBadges } from '@/components/TrustBadges';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BustedSection } from '@/components/BustedSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

interface LandingPageProps {
  city?: string;
  phone?: string;
}

const LandingPage = ({ 
  city = "Dallas", 
  phone = "(214) 451-3185"
}: LandingPageProps) => {
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Here you would typically send data to your backend
    // For now, we'll just log it and redirect
  };

  return (
    <div className="min-h-screen bg-background">
      <Header city={city} phone={phone} />
      <main>
        <HeroSection city={city} phone={phone} />
        <TrustBadges />
        <TestimonialsSection />
        <BustedSection />
        <ProcessSection />
        <ContactForm city={city} phone={phone} onSubmit={handleFormSubmit} />
        <FAQSection />
      </main>
      <Footer city={city} phone={phone} />
    </div>
  );
};

export default LandingPage;