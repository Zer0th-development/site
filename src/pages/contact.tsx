import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            minHeight: '100vh',
            padding: '20px',
            fontFamily: "'Shippori Antique B1', sans-serif",
        }}>
            <button 
                onClick={() => navigate(-1)}
                style={{
                    background: 'none',
                    border: 'none',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginBottom: '40px',
                    marginTop: '20px'
                }}
            >
                ← Back
            </button>

            <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div style={{ marginBottom: '20px', marginTop: '100px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#000000',
                            border: '1px solid #333',
                            borderRadius: '5px',
                            color: '#FFFFFF'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#000000',
                            border: '1px solid #333',
                            borderRadius: '5px',
                            color: '#FFFFFF'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#000000',
                            border: '1px solid #333',
                            borderRadius: '5px',
                            color: '#FFFFFF',
                            minHeight: '150px'
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#FFFFFF',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    Send
                </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                CONTACT@0-TH.COM
            </div>
        </div>
    );
};

export default Contact;