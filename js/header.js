document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav    = document.querySelector('.nav-links');

  if (!burger || !nav) {
    console.warn('Burger or nav-links not found.');
    return;
  }

  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });
});
