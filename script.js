/**
 * EcoTech Solutions – script.js
 * Main JavaScript: navbar, mobile menu, FAQ, counters,
 * scroll reveal, back-to-top, newsletter, smooth scroll
 */

(function () {
  'use strict';

  /* ─── Page Loader ────────────────────────────────────────── */
  window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    setTimeout(() => {
      loader.classList.add('hidden');
      // Remove from DOM after transition
      loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    }, 1000);
  });

  /* ─── Sticky Navbar ──────────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('hero-nav');
    } else {
      navbar.classList.remove('scrolled');
      // Only re-add hero-nav on pages that have a hero
      if (document.querySelector('.hero') || document.querySelector('.page-hero')) {
        navbar.classList.add('hero-nav');
      }
    }
  }

  if (navbar) {
    // Mark as hero-nav on load if hero section exists
    if (document.querySelector('.hero') || document.querySelector('.page-hero')) {
      navbar.classList.add('hero-nav');
    }
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();
  }

  /* ─── Active Nav Link ────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link:not(.nav-cta)');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ─── Mobile Hamburger Menu ─────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on nav link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close when clicking outside
    document.addEventListener('click', e => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ─── Smooth Scrolling for Anchor Links ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--navbar-height')) || 80;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });

  /* ─── FAQ Accordion ──────────────────────────────────────── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(other => {
        other.classList.remove('open');
        const otherQ = other.querySelector('.faq-question');
        if (otherQ) otherQ.setAttribute('aria-expanded', 'false');
      });

      // Open clicked (if was closed)
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support
    question.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });

  /* ─── Animated Counters ─────────────────────────────────── */
  function animateCounter(el, target, duration = 2000, suffix = '') {
    const start   = 0;
    const step    = target / (duration / 16);
    let   current = start;

    const update = () => {
      current += step;
      if (current < target) {
        el.textContent = Math.floor(current).toLocaleString() + suffix;
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    };
    requestAnimationFrame(update);
  }

  const counterEls = document.querySelectorAll('[data-count]');
  let countersTriggered = false;

  function checkCounters() {
    if (countersTriggered) return;
    const firstCounter = counterEls[0];
    if (!firstCounter) return;

    const rect = firstCounter.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      countersTriggered = true;
      counterEls.forEach(el => {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, 2200, suffix);
      });
    }
  }

  if (counterEls.length) {
    window.addEventListener('scroll', checkCounters, { passive: true });
    checkCounters();
  }

  /* ─── Scroll Reveal Animations ───────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children').forEach(el => {
    revealObserver.observe(el);
  });

  /* ─── Back to Top Button ────────────────────────────────── */
  const backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── Newsletter Validation ──────────────────────────────── */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const input   = newsletterForm.querySelector('#newsletter-email');
      const msg     = newsletterForm.querySelector('#newsletter-msg');
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!input) return;
      input.classList.remove('error', 'success');
      msg.classList.remove('error');
      msg.textContent = '';

      if (!input.value.trim()) {
        input.classList.add('error');
        msg.classList.add('error');
        msg.textContent = '⚠ Please enter your email address.';
        return;
      }

      if (!emailRe.test(input.value.trim())) {
        input.classList.add('error');
        msg.classList.add('error');
        msg.textContent = '⚠ Please enter a valid email address.';
        return;
      }

      input.classList.add('success');
      msg.textContent = '🎉 Thank you for subscribing! Welcome to EcoTech.';

      const btn = newsletterForm.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Subscribed ✓';
      }

      setTimeout(() => {
        input.value = '';
        input.classList.remove('success');
        msg.textContent = '';
        if (btn) { btn.disabled = false; btn.textContent = 'Subscribe'; }
      }, 4000);
    });
  }

  /* ─── Testimonials Slider (optional auto-rotation on mobile) */
  // Kept simple – CSS handles layout, no JS slider needed for the grid layout.

  /* ─── Navbar logo text color fix on scroll ─────────────── */
  function updateLogoColor() {
    const logoName = document.querySelector('.logo-name');
    const logoTag  = document.querySelector('.logo-tagline');
    if (!logoName || !logoTag) return;

    if (navbar && navbar.classList.contains('scrolled')) {
      logoName.style.color = '';
      logoTag.style.color  = '';
    } else if (navbar && navbar.classList.contains('hero-nav')) {
      logoName.style.color = '#ffffff';
    }
  }

  window.addEventListener('scroll', updateLogoColor, { passive: true });
  updateLogoColor();

})();
