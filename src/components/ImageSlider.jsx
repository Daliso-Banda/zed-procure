import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  // Minimum distance to be considered a swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Swipe Logic
  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div 
      className="w-full h-full relative group overflow-hidden rounded-3xl border border-slate-200 shadow-inner select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {images.map((img, index) => (
        <img 
          key={index}
          src={img} 
          alt={`Slide ${index}`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Navigation Arrows - Hidden on touch devices unless hovered */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-20 hidden md:block"
      >
        <ChevronLeft size={24} className="text-procure-navy" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-20 hidden md:block"
      >
        <ChevronRight size={24} className="text-procure-navy" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? 'w-6 bg-procure-copper' : 'w-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;