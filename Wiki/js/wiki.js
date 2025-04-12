document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.wiki-menu-toggle');
    const navLinks = document.querySelector('.wiki-nav-links');
    const searchBox = document.querySelector('.wiki-search-box');
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        searchBox.classList.toggle('active');
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll('.wiki-accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const item = this.parentElement;
        const content = this.nextElementSibling;
        
        // Close all other items
        document.querySelectorAll('.wiki-accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.wiki-accordion-content').classList.remove('show');
                otherItem.querySelector('.wiki-accordion-header').classList.remove('active');
            }
        });
        
        // Toggle current item
        content.classList.toggle('show');
        this.classList.toggle('active');
    });
});

// Animate articles when they come into view
const articles = document.querySelectorAll('.wiki-article');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

articles.forEach(article => {
    observer.observe(article);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
            searchBox.classList.remove('active');
        }
    });
});

// Card hover animations
const cards = document.querySelectorAll('.wiki-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotate(1deg)';
        this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Search functionality
const searchInput = document.querySelector('.wiki-search');
const searchBtn = document.querySelector('.wiki-search-btn');

searchBtn.addEventListener('click', function() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query) {
        // In a real implementation, this would search through content
        alert(`Searching for: ${query}\nThis would trigger a search in a real implementation.`);
    }
});

// Allow search on Enter key
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Parallax effect for hero section
const hero = document.querySelector('.wiki-hero');
if (hero) {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
}

// Dynamic year in footer
const yearSpan = document.querySelector('#current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
    }
});

// Animation for card icons
function animateCardIcons() {
const icons = document.querySelectorAll('.wiki-card-icon');
let delay = 0;

Copy
icons.forEach(icon => {
    setTimeout(() => {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            icon.style.transform = 'scale(1) rotate(0)';
        }, 300);
    }, delay);
    
    delay += 100;
});

setTimeout(animateCardIcons, 3000);
}

// Start icon animation after page loads
window.addEventListener('load', function() {
    setTimeout(animateCardIcons, 1000);
});
