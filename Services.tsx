
import React from 'react';
import { CheckCircle, Truck, Shield, Headphones, Award, Users, Sparkles, Leaf } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Custom Product Development',
      description: 'We create customized natural products tailored to your specific needs and preferences.',
      features: [
        'Personalized formulation',
        'Natural ingredients only',
        'Quality testing',
        'Custom packaging'
      ],
      price: 'From $150'
    },
    {
      icon: Truck,
      title: 'Fast & Reliable Shipping',
      description: 'Quick and secure delivery to your doorstep with tracking and insurance.',
      features: [
        'Free shipping over $50',
        '2-day express option',
        'Package tracking',
        'Insurance coverage'
      ],
      price: 'Free shipping available'
    },
    {
      icon: Users,
      title: 'Bulk & Wholesale Orders',
      description: 'Special pricing and services for businesses and bulk purchasers.',
      features: [
        'Volume discounts',
        'Custom labeling',
        'Flexible payment terms',
        'Dedicated support'
      ],
      price: 'Contact for pricing'
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance for all your questions and concerns.',
      features: [
        'Live chat support',
        'Phone consultation',
        'Email assistance',
        'Product guidance'
      ],
      price: 'Always free'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'We stand behind our products with comprehensive quality assurance.',
      features: [
        '30-day money back',
        'Quality certification',
        'Lab tested products',
        'Satisfaction guarantee'
      ],
      price: 'Included with purchase'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Packaging',
      description: 'Sustainable packaging solutions that protect both your products and the environment.',
      features: [
        'Recyclable materials',
        'Minimal packaging',
        'Biodegradable options',
        'Carbon neutral shipping'
      ],
      price: 'Standard with all orders'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your needs and preferences to understand your requirements.'
    },
    {
      step: '02',
      title: 'Development',
      description: 'Our experts formulate and develop products using premium natural ingredients.'
    },
    {
      step: '03',
      title: 'Testing',
      description: 'Rigorous quality testing ensures safety and effectiveness of all products.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Fast and secure delivery to your location with full tracking support.'
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive services designed to meet all your natural product needs with excellence and care
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group glass dark:glass-dark rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in luxury-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform golden-glow">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-brand-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-secondary" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-secondary">{service.price}</span>
                    <button className="bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 golden-glow">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background dark:from-secondary/5 dark:to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined process designed to deliver exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform golden-glow">
                      <span className="text-2xl font-bold text-black">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand-secondary to-brand-accent opacity-30"></div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-brand-secondary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-secondary/10 to-brand-accent/10 dark:from-brand-secondary/5 dark:to-brand-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your needs and discover how our premium services can benefit you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 golden-glow">
                Get Free Consultation
              </button>
              <button className="border-2 border-brand-secondary text-brand-secondary px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-secondary hover:text-black transition-all duration-300">
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
