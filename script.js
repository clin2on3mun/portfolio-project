window.onload=function(){
const menuBar = document.querySelector('.bar');
const menuContent = document.querySelector('.menu-content');
const closeMenu = document.querySelector('.close-img');
const portfolio = document.querySelector('.portfolio-menu');
const about = document.querySelector('.about-content-menu');
const contact = document.querySelector('.contact-menu');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const card = document.querySelector('.card');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.pop');
    closeModal(modal);
  });
});

const arrayOfObject = [

  {
    id: 1,
    name1: 'Profesional Art',
    name2: 'Printing Data',
    close_button: '&times',
    feature_image: 'images/feature_image.png',
    listOfTechnologies: ['html', 'Css', 'Ruby'],
    cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    seeLive: 'https://clin2on3mun.github.io/',
    seeSource: 'https://github.com/clin2on3mun/portfolio-project',
    seeProject: 'see project',
  },
  {
    id: 2,
    name1: 'Profesional Art',
    name2: 'Printing Data',
    close_button: '&times',
    feature_image: 'images/feature_image.png',
    listOfTechnologies: ['html', 'Css', 'Ruby'],
    cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    seeLive: 'https://clin2on3mun.github.io/',
    seeSource: 'https://github.com/clin2on3mun/portfolio-project',
    seeProject: 'see project',
  },
  {
    id: 3,
    name1: 'Profesional Art',
    name2: 'Printing Data',
    closeButton: '&times',
    feature_image: 'images/feature_image.png',
    listOfTechnologies: ['html', 'Css', 'Ruby'],
    cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    seeLive: 'https://clin2on3mun.github.io/',
    seeSource: 'https://github.com/clin2on3mun/portfolio-project',
    seeProject: 'see project',
  },
  {
    id: 4,
    name1: 'Profesional Art',
    name2: 'Printing Data',
    closeButton: '&times',
    feature_image: 'images/feature_image.png',
    listOfTechnologies: ['html', 'Css', 'Ruby'],
    cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    seeLive: 'https://clin2on3mun.github.io/',
    seeSource: 'https://github.com/clin2on3mun/portfolio-project',
    seeProject: 'see project',
  },
  {
    id: 5,
    name1: 'Profesional Art',
    name2: 'Printing Data',
    closeButton: '&times',
    feature_image: 'images/feature_image.png',
    listOfTechnologies: ['html', 'Css', 'Ruby'],
    cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    seeLive: 'https://clin2on3mun.github.io/',
    seeSource: 'https://github.com/clin2on3mun/portfolio-project',
    seeProject: 'see project',
  },
  {
    id: 6,
    name1: 'Profesional Art',
    name2: 'Printing Data',
    close_button: '&times',
    feature_image: 'images/feature_image.png',
    listOfTechnologies: ['html', 'Css', 'Ruby'],
    cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    seeLive: 'https://clin2on3mun.github.io/',
    seeSource: 'https://github.com/clin2on3mun/portfolio-project',
    seeProject: 'see project',
  },

];
function renderCards() {
  card.innerHTML = arrayOfObject.map((x) => {
    const {
      name1, name2, cardDescription, listOfTechnologies, seeProject,
    } = x;
    return `<div class="post post11">
<div class="post-title">
   <h1>${name1}</h1>
   <h1>${name2}</h1>
</div>
<div class="post-content">
   <p>${cardDescription}</p>
</div>
<div class="btn-courses ">
   <button type="button" class="function">${listOfTechnologies[0]}</button>
   <button type="button" class="function">${listOfTechnologies[1]}</button>
   <button type="button" class="function">${listOfTechnologies[2]}</button>

</div>
<div class="btn-allProjects">
   <button data-modal-target="#modal" type="button">${seeProject}</button>
</div>
</div>
<div class="modal">
<div class="pop" id="modal"> 
  <div class="pop-header">
    <p class="title-1"></p>
    <button data-close-button type="button"class="close-button"></button>   
  </div>
  <div class="pop-body">
    <div class=buto></div>
    <div class="newDiv">
      <img class="feature_image" src="image/feature_image.png" id="image"> 
      <div class="modal-text-buttons">
                    <p class="paragraph"></p> 
          <div class="buttonLinks button-comp"></div>  
                </div>
    </div>  
    
</div> 
</div>   

  <div id="overlay"></div>
</div>
</div> 

`;
  }).join('');
}

renderCards();

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


}