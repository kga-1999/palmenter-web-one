
import React, { useState } from 'react';

const AdventureSection = () => {
  const [selectedSlide, setSelectedSlide] = useState('item-1');

  return (
    <section className="w-full my-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">About Us</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-secondary to-brand-accent mx-auto"></div>
      </div>
      
      <div 
        className="w-full h-[630px] bg-cover bg-no-repeat bg-fixed relative"
        style={{
          backgroundImage: "url('https://awe365.com/wp-content/uploads/2013/07/adventure-sports-hang-gliding-flickrcc-image-by-Steve-Slater.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center h-full">
          {/* Image Slider Section */}
          <div className="lg:col-span-2 flex justify-center items-center">
            <div className="relative w-[500px] h-[300px]">
              {/* Radio inputs for functionality */}
              <input 
                type="radio" 
                name="slider" 
                id="item-1" 
                checked={selectedSlide === 'item-1'} 
                onChange={() => setSelectedSlide('item-1')}
                className="hidden"
              />
              <input 
                type="radio" 
                name="slider" 
                id="item-2" 
                checked={selectedSlide === 'item-2'} 
                onChange={() => setSelectedSlide('item-2')}
                className="hidden"
              />
              <input 
                type="radio" 
                name="slider" 
                id="item-3" 
                checked={selectedSlide === 'item-3'} 
                onChange={() => setSelectedSlide('item-3')}
                className="hidden"
              />
              
              {/* Overlapping Horizontal Cards */}
              <div className="relative w-full h-full">
                <label 
                  htmlFor="item-1"
                  className={`absolute cursor-pointer transition-all duration-700 ease-in-out ${
                    selectedSlide === 'item-1' 
                      ? 'z-30 scale-105 translate-x-0 translate-y-0 rotate-0' 
                      : selectedSlide === 'item-2'
                        ? 'z-10 scale-90 -translate-x-20 translate-y-8 -rotate-12 opacity-70'
                        : 'z-20 scale-95 translate-x-8 translate-y-4 rotate-6 opacity-80'
                  }`}
                  onClick={() => setSelectedSlide('item-1')}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
                    alt="Adventure 1"
                    className="w-80 h-48 object-cover rounded-lg shadow-2xl border-4 border-white/30"
                  />
                </label>
                
                <label 
                  htmlFor="item-2"
                  className={`absolute cursor-pointer transition-all duration-700 ease-in-out ${
                    selectedSlide === 'item-2' 
                      ? 'z-30 scale-105 translate-x-0 translate-y-0 rotate-0' 
                      : selectedSlide === 'item-1'
                        ? 'z-20 scale-95 translate-x-12 translate-y-4 rotate-6 opacity-80'
                        : selectedSlide === 'item-3'
                          ? 'z-10 scale-90 -translate-x-16 translate-y-6 -rotate-8 opacity-70'
                          : 'z-20 scale-95 -translate-x-8 translate-y-2 -rotate-3 opacity-80'
                  }`}
                  onClick={() => setSelectedSlide('item-2')}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop"
                    alt="Adventure 2"
                    className="w-80 h-48 object-cover rounded-lg shadow-2xl border-4 border-white/30"
                  />
                </label>
                
                <label 
                  htmlFor="item-3"
                  className={`absolute cursor-pointer transition-all duration-700 ease-in-out ${
                    selectedSlide === 'item-3' 
                      ? 'z-30 scale-105 translate-x-0 translate-y-0 rotate-0' 
                      : selectedSlide === 'item-2'
                        ? 'z-20 scale-95 translate-x-10 translate-y-3 rotate-4 opacity-80'
                        : 'z-10 scale-90 -translate-x-12 translate-y-5 -rotate-6 opacity-70'
                  }`}
                  onClick={() => setSelectedSlide('item-3')}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=200&fit=crop"
                    alt="Adventure 3"
                    className="w-80 h-48 object-cover rounded-lg shadow-2xl border-4 border-white/30"
                  />
                </label>
              </div>
            </div>
          </div>
          
          {/* Text Content Section */}
          <div className="text-center text-white">
            <div className={`transition-all duration-1000 ${selectedSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-2xl lg:text-3xl font-bold mb-6 font-cairo">
                Find that
              </h1>
              
              <div className="mb-6">
                <img
                  src={
                    selectedSlide === 'item-1' 
                      ? "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop"
                      : selectedSlide === 'item-2'
                        ? "https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&h=150&fit=crop"
                        : "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=150&fit=crop"
                  }
                  alt="Selected Adventure"
                  className="w-48 h-32 object-cover mx-auto rounded-xl shadow-lg border-2 border-white/30"
                />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
                ADVENTURE
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;
