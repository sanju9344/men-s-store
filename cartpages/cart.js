const menu = document.querySelector('.menu');
const showMenu = document.querySelector('nav ul');

menu.addEventListener('click',()=>{
    showMenu.classList.toggle('showmenu');
});
