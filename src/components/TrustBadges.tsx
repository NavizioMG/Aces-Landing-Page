export const TrustBadges = () => {
  const badges = [
    {
      name: "Texas DPS Licensed",
      description: "State Licensed Private Investigator",
      icon: "🏆"
    },
    {
      name: "BBB A+ Rating",
      description: "Better Business Bureau Accredited",
      icon: "⭐"
    },
    {
      name: "TALI Member",
      description: "Texas Association of Licensed Investigators",
      icon: "🛡️"
    },
    {
      name: "Bonded & Insured",
      description: "Fully Protected & Professional",
      icon: "🔒"
    },
    {
      name: "NALI Certified",
      description: "National Association of Legal Investigators",
      icon: "📋"
    }
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Accredited, Licensed & Trusted</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our credentials and certifications ensure you receive professional, reliable investigation services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="card-premium p-6 text-center hover-lift"
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h3 className="font-semibold text-sm mb-2">{badge.name}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-full"></span>
              Licensed in Texas
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-full"></span>
              Bonded & Insured
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-full"></span>
              Background Checked
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-full"></span>
              Professional Training
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};