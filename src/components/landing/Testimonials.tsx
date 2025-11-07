import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Dean of Academic Affairs',
    institution: 'Stanford University',
    image: 'SJ',
    content: 'Proctor-IQ has revolutionized how we conduct online examinations. The AI detection is incredibly accurate, and our faculty loves the intuitive interface.',
    rating: 5,
  },
  {
    name: 'Prof. Michael Chen',
    role: 'Computer Science Department Head',
    institution: 'MIT',
    image: 'MC',
    content: 'The best proctoring solution we\'ve tested. The security features are robust, and the analytics provide valuable insights into exam integrity.',
    rating: 5,
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Director of Online Learning',
    institution: 'Harvard Extension School',
    image: 'ER',
    content: 'Outstanding platform! It scaled seamlessly for our 5,000+ student exams. The support team is responsive and knowledgeable.',
    rating: 5,
  },
  {
    name: 'Prof. David Kumar',
    role: 'Assessment Coordinator',
    institution: 'Oxford University',
    image: 'DK',
    content: 'Proctor-IQ strikes the perfect balance between security and user experience. Students find it easy to use, and we trust the results completely.',
    rating: 5,
  },
  {
    name: 'Dr. Lisa Thompson',
    role: 'VP of Academic Technology',
    institution: 'Yale University',
    image: 'LT',
    content: 'The implementation was smooth, and the ROI has been exceptional. We\'ve seen a significant reduction in academic dishonesty incidents.',
    rating: 5,
  },
  {
    name: 'Prof. James Wilson',
    role: 'Medical Education Director',
    institution: 'Johns Hopkins',
    image: 'JW',
    content: 'For high-stakes medical licensing exams, Proctor-IQ gives us the confidence we need. The detailed reports are invaluable for our compliance requirements.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div 
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4"
            data-aos="fade-up"
          >
            Testimonials
          </div>
          <h2 
            className="text-4xl md:text-5xl mb-6 text-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Loved by Educators Worldwide
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            See what leading institutions are saying about Proctor-IQ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Quote className="absolute top-4 right-4 size-8 text-primary/10" />
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <span>{testimonial.image}</span>
                </div>
                <div>
                  <div className="text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                "{testimonial.content}"
              </p>

              <div className="text-xs text-primary pt-3 border-t border-border">
                {testimonial.institution}
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="inline-flex items-center space-x-8 bg-card border border-border rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-foreground">4.9/5</span>
            </div>
            <div className="text-muted-foreground">Based on 2,847 reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
