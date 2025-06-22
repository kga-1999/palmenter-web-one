
import React, { useState } from 'react';
import { Calendar, User, Tag, Search, ArrowRight, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Natural Care', 'Health Tips', 'DIY Recipes', 'Wellness', 'Ingredients'];

  const blogPosts = [
    {
      id: 1,
      title: 'Benefits of Natural Soaps for Sensitive Skin',
      excerpt: 'Discover why natural soaps are better for sensitive skin and how they can help maintain healthy skin barrier...',
      content: 'Natural soaps contain gentle ingredients that nourish and protect sensitive skin without harsh chemicals.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      author: 'Dr. Sarah Ahmed',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Natural Care',
      tags: ['Sensitive Skin', 'Natural Ingredients', 'Skincare']
    },
    {
      id: 2,
      title: 'Essential Oils Guide: Lavender Benefits',
      excerpt: 'Everything you need to know about lavender essential oil and its amazing therapeutic properties...',
      content: 'Lavender oil is one of the most versatile essential oils with proven benefits for relaxation and skin health.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop',
      author: 'Maria Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Wellness',
      tags: ['Essential Oils', 'Aromatherapy', 'Relaxation']
    },
    {
      id: 3,
      title: 'DIY Natural Cleaning Products for Your Home',
      excerpt: 'Learn how to make effective, eco-friendly cleaning products using simple natural ingredients...',
      content: 'Create safe and effective cleaning solutions at home using ingredients like vinegar, baking soda, and essential oils.',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop',
      author: 'Ahmed Hassan',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'DIY Recipes',
      tags: ['DIY', 'Eco-Friendly', 'Home Care']
    },
    {
      id: 4,
      title: 'The Science Behind Natural Skincare',
      excerpt: 'Understanding how natural ingredients work to improve skin health and appearance...',
      content: 'Natural skincare ingredients have been scientifically proven to provide effective results without side effects.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      author: 'Dr. Fatima Al-Zahra',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Health Tips',
      tags: ['Science', 'Skincare', 'Natural Ingredients']
    },
    {
      id: 5,
      title: 'Top 10 Natural Ingredients for Hair Care',
      excerpt: 'Discover the most effective natural ingredients for healthy, beautiful hair...',
      content: 'From argan oil to aloe vera, learn about the best natural ingredients for hair nourishment and growth.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop',
      author: 'Layla Mahmoud',
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'Natural Care',
      tags: ['Hair Care', 'Natural Ingredients', 'Beauty']
    },
    {
      id: 6,
      title: 'Understanding Natural Preservatives',
      excerpt: 'Learn about natural preservatives and how they keep products safe without harmful chemicals...',
      content: 'Natural preservatives like vitamin E and rosemary extract help maintain product quality safely.',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop',
      author: 'Omar Abdullah',
      date: '2023-12-15',
      readTime: '4 min read',
      category: 'Ingredients',
      tags: ['Preservatives', 'Natural', 'Product Safety']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">
              Natural Care Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover expert tips, natural recipes, and wellness insights for a healthier lifestyle
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Article</h2>
          <div className="glass dark:glass-dark rounded-3xl overflow-hidden luxury-shadow group hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-4 py-2 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4 group-hover:text-brand-secondary transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-brand-secondary/20 text-brand-secondary px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center space-x-2 text-brand-secondary font-semibold hover:text-brand-accent transition-colors group">
                  <span>Rea More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors bg-background text-foreground"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
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

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <article
                  key={post.id}
                  className="group glass dark:glass-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in luxury-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-brand-secondary">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-brand-secondary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-brand-secondary/20 text-brand-secondary px-2 py-1 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="flex items-center space-x-2 text-brand-secondary font-semibold hover:text-brand-accent transition-colors group">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No articles found matching your search</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Recent Posts */}
              <div className="glass dark:glass-dark rounded-2xl p-6 luxury-shadow">
                <h3 className="text-lg font-bold text-card-foreground mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                      <div className="flex space-x-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-card-foreground group-hover:text-brand-secondary transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {new Date(post.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="glass dark:glass-dark rounded-2xl p-6 luxury-shadow">
                <h3 className="text-lg font-bold text-card-foreground mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors text-muted-foreground"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="glass dark:glass-dark rounded-2xl p-6 luxury-shadow bg-gradient-to-br from-brand-secondary/10 to-brand-accent/10">
                <h3 className="text-lg font-bold text-card-foreground mb-4">Subscribe to Newsletter</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get the latest natural care tips and wellness insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors bg-background text-foreground"
                  />
                  <button className="w-full bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 golden-glow">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
