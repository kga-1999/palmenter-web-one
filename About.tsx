import React from 'react';
import { Award, Users, Leaf, Heart, Target, Eye, Clock, Shield, Truck, Star, CheckCircle, TreePine, Droplets, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Nature First',
      description: 'We believe in the power of nature and use the finest natural materials in our products'
    },
    {
      icon: Award,
      title: 'High Quality',
      description: 'We maintain the highest quality standards at every stage of production'
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Customer satisfaction is our priority and main goal in everything we do'
    },
    {
      icon: Users,
      title: 'Social Responsibility',
      description: 'We contribute to building a healthy society and preserve the environment for future generations'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Ahmad',
      role: 'Chief Executive Officer & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'PhD in Chemistry with 20+ years experience in natural product development and sustainable manufacturing'
    },
    {
      name: 'Omar Hassan',
      role: 'Head of Research & Development',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Master\'s in Organic Chemistry, specializing in essential oil extraction and natural ingredient formulation'
    },
    {
      name: 'Layla Mohamed',
      role: 'Quality Control Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
      description: 'Certified quality assurance specialist with expertise in organic certification and international standards'
    },
    {
      name: 'Khalid Al-Rashid',
      role: 'Production Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: '15 years managing eco-friendly manufacturing processes and sustainable production lines'
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: 'ISO 9001 Certified',
      description: 'International quality management system certification'
    },
    {
      icon: Leaf,
      title: 'Organic Certified',
      description: 'Certified organic ingredients and processes'
    },
    {
      icon: Award,
      title: 'FDA Approved',
      description: 'All products meet FDA safety standards'
    },
    {
      icon: CheckCircle,
      title: 'Cruelty-Free',
      description: 'Never tested on animals, certified cruelty-free'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to create premium natural products',
      icon: Sparkles
    },
    {
      year: '2020',
      title: 'First Product Line',
      description: 'Launched our signature natural soap collection',
      icon: Droplets
    },
    {
      year: '2021',
      title: 'Organic Certification',
      description: 'Achieved organic certification for all our products',
      icon: Leaf
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Expanded to serve customers across the Middle East',
      icon: Target
    },
    {
      year: '2023',
      title: 'Innovation Center',
      description: 'Opened our research and development facility',
      icon: Award
    },
    {
      year: '2024',
      title: 'Sustainability Award',
      description: 'Recognized for environmental leadership in manufacturing',
      icon: TreePine
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: '24-48 hours delivery within the city'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee or money back'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50'
    },
    {
      icon: Star,
      title: 'Premium Support',
      description: '24/7 customer support for all inquiries'
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Palmentar
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our journey began with a belief in the power of nature and its positive impact on human life. We strive to provide high-quality natural products that maintain our customers' health while respecting the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Palmentar was established in 2019 with a clear vision: to provide safe and effective natural products for personal care and home use. We started as a small team of nature enthusiasts, and today we pride ourselves on being one of the leading companies in this field.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that nature contains everything we need to care for ourselves and our homes. Therefore, we carefully select the finest natural raw materials and process them with the latest technologies to preserve their natural benefits.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-card rounded-lg shadow-md border border-border">
                  <div className="text-3xl font-bold text-brand-secondary mb-2">1000+</div>
                  <div className="text-muted-foreground">Satisfied Customers</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-md border border-border">
                  <div className="text-3xl font-bold text-brand-secondary mb-2">75+</div>
                  <div className="text-muted-foreground">Natural Products</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-md border border-border">
                  <div className="text-3xl font-bold text-brand-secondary mb-2">5</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-md border border-border">
                  <div className="text-3xl font-bold text-brand-secondary mb-2">100%</div>
                  <div className="text-muted-foreground">Natural</div>
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative animate-fade-in delay-300">
              <div className="bg-card rounded-3xl p-8 shadow-2xl luxury-shadow">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                  alt="Palmentar Factory"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Our Modern Factory</h3>
                  <p className="text-muted-foreground">
                    Equipped with the latest technologies to ensure the highest standards of quality and cleanliness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the milestones that shaped our company's growth
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-secondary to-brand-accent rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.year}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                        <div className="text-2xl font-bold text-brand-secondary mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-card-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center shadow-lg golden-glow">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/20 dark:bg-muted/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-lg animate-fade-in luxury-shadow border border-border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center mr-4 golden-glow">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide high-quality natural products that contribute to improving our customers' quality of life while preserving the environment. We believe that nature is the best source for care and cleaning, and we work to develop safe and effective products that meet the needs of the modern family.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-lg animate-fade-in delay-200 luxury-shadow border border-border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center mr-4 golden-glow">
                  <Eye className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading company in the region in the field of natural products, and to contribute to spreading the culture of sustainability and natural care. We aspire to be the first choice for families looking for safe and environmentally friendly products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Awards</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is recognized by leading industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="bg-card rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in luxury-shadow border border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 golden-glow">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-3">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20 dark:bg-muted/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The values we believe in and that guide our work every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 golden-glow">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of choosing Palmentar for your natural product needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-card to-card/80 rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in luxury-shadow border border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 golden-glow">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/20 dark:bg-muted/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experts behind our exceptional products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in luxury-shadow border border-border"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/20 to-brand-accent/20 rounded-full group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{member.name}</h3>
                <p className="text-brand-secondary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
