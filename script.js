const menuBar = document.querySelector('.bar');
const menuContent = document.querySelector('.menu-content');
const header = document.querySelector('header');
const welcomeSection = document.querySelector('.headlines');
const headlineSection = document.querySelector('.portfolio-content');

const AboutSection = document.querySelector('.about');
const contactSection = document.querySelector('.contact-form');
const closeMenu = document.querySelector('.close-img');
const portfolio = document.querySelector('.portfolio-menu');
const about = document.querySelector('.about-content-menu');
const contact = document.querySelector('.contact-menu');

function toggle() {
  menuBar.style.display = 'block';
}
function close() {
  menuContent.style.display = 'none';
}
function contactContent() {
  menuContent.style.display = 'none';
  contactSection.style.display = 'block';
  header.style.display = 'none';
  welcomeSection.style.display = 'none';
  headlineSection.style.display = 'none';
  AboutSection.style.display = 'none';
}
function portfolioContent() {
  menuContent.style.display = 'none';
  contactSection.style.display = 'none';
  header.style.display = 'none';
  welcomeSection.style.display = 'none';
  headlineSection.style.display = 'block';
  AboutSection.style.display = 'none';
}
function aboutContent() {
  //
  menuContent.style.display = 'none';
  contactSection.style.display = 'none';
  header.style.display = 'none';
  welcomeSection.style.display = 'none';
  headlineSection.style.display = 'none';
  AboutSection.style.display = 'block';
}
function onscroll() {
  menuContent.style.display = 'none';
  contactSection.style.display = '';
  header.style.display = '';
  welcomeSection.style.display = '';
  headlineSection.style.display = '';
  AboutSection.style.display = '';
}

menuBar.addEventListener('click', toggle);
closeMenu.addEventListener('click', close);
contact.addEventListener('click', contactContent);
window.addEventListener('scroll', onscroll);
portfolio.addEventListener('click', portfolioContent);
about.addEventListener('click', aboutContent);
