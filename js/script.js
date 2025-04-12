// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Rules Agreement Button
document.querySelector('.rules-agree-btn').addEventListener('click', function() {
    // Store agreement in localStorage
    localStorage.setItem('rulesAgreed', 'true');
    
    // Show confirmation
    this.innerHTML = '<i class="fas fa-check"></i> Rules Accepted';
    this.style.backgroundColor = '#2E7D32';
    
    // Optional: Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Check if rules were already agreed to
document.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('rulesAgreed')) {
        const btn = document.querySelector('.rules-agree-btn');
        btn.innerHTML = '<i class="fas fa-check"></i> Rules Accepted';
        btn.style.backgroundColor = '#2E7D32';
        btn.disabled = true;
    }
});