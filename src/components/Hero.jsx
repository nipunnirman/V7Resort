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
                <h1 className="hero-title">Cozy Garden</h1>
                <p className="hero-subtitle">Luxury Awaits in Ahangama</p>
                <a href="#packages" className="cta-button">Explore Packages</a>
            </div>
        </section>
    );
};

export default Hero;
