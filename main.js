var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalX = document.querySelector('.mark-x');
// alert ("heyyyyyyyyyy")
console.log(modalBtn)

modalBtn.addEventListener('click',function(){
   modalBg.classList.add('bg-active')
}) 

modalX.addEventListener('click',function(){
   modalBg.classList.remove('bg-active')
})
