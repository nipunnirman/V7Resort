import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="hero" style={{ transform: `translateY(${offset * 0.5}px)` }}>
            <div className="hero-content">
                <h1 className="hero-title">V7 Resort</h1>
                <p className="hero-subtitle">Luxury Awaits in Ahangama</p>
                <a href="https://wa.me/94769243353?text=I'm interested in a reservation at V7 Resort" className="cta-button" target="_blank" rel="noopener noreferrer">Book Now</a>
            </div>
        </section>
    );
};

export default Hero;
