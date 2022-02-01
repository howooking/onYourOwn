const hamburgerEl = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar__menu');
const share = document.querySelector('.navbar__share');
hamburgerEl.addEventListener('click', () => {
  menu.classList.toggle('active');
  share.classList.toggle('active');
})