import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: "Sarah M.",
    location: "Dallas, TX",
    rating: 5,
    text: "ACES helped me uncover the truth about my husband's affair. They were professional, discreet, and provided clear evidence. I finally have peace of mind and can move forward with my life.",
    caseType: "Infidelity Investigation"
  },
  {
    name: "Michael R.",
    location: "Houston, TX", 
    rating: 5,
    text: "Outstanding service! The investigators were thorough and kept me informed throughout the process. The evidence they gathered was crucial for my custody case. Highly recommend!",
    caseType: "Child Custody Investigation"
  },
  {
    name: "Jennifer L.",
    location: "Austin, TX",
    rating: 5,
    text: "Professional, compassionate, and results-driven. ACES provided the evidence I needed quickly and affordably. Their team understands how difficult these situations can be.",
    caseType: "Surveillance Services"
  },
  {
    name: "David K.",
    location: "San Antonio, TX",
    rating: 5,
    text: "Exceptional work! They found information that I thought was impossible to obtain. Very professional and worth every penny. The peace of mind is invaluable.",
    caseType: "Background Investigation"
  },
  {
    name: "Lisa H.",
    location: "Fort Worth, TX",
    rating: 5,
    text: "ACES saved my business from a dishonest employee. Their investigation was thorough and discreet. I'm grateful for their professionalism and expertise.",
    caseType: "Corporate Investigation"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real clients who trusted ACES with their most sensitive investigations.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="card-premium p-8 text-center">
            <CardContent className="p-0">
              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
                <p className="text-sm text-primary font-medium mt-1">
                  {testimonials[currentIndex].caseType}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full p-0"
            >
              ←
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full p-0"
            >
              →
            </Button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="card-premium hover-lift">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  "{testimonial.text.slice(0, 120)}..."
                </p>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="card-premium p-6">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Cases Solved</p>
          </div>
          <div className="card-premium p-6">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="card-premium p-6">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
          <div className="card-premium p-6">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};