const botaoMobile = document.querySelector ('.botaoMobile');

function toggleMenu(event){
   if(event.type === 'touchstart') event.preventDefault();

   const menuNav = document.querySelector ('.menuNav');
   menuNav.classList.toggle('active');
}

botaoMobile.addEventListener('click', toggleMenu);
botaoMobile.addEventListener('touchstart', toggleMenu);
