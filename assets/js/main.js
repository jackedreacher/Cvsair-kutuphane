function showPage(page) {
  document.getElementById('page-landing')?.classList.add('hidden');
  document.getElementById('page-fan')?.classList.add('hidden');
  document.getElementById('page-hvac')?.classList.add('hidden');
  document.getElementById('page-standart')?.classList.add('hidden');
  
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  
  document.getElementById('page-' + page)?.classList.remove('hidden');
  
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (page === 'standart') {
    const rsBtn = document.querySelector('.std-country-btn[data-country="rs"]');
    if (rsBtn && typeof stdShowCountry === 'function') stdShowCountry('rs', rsBtn);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
  });
});
