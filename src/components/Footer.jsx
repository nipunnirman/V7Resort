import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">V7 Resort</div>
                <p>&copy; {currentYear} V7 Resort. All rights reserved.</p>
                <p>Luxury accommodation in Ahangama</p>
            </div>
        </footer>
    );
};

export default Footer;
