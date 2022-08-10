let i=1;
let pixels;
let num = 0;

//----------------< Carrossel da Section 4 >

const btn_voltar = document.querySelector('#btn_voltar');
const btn_avancar = document.querySelector('#btn_avancar');
const img_carrossel= document.querySelector('.carrossel-section4');

btn_avancar.addEventListener('click', () => {

    i++;

    if(i <= 4){
        pixels = num += 370;
        img_carrossel.style.right = `${pixels}px`;
    }

    else{
        i = 1;
        num = 0;
        pixels = 0;
        img_carrossel.style.right = '0px';
    }

    console.log('-----------\nImagem = '+i);
    console.log('Pixels = '+pixels+'px');

});

btn_voltar.addEventListener('click', () => {

    i--;

    if((i >= 1)&&(i <= 4)){
        pixels = num -= 370;
        img_carrossel.style.right = `${pixels}px`;
    }

    else{
        i = 4;
        num = 1480;
        pixels = num -= 370;
        img_carrossel.style.right = `${pixels}px`;
    }

    console.log('-----------\nImagem = '+i);
    console.log('Pixels = '+pixels+'px');

});

//===================================================================

//----------------< Carrossel da Section 5 >

const btnAvancarSection5= document.querySelector('#btn-avancar-section5');
const btnVoltarSection5= document.querySelector('#btn-voltar-section5');
const carrosselSection5= document.querySelector('.function-carrossel-section5');

btnVoltarSection5.addEventListener('click', () => {

    i++;

    if(i <= 5){
        pixels = num += 400;
        carrosselSection5.style.left = `${pixels}px`;
    }

    else{
        i = -3;
        num = -2000;
        pixels = num += 400;
        carrosselSection5.style.left = `${pixels}px`;
    }

    console.log('-----------\nImagem = '+i);
    console.log('Pixels = '+pixels+'px');

});

btnAvancarSection5.addEventListener('click', () => {

    i--;

    if((i >= -3)&&(i <= 0)){
        pixels = num -= 400;
        carrosselSection5.style.left = `${pixels}px`;
    }

    else if((i >= 1)&&(i <= 5)){
        pixels = num -= 400;
        carrosselSection5.style.left = `${pixels}px`;
    }

    else {
        i = 5;
        num = 2000;
        pixels = num -= 400;
        carrosselSection5.style.left = `${pixels}px`;
    }
    
    console.log('-----------\nImagem = '+i);
    console.log('Pixels = '+pixels+'px');

});

//===================================================================

//----------------< Textos Section 6 >

const btnAvancarSection6= document.querySelector('#btn-avancar-section6');
const btnVoltarSection6= document.querySelector('#btn-voltar-section6');
const txtPerfis= document.querySelector('.carrossel-perfis');

btnAvancarSection6.addEventListener('click', () => {

    i++;

    if(i <= 3){
        pixels = num += 98.5;
        txtPerfis.style.right = `${pixels}%`;
    }

    else{
        i = 1;
        num = 0;
        pixels = 0;
        txtPerfis.style.right = '0%';
    }

    console.log('-----------\nImagem = '+i);
    console.log('Pixels = '+pixels+'%');

});

btnVoltarSection6.addEventListener('click', () => {

    i--;

    if((i >= 1)&&(i <= 3)){
        pixels = num -= 98.5;
        txtPerfis.style.right = `${pixels}%`;
    }

    else{
        i = 3;
        num = 295.5;
        pixels = num -= 98.5;
        txtPerfis.style.right = `${pixels}%`;
    }

    console.log('-----------\nImagem = '+i);
    console.log('Pixels = '+pixels+'%');

});

