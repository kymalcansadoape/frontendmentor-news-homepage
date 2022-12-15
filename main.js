let burgerMenu = document.getElementById('burgerMenu');
let sideMenu = document.getElementById('sideMenu');
burgerMenu.addEventListener('click', showMenu);
let closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', hideMenu);

function showMenu(){
    sideMenu.classList.remove('translate-x-full');
    document.getElementById('shadow').classList.remove('hidden');
    document.getElementById('shadow').classList.add('opacity-50');
    
}
function hideMenu(){
    sideMenu.classList.add('translate-x-full');
    document.getElementById('shadow').classList.add('hidden');
    document.getElementById('shadow').classList.add('opacity-0');
    document.getElementById('shadow').classList.remove('opacity-50');
}