import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomSlideshow from './components/RoomSlideshow';
import Packages from './components/Packages';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Styles are imported in main.jsx via index.css usually, but we can import here to be sure
import './index.css';

function App() {
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const observeElements = document.querySelectorAll('.package-card, .review-card, .contact-item');
    observeElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="aurora-bg"></div>

      <WhatsAppFloat />
      <Navbar />
      <Hero />
      <RoomSlideshow />
      <Packages />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
