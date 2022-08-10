//===================================================================

//----------------< Carrossel - "Slide da Tabelas" >

const btnAvancarCarrosselSonic= document.querySelector('#btn-avancar-carrossel-tabelas');
const btnVoltarCarrosselSonic= document.querySelector('#btn-voltar-carrossel-tabelas');
const carrosselTabelas= document.querySelectorAll('#carrossel-tabelas div');
const quantCarrosselTabela = document.querySelectorAll('#carrossel-tabelas img');
let iSlideTabelas = 0;
let porcentagemSlideTabelas = 0;
let numeroParaPassarSlideTabelas = 70;
let porcentagemDaUltimaImagemSlideTabelas  = -numeroParaPassarSlideTabelas * (quantCarrosselTabela.length-1);

btnAvancarCarrosselSonic.addEventListener('click', () => {

    iSlideTabelas++;

    if(iSlideTabelas < quantCarrosselTabela.length){
        porcentagemSlideTabelas -= numeroParaPassarSlideTabelas;
        carrosselTabelas[0].style.transform = `translateX(${porcentagemSlideTabelas}%)`;
    }

    else{
        iSlideTabelas = 0;
        porcentagemSlideTabelas = 0;
        carrosselTabelas[0].style.transform = `translateX(0)`;
    }

    console.log('-----------\nPosição = '+iSlideTabelas);
    console.log('Pixels = '+porcentagemSlideTabelas+'%');

});

btnVoltarCarrosselSonic.addEventListener('click', () => {

    iSlideTabelas--;

    if((iSlideTabelas < quantCarrosselTabela.length)&&(iSlideTabelas >= 0)) {
        porcentagemSlideTabelas += numeroParaPassarSlideTabelas;
        carrosselTabelas[0].style.transform = `translateX(${porcentagemSlideTabelas}%)`;
    }

    else {
        iSlideTabelas = quantCarrosselTabela.length-1;
        porcentagemSlideTabelas = -(numeroParaPassarSlideTabelas * (quantCarrosselTabela.length-1));
        carrosselTabelas[0].style.transform = `translateX(${porcentagemDaUltimaImagemSlideTabelas}%)`;
    }


    console.log('-----------\nPosição = '+iSlideTabelas);
    console.log('Pixels = '+porcentagemSlideTabelas+'%');

});

//===================================================================

//----------------< Imagem - "Adicionando Imagem no mobile" >

primeiraImagem.innerHTML = '<img src="_assets/_img/pagina-esportivos/img-gallery-esportivos1.png" alt="Imagem">';