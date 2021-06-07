const Hamburger = document.querySelector('.hamburger');
const NavLinks = document.querySelector('.nav-menu');

Hamburger.addEventListener('click', () => {
    NavLinks.classList.toggle('show');
})
