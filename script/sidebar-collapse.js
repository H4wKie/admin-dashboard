const sidebarIcon = document.getElementsByClassName('side-bar-collapse');
let sideBarElem = document.getElementsByClassName('side-bar');
const mainBoxElem = document.getElementsByClassName('main-box');
const mainHeaderElem = document.getElementsByClassName('main-header');

function sidebarCollapse() {
  const bodyElem = document.querySelector('body');

  if(sideBarElem[0].classList.contains('hidden')) {
    sideBarElem[0].classList.remove('hidden');
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    bodyElem.style.setProperty('overflow-y', 'hidden');
    mainBoxElem[0].style.setProperty('overflow-y',  'auto');
    mainHeaderElem[0].style.setProperty('padding-inline', '40px');
  } else {
    sideBarElem[0].classList.add('hidden');
    bodyElem.style.setProperty('overflow-y', 'auto');
    mainBoxElem[0].style.setProperty('overflow-y', 'visible');
    mainHeaderElem[0].style.setProperty('padding-inline', '80px 20px');
  }
}

function addSidebarEventListener() { 
  sidebarIcon[0].addEventListener('click', ()=> {
    sidebarCollapse();
  });
}

export { addSidebarEventListener }