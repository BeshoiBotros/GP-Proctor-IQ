import { UserPlus, Settings, Play, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up and set up your institution profile in minutes. No credit card required for trial.',
    step: '01',
  },
  {
    icon: Settings,
    title: 'Configure Exam',
    description: 'Set up your exam parameters, proctoring rules, and security settings with our intuitive dashboard.',
    step: '02',
  },
  {
    icon: Play,
    title: 'Launch Exam',
    description: 'Students take the exam with AI monitoring active. Real-time alerts keep you informed.',
    step: '03',
  },
  {
    icon: CheckCircle,
    title: 'Review Results',
    description: 'Access comprehensive reports with integrity scores, flagged incidents, and detailed analytics.',
    step: '04',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div 
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4"
            data-aos="fade-up"
          >
            How It Works
          </div>
          <h2 
            className="text-4xl md:text-5xl mb-6 text-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get Started in 4 Simple Steps
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From setup to results, our streamlined process makes online proctoring effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-border" style={{ width: 'calc(100% - 8rem)', left: '4rem' }} />
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative z-10">
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {step.step}
                </div>
                <div className="bg-primary/10 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="size-7" />
                </div>
                <h3 className="mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow indicator for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-0.5 h-8 bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="inline-flex items-center space-x-2 bg-muted px-6 py-3 rounded-full">
            <CheckCircle className="size-5 text-green-500" />
            <span className="text-muted-foreground">Average setup time: Less than 10 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
