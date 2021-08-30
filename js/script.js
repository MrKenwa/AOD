"use strict"


//<Menu-burger>==============================================
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuBody = document.querySelector('.menu__body');
   iconMenu.addEventListener("click",function(e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   })
}
//</Menu-burger>===========================================

//<Ibg>==============================================

function ibg(){
      let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if(ibg[i].querySelector('img')){
         ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
   }
}
ibg();
//<Ibg>===================================================

//<Slider>==============================================

$(document).ready(function(){
   $('.slider__body').slick({
      dots: true,
      arrows: false,
      adaptiveHeight: true,
      infinite: false,
      draggable: false
   });
});

//</Slider>==============================================

//<Прокрутка при клике>==============================================

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

         window.scrollTo ({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

//</Прокрутка при клике>==============================================
