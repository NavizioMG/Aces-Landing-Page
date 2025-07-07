import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const faqs = [
  {
    question: "Is my case completely confidential?",
    answer: "Absolutely. All of our investigations are conducted with the highest level of confidentiality. We are bound by strict ethical and legal guidelines to protect your privacy. Your information will never be shared with anyone without your explicit consent, except as required by law."
  },
  {
    question: "How much do your investigation services cost?",
    answer: "Our pricing depends on the type and complexity of your case. We offer transparent pricing with no hidden fees. During your free consultation, we'll provide a detailed estimate based on your specific needs. We also offer payment plans to make our services accessible."
  },
  {
    question: "How long does an investigation typically take?",
    answer: "Investigation timelines vary depending on the case complexity and type. Simple background checks may take 3-5 days, while surveillance cases typically take 1-2 weeks. We'll provide you with a realistic timeline during your consultation and keep you updated throughout the process."
  },
  {
    question: "Will the evidence you collect be admissible in court?",
    answer: "Yes. All of our investigators are licensed and follow strict legal protocols. We ensure all evidence is collected legally and properly documented to be admissible in court proceedings. Our investigators can also provide expert testimony if needed."
  },
  {
    question: "Do you handle cases outside of Texas?",
    answer: "We primarily serve Texas, with offices in major cities including Dallas, Houston, Austin, San Antonio, and Fort Worth. For cases outside Texas, we can coordinate with licensed investigators in other states through our professional network."
  },
  {
    question: "What types of investigations do you specialize in?",
    answer: "We specialize in infidelity investigations, child custody cases, background checks, surveillance, missing persons, insurance fraud, corporate investigations, and asset searches. Our team has extensive experience in all types of private investigation services."
  },
  {
    question: "Are your investigators licensed and insured?",
    answer: "Yes, all of our investigators are fully licensed by the Texas Department of Public Safety, bonded, and insured. Many of our team members have backgrounds in law enforcement, military, or federal agencies, bringing years of professional experience."
  },
  {
    question: "Can you guarantee results?",
    answer: "While we cannot guarantee specific outcomes, we have a 98% success rate in our investigations. We use proven methods, advanced technology, and experienced investigators to maximize the chances of obtaining the information you need."
  },
  {
    question: "How do I know if I need a private investigator?",
    answer: "If you suspect infidelity, need evidence for legal proceedings, want to verify someone's background, or need to locate a missing person, a private investigator can help. We offer free consultations to assess whether our services are right for your situation."
  },
  {
    question: "What happens after the investigation is complete?",
    answer: "You'll receive a comprehensive report with all findings, photographic or video evidence, and detailed documentation. We can also provide recommendations for next steps and connect you with legal professionals if needed. Our support doesn't end when the investigation concludes."
  }
];

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our private investigation services. 
            Can't find what you're looking for? Contact us for a free consultation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-premium">
                <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                        <div className={`transform transition-transform duration-200 ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}>
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="border-t border-border pt-4">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <Card className="card-premium bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Every case is unique. Speak with one of our licensed investigators for personalized answers 
                  about your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact-form"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get Free Consultation
                  </a>
                  <a 
                    href="tel:214-451-3185"
                    className="inline-flex items-center justify-center px-8 py-3 bg-trust-red text-trust-red-foreground rounded-lg font-semibold hover:bg-trust-red/90 transition-colors"
                  >
                    Call Now: (214) 451-3185
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};