var adicionar = document.querySelector('body');
var btnTop = document.createElement('div');

btnTop.classList.add('btn-top');
btnTop.innerHTML = '<img src="_assets/_img/btn_hide.png" alt="Botão Topo">';
adicionar.prepend(btnTop);

//===================================================================

//----------------< Botão Home Screen - "Levar até o topo da tela" >

btnTop.addEventListener('click', () => {
    window.scrollTo(0,0);
  });

setInterval(() => {

    if(window.scrollY > 150) {
        btnTop.style.display = 'flex';
    }

    else if(window.scrollY <= 150) {
        btnTop.style.display = 'none';
    }

}, 100);    
