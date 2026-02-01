import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all required fields');
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address');
            return false;
        }

        // If valid, allow default submission (mailto)
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-subtitle">Get in touch to book your perfect stay</p>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-icon">📱</div>
                        <div className="contact-details">
                            <h3>Phone / WhatsApp</h3>
                            <a href="tel:+94769243353">076 924 3353</a>
                            <a href="https://wa.me/94769243353" className="whatsapp-link">
                                <svg viewBox="0 0 32 32" fill="currentColor" width="18" height="18">
                                    <path d="M16 0C7.164 0 0 7.164 0 16c0 2.832.744 5.488 2.048 7.792L0 32l8.416-2.208A15.934 15.934 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.344c-2.496 0-4.864-.672-6.88-1.856l-.496-.288-5.136 1.344 1.376-5.024-.32-.512A13.248 13.248 0 012.656 16c0-7.36 5.984-13.344 13.344-13.344S29.344 8.64 29.344 16 23.36 29.344 16 29.344z" />
                                    <path d="M23.52 19.68c-.384-.192-2.272-1.12-2.624-1.248-.352-.128-.608-.192-.864.192-.256.384-1.024 1.248-1.248 1.504-.224.256-.448.288-.832.096-.384-.192-1.632-.6-3.104-1.92-1.152-1.024-1.92-2.304-2.144-2.688-.224-.384-.024-.592.168-.784.176-.176.384-.448.576-.672.192-.224.256-.384.384-.64.128-.256.064-.48-.032-.672-.096-.192-.864-2.08-1.184-2.848-.32-.768-.64-.64-.864-.64h-.736c-.256 0-.672.096-1.024.48-.352.384-1.344 1.312-1.344 3.2s1.376 3.712 1.568 3.968c.192.256 2.688 4.128 6.528 5.792.912.384 1.632.608 2.192.784.928.288 1.76.24 2.432.144.736-.112 2.272-.928 2.592-1.824.32-.896.32-1.664.224-1.824-.096-.16-.352-.256-.736-.448z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">✉️</div>
                        <div className="contact-details">
                            <h3>Email</h3>
                            <a href="mailto:nipunnirman999@gmail.com">nipunnirman999@gmail.com</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div className="contact-details">
                            <h3>Location</h3>
                            <a href="https://share.google/gL4BvYt6l2idSVwhy" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                            <p>V7Juicebar, Thalduwa Road, Ahangama</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form" action="mailto:nipunnirman999@gmail.com" method="post" enctype="text/plain" onSubmit={handleSubmit}>
                        <h3>Send us a message</h3>
                        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} value={formData.name} />
                        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} value={formData.email} />
                        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} value={formData.phone} />
                        <textarea name="message" placeholder="Your Message" rows="5" required onChange={handleChange} value={formData.message}></textarea>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
