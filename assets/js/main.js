/**
 * Main JavaScript file for Amine Studio
 * Reusable across all pages
 */

// Mobile menu toggle functionality
function setupMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navContent = document.getElementById('nav-content');
    
    if (navToggle && navContent) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            navContent.classList.toggle('hidden');
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Change icon when menu is open
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
}

// Update copyright year automatically
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setupImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    // Only proceed if required elements exist
    if (!modal || !modalImg || galleryImages.length === 0) {
        return;
    }

    // Optional elements with null checks
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalContainer = document.querySelector('.modal-container');
    const closeBtn = document.getElementById('modalClose');

    function showModal(imgElement) {
        modalImg.src = imgElement.src;
        modalImg.alt = imgElement.alt || 'Enlarged gallery image';
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    // Event listeners for gallery images
    galleryImages.forEach(img => {
        img.addEventListener('click', () => showModal(img));
    });

    // Optional close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Optional overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Optional modal container
    if (modalContainer) {
        modalContainer.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    window.addEventListener('resize', () => {
        if (modal.classList.contains('active')) {
            modalImg.style.transform = 'translateZ(0)';
        }
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    updateCopyrightYear();
    setupImageModal();
});