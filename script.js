const menuBar = document.querySelector('.bar');
const menuContent = document.querySelector('.menu-content');
const closeMenu = document.querySelector('.close-img');
const portfolio = document.querySelector('.portfolio-menu');
const about = document.querySelector('.about-content-menu');
const contact = document.querySelector('.contact-menu');

function toggle() {
  menuContent.style.display = 'block';
}
function close() {
  menuContent.style.display = 'none';
}
function contactContent() {
  menuContent.style.display = 'none';
}
function portfolioContent() {
  menuContent.style.display = 'none';
}
function aboutContent() {
  menuContent.style.display = 'none';
}

menuBar.addEventListener('click', toggle);
closeMenu.addEventListener('click', close);
portfolio.addEventListener('click', portfolioContent);
about.addEventListener('click', aboutContent);
contact.addEventListener('click', contactContent);
