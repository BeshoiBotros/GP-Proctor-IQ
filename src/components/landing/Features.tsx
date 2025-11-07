import { Shield, Eye, Brain, Lock, BarChart3, Users, Video, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Monitoring',
    description: 'Advanced machine learning algorithms detect suspicious behavior in real-time with 99.7% accuracy.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Video,
    title: 'Live Video Proctoring',
    description: 'High-quality video surveillance with facial recognition and identity verification capabilities.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Shield,
    title: 'Secure Browser',
    description: 'Lockdown browser prevents tab switching, screen sharing, and unauthorized access during exams.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Eye,
    title: 'Gaze Tracking',
    description: 'Eye-tracking technology monitors where students are looking to ensure exam integrity.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive reports and insights on exam performance, integrity metrics, and trends.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'Bank-grade encryption ensures all exam data and student information remain secure.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: Users,
    title: 'Multi-User Support',
    description: 'Scale effortlessly from small classes to thousands of concurrent exam takers.',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
  },
  {
    icon: FileCheck,
    title: 'Automated Flagging',
    description: 'Smart system automatically flags suspicious activities for manual review by instructors.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div 
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4"
            data-aos="fade-up"
          >
            Features
          </div>
          <h2 
            className="text-4xl md:text-5xl mb-6 text-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Everything You Need for Secure Testing
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Comprehensive proctoring solution with cutting-edge technology to maintain academic integrity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="size-6" />
              </div>
              <h3 className="mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
