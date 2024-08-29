'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};



for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header=document.querySelector('.header');
const allSelections=document.querySelectorAll('.section');
console.log(allSelections);

document.getElementById('section--1');
const allButtons=document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

const message=document.createElement('div');
message.classList.add('cookie-message'); 

message.innerHTML=
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message); 
header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  message.parentElement.removeChild(message);
});

message.style.backgroundColor='#37383d';
message.style.width='120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height=
  Number.parseFloat(getComputedStyle(message).height,10)+30+ 'px';

document.documentElement.style.setProperty('--color-primary','orangered');//hoverすると色が変わる

const logo=document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt='Beautiful minimalist logo';

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Bankist');


console.log(logo.src);
console.log(logo.getAttribute('src'));

const link=document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

console.log(logo.dataset.versionNumber);

logo.classList.add('c','j');
logo.classList.remove('c','j');
logo.classList.toggle('c');
logo.classList.contains('c');

logo.className='jonas';

//------------------
const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  const s1coords=section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y))',window.pageXOffset,pageYOffset);

  console.log('height/width viewport',document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({behavior: 'smooth'});//正直　違いがわからない  
});

const h1=document.querySelector('h1');

const alertH1= function(e){
  alert('addEventListener: You are readingthe heading :D');
};


h1.addEventListener('mouseenter',alertH1);

setTimeout(() => h1.removeEventListener('mouseenter',alertH1),3000);