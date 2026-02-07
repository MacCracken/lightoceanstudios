// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(245, 242, 237, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(245, 242, 237, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.story-item, .scent-card, .tip');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Modal functionality
function openEmailModal() {
    document.getElementById('emailModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeEmailModal() {
    document.getElementById('emailModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('emailModal');
    if (event.target === modal) {
        closeEmailModal();
    }
}

// Email form submission
function handleEmailSubmit(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;
    const form = document.getElementById('emailForm');
    const successMessage = document.getElementById('emailSuccess');
    
    // Store email (in a real app, this would be sent to a backend)
    const emails = JSON.parse(localStorage.getItem('lightocean_emails') || '[]');
    emails.push({
        email: email,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('lightocean_emails', JSON.stringify(emails));
    
    // Show success message
    form.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Log for demonstration (remove in production)
    console.log('Email captured:', email);
    console.log('All emails:', emails);
    
    // Close modal after 3 seconds
    setTimeout(() => {
        closeEmailModal();
        // Reset form for next use
        form.style.display = 'flex';
        successMessage.style.display = 'none';
        form.reset();
    }, 3000);
}

// Escape key to close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeEmailModal();
    }
});

// Parallax effect for hero flame (subtle)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const flame = document.querySelector('.flame-animation');
    if (flame && scrolled < window.innerHeight) {
        const speed = scrolled * 0.5;
        flame.style.transform = `translate(-50%, calc(-50% + ${speed}px))`;
    }
});

// Add loading animation for images when they're added later
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);