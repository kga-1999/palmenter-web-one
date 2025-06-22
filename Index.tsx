
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import WorkingHours from '../components/WorkingHours';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Testimonials from '../components/Testimonials';
import AdventureSection from '../components/AdventureSection';
import { Award, Users, Shield, Truck, Heart, Star, CheckCircle, Globe } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: CheckCircle,
      title: '100% Natural',
      description: 'All our products are made from pure natural materials without harmful chemical additives'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We maintain the highest standards of quality and safety at every stage of production'
    },
    {
      icon: Shield,
      title: 'Safe to Use',
      description: 'Family and child-safe products tested by specialized experts'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service across all regions'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our customer support team is available to assist you anytime'
    },
    {
      icon: Globe,
      title: 'Eco-Friendly',
      description: 'We contribute to environmental protection through biodegradable products'
    }
  ];

  const stats = [
    { number: '15K+', label: 'Satisfied Clients', icon: Users },
    { number: '50+', label: 'Premium Products', icon: Heart },
    { number: '7+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Natural Guarantee', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <Hero />
      <ProductsSection />
      <WorkingHours />
      
      {/* Adventure Section */}
      <AdventureSection />
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,175,55,0.1),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(184,134,11,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 golden-glow">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-brand-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose Palmentar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer more than just products – we provide a complete experience of quality, trust, and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group glass dark:glass-dark rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-fade-in luxury-shadow bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 golden-glow">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              Experience PALMENTAR Premium Quality Today
            </h2>
            <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
              Join thousands of satisfied customers and discover the difference with our Juliet, Fresh Day, MediTwist, and ZENTA collections
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 golden-glow">
                <span className="flex items-center justify-center space-x-2">
                  <span>Explore Products</span>
                  <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform"></div>
                </span>
              </button>
              <button className="border-2 border-brand-secondary text-brand-secondary px-10 py-4 rounded-full font-semibold text-lg hover:bg-brand-secondary hover:text-black transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
