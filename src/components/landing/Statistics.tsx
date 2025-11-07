import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10M+',
    label: 'Exams Proctored',
    trend: '+23% this year',
    // color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Globe,
    value: '150+',
    label: 'Countries Served',
    trend: 'Global presence',
    // color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: TrendingUp,
    value: '99.7%',
    label: 'Detection Accuracy',
    trend: 'Industry leading',
    // color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Award,
    value: '2000+',
    label: 'Institutions Trust Us',
    trend: 'Growing daily',
    // color: 'text-orange-500',
    // bgColor: 'bg-orange-500/10',
  },
];

export function Statistics() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-6"
            data-aos="fade-up"
          >
            Trusted by Leading Institutions Worldwide
          </h2>
          <p 
            className="text-xl text-primary-foreground/80 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join thousands of educational organizations that rely on Proctor-IQ for secure online assessments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8 text-center hover:bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="size-8" />
              </div>
              <div className="text-5xl mb-2">{stat.value}</div>
              <div className="text-lg mb-2 text-primary-foreground/90">{stat.label}</div>
              <div className="text-sm text-primary-foreground/70">{stat.trend}</div>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 grid md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-center">
            <div className="text-3xl mb-2">24/7</div>
            <div className="text-primary-foreground/80">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">99.9%</div>
            <div className="text-primary-foreground/80">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">&lt;2s</div>
            <div className="text-primary-foreground/80">Average Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}