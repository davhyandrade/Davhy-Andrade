
//----------------< Dropdown - "Dropdown da Option Bar Design" >

const btn_dropdown = document.querySelector('#btn-dropdown')
const img_dropdown = document.querySelector('#img-dropdown')
const dropdown = document.querySelector('.dropdown')

btn_dropdown.addEventListener('click', () => {
    console.log(isActive);
    if (isActive) {
        isActive = false;
        dropdown.style.display = 'block';
        img_dropdown.src = '_assets/_img/btn_games_open.png';
    } else {
        isActive = true;
        dropdown.style.display = 'none';
        img_dropdown.src = '_assets/_img/btn_games_closed.png';
    }
}); 

//===================================================================

//----------------< Fullscreen - "Tela cheia no Carrossel" >

let myDocument = document.querySelector(".field-carrossel-image ");
const btn_fullscreen_gallery = document.querySelector("#fullscreen-gallery");
const field_carrossel_image = document.querySelector(".field-carrossel-image");
let isFullscreen = false;// Variável de Verificacão para o carrossel

btn_fullscreen_gallery.addEventListener("click", ()=>{

    if(btn_fullscreen_gallery.textContent == "Go Fullscreen"){
        if (myDocument.requestFullscreen) {
            myDocument.requestFullscreen();
        } 
        else if (myDocument.msRequestFullscreen) {
            myDocument.msRequestFullscreen();
        } 
        else if (myDocument.mozRequestFullScreen) {
            myDocument.mozRequestFullScreen();
        }
        else if(myDocument.webkitRequestFullscreen) {
            myDocument.webkitRequestFullscreen();
        }

        i = 0;
        porcentagem = 0; 
        carrossel[0].style.transform = `translateX(0)`;

        field_carrossel_image.classList.add('fullscreen');
        btn_fullscreen_gallery.src = "_assets/_img/fullscreen_exit.png";
        btn_fullscreen_gallery.textContent = "Exit Fullscreen";
    }

    else {

        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen) {
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen) {
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
        }

        i = 0;
        porcentagem = 0; 
        carrossel[0].style.transform = `translateX(0)`;

        field_carrossel_image.classList.remove('fullscreen');
        btn_fullscreen_gallery.src = "_assets/_img/fullscreen.png";
        btn_fullscreen_gallery.textContent = "Go Fullscreen";
    }

});

//===================================================================

//----------------< Carrossel >

const btnNext = document.querySelector('#btn-avancar-carrossel-gallery');
const btnBack = document.querySelector('#btn-voltar-carrossel-gallery');
const carrossel = document.querySelectorAll('.carrossel-image div');
let quant = document.querySelectorAll('.carrossel-image img');
let i = 0;
let porcentagem = 0;
let numeroParaPassarSlide = 100;
let porcentagemDaUltimaImagem  = -numeroParaPassarSlide * (quant.length-1);

btnNext.addEventListener('click', () => {

    i++;

    if(i < quant.length) {
        porcentagem -= numeroParaPassarSlide;
            carrossel[0].style.transform = `translateX(${porcentagem}%)`;
    }

    else {
        i = 0;
        porcentagem = 0;
        carrossel[0].style.transform = `translateX(0)`;
    }

});

btnBack.addEventListener('click', () => {

    i--;

    if((i < quant.length)&&(i >= 0)) {
        porcentagem += numeroParaPassarSlide;
        carrossel[0].style.transform = `translateX(${porcentagem}%)`;
    }

    else {
        i = quant.length-1;
        porcentagem = -(numeroParaPassarSlide * (quant.length-1));
        carrossel[0].style.transform = `translateX(${porcentagemDaUltimaImagem}%)`;
    }

});

//===================================================================

//----------------< Imagem - "Adicionando Imagem no mobile" >

var adicionarImagemMobile = document.querySelector('#adicionar-imagem-mobile');
var primeiraImagem = document.createElement('div');

if(window.innerWidth < 800) {

    primeiraImagem.classList.add('img-gallery');
    primeiraImagem.classList.add('shadow-image');
    adicionarImagemMobile.appendChild(primeiraImagem);

}
