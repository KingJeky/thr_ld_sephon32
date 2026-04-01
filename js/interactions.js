/* ============================================================
   interactions.js — Button Ripple & Mouse Parallax
   Sephon 32 Landing Page
   ============================================================ */

(function () {
  'use strict';

  /* ============================================
     RIPPLE EFFECT
     Adds a click-ripple to all CTA buttons.
     ============================================ */

  const rippleTargets = document.querySelectorAll(
    '.btn-primary, .btn-cta-mega, .btn-outline, .btn-nav'
  );

  rippleTargets.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect   = this.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height) * 2;

      const ripple       = document.createElement('span');
      ripple.style.cssText = [
        'position: absolute',
        `width: ${size}px`,
        `height: ${size}px`,
        `top: ${e.clientY - rect.top - size / 2}px`,
        `left: ${e.clientX - rect.left - size / 2}px`,
        'background: rgba(255, 255, 255, 0.15)',
        'border-radius: 50%',
        'pointer-events: none',
        'animation: rippleEffect 0.6s ease-out forwards',
      ].join(';');

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  /* ============================================
     HERO PARALLAX GLOW
     Moves the hero ambient glow based on
     the user's mouse position for depth.
     ============================================ */

  const heroSection = document.getElementById('hero');
  const heroGlow1   = heroSection
    ? heroSection.querySelector('.hero-glow-1')
    : null;

  if (heroSection && heroGlow1) {
    heroSection.addEventListener('mousemove', (e) => {
      const { width, height } = heroSection.getBoundingClientRect();
      const xPct = (e.clientX / width  - 0.5) * 20;
      const yPct = (e.clientY / height - 0.5) * 20;
      heroGlow1.style.transform = `translate(${xPct}px, ${yPct}px)`;
    });
  }

})();
