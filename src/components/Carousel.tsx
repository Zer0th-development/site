import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const styles = `
  .hide-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;

const Carousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);``

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div style={{ position: 'relative', width: '100%', backgroundColor: 'black', overflow: 'hidden', padding: '16px' }}>
        <div 
          ref={scrollContainerRef}
          className="hide-scrollbar"
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory',
          }}
        >
          {[...Array(10)].map((_, index) => (
            <div 
              key={index} 
              style={{ 
                flexShrink: 0, 
                width: '320px', 
                height: '320px', 
                backgroundColor: '#a3a3a3', 
                borderRadius: '8px', 
                marginRight: '16px', 
                scrollSnapAlign: 'start' 
              }} 
            />
          ))}
        </div>
        <button
          onClick={() => scroll('left')}
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            padding: '8px',
            cursor: 'pointer'
          }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            padding: '8px',
            cursor: 'pointer'
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
};

export default Carousel;