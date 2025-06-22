
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-background/98 backdrop-blur-xl shadow-2xl luxury-shadow border-b border-border/50' 
        : 'bg-background/85 backdrop-blur-lg'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/57225d93-bcd9-4bfc-894d-e0d8e5f941f5.png" 
              alt="PALMENTAR Logo" 
              className="h-16 w-auto"
            />
            <div className="hidden md:flex flex-col justify-center">
              <div className="text-xl font-bold text-foreground leading-tight">PALMENTAR</div>
              <div className="text-sm gradient-text font-medium leading-tight">Comercio Geral (SU), LDA</div>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-3 text-lg font-semibold transition-all duration-500 group hover:text-brand-secondary transform hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-brand-secondary'
                    : 'text-foreground'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/10 via-brand-accent/20 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl scale-0 group-hover:scale-100 transform origin-center"></div>
                
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full animate-scale-in shadow-lg"></div>
                )}
                
                {/* Hover underline */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/20 to-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm"></div>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu - Enhanced */}
          <div className="flex items-center space-x-6">
            <div className="transform hover:scale-110 transition-all duration-300">
              <ThemeToggle />
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 border border-border/50 hover:border-brand-secondary/50 group backdrop-blur-sm hover:shadow-lg"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="w-7 h-7 text-brand-secondary transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-7 h-7 group-hover:text-brand-secondary transition-colors duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 glass dark:glass-dark rounded-2xl mt-4 animate-fade-in border border-border/50 shadow-2xl backdrop-blur-xl">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-brand-secondary/15 hover:text-brand-secondary rounded-xl mx-4 mb-2 group relative overflow-hidden ${
                  location.pathname === item.path
                    ? 'text-brand-secondary bg-brand-secondary/10 border border-brand-secondary/30'
                    : 'text-foreground hover:shadow-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Slide effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                
                {/* Active indicator for mobile */}
                {location.pathname === item.path && (
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-brand-secondary to-brand-accent rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
