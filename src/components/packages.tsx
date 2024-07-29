import React from 'react';

const Packages = () => {
  return (
    <div style={{ 
        overflowX: 'auto', 
        width: '100%', 
        paddingBottom: '20px',
        WebkitOverflowScrolling: 'touch',
      }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '60px' }}>
        
        {/* Standard Package */}
        <div style={{ backgroundColor: '#111111', borderRadius: '12px', padding: '20px', textAlign: 'center', width: '275px' }}>
          <div>
            <span style={{backgroundColor: '#555555', borderRadius: '20px', padding: '10px'}}>Standard</span>
            <h2>Single Project</h2>
            <p style={{textAlign: 'left'}}>
                You have specifications for how you would like to have your site, store or app 
                built from the ground up or rebuilt to be enhanced and to fit your new vision.
            </p>
            <p style={{textAlign: 'left'}}>
                We provide a detailed breakdown of the scope, deliverables and timeline for your project 
                to be completed and have a sustainable model for you to manage future updates and upgrades.
            </p>
          </div>
        </div>

       {/* Premium Package */}
       <div style={{ backgroundColor: '#111111', borderRadius: '12px',  padding: '20px', textAlign: 'center', width: '275px' }}>
          <div className="p-6">
          <span style={{backgroundColor: '#555555', borderRadius: '20px', padding: '10px'}}>Premium</span>
            <h2>Fully Managed</h2>
            <p>
                You are running or launching your business and want only the best 
                in design, development and management for your online presence.
            </p>
            <p>
                From conception you will be able to work with us to build your vision,
                have it opmtimially developed, closely monitor performance and 
                seamlessly change, update and upgrade whatever you see fit on a continuous basis.
            </p>
          </div>
        </div>

        {/* Custom Package */}
        <div style={{ backgroundColor: '#111111', borderRadius: '12px', padding: '20px', textAlign: 'center', height: '400px', width: '275px' }}>
          <div>
          <span style={{backgroundColor: '#555555', borderRadius: '20px', padding: '10px'}}>Custom</span>
            <h2>Custom Development</h2>
            <p>More info...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;