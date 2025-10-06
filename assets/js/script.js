// JavaScript pour le site du Collège & Lycée Keur Serigne Touba

document.addEventListener('DOMContentLoaded', function() {
    
    // === MENU MOBILE ===
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-xl';
            } else {
                icon.className = 'fas fa-times text-xl';
            }
        });
    }
    
    // === CARROUSEL ===
    initCarousel();
    
    // === FILTRES GALERIE ===
    initGalleryFilters();
    
    // === FILTRES ÉQUIPE ===
    initTeamFilters();
    
    // === MODAL GALERIE ===
    initGalleryModal();
    
    // === FAQ ACCORDION ===
    initFAQAccordion();
    
    // === FORMULAIRE DE CONTACT ===
    initContactForm();
    
    // === ANIMATIONS AU SCROLL ===
    initScrollAnimations();
    
    // === SMOOTH SCROLLING ===
    initSmoothScrolling();
    
    // === LOADING STATES ===
    initLoadingStates();
});

// === FONCTIONS CARROUSEL ===
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Fonction pour afficher une slide
    function showSlide(index) {
        // Retirer la classe active de toutes les slides
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Ajouter la classe active à la slide courante
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    // Fonction pour aller à la slide suivante
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Fonction pour aller à la slide précédente
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Event listeners
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
    
    // Event listeners pour les indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-play du carrousel (optionnel)
    setInterval(nextSlide, 5000);
}

// === FONCTIONS FILTRES GALERIE ===
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0 || galleryItems.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Mettre à jour l'état actif des boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrer les éléments
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// === FONCTIONS FILTRES ÉQUIPE ===
function initTeamFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
    const teacherCards = document.querySelectorAll('.teacher-card');
    
    if (filterButtons.length === 0 || teacherCards.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Mettre à jour l'état actif des boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrer les cartes d'enseignants
            teacherCards.forEach(card => {
                const matiere = card.getAttribute('data-matiere');
                
                if (filter === 'all' || matiere === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// === FONCTIONS MODAL GALERIE ===
function initGalleryModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.getElementById('closeModal');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (!modal || !modalImage || !modalTitle || !modalDescription || !closeModal) return;
    
    // Ouvrir le modal
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('p').textContent;
            
            if (img && title && description) {
                modalImage.src = img.src;
                modalImage.alt = img.alt;
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Fermer le modal
    function closeModalFunction() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
    closeModal.addEventListener('click', closeModalFunction);
    
    // Fermer avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModalFunction();
        }
    });
    
    // Fermer en cliquant à l'extérieur
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
}

// === FONCTIONS FAQ ACCORDION ===
function initFAQAccordion() {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Fermer tous les autres accordéons
            faqToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    otherToggle.classList.remove('active');
                    otherToggle.nextElementSibling.classList.remove('show');
                }
            });
            
            // Toggle l'accordéon actuel
            if (isActive) {
                this.classList.remove('active');
                content.classList.remove('show');
            } else {
                this.classList.add('active');
                content.classList.add('show');
            }
        });
    });
}

// === FONCTIONS FORMULAIRE DE CONTACT ===
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Afficher un état de chargement
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...';
        submitButton.disabled = true;
        
        // Simuler l'envoi du formulaire (remplacer par votre logique d'envoi)
        setTimeout(() => {
            // Réinitialiser le bouton
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
            // Afficher un message de succès
            showMessage('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success');
            
            // Réinitialiser le formulaire
            this.reset();
        }, 2000);
    });
    
    // Validation en temps réel
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// === FONCTIONS DE VALIDATION ===
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Retirer les erreurs précédentes
    clearFieldError(e);
    
    // Validation selon le type de champ
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Ce champ est obligatoire');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Veuillez entrer une adresse email valide');
            return false;
        }
    }
    
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[+]?[\d\s\-\(\)]+$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Veuillez entrer un numéro de téléphone valide');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('border-red-500');
    
    // Créer ou mettre à jour le message d'erreur
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('p');
        errorElement.className = 'error-message text-red-500 text-sm mt-1';
        field.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
}

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('border-red-500');
    
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

// === FONCTIONS DE MESSAGES ===
function showMessage(message, type = 'info') {
    // Supprimer les messages précédents
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Créer le nouveau message
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;
    
    // Insérer le message au début du formulaire
    const form = document.getElementById('contactForm');
    if (form) {
        form.insertBefore(messageElement, form.firstChild);
        
        // Supprimer automatiquement après 5 secondes
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// === FONCTIONS ANIMATIONS AU SCROLL ===
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    const elementsToAnimate = document.querySelectorAll('.teacher-card, .gallery-item, article, .bg-white, .bg-gray-50');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// === FONCTIONS SMOOTH SCROLLING ===
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Ajuster pour la navbar fixe
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === FONCTIONS LOADING STATES ===
function initLoadingStates() {
    // Ajouter des états de chargement pour les images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.remove('loading');
        });
        
        img.addEventListener('error', function() {
            this.classList.add('error');
            this.alt = 'Image non disponible';
        });
    });
}

// === FONCTIONS UTILITAIRES ===

// Fonction pour formater les numéros de téléphone
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
    if (match) {
        return `+${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`;
    }
    return phoneNumber;
}

// Fonction pour valider une adresse email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction pour déboucler un tableau
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Fonction pour générer un ID unique
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// === GESTION DES ERREURS ===
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
    // Ici vous pourriez envoyer l'erreur à un service de monitoring
});

// === PERFORMANCE ===
// Lazy loading pour les images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialiser le lazy loading si nécessaire
if ('IntersectionObserver' in window) {
    initLazyLoading();
}

// === ACCESSIBILITÉ ===
// Gestion du focus pour les modals
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// === EXPORT POUR UTILISATION EXTERNE ===
window.SchoolWebsite = {
    showMessage,
    validateField,
    formatPhoneNumber,
    isValidEmail,
    generateId
};
