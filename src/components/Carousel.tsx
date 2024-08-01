import React, { useRef, useEffect, useState } from 'react';
import one from '../assets/one.png';
import two from '../assets/two.png';

const styles = `
  .hide-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;

interface CarouselProps {
  autoScrollSpeed?: number; // Speed in pixels per second
}

const Carousel: React.FC<CarouselProps> = ({ autoScrollSpeed = 50 }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let lastTimestamp: number;

    const scroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      if (isScrolling) {
        scrollContainer.scrollLeft += (autoScrollSpeed / 1000) * elapsed;
        
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth * 2) / 3) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        }
      }

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => setIsScrolling(false);
    const handleMouseLeave = () => setIsScrolling(true);

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [autoScrollSpeed, isScrolling]);

  const renderItems = () => {
    const items = [
      <div key="item1" style={{ flexShrink: 0, width: '320px', height: '320px', backgroundColor: '#000000', borderRadius: '8px', marginRight: '16px', scrollSnapAlign: 'start', overflow: 'hidden' }}>
        <img src={one} alt="First image" style={{ height: '100%',  objectFit: 'cover' }} />
      </div>,
      <div key="item2" style={{ flexShrink: 0, width: '320px', height: '320px', backgroundColor: '#000000', borderRadius: '8px', marginRight: '16px', scrollSnapAlign: 'start', overflow: 'hidden' }}>
        <img src={two} alt="Second image" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
      </div>,
      <div key="item3" style={{ flexShrink: 0, width: '320px', height: '320px', backgroundColor: '#a3a3a3', borderRadius: '8px', marginRight: '16px', scrollSnapAlign: 'start' }} />,
      <div key="item4" style={{ flexShrink: 0, width: '320px', height: '320px', backgroundColor: '#a3a3a3', borderRadius: '8px', marginRight: '16px', scrollSnapAlign: 'start' }} />,
      <div key="item5" style={{ flexShrink: 0, width: '320px', height: '320px', backgroundColor: '#a3a3a3', borderRadius: '8px', marginRight: '16px', scrollSnapAlign: 'start' }} />,
      <div key="item5" style={{ flexShrink: 0, width: '320px', height: '320px', backgroundColor: '#a3a3a3', borderRadius: '8px', marginRight: '16px', scrollSnapAlign: 'start' }} />,
    ];

    return [...items, ...items, ...items];
  };

  return (
    <>
      <style>{styles}</style>
      <div style={{ position: 'relative', width: '100%', backgroundColor: 'black', overflow: 'hidden' }}>
        <div 
          ref={scrollContainerRef}
          className="hide-scrollbar"
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory',
            padding: '16px',
          }}
        >
          {renderItems()}
        </div>
      </div>
    </>
  );
};

export default Carousel;