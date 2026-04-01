/* ============================================================
   navbar.js — Navbar Scroll Effect & Hamburger Menu
   Sephon 32 Landing Page (Multi-page Version)
   ============================================================ */

(function () {
  'use strict';

  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');
  const links      = document.querySelectorAll('.nav-link');

  /* ---- Scroll: navbar glass effect ---- */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }

  /* ---- Hamburger toggle ---- */
  function toggleMenu() {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  }

  /* ---- Close menu on link click ---- */
  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  /* ---- Event listeners ---- */
  window.addEventListener('scroll', onScroll, { passive: true });
  hamburger.addEventListener('click', toggleMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));

})();
