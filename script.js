function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const allSections = document.querySelectorAll('.section-content');
    
    allSections.forEach(sec => {
        if (sec.id !== sectionId) {
            sec.classList.remove('active');
        }
    });
    
    if (section.classList.contains('active')) {
        section.classList.remove('active');
    } else {
        setTimeout(() => {
            section.classList.add('active');
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const sectionCards = document.querySelectorAll('.section-card');
    
    sectionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#FFF';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#FFD700';
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const allSections = document.querySelectorAll('.section-content');
            allSections.forEach(section => {
                section.classList.remove('active');
            });
        }
    });
});