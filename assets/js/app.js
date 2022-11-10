// menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const body = document.querySelector('.body');

function toggleMenu(e) {
  body.classList.toggle('body--hidden');
  if (e.type === 'touchStart') e.preventDefault();
  mainNav.classList.toggle('main-nav--active');
  menuToggle.classList.toggle('menu-toggle--active');
  const active = menuToggle.classList.contains('menu-toggle--active');
  e.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    e.currentTarget.setAttribute('aria-label', 'Fechar menu');
  } else {
    e.currentTarget.setAttribute('aria-label', 'Abrir menu');
  }
}

menuToggle.addEventListener('click', toggleMenu);
menuToggle.addEventListener('touchStart', toggleMenu);

// accordion
let acc = document.querySelectorAll('.accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
