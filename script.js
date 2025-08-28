// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
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

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Animate skill tags on hover
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animate service cards on scroll
const serviceCards = document.querySelectorAll('.service-card');
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    serviceObserver.observe(card);
});

// Animate project cards
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    projectObserver.observe(card);
});

// Animate timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.3 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});

// Animate stats on scroll
const statItems = document.querySelectorAll('.stat-item');
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.5 });

statItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    statObserver.observe(item);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .name');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 1000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Floating icons animation
const floatingIcons = document.querySelectorAll('.icon-item');
floatingIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`;
});

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Advanced icon slide animations
function createIconSlideEffect(icon) {
    icon.addEventListener('mouseenter', function() {
        // Create sliding overlay effect
        const overlay = document.createElement('div');
        overlay.className = 'icon-slide-overlay';
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.6s ease;
            z-index: 2;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.appendChild(overlay);
        
        setTimeout(() => {
            overlay.style.left = '100%';
        }, 50);
        
        // Add rotation and scale effect
        this.style.transform = 'scale(1.1) rotate(5deg)';
        this.style.boxShadow = '0 10px 25px rgba(92, 225, 230, 0.4)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.boxShadow = 'none';
        
        // Remove overlay after animation
        const overlay = this.querySelector('.icon-slide-overlay');
        if (overlay) {
            setTimeout(() => {
                overlay.remove();
            }, 600);
        }
    });
}

// Apply slide effect to service icons
document.querySelectorAll('.service-icon').forEach(createIconSlideEffect);

// Apply slide effect to contact icons
document.querySelectorAll('.contact-icon').forEach(createIconSlideEffect);

// Apply slide effect to project links
document.querySelectorAll('.project-link').forEach(createIconSlideEffect);

// Apply slide effect to social links
document.querySelectorAll('.social-link').forEach(createIconSlideEffect);

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Trigger counter animation when stats come into view
const statNumbers = document.querySelectorAll('.stat-item h3');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    counterObserver.observe(stat);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: var(--accent-aqua);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(92, 225, 230, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) rotate(10deg)';
    this.style.boxShadow = '0 6px 20px rgba(92, 225, 230, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) rotate(0deg)';
    this.style.boxShadow = '0 4px 12px rgba(92, 225, 230, 0.3)';
});

// Restore floating particle background for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Remove any previous particles
    hero.querySelectorAll('.particle').forEach(p => p.remove());
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(92, 225, 230, 0.6);
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle ${3 + Math.random() * 4}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
            z-index: 1;
        `;
        hero.appendChild(particle);
    }
}

// Add particle animation CSS (ensure present)
(function ensureParticleStyle() {
    const existing = document.getElementById('particle-style');
    if (existing) return;
    const particleStyle = document.createElement('style');
    particleStyle.id = 'particle-style';
    particleStyle.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
})();

// Initialize particles
createParticles();

// Magnetic effect for interactive elements
function addMagneticEffect(element) {
    element.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
}

// Apply magnetic effect to service cards
document.querySelectorAll('.service-card').forEach(addMagneticEffect);

// Apply magnetic effect to project cards
document.querySelectorAll('.project-card').forEach(addMagneticEffect);

// Text reveal animation
function revealText(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.cssText = `
            opacity: 0;
            animation: reveal-char 0.1s ease forwards;
            animation-delay: ${i * 0.05}s;
        `;
        element.appendChild(span);
    }
}

// Add text reveal animation CSS
const textRevealStyle = document.createElement('style');
textRevealStyle.textContent = `
    @keyframes reveal-char {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(textRevealStyle);

// Apply text reveal to section titles
const textObserverOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            revealText(entry.target);
            textObserver.unobserve(entry.target);
        }
    });
}, textObserverOptions);

document.querySelectorAll('.section-title').forEach(title => {
    textObserver.observe(title);
});

// 3D tilt effect for cards
function add3DTilt(element) {
    element.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
}

// Apply 3D tilt to service and project cards
document.querySelectorAll('.service-card, .project-card').forEach(add3DTilt);

// Animated subtitle text rotation
const animatedSubtitle = document.getElementById('animated-subtitle');
const subtitleTexts = ['Web Developer', 'Lead Generation Expert', 'Digital Marketing Expert'];
let currentSubtitleIndex = 0;

function updateSubtitle() {
    if (animatedSubtitle) {
        // Fade out
        animatedSubtitle.style.opacity = '0';
        animatedSubtitle.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            // Change text
            animatedSubtitle.textContent = subtitleTexts[currentSubtitleIndex];
            
            // Fade in
            animatedSubtitle.style.opacity = '1';
            animatedSubtitle.style.transform = 'translateY(0)';
            
            // Move to next text
            currentSubtitleIndex = (currentSubtitleIndex + 1) % subtitleTexts.length;
        }, 300);
    }
}

// Add CSS for smooth transitions
const subtitleStyle = document.createElement('style');
subtitleStyle.textContent = `
    #animated-subtitle {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
`;
document.head.appendChild(subtitleStyle);

// Start the animation after page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        // Initial delay before starting the rotation
        setInterval(updateSubtitle, 3000); // Change every 3 seconds
    }, 2000);
});

// Mouse cursor follower - Simple and reliable
const cursorFollower = document.createElement('div');
cursorFollower.style.cssText = `
    position: fixed;
    width: 15px;
    height: 15px;
    background: #5ce1e6;
    border-radius: 50%;
    pointer-events: none;
    z-index: 99999;
    opacity: 0.7;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease;
    box-shadow: 0 0 10px rgba(92, 225, 230, 0.5);
`;

document.body.appendChild(cursorFollower);

// Track mouse movement
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update cursor position
    cursorFollower.style.left = mouseX + 'px';
    cursorFollower.style.top = mouseY + 'px';
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursorFollower.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorFollower.style.opacity = '0.7';
});

// Add hover effects for interactive elements
document.querySelectorAll('button, a, .btn, .service-card, .project-card, .skill-tag, .nav-link').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.background = '#7ce8ed';
        cursorFollower.style.boxShadow = '0 0 15px rgba(92, 225, 230, 0.8)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.background = '#5ce1e6';
        cursorFollower.style.boxShadow = '0 0 10px rgba(92, 225, 230, 0.5)';
    });
});

console.log('Portfolio website loaded successfully with advanced animations! 🚀✨'); 