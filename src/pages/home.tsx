import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Zeroth2.png'; 

function Home() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleWhoWeAreClick = () => {
    navigate('/who');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handlePortfolioClick = () => {
    navigate('/portfolio');
  };

  return (
    <div style={{ 
      backgroundColor: '#000000', 
      color: '#FFFFFF', 
      fontFamily: "'Shippori Antique B1', sans-serif",
      minHeight: '100vh', 
      padding: isMobile ? '5%' : '0 10%',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        height: isMobile ? 'auto' : '90vh',
      }}>
        <img 
          src={logo} 
          alt="Zeroth logo" 
          style={{ 
            height: isMobile ? '450px' : '800px', 
            width: isMobile ? '450px' : '800px',
            marginBottom: isMobile ? '-100px' : '0',
            order: isMobile ? 0 : 1,
          }} 
        />
        <div style={{
          textAlign: isMobile ? 'center' : 'left',
          marginLeft: isMobile ? '0' : '40px',
          order: isMobile ? 1 : 0,
        }}>
          <h1 style={{ 
            fontSize: isMobile ? '36px' : '80px', 
            fontWeight: 'normal', 
            marginBottom: isMobile ? '-20px' : '-50px',
            letterSpacing: '0.1em' 
          }}>
            ZEROTH
          </h1>
          <h2 style={{ 
            fontSize: isMobile ? '22px' : '47px', 
            fontWeight: 'normal', 
            marginBottom: isMobile ? '20px' : '0px' 
          }}>
          DEVELOPMENT
          </h2>
          <p style={{ 
            fontSize: isMobile ? '16px' : '26px',
            marginBottom: '40px'
          }}>
            A Software & Design Agency
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            gap: '20px',
            alignItems: isMobile ? 'center' : 'flex-start'
          }}>
            {[
              { text: 'Who we are', onClick: handleWhoWeAreClick },
              { text: 'Portfolio', onClick: handlePortfolioClick },
              { text: 'Contact', onClick: handleContactClick }
            ].map((section) => (
              <button
                key={section.text}
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontSize: '20px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0',
                  marginBottom: isMobile ? '10px' : '0'
                }}
                onClick={section.onClick}
              >
                {section.text} 
                <span style={{ marginLeft: '10px' }}>→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;