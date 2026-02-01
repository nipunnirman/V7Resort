import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);

            // Active section logic
            const sections = ['home', 'rooms', 'packages', 'reviews', 'contact'];
            let current = '';
            const scrollPosition = window.scrollY;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const sectionTop = element.offsetTop - 150; // Offset for navbar
                    const sectionHeight = element.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = section;
                    }
                }
            }
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false); // Close menu on mobile click
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">V7 Resort</div>
                <div className="nav-toggle" onClick={toggleMenu} style={{ display: 'flex' }}> {/* Ensure visible based on CSS usually but here we control via click */}
                    {/* The CSS handles display:none for desktop, but we need to ensure the spans animate */}
                    <span style={isMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
                    <span style={isMenuOpen ? { opacity: 0 } : {}}></span>
                    <span style={isMenuOpen ? { transform: 'rotate(-45deg) translate(7px, -6px)' } : {}}></span>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
                    <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                    <li><a href="#rooms" className={`nav-link ${activeSection === 'rooms' ? 'active' : ''}`} onClick={(e) => scrollToSection(e, 'rooms')}>Rooms</a></li>
                    <li><a href="#packages" className={`nav-link ${activeSection === 'packages' ? 'active' : ''}`} onClick={(e) => scrollToSection(e, 'packages')}>Packages</a></li>
                    <li><a href="#reviews" className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`} onClick={(e) => scrollToSection(e, 'reviews')}>Reviews</a></li>
                    <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
