// ========================================
// NAV SCROLL EFFECT
// ========================================
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 40) {
        nav.classList.add('nav--scrolled');
    } else {
        nav.classList.remove('nav--scrolled');
    }
    lastScroll = currentScroll;
}, { passive: true });

// ========================================
// SCROLL REVEAL
// ========================================
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Free GPU layer after transition ends
            entry.target.addEventListener('transitionend', () => {
                entry.target.style.willChange = 'auto';
            }, { once: true });
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ========================================
// SMOOTH SCROLL FOR NAV LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========================================
// CARD TILT EFFECT (subtle, desktop only)
// ========================================
if (window.matchMedia('(min-width: 769px)').matches) {
    document.querySelectorAll('.card').forEach(card => {
        let ticking = false;
        card.addEventListener('mousemove', (e) => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -3;
                const rotateY = ((x - centerX) / centerX) * 3;
                card.style.transform = `translateY(-4px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                ticking = false;
            });
        }, { passive: true });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ========================================
// CAROUSEL AUTO-SCROLL & DRAG
// ========================================
const carousels = document.querySelectorAll('.cards--carousel');
carousels.forEach(carousel => {
    // Clone children to create an infinite scroll illusion
    const children = Array.from(carousel.children);
    children.forEach(child => {
        const clone = child.cloneNode(true);
        // Remove scroll reveal attributes from clones to avoid re-triggering
        clone.removeAttribute('data-reveal');
        clone.classList.add('revealed');
        carousel.appendChild(clone);
    });

    let isAutoScrolling = true;
    let isDown = false;
    let startX;
    let scrollLeftPos;

    const autoScroll = () => {
        if (isAutoScrolling && !isDown) {
            carousel.scrollLeft += 1;
            // Reset seamlessly when scrolled halfway (past original items)
            if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                carousel.scrollLeft = 0;
            }
        }
        requestAnimationFrame(autoScroll);
    };
    requestAnimationFrame(autoScroll);

    // Pause auto-scroll on hover/touch
    carousel.addEventListener('mouseenter', () => isAutoScrolling = false);
    carousel.addEventListener('mouseleave', () => {
        isAutoScrolling = true;
        isDown = false;
        carousel.style.cursor = 'grab';
    });
    carousel.addEventListener('touchstart', () => isAutoScrolling = false, {passive: true});
    carousel.addEventListener('touchend', () => isAutoScrolling = true, {passive: true});

    // Manual drag logic
    carousel.style.cursor = 'grab';
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        isAutoScrolling = false;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeftPos = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    });
    carousel.addEventListener('mouseup', () => {
        isDown = false;
        isAutoScrolling = true;
        carousel.style.cursor = 'grab';
    });
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast multiplier
        carousel.scrollLeft = scrollLeftPos - walk;
    });
});
