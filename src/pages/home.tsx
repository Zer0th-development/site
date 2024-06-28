// src/pages/Home.tsx
import React, { useState } from 'react';
import logo from '../assets/Zeroth1.png';
import companies from '../assets/Companies.png';

function Home() {
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCollaboratorsClick = () => {
    setShowCollaborators(!showCollaborators);
    setShowContact(false);
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
    setShowCollaborators(false);
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
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', fontFamily: 'Menlo', minHeight: '100vh',  padding: '30px' }}>
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

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  }}>
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
          Collaborators
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
          <p style={{ textAlign: 'left'  }}>Trusted By</p>
          <img src={companies} alt="companies" style={{ width: '90%' }} />
        </div>
      )}

      {showContact && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>Contact Us</p>
          <br/>
          <p>contact@0-th.com</p>
          {/* <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                margin: '10px',
                padding: '10px',
                width: '40vmin',
                height: '20px',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                border: '1px solid #343434',
                borderRadius: '16px'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                margin: '10px',
                padding: '10px',
                width: '40vmin',
                height: '20px',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                border: '1px solid #343434',
                borderRadius: '16px'
              }}
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={{
                margin: '10px',
                padding: '10px',
                width: '40vmin',
                height: '20px',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                border: '1px solid #343434',
                borderRadius: '16px'
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#000000',
                color: '#FFFFFF',
                fontFamily: 'Menlo',
                fontSize: '16px',
                padding: '10px 20px',
                marginTop: '20px',
                border: '2px solid #343434',
                borderRadius: '16px',
                cursor: 'pointer'
              }}
            >
              Send
            </button>
          </form> */}
        </div>
      )}
    </div>
  );
}

export default Home;
