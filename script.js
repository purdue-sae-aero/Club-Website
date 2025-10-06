// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for anchor links
function scrollToSections() {
    const sectionsPreview = document.querySelector('.sections-preview');
    if (sectionsPreview) {
        sectionsPreview.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Contact form handling
const contactForm = document.querySelector('.message-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const formEntries = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                this.reset();
            }, 2000);
        }, 1500);
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observe elements to animate
    const elementsToAnimate = document.querySelectorAll(
        '.preview-card, .leader-card, .gallery-item, .achievement-item, .sponsor-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();

    // Trigger scroll reveal on page load
    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);
    
    // Add hover effects to preview cards
    const previewCards = document.querySelectorAll('.preview-card');
    previewCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add gallery image modal functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const modal = createImageModal(img.src, img.alt);
            document.body.appendChild(modal);
        });
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        typeWriter(heroTitle, text, 100);
    }
});

// Image modal creation
function createImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${src}" alt="${alt}">
            <div class="modal-caption">${alt}</div>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    `;
    
    const modalImg = modal.querySelector('img');
    modalImg.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        border-radius: 10px;
        border: 3px solid #FFD700;
    `;
    
    const modalCaption = modal.querySelector('.modal-caption');
    modalCaption.style.cssText = `
        color: #FFD700;
        font-size: 1.2rem;
        margin-top: 15px;
        font-weight: bold;
    `;
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        color: #FFD700;
        font-size: 2rem;
        cursor: pointer;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFD700;
    `;
    
    // Close modal functionality
    const closeModal = () => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => modal.remove(), 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
    
    return modal;
}

// Typewriter effect
function typeWriter(element, text, speed) {
    let i = 0;
    element.style.borderRight = '3px solid #FFD700';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    setTimeout(type, 1000); // Start typing after 1 second
}

// Add CSS for modal animations
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(modalStyles);

// Add parallax effect to hero section and active nav highlighting
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id], main');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id') || 'home';
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        link.style.fontWeight = 'normal';

        if (current === 'home' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
            link.style.fontWeight = 'bold';
        } else if (link.getAttribute('href').includes('#' + current)) {
            link.classList.add('active');
            link.style.fontWeight = 'bold';
        }
    });

    // Scroll reveal animations (bidirectional)
    const scrollElements = document.querySelectorAll('.content-section, .leadership-section, .contact-section, .sponsors-intro');

    scrollElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible && elementBottom > elementVisible) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Add entrance animation to page elements
    const pageElements = document.querySelectorAll('.hero-content, .nav-container');
    pageElements.forEach((el, index) => {
        el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s both`;
    });
});

// Add smooth page transitions
function addPageTransition() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        if (link.hostname === window.location.hostname && !link.href.includes('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.href;
                
                document.body.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        }
    });
}

// Initialize page transitions
document.addEventListener('DOMContentLoaded', addPageTransition);