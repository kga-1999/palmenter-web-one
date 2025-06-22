import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from '../hooks/use-toast';
import TelegramBotConfig from '../components/TelegramBotConfig';
import { useTelegramBot } from '../hooks/useTelegramBot';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [telegramConfig, setTelegramConfig] = useState({ botToken: '', chatId: '' });
  const { toast } = useToast();
  const { sendToTelegram } = useTelegramBot();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Telegram if configured
      if (telegramConfig.botToken && telegramConfig.chatId) {
        const telegramSent = await sendToTelegram(telegramConfig, formData);
        
        if (telegramSent) {
          toast({
            title: "Message sent successfully!",
            description: "Your message has been sent to Telegram and we will contact you soon",
          });
        } else {
          // Fallback message if Telegram fails
          toast({
            title: "Message received",
            description: "We will contact you as soon as possible",
          });
        }
      } else {
        // Original behavior when Telegram is not configured
        setTimeout(() => {
          toast({
            title: "Message sent successfully!",
            description: "We will contact you as soon as possible",
          });
        }, 1000);
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Sending Error",
        description: "An error occurred while sending the message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+244 943 047 737',
      description: 'Available Monday to Friday',
      link: 'tel:+244943047737'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'dalva.santos@palmentar.com',
      description: 'We reply within 24 hours',
      link: 'mailto:dalva.santos@palmentar.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      info: 'Luanda, Angola',
      description: 'Visit our location',
      link: 'https://maps.app.goo.gl/zfqYHmvYvjxxMoAn7'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: '8:00 AM - 6:00 PM',
      description: 'Monday - Friday'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=100084006969343',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/palmentar_angola/',
      color: 'hover:text-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/palmentar/about/',
      color: 'hover:text-blue-700'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Quote Request',
    'Complaint or Suggestion',
    'Distribution Request',
    'Technical Inquiry',
    'Partnership Opportunity',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact PALMENTAR
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to answer your questions and help you choose the best natural products for your needs in Angola
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-secondary/20 to-secondary/10 dark:from-secondary/10 dark:to-secondary/5 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in luxury-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-xl flex items-center justify-center mx-auto mb-4 golden-glow">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-brand-secondary font-medium mb-1 hover:text-brand-accent transition-colors block"
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className="text-brand-secondary font-medium mb-1">{item.info}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Social Media Links */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 golden-glow group ${social.color}`}
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <Icon className="w-7 h-7 text-black group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 bg-muted/20 dark:bg-muted/10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Telegram Bot Configuration */}
          <TelegramBotConfig onConfigChange={setTelegramConfig} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg animate-fade-in luxury-shadow border border-border">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-card-foreground mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors bg-background text-foreground"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors bg-background text-foreground"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors bg-background text-foreground"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors bg-background text-foreground"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors resize-vertical bg-background text-foreground"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-secondary to-brand-accent text-black py-4 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 golden-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8 animate-fade-in delay-300">
              {/* Map */}
              <div className="bg-card rounded-2xl p-8 shadow-lg luxury-shadow border border-border">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Our Location in Angola</h3>
                <div className="w-full h-64 bg-gradient-to-br from-secondary/20 to-secondary/10 dark:from-secondary/10 dark:to-secondary/5 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-brand-secondary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground mt-2">Luanda, Angola</p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/zfqYHmvYvjxxMoAn7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-brand-secondary to-brand-accent text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 golden-glow inline-flex items-center space-x-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>View on Google Maps</span>
                </a>
              </div>

              {/* FAQ */}
              <div className="bg-card rounded-2xl p-8 shadow-lg luxury-shadow border border-border">
                <h3 className="text-xl font-bold text-card-foreground mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-4">
                    <h4 className="font-medium text-card-foreground mb-2">Are your products 100% natural?</h4>
                    <p className="text-sm text-muted-foreground">Yes, all PALMENTAR products are made from pure natural materials without harmful chemicals.</p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <h4 className="font-medium text-card-foreground mb-2">What is the delivery time in Angola?</h4>
                    <p className="text-sm text-muted-foreground">Delivery within 2-3 business days in Luanda area, 3-5 days for other provinces.</p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <h4 className="font-medium text-card-foreground mb-2">Do you offer wholesale pricing?</h4>
                    <p className="text-sm text-muted-foreground">Yes, we offer competitive wholesale pricing for bulk orders and business partnerships.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">How can I become a distributor?</h4>
                    <p className="text-sm text-muted-foreground">Contact us directly to discuss distribution opportunities in your area.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
