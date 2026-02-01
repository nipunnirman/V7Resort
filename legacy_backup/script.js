// Slideshow functionality
let slideIndex = 0;
let slides;
let slideInterval;

function initSlideshow() {
    slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        showSlides();
        // Auto-advance slides every 4 seconds
        slideInterval = setInterval(() => {
            slideIndex++;
            showSlides();
        }, 4000);
    }
}

function showSlides() {
    if (slides.length === 0) return;
    
    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Reset index if needed
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    // Show current slide
    slides[slideIndex].classList.add('active');
}

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

function toggleNav() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

if (navToggle) {
    navToggle.addEventListener('click', toggleNav);
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleNav();
        }
    });
});

// Smooth scroll with offset for fixed navbar
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleScroll);

// Intersection Observer for fade-in animations
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

// Observe all sections and cards
const observeElements = document.querySelectorAll('.package-card, .review-card, .contact-item');
observeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Form validation and enhancement
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        
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
    });
}

// Parallax effect for hero section
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-content p');
if (footerText && footerText.textContent.includes('2024')) {
    footerText.textContent = footerText.textContent.replace('2024', currentYear);
}

// Package card hover effect enhancement
const packageCards = document.querySelectorAll('.package-card');

packageCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initSlideshow();
    
    // Add active state to current nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Prevent scroll when mobile menu is open
function preventScroll(e) {
    if (navMenu.classList.contains('active')) {
        e.preventDefault();
    }
}

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    // Optional: Add swipe gestures for slideshow navigation
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up
        } else {
            // Swipe down
        }
    }
}

// Add smooth reveal animation for reviews
const reviewCards = document.querySelectorAll('.review-card');
reviewCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// WhatsApp button pulse animation enhancement
const whatsappButton = document.querySelector('.whatsapp-float');
if (whatsappButton) {
    whatsappButton.addEventListener('mouseenter', () => {
        whatsappButton.style.animation = 'none';
    });
    
    whatsappButton.addEventListener('mouseleave', () => {
        whatsappButton.style.animation = 'pulse 2s infinite';
    });
}

// Console welcome message
console.log('%c🌴 Welcome to V7 Resort! 🌴', 'font-size: 20px; color: #c9a96e; font-weight: bold;');
console.log('%cExperience luxury in Negombo, Sri Lanka', 'font-size: 14px; color: #e8d5b7;');
