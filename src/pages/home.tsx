import React, { useState, useEffect } from 'react';
import logo from '../assets/Zeroth1.png';
import companies from '../assets/Companies.png';

function Home() {
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCollaboratorsClick = () => {
    setShowCollaborators(!showCollaborators);
    setShowContact(false);
    setShowProducts(false);
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
    setShowCollaborators(false);
    setShowProducts(false);
  };

  const handleProductsClick = () => {
    setShowProducts(!showProducts);
    setShowCollaborators(false);
    setShowContact(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('https://script.google.com/macros/s/AKfycby5KAMX3K7ueHHDxVwGnoSkk8ymM7tl7_B4Fbd27esNJMqXDWV4mnFcrdoPyFKv9TbPGQ/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === 'success') {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message, please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message, please try again.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', fontFamily: 'Menlo', minHeight: '100vh', padding: '30px' }}>
      <header style={{ textAlign: 'center', padding: '40px' }}>
        <p style={{ fontSize: '20px' }}>
          Zer0th
          <br />
          <br />
          Development
        </p>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
        <img src={logo} alt="logo" style={{ height: '400px', width: '400px' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            fontFamily: 'Menlo',
            fontSize: '16px',
            padding: '10px 20px',
            border: '2px solid #343434',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={handleCollaboratorsClick}
        >
          Clients
        </button>
        
        <button
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            fontFamily: 'Menlo',
            fontSize: '16px',
            padding: '10px 20px',
            border: '2px solid #343434',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={handleProductsClick}
        >
          Products + Services
        </button>

        <button
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            fontFamily: 'Menlo',
            fontSize: '16px',
            padding: '10px 20px',
            border: '2px solid #343434',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>

      {showCollaborators && (
        <div style={{ alignItems: 'center', marginTop: '20px', backgroundColor: '#000000', padding: '10px' }}>
          <p style={{ textAlign: 'left' }}>Trusted By</p>
          <img src={companies} alt="companies" style={{ width: '100%', maxWidth: '1500px' }} />
        </div>
      )}

      {showProducts && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <div style={{ maxWidth: '60%', margin: '0 auto' }}>
            <p>
              We craft bespoke solutions tailored to each client’s unique needs.

              We've had the privilege of working with creatives and entrepreneurs at the top of their respective industries, who have achieved remarkable success leveraging our expertise in:
            </p>
            <ul style={{ textAlign: 'left' }}>
              <li>Web Development</li>
              <li>Application Development</li>
              <li>E-Commerce Development & Optimization</li>
              <li>Product Distribution </li>
              <li>Data Analytics </li>
            </ul>
          </div>
        </div>
      )}

      {showContact && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>Contact Us</p>
          <br/>
          <p>contact@0-th.com</p>

        </div>
      )}
    </div>
  );
}

export default Home;
