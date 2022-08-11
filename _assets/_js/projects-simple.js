
//----------------< Title >

var adicionar = document.querySelector('main');
var headerBar = document.createElement('div');

headerBar.classList.add('header-bar');
headerBar.innerHTML = ` <div class="field-title">
                            <div class="open_tabs">
                                <a class="txt_categoria" href="index.html">Home</a>
                                <a class="txt_maiorque">></a>
                                <a class="txt_categoria">Projects</a>
                                <a class="txt_maiorque">></a>
                                <a class="txt_categoria">Pokédex</a>
                            </div>
                            <h1>Projeto Pokédex</h1>
                        </div>`;

if(window.innerWidth < 800) {
    adicionar.prepend(headerBar);
}

//===================================================================

//----------------< Barra de Opções - "Dropdown Projects" >

const btn = document.querySelector('#btn-dropdown')
const dropdown = document.querySelector('.dropdown')
const img = document.querySelector('#img-dropdown')

btn.addEventListener('click', () => {
    console.log(isActive);
    if (isActive) {
        isActive = false;
        dropdown.style.display = 'block';
        img.src = 'https://i.postimg.cc/LXJTq4tN/btn-games-open.png';
    } else {
        isActive = true;
        dropdown.style.display = 'none';
        img.src = 'https://i.postimg.cc/BvYpQPKj/btn-games-closed.png';
    }
});
