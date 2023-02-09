
const menuBar = document.querySelector('.bar');
const menuContent = document.querySelector('.menu-content');
const closeMenu = document.querySelector('.close-img');
const portfolio = document.querySelector('.portfolio-menu');
const about = document.querySelector('.about-content-menu');
const contact = document.querySelector('.contact-menu');
const openModalButtons=document.querySelectorAll('[data-modal-target]');
const closeModalButtons=document.querySelectorAll('[data-close-button]');
const overLay=document.getElementById('overlay');
let modaldiv=document.querySelector('.title-1');
let feature=document.querySelector('.feature_image')
// let seeLive=document.querySelector('.see-live')
// let seeSource=document.querySelector('see-source');
let modalBody=document.querySelector('.pop-body')
let buttons=document.querySelector('.buto')
let paragraph=document.querySelector('.paragraph')
let closeButton=document.querySelector('.close-button')
let linkButtons=document.querySelector('.button-comp')

openModalButtons.forEach(button =>{
   button.addEventListener('click',()=>{
      const modal=document.querySelector(button.dataset.modalTarget);
      openModal(modal)
   }) 
})
closeModalButtons.forEach(button =>{
   button.addEventListener('click',()=>{
      const modal= button.closest('.pop')
      closeModal(modal)
   }) 
})

function openModal(modal){
   if(modal == null) return 
   modal.classList.add('active');
   overlay.classList.add('active');
   
   }

function closeModal(modal){
  if(modal == null) return 
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
let arrayOfObject=[
  {
      name:'Multi Post Stories',
      close_button:'&times',
      feature_image:'images/feature_image.png',
      list_of_technologies:['html','Bootstrap','Ruby on rails'],
      description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries,but also the leap into electronic typesetting, remaining essent`,        
      see_live:'https://clin2on3mun.github.io/',
      see_source:'https://github.com/clin2on3mun/portfolio-project'   
   },
   {
      name: 'Profesional Art Printing Data',
      close_button:'&times',
      feature_image:'images/feature_image.png',
      list_of_technologies:['html','Bootstrap','Ruby on rails'],
      description:`A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard`,
      see_live:'https://clin2on3mun.github.io/',
      see_source:'https://github.com/clin2on3mun/portfolio-project'

   }]

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




function openPop(arg){
   let result=arrayOfObject[arg];
   modaldiv.innerHTML=result.name;
   closeButton.innerHTML=result.close_button;
   buttons.innerHTML="";
   for(let i=0; i<result.list_of_technologies.length;i++){
      buttons.innerHTML+='<button class="buttons-top btn">'+result.list_of_technologies[i]+ '</button>';
   }
   
   document.querySelector('#image').src = result.feature_image;
   paragraph.innerHTML=result.description;
   linkButtons.innerHTML=`<div class="btnbutton"><a href=${result.see_live} class="see-live">See live</a><img src="images/icon.png"></div>`
   linkButtons.innerHTML+=`<div class="btnbutton"><a href=${result.see_source} class="see-source">See Source</a><img src="images/group.png"></div> `
   
}




      
      
   
      


