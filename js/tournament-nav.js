// jump when the user selects another year
document
  .getElementById("year-select")
  .addEventListener("change", function() {
    window.location.href = this.value;
  });


document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav    = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });
});
