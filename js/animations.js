/* ============================================================
   animations.js — Scroll Reveal & Floating Card Counters
   Sephon 32 Landing Page
   ============================================================ */

(function () {
  'use strict';

  /* ============================================
     SCROLL REVEAL
     Applies .reveal class to targeted elements,
     then adds .visible when they enter viewport.
     ============================================ */

  const revealSelectors = [
    '.sensor-card',
    '.feature-item',
    '.target-card',
    '.edu-includes',
    '.section-header',
    '.cta-content',
    '.footer-grid',
  ];

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  revealSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${index * 0.08}s`;
      revealObserver.observe(el);
    });
  });

  /* ============================================
     FLOATING CARD COUNTER ANIMATION
     Animates sensor value numbers on page load
     with an eased count-up effect.
     ============================================ */

  /**
   * Animate a numeric value in an element.
   * @param {HTMLElement} el       - Target element
   * @param {number}      start    - Start value
   * @param {number}      end      - End value
   * @param {number}      decimals - Decimal places
   * @param {number}      duration - Duration in ms
   * @param {string}      suffix   - Text appended after value
   */
  function animateValue(el, start, end, decimals, duration, suffix = '') {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed  = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value    = start + (end - start) * eased;

      el.textContent = value.toFixed(decimals) + suffix;

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      const phEl   = document.querySelector('.card-ph   .fc-value');
      const turbEl = document.querySelector('.card-turb .fc-value');
      const tempEl = document.querySelector('.card-temp .fc-value');

      if (phEl)   animateValue(phEl,   0,    7.42, 2, 2000);
      if (turbEl) animateValue(turbEl, 0,    12,   0, 1800, ' NTU');
      if (tempEl) animateValue(tempEl, 0,  28.5,   1, 2200, '°C');
    }, 800);
  });

})();
