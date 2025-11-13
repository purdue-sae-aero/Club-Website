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

// Smart navbar hide/show on scroll
let lastScrollTop = 0;
let navbarVisible = true;

// Navbar proximity detection
document.addEventListener('mousemove', (e) => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const navbarRect = navbar.getBoundingClientRect();
    const mouseY = e.clientY;
    const proximityThreshold = 150; // pixels from navbar to trigger expansion

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Only apply proximity detection when navbar is slim (not at top)
    if (currentScroll > 50) {
        const distanceFromNavbar = Math.abs(mouseY - navbarRect.top - navbarRect.height / 2);

        if (distanceFromNavbar < proximityThreshold) {
            navbar.classList.add('navbar-expanded');
        } else {
            navbar.classList.remove('navbar-expanded');
        }
    } else {
        navbar.classList.remove('navbar-expanded');
    }
});

// Add parallax effect to hero section and active nav highlighting
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Navbar hide/show logic
    if (currentScroll <= 50) {
        // At the top - show full navbar
        navbar.classList.remove('navbar-hidden');
        navbar.classList.remove('navbar-slim');
        navbar.classList.remove('navbar-expanded');
        navbarVisible = true;
    } else {
        // Not at top - always show slim navbar
        navbar.classList.add('navbar-slim');
        navbar.classList.remove('navbar-hidden');
        navbarVisible = false;
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }

    // Highlight active section in navigation (only on index page)
    const pathname = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    // Check if we're on index page (not sponsors, leadership, or competition pages)
    const isIndexPage = (pathname.endsWith('index.html') ||
                        pathname === '/' ||
                        (pathname.endsWith('/') && !pathname.includes('sponsors') && !pathname.includes('leadership') && !pathname.includes('competition')));

    // Only apply scroll-based highlighting on the index page
    if (isIndexPage) {
        const sections = document.querySelectorAll('section[id]');

        if (sections.length > 0) {
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

                if (current === 'home' && link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                    link.style.fontWeight = 'bold';
                } else if (link.getAttribute('href').includes('#' + current)) {
                    link.classList.add('active');
                    link.style.fontWeight = 'bold';
                }
            });
        }
    }

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

// Competition page smooth scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate gallery items on scroll for competition pages
    const galleryItems = document.querySelectorAll('.competition-gallery-section .gallery-item');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); // Stagger the animations
            }
        });
    }, observerOptions);

    galleryItems.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        galleryObserver.observe(item);
    });

    // Enhanced parallax effect for competition backgrounds
    const competitionSections = document.querySelectorAll('.competition-page-section, .competition-gallery-section');

    function updateParallax() {
        competitionSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
            const windowHeight = window.innerHeight;

            // Check if section is in viewport
            if (sectionBottom > 0 && sectionTop < windowHeight) {
                const bgImage = section.querySelector('.competition-bg-image, .competition-gallery-bg');

                if (bgImage) {
                    // Calculate parallax movement
                    const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
                    const translateY = (scrollProgress - 0.5) * 50; // More noticeable parallax

                    bgImage.style.transform = `translateY(${translateY}px) scale(1)`;
                }
            }
        });

        requestAnimationFrame(updateParallax);
    }

    // Start parallax animation loop
    requestAnimationFrame(updateParallax);
});

// Competition image hover effect
document.addEventListener('DOMContentLoaded', function() {
    const competitionImage = document.getElementById('competition-image');
    const competitionItems = document.querySelectorAll('.achievement-item[data-team-image]');
    const imageContainer = document.querySelector('.content-image');
    let currentImage = '';
    let isHovering = false;
    let fadeTimeout = null;

    if (competitionImage && competitionItems.length > 0) {
        competitionItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const teamImage = this.getAttribute('data-team-image');
                if (teamImage && teamImage !== currentImage) {
                    isHovering = true;
                    clearTimeout(fadeTimeout);

                    // If there's already an image, fade it out first
                    if (currentImage) {
                        competitionImage.style.opacity = '0';
                        setTimeout(() => {
                            if (isHovering) {
                                competitionImage.src = teamImage;
                                currentImage = teamImage;
                                competitionImage.style.opacity = '1';
                                competitionImage.style.transform = 'scale(1)';
                            }
                        }, 300);
                    } else {
                        // No image currently, just show it
                        competitionImage.src = teamImage;
                        currentImage = teamImage;
                        setTimeout(() => {
                            competitionImage.style.opacity = '1';
                            competitionImage.style.transform = 'scale(1)';
                        }, 50);
                    }
                }
            });

            item.addEventListener('mouseleave', function(e) {
                // Check if we're moving to another competition item or the image
                const relatedTarget = e.relatedTarget;
                const movingToItem = relatedTarget && relatedTarget.closest('.achievement-item[data-team-image]');
                const movingToImage = relatedTarget && (relatedTarget === imageContainer || imageContainer.contains(relatedTarget));

                if (!movingToItem && !movingToImage) {
                    isHovering = false;
                    fadeTimeout = setTimeout(() => {
                        if (!isHovering) {
                            competitionImage.style.opacity = '0';
                            competitionImage.style.transform = 'scale(0.95)';
                            setTimeout(() => {
                                if (!isHovering) {
                                    competitionImage.src = '';
                                    currentImage = '';
                                }
                            }, 600);
                        }
                    }, 100);
                }
            });
        });

        // Keep image visible when hovering over it
        if (imageContainer) {
            imageContainer.addEventListener('mouseenter', function() {
                isHovering = true;
                clearTimeout(fadeTimeout);
            });

            imageContainer.addEventListener('mouseleave', function(e) {
                const relatedTarget = e.relatedTarget;
                const movingToItem = relatedTarget && relatedTarget.closest('.achievement-item[data-team-image]');

                if (!movingToItem) {
                    isHovering = false;
                    fadeTimeout = setTimeout(() => {
                        if (!isHovering) {
                            competitionImage.style.opacity = '0';
                            competitionImage.style.transform = 'scale(0.95)';
                            setTimeout(() => {
                                if (!isHovering) {
                                    competitionImage.src = '';
                                    currentImage = '';
                                }
                            }, 600);
                        }
                    }, 100);
                }
            });
        }
    }
});