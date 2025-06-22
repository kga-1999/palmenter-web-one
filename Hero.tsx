
import React from 'react';
import { ArrowDown, Sparkles, Leaf, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,175,55,0.1),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(184,134,11,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-secondary/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-brand-accent/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-brand-secondary/30 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-secondary/20 to-brand-accent/20 px-4 py-2 rounded-full text-brand-secondary font-medium">
              <Sparkles className="w-4 h-4" />
              <span>100% Natural Products</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold gradient-text leading-tight">
              PALMENTAR
              <br />
              <span className="text-4xl lg:text-5xl">Premium Manufacturing</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover the world of natural beauty with our exceptional collection of Juliet, Fresh Day, MediTwist, Soft Silk, SABA, and ZENTA premium products
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 golden-glow">
                <span className="flex items-center justify-center space-x-2">
                  <span>Explore Our Products</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
              
              <button className="border-2 border-brand-secondary text-brand-secondary px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-secondary hover:text-black transition-all duration-300">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-secondary">15K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-secondary">50+</div>
                <div className="text-muted-foreground">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-secondary">7</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Content - Using New Product Images */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative z-10 glass dark:glass-dark rounded-3xl p-8 shadow-2xl luxury-shadow overflow-hidden">
              {/* Main Hero Image - Complete Product Collection */}
              <div className="relative mb-6">
                <img
                  src="/lovable-uploads/393b922c-01a4-488c-885f-82a0b49ab017.png"
                  alt="PALMENTAR Complete Premium Products Collection - Juliet, Soft Silk, SABA, MediTwist, Fresh Day"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-sm font-bold text-brand-secondary">Complete Collection</span>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="relative h-24 bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/10 rounded-xl overflow-hidden">
                    <img
                      src="/lovable-uploads/63d4e015-a26c-45fa-9938-058d99941d83.png"
                      alt="Juliet Elegance Premium Beauty Soap"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground">Juliet Elegance</h3>
                    <p className="text-sm text-muted-foreground">Premium Beauty</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="relative h-24 bg-gradient-to-br from-brand-accent/20 to-brand-accent/10 rounded-xl overflow-hidden">
                    <img
                      src="/lovable-uploads/7e55e838-a2c1-4dfd-a895-4c1d3ad7e6a6.png"
                      alt="Soft Silk Luxury Beauty Soap Collection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground">Soft Silk</h3>
                    <p className="text-sm text-muted-foreground">Luxury Collection</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="relative h-24 bg-gradient-to-br from-brand-secondary/20 to-brand-accent/20 rounded-xl overflow-hidden">
                    <img
                      src="/lovable-uploads/7693c331-d91d-4719-94ed-4e6860053aa8.png"
                      alt="MediTwist Antibacterial Protection Soap"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground">MediTwist</h3>
                    <p className="text-sm text-muted-foreground">99.99% Protection</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="relative h-24 bg-gradient-to-br from-brand-accent/20 to-brand-secondary/20 rounded-xl overflow-hidden">
                    <img
                      src="/lovable-uploads/21e9d7fc-ce62-49b3-a804-ee6f5fd58717.png"
                      alt="ZENTA & SABA Professional Cleaning Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground">ZENTA & SABA</h3>
                    <p className="text-sm text-muted-foreground">Professional Clean</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full opacity-20 animate-pulse golden-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-full opacity-20 animate-pulse delay-1000 golden-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
