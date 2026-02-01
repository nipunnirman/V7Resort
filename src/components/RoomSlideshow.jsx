import React, { useState, useEffect } from 'react';

// Dynamically import all slide images
const imagesGlob = import.meta.glob('../assets/images/slide-*.jpeg', { eager: true });
const slideImages = Object.values(imagesGlob).map(module => module.default);

const RoomSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (slideImages.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const caption = "luxury accomadation";

    return (
        <section id="rooms" className="rooms-section">
            <div className="section-header">
                <h2 className="section-title">Our Rooms</h2>
                <p className="section-subtitle">Experience comfort and luxury in every detail</p>
            </div>
            <div className="slideshow-container">
                {slideImages.map((imgSrc, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    >
                        <img src={imgSrc} alt={`Luxury AC Room ${index + 1}`} />
                        <div className="slide-caption">{caption}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RoomSlideshow;
