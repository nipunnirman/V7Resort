import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">Cozy Garden</div>
                <p>&copy; {currentYear} Cozy Garden. All rights reserved.</p>
                <p>Luxury accommodation in Ahangama</p>
            </div>
        </footer>
    );
};

export default Footer;
