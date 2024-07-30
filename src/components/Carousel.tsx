import React, { useRef } from 'react';

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      </div>
    </>
  );
};

export default Carousel;