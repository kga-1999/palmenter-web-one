
import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Star, ShoppingCart, Heart, Eye, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../components/ui/pagination';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categories = ['All', 'Natural Soaps', 'Essential Oils', 'Cleaning Products', 'Personal Care', 'Hair Care'];
  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  const products = [
    {
      id: 1,
      name: 'Rose Natural Soap',
      category: 'Natural Soaps',
      price: 25,
      originalPrice: 30,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      description: 'Premium natural rose soap with moisturizing properties, perfect for sensitive skin with a delicate fragrance',
      rating: 4.9,
      reviews: 124,
      inStock: true,
      isNew: true,
      features: ['100% Natural', 'Sensitive Skin', 'Moisturizing', 'Rose Extract']
    },
    {
      id: 2,
      name: 'Lavender Essential Oil',
      category: 'Essential Oils',
      price: 45,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      description: 'Pure lavender essential oil for relaxation, skin care, and aromatherapy with calming properties',
      rating: 4.8,
      reviews: 89,
      inStock: true,
      features: ['Pure Oil', 'Relaxation', 'Aromatherapy', 'Anti-inflammatory']
    },
    {
      id: 3,
      name: 'Eco-Friendly Dish Soap',
      category: 'Cleaning Products',
      price: 20,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop',
      description: 'Powerful eco-friendly dish soap that cuts through grease while being gentle on hands and environment',
      rating: 4.7,
      reviews: 156,
      inStock: true,
      features: ['Eco-Friendly', 'Powerful Cleaning', 'Hand Safe', 'Biodegradable']
    },
    {
      id: 4,
      name: 'Argan Hair Treatment',
      category: 'Hair Care',
      price: 55,
      originalPrice: 65,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      description: 'Moroccan argan oil hair treatment for deep nourishment and shine restoration',
      rating: 4.9,
      reviews: 78,
      inStock: false,
      features: ['Moroccan Argan', 'Deep Nourishment', 'Shine Restoration', 'All Hair Types']
    },
    {
      id: 5,
      name: 'Vitamin C Face Serum',
      category: 'Personal Care',
      price: 40,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      description: 'Brightening vitamin C serum for radiant skin with antioxidant protection',
      rating: 4.6,
      reviews: 143,
      inStock: true,
      isNew: true,
      features: ['Vitamin C', 'Brightening', 'Antioxidant', 'All Skin Types']
    },
    {
      id: 6,
      name: 'Charcoal Detox Soap',
      category: 'Natural Soaps',
      price: 28,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      description: 'Activated charcoal soap for deep cleansing and detoxification of pores',
      rating: 4.5,
      reviews: 92,
      inStock: true,
      features: ['Activated Charcoal', 'Deep Cleansing', 'Detox', 'Oily Skin']
    }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, searchTerm, selectedCategory, sortBy, priceRange]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">
              Premium Natural Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our complete collection of carefully crafted natural products for your health and wellness
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="glass dark:glass-dark rounded-2xl p-6 sticky top-24 luxury-shadow">
              <h3 className="text-lg font-bold text-card-foreground mb-6">Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-muted-foreground mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors bg-background text-foreground"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-muted-foreground mb-2">Categories</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-brand-secondary to-brand-accent text-black'
                          : 'hover:bg-muted text-card-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 glass dark:glass-dark rounded-2xl p-4">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-muted-foreground">
                  Showing {currentProducts.length} of {filteredProducts.length} products
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-brand-secondary"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* View Mode */}
                <div className="flex border border-input rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-brand-secondary text-black' : 'bg-background text-foreground'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-brand-secondary text-black' : 'bg-background text-foreground'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-8 mb-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {currentProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in luxury-shadow border border-border ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                    <div className={`relative overflow-hidden bg-gradient-to-br from-brand-secondary/10 to-brand-accent/10 ${
                      viewMode === 'list' ? 'h-full' : 'h-64'
                    }`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            New
                          </span>
                        )}
                        {product.originalPrice && (
                          <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Sale
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Out of Stock
                          </span>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                          <Eye className="w-5 h-5 text-gray-700" />
                        </button>
                        <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg">
                          <Heart className="w-5 h-5 text-gray-700" />
                        </button>
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-gray-800">{product.rating}</span>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-brand-secondary transition-colors duration-300">
                        {product.name}
                      </h3>
                      <span className="bg-brand-secondary/20 text-brand-secondary text-xs px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-gradient-to-r from-brand-secondary/20 to-brand-accent/20 text-brand-secondary text-xs px-3 py-1 rounded-full border border-brand-secondary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-brand-secondary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      
                      <button
                        disabled={!product.inStock}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                          product.inStock
                            ? 'bg-gradient-to-r from-brand-secondary to-brand-accent text-black hover:shadow-xl hover:scale-105 golden-glow'
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

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === i + 1}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(i + 1);
                        }}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No products found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
