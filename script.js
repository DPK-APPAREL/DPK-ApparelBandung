const WA_NUMBERS = {
  primary: '6285137267771',
  secondary: '6285187318878'
};

document.getElementById('year').textContent = new Date().getFullYear();

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navMenu');
hamburger?.addEventListener('click', () => nav?.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Pilih produk dari kartu produk/kategori bila nanti ditambahkan data-product.
document.querySelectorAll('[data-product]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.getElementById('product');
    if (select && link.dataset.product) select.value = link.dataset.product;
  });
});

const form = document.getElementById('orderForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const product = document.getElementById('product').value;
  const qty = document.getElementById('qty').value;
  const notes = document.getElementById('notes').value.trim() || '-';
  const message = `Halo DPK Jersey Bandung, saya mau konsultasi/order custom jersey.\n\nNama/Tim: ${name}\nProduk: ${product}\nJumlah: ${qty} pcs/stel\nCatatan: ${notes}\n\nMohon info harga dan proses selanjutnya. Terima kasih.`;
  window.open(`https://wa.me/${WA_NUMBERS.secondary}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

// FAQ accordion
const faqButtons = document.querySelectorAll('.faq button');
faqButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    faqButtons.forEach(other => {
      if (other !== btn) other.classList.remove('open');
    });
    btn.classList.toggle('open');
  });
});

// Reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section > .container, .quick-features .container, .promo-inner, footer .container').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Shadow navbar on scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
