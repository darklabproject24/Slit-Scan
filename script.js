// ===========================
// Dark Mode Toggle
// ===========================

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

// ===========================
// Interactive Demo Player
// ===========================

const demoPlay = document.getElementById('demo-play');
const demoPrev = document.getElementById('demo-prev');
const demoNext = document.getElementById('demo-next');

if (demoPlay) {
    demoPlay.addEventListener('click', () => {
        demoPlay.classList.toggle('playing');
    });
}

if (demoPrev) {
    demoPrev.addEventListener('click', () => {
        demoPrev.style.transform = 'scale(0.85)';
        setTimeout(() => {
            demoPrev.style.transform = '';
        }, 150);
    });
}

if (demoNext) {
    demoNext.addEventListener('click', () => {
        demoNext.style.transform = 'scale(0.85)';
        setTimeout(() => {
            demoNext.style.transform = '';
        }, 150);
    });
}

// ===========================
// Smooth Scroll to Sections
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Card Tilt Effect
// ===========================

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    observer.observe(card);
});

// ===========================
// Performance: Reduce animations on low-end devices
// ===========================

if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.documentElement.classList.add('reduce-motion');
}

// ===========================
// Log welcome message
// ===========================

console.log('%cWelcome to Dark Lab Project! 🚀', 'font-size: 20px; color: #4ade80; font-weight: bold;');
console.log('%cBand+ is open source and privacy-first.', 'font-size: 14px; color: #666;');
console.log('%cGitHub: https://github.com/darklabproject24/BandPlus', 'font-size: 12px; color: #999;');