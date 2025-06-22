
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent text-black rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 golden-glow animate-fade-in group"
          aria-label="العودة للأعلى"
        >
          <ArrowUp className="w-6 h-6 mx-auto group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
