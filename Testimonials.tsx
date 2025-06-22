
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mariam Al-Zahra',
      role: 'Beauty Enthusiast',
      image: '/lovable-uploads/63d4e015-a26c-45fa-9938-058d99941d83.png',
      rating: 5,
      text: 'Juliet Elegance has completely transformed my skincare routine. The natural fragrance and multiple variants are amazing!',
      product: 'Juliet Elegance Collection'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      role: 'Healthcare Professional',
      image: '/lovable-uploads/7693c331-d91d-4719-94ed-4e6860053aa8.png',
      rating: 5,
      text: 'MediTwist antibacterial soap is essential in my daily routine. The 99.99% germ protection gives me complete confidence.',
      product: 'MediTwist Antibacterial Soap'
    },
    {
      id: 3,
      name: 'Fatima Rodriguez',
      role: 'Busy Mother',
      image: '/lovable-uploads/ea1fbeb2-299b-4f82-957a-e058b1026ea6.png',
      rating: 5,
      text: 'Fresh Day keeps me feeling confident all day long. Perfect for my active lifestyle and busy schedule.',
      product: 'Fresh Day Daily Care'
    },
    {
      id: 4,
      name: 'Dr. Sarah Abdullah',
      role: 'Dermatologist',
      image: '/lovable-uploads/7e55e838-a2c1-4dfd-a895-4c1d3ad7e6a6.png',
      rating: 5,
      text: 'Soft Silk luxury line is exceptional for sensitive skin. The silk proteins make a remarkable difference!',
      product: 'Soft Silk Luxury Line'
    },
    {
      id: 5,
      name: 'Omar Khalil',
      role: 'Professional Cleaner',
      image: '/lovable-uploads/21e9d7fc-ce62-49b3-a804-ee6f5fd58717.png',
      rating: 5,
      text: 'SABA and ZENTA products are game-changers for professional cleaning. Powerful yet safe formulas.',
      product: 'SABA & ZENTA Professional'
    },
    {
      id: 6,
      name: 'Layla Mahmoud',
      role: 'Luxury Lifestyle Blogger',
      image: '/lovable-uploads/393b922c-01a4-488c-885f-82a0b49ab017.png',
      rating: 5,
      text: 'The complete PALMENTAR collection offers variety and quality. Every product delivers premium results!',
      product: 'Complete PALMENTAR Collection'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-brand-secondary/20 px-4 py-2 rounded-full text-brand-secondary font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Customer Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Real Stories from Real Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why thousands trust PALMENTAR for their daily beauty and care needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group glass dark:glass-dark rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in luxury-shadow relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-brand-secondary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Product */}
              <div className="mb-6">
                <span className="bg-brand-secondary/20 text-brand-secondary px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.product}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-secondary/20 to-brand-accent/20 flex items-center justify-center border-2 border-brand-secondary/20">
                  <span className="text-lg font-bold text-brand-secondary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground group-hover:text-brand-secondary transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-brand-secondary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">15K+</div>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">4.9</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">50+</div>
            <p className="text-muted-foreground">Premium Products</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">7</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
