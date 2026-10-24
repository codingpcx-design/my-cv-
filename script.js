/* ============================================
   SCRIPT.JS — Anas Boulaanan CV
   Subtle interactivity & polish
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // ----- 1. Entrance animation for glass cards -----
    const cards = document.querySelectorAll('.glass');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 120 + i * 90);
    });

    // ----- 2. Staggered entrance for skill items -----
    const skillItems = document.querySelectorAll('.skill-list li');
    skillItems.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-14px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + i * 80);
    });

    // ----- 3. Staggered entrance for project cards -----
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(18px)';
        card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 700 + i * 100);
    });

    // ----- 4. Dynamic glow tracking on skill items (mouse-based light) -----
    const skillListItems = document.querySelectorAll('.skill-list li');
    skillListItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            item.style.background = `radial-gradient(circle at ${x}% ${y}%,
                rgba(168, 85, 247, 0.28),
                rgba(59, 130, 246, 0.10) 45%,
                rgba(139, 92, 246, 0.06) 80%)`;
        });
        item.addEventListener('mouseleave', () => {
            item.style.background = '';
        });
    });

    // ----- 5. Card tilt effect for project cards -----
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = ((y / rect.height) - 0.5) * -8;
            const rotateY = ((x / rect.width) - 0.5) * 8;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ----- 6. Smooth scroll for internal links (if any) -----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ----- 7. Chip hover glow color shift -----
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('mouseenter', () => {
            chip.style.boxShadow = '0 0 24px rgba(139, 92, 246, 0.55)';
        });
        chip.addEventListener('mouseleave', () => {
            chip.style.boxShadow = '';
        });
    });

    // ----- 8. Dynamic year in footer (auto-update) -----
    const footer = document.querySelector('.cv-footer p:first-child');
    if (footer) {
        const currentYear = new Date().getFullYear();
        // If you want to show year, uncomment the line below and adjust HTML
        // footer.insertAdjacentHTML('afterbegin', `© ${currentYear} · `);
    }

    // ----- 9. Console signature -----
    console.log(
        '%c👋 Anas Boulaanan — 14 y.o. Moroccan dev',
        'background: linear-gradient(90deg, #7c3aed, #3b82f6); color: #fff; font-size: 14px; font-weight: 600; padding: 10px 20px; border-radius: 30px;'
    );
    console.log(
        '%c⚡ HTML · CSS · JavaScript · Flask · Python · MySQL',
        'color: #c084fc; font-size: 12px; padding: 4px 12px; border-left: 3px solid #a855f7;'
    );

    // ----- 10. Page visibility: pause heavy animations when tab hidden -----
    document.addEventListener('visibilitychange', () => {
        const bg = document.querySelector('.gradient-bg');
        if (bg) {
            bg.style.animationPlayState = document.hidden ? 'paused' : 'running';
        }
    });
});