
//----------------< Barra de Opções - "Dropdown Games" >

const btn_games = document.querySelector('#btn-games')
const dropdown_games = document.querySelector('.dropdown-games')
const img_games = document.querySelector('#img-games')

btn_games.addEventListener('click', () => {
    console.log(isActive);
    if (isActive) {
        isActive = false;
        dropdown_games.style.display = 'block';
        img_games.src = '_assets/_img/btn_games_open.png';
    } else {
        isActive = true;
        dropdown_games.style.display = 'none';
        img_games.src = '_assets/_img/btn_games_closed.png';
    }
});

//===================================================================

//----------------< Fullscreen - "Tela cheia no jogo" >

let myDocument = document.querySelector(".fullscreen_game");
const btn = document.querySelector(".fullscreen");
const game_board = document.querySelector(".game_board"); 
const options_bar = document.querySelector(".options_bar"); 

btn.addEventListener("click", ()=>{

    if(btn.textContent == "Go Fullscreen"){
        if (myDocument.requestFullscreen) {
            myDocument.requestFullscreen();
            gameover_screen.style.height = '100%';
            home_screen.style.height = '100%';
            game_board.style.height = '91%';
            game_board.style.margin = '0';
            options_bar.style.margin = '5px 0 0 0';
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
        btn.src = "_assets/_img/fullscreen_exit.png";
        btn.textContent = "Exit Fullscreen";
    }

    else{
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
        game_board.style.height = '500px';
        game_board.style.margin = '3vh 0 0 0';
        options_bar.style.margin = '5px 0 0 0';
        btn.src = "_assets/_img/fullscreen.png";
        btn.textContent = "Go Fullscreen";
    }

});

//===================================================================

//----------------< Carrossel - "Slide do jogo" >

const btnAvancarCarrosselSonic= document.querySelector('#btn-avancar-carrossel-sonic');
const btnVoltarCarrosselSonic= document.querySelector('#btn-voltar-carrossel-sonic');
const carrosselSonic= document.querySelector('#carrossel-sonic');

let i=1;
let pixels;
let num = 0;

btnAvancarCarrosselSonic.addEventListener('click', () => {

    i++;

    if(i <= 4){
        pixels = num += 200;
        carrosselSonic.style.right = `${pixels}px`;
    }

    else{
        i = 1;
        num = 0;
        pixels = 0;
        carrosselSonic.style.right = '0px';
    }

    console.log('-----------\nPosição = '+i);
    console.log('Pixels = '+pixels+'px');

});

btnVoltarCarrosselSonic.addEventListener('click', () => {

    i--;

    if((i >= 1)&&(i <= 4)){
        pixels = num -= 200;
        carrosselSonic.style.right = `${pixels}px`;
    }

    else{
        i = 4;
        num = 800;
        pixels = num -= 200;
        carrosselSonic.style.right = `${pixels}px`;
    }

    console.log('-----------\nPosição = '+i);
    console.log('Pixels = '+pixels+'px');

});

//===================================================================

//----------------< Música de Fundo >

const btn_audio = document.querySelector('.audio');
const audio = document.querySelector('#background_music');

let status_btn = true;

btn_audio.addEventListener('click', function() {

    if(audio.paused) {    
        audio.play();
        status_btn = true;
        btn_audio.src = '_assets/_img/audio.png'
        return status_btn;
    } 
     
    else {
        audio.pause();
        status_btn = false;
        btn_audio.src = '_assets/_img/audio_pausado.png'
        return status_btn;
    }

});

//===================================================================

//----------------< Home Screen - "Tela de Start" >

const home_screen = document.querySelector('.home_screen');
const island1 = document.querySelector('.island1');
const island2 = document.querySelector('.island2');
const island3 = document.querySelector('.island3');
const start = document.querySelector('.start');
const sonic = document.querySelector('.sonic');

function jogue() {

    home_screen.style.display = 'none';
    island1.style.animation = 'island_animation 5s infinite linear';
    island2.style.animation = 'island_animation 5s infinite linear';
    island3.style.animation = 'island_animation 5s infinite linear';

}

start.addEventListener('click', () => {
    audio.play();
    btn_audio.src = '_assets/_img/audio.png'
    sonic.style.left = '0';
    sonic.style.bottom = '-20';
    sonic.style.width = '150px';
    sonic.style.transition = '1000ms';
    loop();
    jogue();
});

document.addEventListener('keyup', start => {
    if (start.code === 'Space') {
        if(status_btn == true) {
            audio.play();
            btn_audio.src = '_assets/_img/audio.png'
        }
        sonic.style.left = '0';
        sonic.style.bottom = '-20';
        sonic.style.width = '200px';
        sonic.style.transition = '1000ms';
        jogue();
        loop();
    }
});

//===================================================================

//----------------< Game Over >

const gameover_screen = document.querySelector('.gameover_screen');
const sound_gameover = document.querySelector('#gameover');
const gameover_fala = document.querySelector('#gameover-fala');

function gameover() {

    audio.pause();
    sound_gameover.play();

    setTimeout(() => {

        gameover_fala.play();

    }, 1000);

    gameover_screen.style.display = 'flex';

    document.addEventListener('keyup', restart => {

    if (restart.code === 'Space') {
        
        gameover_screen.style.display = 'none';
        gameover_fala.pause();

        if(status_btn == true) {
            audio.play();
        }

        island1.style.left = '';
        island2.style.left = '';
        island3.style.left = '';

        island1.style.animation = 'island_animation 5s infinite linear';
        island2.style.animation = 'island_animation 5s infinite linear';
        island3.style.animation = 'island_animation 5s infinite linear';

        sonic.style.animation = '';
        sonic.style.bottom = 'bottom: -35px;';    
        
        loop();

    }
    
    });

}

//===================================================================

//----------------< Teclas - "Funções para as teclas da jogabilidade do game" >

const sound_jump = document.querySelector('#jump_music');

document.addEventListener('keyup', key => {

    if (key.code === 'Space') {

        sonic.classList.add('jump');
        sound_jump.play();
        sonic.src = ('_assets/_img/sonic/sonic_correndo.gif');

        sonic.style.width = ('200px');
        sonic.style.bottom = ('0');

        console.log('Espaço Pressionado')

        setTimeout(() => {

            sonic.classList.remove('jump');

        }, 500);
    }

    if (key.code === 'ArrowUp') {

        sonic.classList.add('jump');
        sound_jump.play();
        sonic.src = ('_assets/_img/sonic/sonic_correndo.gif');

        sonic.style.width = ('200px');
        sonic.style.bottom = ('0');

        console.log('Seta de Cima Pressionado');

        setTimeout(() => {

            sonic.classList.remove('jump');

        }, 500);
    }

    if (key.code === 'ArrowDown') {

        sonic.src = ('_assets/_img/sonic/sonic_rolando.png');

        sonic.style.width = ('70px');
        sonic.style.bottom = ('0');

        console.log('Seta de Baixo Pressionado');

    }
    
});

//===================================================================

//----------------< Física - "Física do jogo" >

function loop(){

    const loop = setInterval(() => {

        const islandPosition1 = island1.offsetLeft;
        const islandPosition2 = island2.offsetLeft;
        const islandPosition3 = island3.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    
        if(islandPosition1 <= 40 && islandPosition1 > 0 && sonicPosition < 100){
    
            island1.style.animation = 'none';
            island2.style.animation = 'none';
            island3.style.animation = 'none';
            island1.style.left = `${islandPosition1}px`;
            island2.style.left = `${islandPosition2}px`;
            island3.style.left = `${islandPosition3}px`;
    
            sonic.style.animation = 'none';
            sonic.style.bottom = `${sonicPosition}px`;
    
            sonic.style.transition = '1s';
            sonic.src = ('_assets/_img/sonic/sonic_gameover.png');
            sonic.style.width = ('350px');
            
            gameover();
            clearInterval(loop);

        }
    
        if(islandPosition2 <= 40 && islandPosition2 > 0 && sonicPosition < 100){
    
            island1.style.animation = 'none';
            island2.style.animation = 'none';
            island3.style.animation = 'none';
            island1.style.left = `${islandPosition1}px`;
            island2.style.left = `${islandPosition2}px`;
            island3.style.left = `${islandPosition3}px`;
    
            sonic.style.animation = 'none';
            sonic.style.bottom = `${sonicPosition}px`;
    
            sonic.src = ('_assets/_img/sonic/sonic_gameover.png')
            sonic.style.width = ('350px')

            gameover();
            clearInterval(loop);

    
        }
    
        if(islandPosition3 <= 40 && islandPosition3 > 0 && sonicPosition < 100){
    
            island1.style.animation = 'none';
            island2.style.animation = 'none';
            island3.style.animation = 'none';
            island1.style.left = `${islandPosition1}px`;
            island2.style.left = `${islandPosition2}px`;
            island3.style.left = `${islandPosition3}px`;
            
            sonic.style.animation = 'none';
            sonic.style.bottom = `${sonicPosition}px`;
            
            sonic.src = ('_assets/_img/sonic/sonic_gameover.png')
            sonic.style.width = ('350px')

            gameover();
            clearInterval(loop);
    
        }
    
    }, 10);
        
} 


