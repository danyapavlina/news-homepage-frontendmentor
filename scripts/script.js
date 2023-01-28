const menuButton = document.getElementById('menu-button');
const menuNav = document.getElementById('menu-nav');
const backdrop = document.getElementById('backdrop');
let isMenuOpen = false;

const openMenu = () => {
  menuButton.querySelector('img').src = '/images/icon-menu-close.svg';
  menuNav.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};
const closeMenu = () => {
  menuButton.querySelector('img').src = '/images/icon-menu.svg';
  menuNav.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
};

menuButton.addEventListener('click', () => {
  isMenuOpen ? closeMenu() : openMenu();
  isMenuOpen = !isMenuOpen;
});
backdrop.addEventListener('click', () => {
  isMenuOpen ? closeMenu() : openMenu();
  isMenuOpen = !isMenuOpen;
});
