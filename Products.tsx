
import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Beauty Soaps', 'Personal Care', 'Health Care', 'Cleaning', 'Premium', 'MADINA Collection'];

  const products = [
    {
      id: 1,
      name: 'Juliet Elegance Beauty Soap',
      category: 'Beauty Soaps',
      price: '$25',
      originalPrice: '$30',
      image: '/lovable-uploads/63d4e015-a26c-45fa-9938-058d99941d83.png',
      description: 'Premium beauty soap with natural ingredients for radiant and healthy skin',
      rating: 4.9,
      reviews: 324,
      inStock: true,
      features: ['Natural Ingredients', 'Skin Brightening', 'Long-lasting Fragrance', 'For All Skin Types']
    },
    {
      id: 2,
      name: 'Fresh Day Daily Care',
      category: 'Personal Care',
      price: '$20',
      image: '/lovable-uploads/ea1fbeb2-299b-4f82-957a-e058b1026ea6.png',
      description: 'Daily freshness soap for active lifestyle and all-day confidence',
      rating: 4.8,
      reviews: 256,
      inStock: true,
      features: ['Daily Freshness', 'Active Protection', 'Refreshing Scent', 'Long-lasting']
    },
    {
      id: 3,
      name: 'MediTwist Antibacterial Soap',
      category: 'Health Care',
      price: '$30',
      image: '/lovable-uploads/7693c331-d91d-4719-94ed-4e6860053aa8.png',
      description: 'Advanced antibacterial soap that removes 99.99% of germs and bacteria',
      rating: 4.9,
      reviews: 189,
      inStock: true,
      features: ['99.99% Germ Protection', 'Antibacterial Formula', 'Safe for Daily Use', 'Herbal Protection']
    },
    {
      id: 4,
      name: 'Soft Silk Luxury Soap',
      category: 'Premium',
      price: '$35',
      originalPrice: '$40',
      image: '/lovable-uploads/7e55e838-a2c1-4dfd-a895-4c1d3ad7e6a6.png',
      description: 'Luxury soap with silk proteins for ultimate skin softness and care',
      rating: 4.8,
      reviews: 145,
      inStock: true,
      features: ['Silk Proteins', 'Luxury Formula', 'Ultra Soft', 'Premium Care']
    },
    {
      id: 5,
      name: 'SABA Power Detergent',
      category: 'Cleaning',
      price: '$22',
      image: '/lovable-uploads/583e4f51-b60f-4b6b-835e-bda9dea81400.png',
      description: 'Powerful detergent for deep cleaning and tough stain removal with advanced formula',
      rating: 4.8,
      reviews: 167,
      inStock: true,
      features: ['Deep Action Formula', 'Stain Removal', 'Color Protection', 'Professional Grade']
    },
    {
      id: 6,
      name: 'MADINA Premium Collection',
      category: 'MADINA Collection',
      price: '$45',
      image: '/lovable-uploads/6c172300-8134-4b34-aa91-cd3cdf293cce.png',
      description: 'Complete MADINA collection with multiple variants for comprehensive care',
      rating: 4.9,
      reviews: 89,
      inStock: true,
      features: ['Complete Collection', 'Multiple Variants', 'Premium Quality', 'Value Pack']
    },
    {
      id: 7,
      name: 'Complete PALMENTAR Collection',
      category: 'Premium',
      price: '$85',
      image: '/lovable-uploads/4b6bdb08-dd66-4d1f-b1e7-c8008a1affc7.png',
      description: 'Ultimate collection featuring Fresh Day, Juliet, and MediTwist products',
      rating: 4.9,
      reviews: 203,
      inStock: true,
      features: ['Complete Range', 'All Brands', 'Premium Packaging', 'Best Value']
    },
    {
      id: 8,
      name: 'SABA Multi-Purpose Soap',
      category: 'Cleaning',
      price: '$18',
      image: '/lovable-uploads/c0d54b07-5352-470c-8d9e-d34dfbf06165.png',
      description: 'Multi-purpose soap with advanced cleaning power for various applications',
      rating: 4.7,
      reviews: 298,
      inStock: true,
      features: ['Multi-Purpose Use', 'Effective Cleaning', 'Eco-Friendly', 'Value Pack']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
              PALMENTAR Premium Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection including Juliet, Fresh Day, MediTwist, SABA, MADINA and more
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors bg-background text-foreground"
                />
              </div>

              {/* Filter Button */}
              <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-input rounded-lg hover:bg-muted transition-colors">
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-brand-secondary to-brand-accent text-black shadow-lg golden-glow'
                      : 'bg-card text-card-foreground border border-border hover:bg-muted hover:border-brand-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-8 bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass dark:glass-dark rounded-2xl p-4 text-center luxury-shadow">
              <img
                src="/lovable-uploads/15c3de0b-1791-42fd-a3c6-d63dc3e69fc4.png"
                alt="SABA Advanced Features"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-card-foreground mb-2">Advanced SABA Technology</h3>
              <p className="text-sm text-muted-foreground">Professional cleaning power with eco-friendly formula</p>
            </div>
            
            <div className="glass dark:glass-dark rounded-2xl p-4 text-center luxury-shadow">
              <img
                src="/lovable-uploads/ec4d1eba-24d3-4a45-9371-fa96f3686753.png"
                alt="Effective Cleaning Solutions"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-card-foreground mb-2">Effective & Long-lasting</h3>
              <p className="text-sm text-muted-foreground">The secret to efficient and lasting cleanliness</p>
            </div>

            <div className="glass dark:glass-dark rounded-2xl p-4 text-center luxury-shadow">
              <img
                src="/lovable-uploads/393b922c-01a4-488c-885f-82a0b49ab017.png"
                alt="Complete Product Range"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-card-foreground mb-2">Complete Collection</h3>
              <p className="text-sm text-muted-foreground">Full range of premium PALMENTAR products</p>
            </div>

            <div className="glass dark:glass-dark rounded-2xl p-4 text-center luxury-shadow">
              <img
                src="/lovable-uploads/21e9d7fc-ce62-49b3-a804-ee6f5fd58717.png"
                alt="Professional Quality"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-card-foreground mb-2">Professional Quality</h3>
              <p className="text-sm text-muted-foreground">Trusted by professionals worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} premium products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in luxury-shadow border border-border relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-brand-secondary/10 to-brand-accent/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 filter group-hover:brightness-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                        <Eye className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg">
                        <Heart className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-brand-secondary shadow-lg border border-white/20">
                      {product.category}
                    </span>
                    {product.originalPrice && (
                      <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                        Sale
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="bg-gray-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-white/20">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-bold text-foreground">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-brand-secondary transition-colors duration-300">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 2).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gradient-to-r from-brand-secondary/20 to-brand-accent/20 text-brand-secondary text-xs px-3 py-1 rounded-full border border-brand-secondary/20"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-xs text-muted-foreground px-2 py-1 hover:text-brand-secondary transition-colors duration-300 cursor-pointer">
                        +{product.features.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-brand-secondary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    
                    <button
                      disabled={!product.inStock}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 transform ${
                        product.inStock
                          ? 'bg-gradient-to-r from-brand-secondary to-brand-accent text-black hover:shadow-xl hover:scale-105 golden-glow hover:-translate-y-0.5'
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No products found matching your search</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
