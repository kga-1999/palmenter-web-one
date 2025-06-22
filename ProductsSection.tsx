
import React from 'react';
import { Sparkles, Droplets, Leaf, Star, Shield, Award } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Juliet Elegance Collection',
      category: 'Beauty Soaps',
      price: '$25',
      image: '/lovable-uploads/393b922c-01a4-488c-885f-82a0b49ab017.png',
      description: 'Premium beauty soap collection with natural ingredients for radiant skin',
      rating: 4.9,
      features: ['Natural Ingredients', 'Skin Brightening', 'Long-lasting Fragrance', 'Multiple Variants']
    },
    {
      id: 2,
      name: 'MADINA Premium Range',
      category: 'Premium Care',
      price: '$35',
      image: '/lovable-uploads/6c172300-8134-4b34-aa91-cd3cdf293cce.png',
      description: 'Complete MADINA collection with multiple variants for comprehensive care',
      rating: 4.8,
      features: ['Complete Collection', 'Multiple Variants', 'Premium Quality', 'Value Pack']
    },
    {
      id: 3,
      name: 'Fresh Day Daily Care',
      category: 'Personal Care',
      price: '$20',
      image: '/lovable-uploads/ea1fbeb2-299b-4f82-957a-e058b1026ea6.png',
      description: 'Daily freshness soap for active lifestyle and all-day confidence',
      rating: 4.8,
      features: ['Daily Freshness', 'Active Protection', 'Refreshing Scent', 'Long-lasting']
    },
    {
      id: 4,
      name: 'MediTwist Antibacterial',
      category: 'Health Care',
      price: '$30',
      image: '/lovable-uploads/7693c331-d91d-4719-94ed-4e6860053aa8.png',
      description: 'Advanced antibacterial soap that removes 99.99% of germs and bacteria',
      rating: 4.9,
      features: ['99.99% Germ Protection', 'Antibacterial Formula', 'Safe for Daily Use', 'Herbal Protection']
    },
    {
      id: 5,
      name: 'SABA Professional Range',
      category: 'Cleaning',
      price: '$18',
      image: '/lovable-uploads/583e4f51-b60f-4b6b-835e-bda9dea81400.png',
      description: 'Professional cleaning solutions for home and commercial use',
      rating: 4.7,
      features: ['Professional Grade', 'Multi-Purpose', 'Power Formula', 'Eco-Friendly']
    },
    {
      id: 6,
      name: 'Complete Product Range',
      category: 'Premium Collection',
      price: '$85',
      image: '/lovable-uploads/4b6bdb08-dd66-4d1f-b1e7-c8008a1affc7.png',
      description: 'Ultimate collection featuring all PALMENTAR premium products',
      rating: 4.9,
      features: ['Complete Range', 'All Brands', 'Premium Packaging', 'Best Value']
    }
  ];

  const categories = [
    { name: 'Beauty Soaps', icon: Sparkles, count: '15+ Products', color: 'emerald' },
    { name: 'Personal Care', icon: Droplets, count: '20+ Products', color: 'teal' },
    { name: 'Cleaning Products', icon: Leaf, count: '12+ Products', color: 'green' },
    { name: 'Professional Care', icon: Shield, count: '8+ Products', color: 'blue' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-brand-secondary/20 px-4 py-2 rounded-full text-brand-secondary font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Our Premium Products</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Discover PALMENTAR Quality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Juliet Elegance to MADINA Collection - we offer premium products for every need with exceptional quality and care
          </p>
        </div>

        {/* Featured Banner */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass dark:glass-dark rounded-2xl p-8 luxury-shadow overflow-hidden relative">
            <img
              src="/lovable-uploads/c0d54b07-5352-470c-8d9e-d34dfbf06165.png"
              alt="SABA Multi-Purpose Solutions"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <h3 className="text-2xl font-bold text-card-foreground mb-4">SABA Multi-Purpose Solutions</h3>
            <p className="text-muted-foreground mb-4">Advanced cleaning technology with eco-friendly formula for professional results</p>
            <button className="bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 golden-glow">
              Learn More
            </button>
          </div>

          <div className="glass dark:glass-dark rounded-2xl p-8 luxury-shadow overflow-hidden relative">
            <img
              src="/lovable-uploads/15c3de0b-1791-42fd-a3c6-d63dc3e69fc4.png"
              alt="Advanced SABA Technology"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Advanced Technology</h3>
            <p className="text-muted-foreground mb-4">Powerful cleaning with gentle care for fabrics and colors protection</p>
            <button className="bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 golden-glow">
              Explore Features
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group glass dark:glass-dark rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in luxury-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform golden-glow">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{category.count}</p>
                <button className="text-brand-secondary font-semibold hover:text-brand-accent transition-colors flex items-center space-x-2 text-sm">
                  <span>Explore More</span>
                  <span>→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group glass dark:glass-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in luxury-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-brand-secondary">{product.category}</span>
                </div>
                <div className="absolute top-4 left-4 flex items-center space-x-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-brand-secondary fill-current" />
                  <span className="text-sm font-medium text-card-foreground">{product.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-brand-secondary/20 text-brand-secondary text-xs px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-brand-secondary">{product.price}</span>
                  <button className="bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 golden-glow">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 golden-glow">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
