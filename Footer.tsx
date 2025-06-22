
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Social media links - الروابط الحقيقية للشركة
  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=100084006969343",
    instagram: "https://www.instagram.com/palmentar_angola/",
    linkedin: "https://www.linkedin.com/company/palmentar/about/"
  };

  return (
    <footer className="bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/57225d93-bcd9-4bfc-894d-e0d8e5f941f5.png" 
                alt="PALMENTAR Logo" 
                className="h-16 w-auto"
              />
              <div className="flex flex-col justify-center">
                <div className="text-xl font-bold text-foreground leading-tight">PALMENTAR</div>
                <div className="text-sm gradient-text font-medium leading-tight">Comercio Geral (SU), LDA</div>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Leading company in manufacturing premium natural soaps, essential oils, and high-quality cleaning products in Angola
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 golden-glow"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 golden-glow"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 golden-glow"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-secondary">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-brand-secondary transition-colors">Home</Link>
              <Link to="/products" className="block text-muted-foreground hover:text-brand-secondary transition-colors">Products</Link>
              <Link to="/about" className="block text-muted-foreground hover:text-brand-secondary transition-colors">About Us</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-brand-secondary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-secondary">Our Products</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Natural Soaps</p>
              <p className="text-muted-foreground">Essential Oils</p>
              <p className="text-muted-foreground">Cleaning Products</p>
              <p className="text-muted-foreground">Personal Care</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-secondary">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+244943047737" 
                className="flex items-center space-x-3 rtl:space-x-reverse hover:text-brand-secondary transition-colors cursor-pointer group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-black" />
                </div>
                <span className="text-muted-foreground group-hover:text-brand-secondary">+244 943 047 737</span>
              </a>
              <a 
                href="mailto:dalva.santos@palmentar.com" 
                className="flex items-center space-x-3 rtl:space-x-reverse hover:text-brand-secondary transition-colors cursor-pointer group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <span className="text-muted-foreground group-hover:text-brand-secondary">dalva.santos@palmentar.com</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/zfqYHmvYvjxxMoAn7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 rtl:space-x-reverse hover:text-brand-secondary transition-colors cursor-pointer group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-black" />
                </div>
                <span className="text-muted-foreground group-hover:text-brand-secondary">Luanda, Angola</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Palmentar Comercio Geral (SU), LDA. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
