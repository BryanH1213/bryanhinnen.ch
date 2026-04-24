// =====================
// Theme toggle
// =====================
const root = document.documentElement;
const btn = document.getElementById('theme-toggle');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  btn.setAttribute('aria-label', theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
}

applyTheme(root.getAttribute('data-theme'));

btn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

// =====================
// Fade-in on scroll
// =====================
const sections = document.querySelectorAll('#services, #about, #contact, .footer');
const projectCards = document.querySelectorAll('.project-card');
const serviceCards = document.querySelectorAll('.service-card');

sections.forEach(el => el.classList.add('fade-in'));

projectCards.forEach((card, i) => {
  card.classList.add('fade-in');
  card.style.transitionDelay = `${i * 0.08}s`;
});

serviceCards.forEach((card, i) => {
  card.classList.add('fade-in');
  card.style.transitionDelay = `${i * 0.08}s`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in--visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

[...sections, ...projectCards, ...serviceCards].forEach(el => observer.observe(el));

// =====================
// Contact form — builds a mailto: with formatted body
// =====================
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const firstname = data.get('firstname').trim();
    const lastname = data.get('lastname').trim();
    const company = data.get('company').trim();
    const email = data.get('email').trim();
    const phone = data.get('phone').trim();
    const methods = data.getAll('contact_method');
    const service = data.get('service');
    const description = data.get('description').trim();

    const subject = `[Portfolio] ${service} — ${firstname} ${lastname}`;
    const body = [
      `Prénom : ${firstname}`,
      `Nom : ${lastname}`,
      `Entreprise : ${company || '—'}`,
      `Email : ${email}`,
      `Téléphone : ${phone || '—'}`,
      `Contact préféré : ${methods.join(', ') || 'Email'}`,
      `Service : ${service}`,
      '',
      'Description :',
      description
    ].join('\n');

    const mailtoUrl = `mailto:bryanhinnen.rs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    contactStatus.textContent = 'Votre client mail s\'est ouvert avec votre demande pré-remplie. Vérifiez et envoyez le message pour finaliser.';
    contactStatus.classList.add('contact-form__status--success');
  });
}
