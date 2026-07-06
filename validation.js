/**
 * EcoTech Solutions – validation.js
 * Contact form validation: required fields, email format,
 * phone number, min message length, inline error messages,
 * success state, prevents invalid submission.
 */

(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  if (!form) return;

  /* ── Field references ─────────────────────────────────────── */
  const fields = {
    firstName : form.querySelector('#first-name'),
    lastName  : form.querySelector('#last-name'),
    email     : form.querySelector('#email'),
    phone     : form.querySelector('#phone'),
    subject   : form.querySelector('#subject'),
    message   : form.querySelector('#message'),
  };

  const errors = {
    firstName : form.querySelector('#error-first-name'),
    lastName  : form.querySelector('#error-last-name'),
    email     : form.querySelector('#error-email'),
    phone     : form.querySelector('#error-phone'),
    subject   : form.querySelector('#error-subject'),
    message   : form.querySelector('#error-message'),
  };

  const submitBtn = form.querySelector('#submit-btn');
  const successEl = document.getElementById('form-success');

  /* ── Regex patterns ───────────────────────────────────────── */
  const RE = {
    email : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    phone : /^[+]?[\d\s\-().]{7,20}$/,
  };

  /* ── Helper: set field state ─────────────────────────────── */
  function setError(fieldKey, message) {
    const input = fields[fieldKey];
    const error = errors[fieldKey];
    if (!input || !error) return false;

    input.classList.remove('valid');
    input.classList.add('error');
    error.textContent = '⚠ ' + message;
    input.setAttribute('aria-invalid', 'true');
    return false;
  }

  function setValid(fieldKey) {
    const input = fields[fieldKey];
    const error = errors[fieldKey];
    if (!input || !error) return true;

    input.classList.remove('error');
    input.classList.add('valid');
    error.textContent = '';
    input.setAttribute('aria-invalid', 'false');
    return true;
  }

  function clearState(fieldKey) {
    const input = fields[fieldKey];
    const error = errors[fieldKey];
    if (!input || !error) return;
    input.classList.remove('error', 'valid');
    error.textContent = '';
    input.removeAttribute('aria-invalid');
  }

  /* ── Individual validators ────────────────────────────────── */
  function validateFirstName() {
    const val = fields.firstName ? fields.firstName.value.trim() : '';
    if (!val)              return setError('firstName', 'First name is required.');
    if (val.length < 2)   return setError('firstName', 'First name must be at least 2 characters.');
    if (val.length > 50)  return setError('firstName', 'First name must be under 50 characters.');
    return setValid('firstName');
  }

  function validateLastName() {
    const val = fields.lastName ? fields.lastName.value.trim() : '';
    if (!val)              return setError('lastName', 'Last name is required.');
    if (val.length < 2)   return setError('lastName', 'Last name must be at least 2 characters.');
    if (val.length > 50)  return setError('lastName', 'Last name must be under 50 characters.');
    return setValid('lastName');
  }

  function validateEmail() {
    const val = fields.email ? fields.email.value.trim() : '';
    if (!val)                   return setError('email', 'Email address is required.');
    if (!RE.email.test(val))    return setError('email', 'Please enter a valid email address.');
    return setValid('email');
  }

  function validatePhone() {
    const val = fields.phone ? fields.phone.value.trim() : '';
    if (!val) return setValid('phone'); // Phone is optional but validated if provided
    if (!RE.phone.test(val)) return setError('phone', 'Please enter a valid phone number.');
    return setValid('phone');
  }

  function validateSubject() {
    const val = fields.subject ? fields.subject.value.trim() : '';
    if (!val) return setError('subject', 'Please enter a subject.');
    if (val.length < 3) return setError('subject', 'Subject must be at least 3 characters.');
    return setValid('subject');
  }

  function validateMessage() {
    const val = fields.message ? fields.message.value.trim() : '';
    if (!val)              return setError('message', 'Message is required.');
    if (val.length < 20)  return setError('message', `Message must be at least 20 characters. (${val.length}/20)`);
    if (val.length > 2000) return setError('message', 'Message must be under 2000 characters.');
    return setValid('message');
  }

  /* ── Live validation on blur ─────────────────────────────── */
  const validators = {
    firstName : validateFirstName,
    lastName  : validateLastName,
    email     : validateEmail,
    phone     : validatePhone,
    subject   : validateSubject,
    message   : validateMessage,
  };

  Object.entries(fields).forEach(([key, el]) => {
    if (!el) return;

    // Validate on blur
    el.addEventListener('blur', () => validators[key]());

    // Clear error on input (re-validate only if already in error state)
    el.addEventListener('input', () => {
      if (el.classList.contains('error')) validators[key]();
      // Live char count for message
      if (key === 'message') {
        const len = el.value.trim().length;
        const err = errors.message;
        if (err && el.classList.contains('error') && len > 0 && len < 20) {
          err.textContent = `⚠ Message must be at least 20 characters. (${len}/20)`;
        }
      }
    });
  });

  /* ── Form Submit ─────────────────────────────────────────── */
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Run all validators
    const results = [
      validateFirstName(),
      validateLastName(),
      validateEmail(),
      validatePhone(),
      validateSubject(),
      validateMessage(),
    ];

    const isValid = results.every(r => r === true);

    if (!isValid) {
      // Scroll to first error
      const firstError = form.querySelector('.form-input.error, .form-textarea.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }

    /* ── Simulate API submission ─────────────────────────── */
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:spin 1s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        Sending…
      `;
    }

    setTimeout(() => {
      // Hide form, show success
      form.style.display = 'none';
      if (successEl) {
        successEl.classList.add('show');
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Reset after 6s
      setTimeout(() => {
        form.reset();
        Object.keys(fields).forEach(k => clearState(k));
        form.style.display = 'block';
        if (successEl) successEl.classList.remove('show');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
        }
      }, 6000);
    }, 1800);
  });

  /* ── Inline CSS for spinner ─────────────────────────────── */
  const spinStyle = document.createElement('style');
  spinStyle.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
  document.head.appendChild(spinStyle);

})();
