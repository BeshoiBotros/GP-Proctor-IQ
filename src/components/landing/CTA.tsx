import { Button } from '../ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface CTAProps {
  onRegister: () => void;
}

const benefits = [
  'No credit card required',
  'Free 30-day trial',
  'Cancel anytime',
  'Full feature access',
];

export function CTA({ onRegister }: CTAProps) {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div 
          className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-primary-foreground relative overflow-hidden"
          data-aos="zoom-in"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Ready to Transform Your Online Assessments?
            </h2>
            <p 
              className="text-xl text-primary-foreground/90 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join 2,000+ institutions using Proctor-IQ to maintain academic integrity
            </p>

            <div 
              className="flex flex-wrap justify-center gap-3 mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="size-4" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Button 
                size="lg" 
                onClick={onRegister}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Demo
              </Button>
            </div>

            <p 
              className="text-sm text-primary-foreground/70 mt-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Get started in less than 5 minutes • No technical expertise required
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="text-center">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm text-muted-foreground">SOC 2 Certified</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-2xl mb-2">🛡️</div>
              <div className="text-sm text-muted-foreground">GDPR Compliant</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-2xl mb-2">✓</div>
              <div className="text-sm text-muted-foreground">FERPA Compliant</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-2xl mb-2">🔐</div>
              <div className="text-sm text-muted-foreground">ISO 27001</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
