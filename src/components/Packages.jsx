import React from 'react';

const Packages = () => {
    return (
        <section id="packages" className="packages-section">
            <div className="section-header">
                <h2 className="section-title">Our Packages</h2>
                <p className="section-subtitle">Flexible accommodation options for every need</p>
            </div>
            <div className="packages-container">
                <div className="package-card">
                    <div className="package-icon">🌟</div>
                    <h3 className="package-title">Daily Rate</h3>
                    <div className="package-price">
                        <span className="currency">LKR</span>
                        <span className="amount">6,500</span>
                        <span className="period">/ day</span>
                    </div>
                    <ul className="package-features">
                        <li>Fully Air-Conditioned Room</li>
                        <li>24/7 Room Service</li>
                        <li>Complimentary WiFi</li>
                        <li>Daily Housekeeping</li>
                    </ul>
                    <a
                        href="https://wa.me/94769243353?text=I'm interested in the Daily Rate package"
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginTop: '1rem' }}
                    >
                        Book Now
                    </a>
                </div>

                <div className="package-card featured">
                    <div className="featured-badge">Popular</div>
                    <div className="package-icon">📅</div>
                    <h3 className="package-title">Weekly Package</h3>
                    <div className="package-price">
                        <span className="amount">Available</span>
                    </div>
                    <ul className="package-features">
                        <li>All Daily Rate Benefits</li>
                        <li>Special Weekly Rate</li>
                        <li>Flexible Check-in/out</li>
                        <li>Priority Support</li>
                    </ul>
                    <a
                        href="https://wa.me/94769243353?text=I'm interested in the Weekly Package"
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginTop: '1rem' }}
                    >
                        Book Now
                    </a>
                </div>

                <div className="package-card">
                    <div className="package-icon">🏖️</div>
                    <h3 className="package-title">Monthly Package</h3>
                    <div className="package-price">
                        <span className="amount">Available</span>
                    </div>
                    <ul className="package-features">
                        <li>All Weekly Rate Benefits</li>
                        <li>Best Value Package</li>
                        <li>Extended Stay Comfort</li>
                        <li>Personal Concierge</li>
                    </ul>
                    <a
                        href="https://wa.me/94769243353?text=I'm interested in the Monthly Package"
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginTop: '1rem' }}
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Packages;
