// for navigation bar responsive
const menu = document.querySelector('.menu');
const showMenu = document.querySelector('nav ul');

menu.addEventListener('click',()=>{
    showMenu.classList.toggle('showmenu');
});
// for inside the more detials tshirt color changing events
// when tshirt clicked
const tshirt1 = document.getElementById('tshirt1');
const tshirt2 = document.getElementById('tshirt2');

const showImg = document.getElementById('show-img');

const color1 = document.getElementById('r1-color');
const color2 = document.getElementById('r2-color');
const color = document.getElementById('color');

tshirt1.addEventListener('click',()=>{
    showImg.src = '/t shirts/white tshirt.jpg';
    color1.checked = true;
    color.innerHTML = 'White'
});
tshirt2.addEventListener('click',()=>{
    showImg.src = '/t shirts/ts1.jpeg';
    color2.checked = true;
    color.innerHTML = 'Grey'; 
});
//  color radio btn clicks
color1.onclick =()=>{
    color.innerHTML = 'White'
    showImg.src = '/t shirts/white tshirt.jpg';
} 
color2.onclick =()=>{
    color.innerHTML = 'Grey';
showImg.src = '/t shirts/ts1.jpeg';
}
// size change
const size = document.querySelector('#sizes h4');

function Ssize(){
    size.textContent = 'S';
}
function Msize(){
    size.textContent = 'M';
}
function Lsize(){
    size.textContent = 'L';
}
function XLsize(){
    size.textContent = 'XL';
}
function XXLsize(){
    size.textContent = 'XXL';
}
