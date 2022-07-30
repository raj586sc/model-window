'use strict'
//show the box
const model = document.querySelector('.hidden');
const closeModel = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const showBox = function(){
    /* document.querySelector('.hidden').style.display = "block" */
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//hide the box
 const closeBox = function(){
    /* document.querySelector('.hidden').style.display = "none" */
    model.classList.add('hidden');
    overlay.classList.add('hidden');
 }



 const show = document.querySelectorAll('.show-modal');
 for (let i = 0; i < show.length; i++){
     show[i].addEventListener('click', showBox)
 }

 const close = document.querySelector('.close-modal');

 close.addEventListener('click', closeBox);
 overlay.addEventListener('click', closeBox);

 document.addEventListener('keydown', function(e){
     /* console.log(e.key); */
     if(e.key === 'Escape' && !model.classList.contains('hidden')){
            closeBox(); 
     } console.log('esc pressed')
 })