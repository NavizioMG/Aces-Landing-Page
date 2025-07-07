import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const caseStudies = [
  {
    title: "The Weekend Business Trip",
    category: "Infidelity",
    duration: "3 days",
    outcome: "Evidence collected led to successful divorce proceedings with favorable custody arrangement.",
    details: "Subject claimed repeated business trips but surveillance revealed meetings with another person at luxury hotels.",
    status: "Solved",
    year: "2024"
  },
  {
    title: "Missing Assets Investigation",
    category: "Financial Fraud", 
    duration: "2 weeks",
    outcome: "Located $50,000 in hidden assets, resulting in recovery for client in divorce settlement.",
    details: "Spouse hid marital assets in multiple accounts. Our financial investigation uncovered the trail.",
    status: "Solved",
    year: "2024"
  },
  {
    title: "Child Custody Evidence",
    category: "Family Law",
    duration: "1 week", 
    outcome: "Documented evidence helped client gain primary custody of children.",
    details: "Investigation revealed concerning behavior affecting child welfare and safety.",
    status: "Solved",
    year: "2023"
  },
  {
    title: "Employee Theft Case",
    category: "Corporate",
    duration: "5 days",
    outcome: "Recovered stolen inventory worth $25,000 and prevented future losses.",
    details: "Surveillance and investigation uncovered systematic theft by trusted employee.",
    status: "Solved", 
    year: "2023"
  },
  {
    title: "Insurance Fraud Investigation",
    category: "Insurance",
    duration: "10 days",
    outcome: "Saved insurance company $100,000 by proving fraudulent injury claims.",
    details: "Subject claimed disability but surveillance showed active lifestyle contradicting claims.",
    status: "Solved",
    year: "2024"
  },
  {
    title: "Background Verification",
    category: "Pre-Employment",
    duration: "3 days",
    outcome: "Uncovered criminal history and false credentials, saving client from bad hire.",
    details: "Thorough background check revealed undisclosed criminal history and education fraud.",
    status: "Solved",
    year: "2024"
  }
];

export const BustedSection = () => {
  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-trust-red/5 to-destructive/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-destructive">
            <span className="text-foreground">CASE FILES:</span> BUSTED
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real cases, real results. See how ACES Private Investigations has helped clients uncover the truth 
            and achieve justice. All cases are anonymized to protect client confidentiality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <Card key={index} className="card-premium hover-lift group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="destructive" className="bg-trust-red">
                    {caseStudy.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{caseStudy.year}</span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {caseStudy.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    📂 {caseStudy.category}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏱️ {caseStudy.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Case Details:</h4>
                    <p className="text-sm text-muted-foreground">{caseStudy.details}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-success">Outcome:</h4>
                    <p className="text-sm text-foreground">{caseStudy.outcome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-card rounded-lg p-8 text-center card-premium">
          <h3 className="text-2xl font-bold mb-6">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Cases Solved</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
              <p className="text-sm text-muted-foreground">Assets Recovered</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Confidential</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Need Help with Your Case?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every situation is unique. Let our experienced investigators help you uncover the truth 
            and achieve the justice you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-form"
              className="inline-flex items-center justify-center px-8 py-3 bg-trust-red text-trust-red-foreground rounded-lg font-semibold hover:bg-trust-red/90 transition-colors"
            >
              Start Your Investigation
            </a>
            <a 
              href="tel:214-451-3185"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Call for Emergency Case
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};