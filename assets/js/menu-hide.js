
//----------------< Menu >

var adicionar = document.querySelector('body');
var menuHide = document.createElement('div');

menuHide.classList.add('menu-hide');
menuHide.innerHTML = `<nav class="menu">
                        <div class="position_menu">
                            <div class="logo_menu">
                                <a href="index.html">
                                    <img src="https://i.postimg.cc/mhf8WxFV/logo.png" alt="logo">
                                </a>
                                <a id="nome">Davhy Andrade</a>
                                <div class="info">
                                    <img src="https://i.postimg.cc/gk3PXm4z/triangulo2.png" alt="Triângulo" class="triangulo1">
                                    <div>
                                        <div>
                                            <div>
                                                <p>Hey, my name is David de Andrade, Front-End Developer, to whom discover that my passion is writing code and developing solutions to help other people solve their problems</p>
                                                <a href="index.html">learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            <div class="btn_menu">
                                <a href="index.html">Home</a>
                                <li>
                                    <a>Projects</a>
                                    <ul>
                                        <li><a href="hospital.html">Hospital</a></li>
                                        <li><a href="pokedex.html">Pokédex</a></li>
                                        <li><a href="calculadora.html">Calculadora</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Games</a>
                                    <ul>
                                        <li><a href="sonic.html">Sonic</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Design</a>
                                    <ul>
                                        <li><a href="gallery-social-media.html">Social Media</a></li>
                                        <li><a href="gallery-manipulacao.html">Manipulação de Imagens</a></li>
                                        <li><a href="gallery-esportivos.html">Esportivos</a></li>
                                    </ul>
                                </li>
                                <a id="contato">
                                    <img src="https://i.postimg.cc/k420nmBd/vetor-telefone.png" alt="Telefone" class="telefone1">
                                    <img src="https://i.postimg.cc/bY27Wp7x/vetor-telefone2.png" alt="Telefone" class="telefone2">
                                    <hr>
                                    Contact
                                </a>
                                <div class="contato">
                                    <img src="https://i.postimg.cc/DwF31HYq/triangulo.png" alt="Triângulo" class="triangulo2">
                                    <div>
                                        <li>
                                            <input type="radio" class="rdb_tabs" id="tab1" name="tabs" checked>
                                            <label for="tab1" id="btn_whatsapp">
                                                <img src="https://i.postimg.cc/kg7L28Bs/vetor-whatsapp-contato2.png" alt="WhatsApp" class="btn_contato_white">
                                                <img src="https://i.postimg.cc/VLq3s4L5/vetor-whatsapp-contato.png" alt="WhatsApp" >
                                            </label>
                                            <div class="content_contato">
                                                <hr id="hr_whatsapp">
                                                <div>
                                                    <div>
                                                        <h1>WhatsApp</h1>
                                                        <div class="position_contato">
                                                            <div>
                                                                <img id="img_contato_whatsapp" src="https://i.postimg.cc/6pzgn3ZX/whatsapp.png" alt="WhatsApp">
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <div class="mynumber">
                                                                        <p id="number"><span id="bluedark">+55</span> <span id="blue"> 11 </span>93464-3395</p>
                                                                        <img src="https://i.postimg.cc/G3WCmHFg/btn-copy.png" alt="Copiar" class="btn_copy" id="btn-copy1">
                                                                    </div>
                                                                    <hr>
                                                                    <a id="btn_message_link" href="https://api.whatsapp.com/send?phone=5511934643395">
                                                                        <input type="submit" value="Send Message" class="btn_message" >
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <input type="radio" class="rdb_tabs" id="tab2" name="tabs">
                                            <label for="tab2" id="btn_instagram">
                                                <img src="https://i.postimg.cc/L5fG13tC/vetor-instagram-contato2.png" alt="Instagram" class="btn_contato_white">
                                                <img src="https://i.postimg.cc/63FDqmv4/vetor-instagram-contato.png" alt="Instagram">
                                            </label>
                                            <div class="content_contato" id="content_instagram"> 
                                                <hr id="hr_instagram">
                                                <div>
                                                    <div>
                                                        <h1>Instagram</h1>
                                                        <div class="position_contato">
                                                            <div>
                                                                <img id="img_contato_whatsapp" src="https://i.postimg.cc/m2fvGK40/instagram.png" alt="WhatsApp">
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <div class="mynumber">
                                                                        <p id="insta"><span id="white">@</span> <span id="blue">_davhy</span></p>
                                                                    <img src="https://i.postimg.cc/G3WCmHFg/btn-copy.png" alt="Copiar" class="btn_copy" id="btn-copy2">
                                                                    </div>
                                                                    <hr>
                                                                    <a id="btn_message_link" href="https://www.instagram.com/_davhy/">
                                                                        <input type="submit" value="Open Link" class="btn_message" >
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <input type="radio" class="rdb_tabs" id="tab3" name="tabs">
                                            <label for="tab3" id="btn_email">
                                                <img src="https://i.postimg.cc/GmQwKKZ6/vetor-email-contato2.png" alt="Email" class="btn_contato_white">
                                                <img src="https://i.postimg.cc/SKx0v84R/vetor-email-contato.png" alt="Email">
                                            </label>
                                            <div class="content_contato" id="content_email">
                                                <hr id="hr_email">
                                                <div>
                                                    <div>
                                                        <h1>Email</h1>
                                                        <div class="position_contato">
                                                            <div>
                                                                <img id="img_contato_whatsapp" src="https://i.postimg.cc/d0NMP1QB/email.png" alt="Email">
                                                            </div>
                                                            <form action="mailto:davhydesign@gmail.com" method="post" enctype="text/plain">
                                                                <input id="btn_txt_nome" type="text" name="nome" placeholder="Your name">
                                                                <input id="btn_txt_email" type="text" name="email" placeholder="Email">
                                                                <hr>
                                                                <input id="btn_submit_email"  class="btn_message"  type="submit" value="Submit">
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>  
                            <div class="btn-menu-mobile" >
                                <input type="image" src="https://i.postimg.cc/B6zmNPSr/btn-menu-mobile.png" alt="Botao Menu Mobile">
                                <input type="image" src="https://i.postimg.cc/B6zmNPSr/btn-menu-mobile.png" alt="Botao Menu Mobile">
                                <input type="image" src="https://i.postimg.cc/B6zmNPSr/btn-menu-mobile.png" alt="Botao Menu Mobile">
                            </div>
                        </div>
                        <div class="menu-mobile">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <ul>
                                    <li><a class="anchor-menu-mobile" >Projects<img src="https://i.postimg.cc/BvYpQPKj/btn-games-closed.png" alt="Botao Fechado"></a></li>
                                    <ul class="dropdown-mobile">
                                        <li><a href="hospital.html">Hospital</a></li>
                                        <li><a href="pokedex.html">Pokédex</a></li>
                                        <li><a href="calculadora.html">Calculadora</a></li>
                                    </ul>
                                </ul>
                                <ul>
                                    <li><a class="anchor-menu-mobile" >Games<img src="https://i.postimg.cc/BvYpQPKj/btn-games-closed.png" alt="Botao Fechado"></a></li>
                                    <ul class="dropdown-mobile">
                                        <li><a href="sonic.html">Sonic</a></li>
                                    </ul>
                                </ul>
                                <ul>
                                    <li><a class="anchor-menu-mobile" >Design<img src="https://i.postimg.cc/BvYpQPKj/btn-games-closed.png" alt="Botao Fechado"></a></li>
                                    <ul class="dropdown-mobile">
                                        <li><a href="gallery-social-media.html">SocialMedia</a></li>
                                        <li><a href="gallery-manipulacao.html">Manipulação</a></li>
                                        <li><a href="gallery-esportivos.html">Esportivos</a></li>
                                    </ul>
                                </ul>
                            </ul>
                        </div>
                        </nav>

                      <div class="btn-footer-menu">
                          <div>
                            <a href="https://www.deviantart.com/davhyzk"><input type="image" src="https://i.postimg.cc/fy4xJcTR/vetor-deviantart.png" alt="Deviant Art"></a>
                            <a href="mailto:davhydesign@gmail.com"><input type="image" src="https://i.postimg.cc/1XpD68fc/vetor-google.png" alt="Google"></a>
                            <a href="https://github.com/Davhyandrade"><input type="image" src="https://i.postimg.cc/CMDG9QmB/vetor-github.png" alt="GitHub"></a>
                            <a href="https://www.instagram.com/_davhy/"><input type="image" src="https://i.postimg.cc/ncJ4xGPd/vetor-instagram.png" alt="Instagram"></a>
                            <a href="https://api.whatsapp.com/send?phone=5511934643395"><input type="image" src="https://i.postimg.cc/KvDn8gXm/vetor-whatsapp.png" alt="WhatsApp"></a>
                            <a href="https://www.behance.net/davhyandrade"><input type="image" src="https://i.postimg.cc/tTn3qSbc/vetor-behance.png" alt="Behance"></a>
                          </div>
                      </div>

                      <div class="hide-menu">
                          <div id="hide">
                              <div>
                                  <img src="https://i.postimg.cc/fbBXf4zp/btn-hide.png" alt="Ocultar">
                              </div>
                              <div>
                                  <a>Hide</a>
                              </div>
                          </div>
                      </div>

                      <img id="background-rodape" src="https://i.postimg.cc/HxnSQ9g0/background3.png" alt="Background">`;

adicionar.prepend(menuHide);

//===================================================================

//----------------< Botão Menu - "Criando Botão" >

adicionar = document.querySelector('body');
var btnHideMenu = document.createElement('div');

btnHideMenu.classList.add('btn-hide-fixed');
btnHideMenu.innerHTML = '<img src="https://i.postimg.cc/2jbYY4ZB/btn-hide-fixed.png" alt="Botão Menu"><p>MENU</p>';
adicionar.prepend(btnHideMenu);

//===================================================================

//----------------< Botão Menu - "Abrir menu oculto" >

const menuPaginaProjects = document.querySelector('.menu-hide')
const btnMenuProjects = document.querySelector('.btn-hide-fixed');

btnMenuProjects.addEventListener('click', () => {
    menuPaginaProjects.style.display = 'block';
    btnMenuProjects.style.display = 'none';
    window.scrollTo(0,0);
});

//===================================================================

//----------------< Botão Ocultar Menu - "btn Hide do Menu" >

const hideMenu = document.querySelector('#hide')

hideMenu.addEventListener('click', () => {
    menuPaginaProjects.style.display = 'none';
    btnMenuProjects.style.display = 'block';
});

//===================================================================

//----------------< Campo contato - "Menu Contato" >

const contatoMenu = document.querySelector('#contato');
const contatoInfo = document.querySelector('.contato');

contato.addEventListener('click', () => {
  if (isActive) {
    isActive = false;
    contatoInfo.style.display = 'flex';
  } else {
    isActive = true;
    contatoInfo.style.display = 'none';
  }
});

//===================================================================

//----------------< Botões Copiar - "Copiar texto do campo contato" >

const btnCopy1 = document.querySelector('#btn-copy1');
const btnCopy2 = document.querySelector('#btn-copy2');
const txtNumber = document.querySelector('#number');
const txtInsta = document.querySelector('#insta');

btnCopy1.addEventListener('click', copyText1);

function copyText1() {
    navigator.clipboard.writeText(txtNumber.innerText)
    alert('Número Copiado com Sucesso!!!')
}

btnCopy2.addEventListener('click', copyText2);

function copyText2() {
    navigator.clipboard.writeText(txtInsta.innerText)
    alert('Copiado com Sucesso!!!')
}

//===================================================================

//----------------< Campo Sobre mim - "Local onde fala um pouco sobre mim" >
  
const nome = document.querySelector('#nome');
const info = document.querySelector('.info');

nome.addEventListener('click', () => {
  if (isActive) {
    isActive = false;
    info.style.display = 'flex';
    nome.style.color = '#2494d6';
  } else {
    isActive = true;
    info.style.display = 'none';
    nome.style.color = 'white';
  }
});

//===================================================================

//----------------< Config Mobile - "Códigos mobile do menu" >
  
let btnMobile = false;// Variável de Verificacão botãO Mobile - "Se está ativo ou não"

function loopMenu() {
  const loopMenu = setInterval(() => {
    if(window.scrollY > 700) {
      menuFixed.style.height = '80px';
      menuFixed.style.background = '#0d0d0d';
    }

    if(window.scrollY < 700) {
      menuFixed.style.height = '150px';
      menuFixed.style.background = 'none';
    }

    if(btnMobile == true) {
      clearInterval(loopMenu);
    }

  }, 100);
};

//====================================

//--------< Botão Mobile >

const btn_menu_mobile_imput = document.querySelectorAll('.btn-menu-mobile input');
const menuFixed = document.querySelector('.menu')
const btn_menu_mobile = document.querySelector('.btn-menu-mobile');
const menu_mobile = document.querySelector('.menu-mobile');

btn_menu_mobile.addEventListener('click', () => {

  if (isActive) {
    isActive = false;
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    menu_mobile.style.display = 'flex';
    menu_mobile.style.animation = 'btn-mobile-desfazendo-linha3 0.5s linear';
    menuFixed.style.animation = 'btn-mobile-desfazendo-linha3 0.5s linear';

    setTimeout(() => {
      if(window.scrollY < 700) {
        menuFixed.style.background = '#0d0d0d';
      }
      if(window.scrollY > 700) {
        menuFixed.style.height = '150px';
      }
    }, 500)

    btnMobile = true;

    btn_menu_mobile_imput[2].style.animation = 'btn-mobile-linha3 0.5s linear';
    setTimeout(() => {
      btn_menu_mobile_imput[2].style.display = 'none';
    }, 500);
    setTimeout(() => {
      btn_menu_mobile_imput[0].style.animation = 'btn-mobile-linha1 1s linear';
      btn_menu_mobile_imput[1].style.animation = 'btn-mobile-linha2 1s linear';
      setTimeout(() => {
        btn_menu_mobile_imput[0].style.right = '5vw';
        btn_menu_mobile_imput[1].style.right = '5vw';
        btn_menu_mobile_imput[0].style.top = '8.2vh';
        btn_menu_mobile_imput[1].style.top = '8.2vh';
        btn_menu_mobile_imput[0].style.position = 'absolute';
        btn_menu_mobile_imput[1].style.position = 'absolute';
        btn_menu_mobile_imput[0].style.transform = 'rotate(-45deg)';
        btn_menu_mobile_imput[1].style.transform = 'rotate(45deg)';
      }, 1000);
    }, 500);

  } 
  
  else {

    isActive = true;
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
    menu_mobile.style.display = 'none';
    menu_mobile.style.animation = 'btn-mobile-linha3 0.5s linear';

    menuFixed.style.animation = 'btn-mobile-linha3 0.5s linear';
  
    loopMenu();

    if(btnMobile == true) {
      
      btn_menu_mobile_imput[2].style.display = 'block';
      btn_menu_mobile_imput[2].style.animation = 'btn-mobile-desfazendo-linha3 1s linear';
      btn_menu_mobile_imput[0].style.animation = 'btn-mobile-desfazendo-linha1 1s linear';
      btn_menu_mobile_imput[1].style.animation = 'btn-mobile-desfazendo-linha2 1s linear';
  
      setTimeout(() => {
        btn_menu_mobile_imput[0].style.position = 'relative';
        btn_menu_mobile_imput[1].style.position = 'relative';
        btn_menu_mobile_imput[0].style.right = 'auto';
        btn_menu_mobile_imput[1].style.right = 'auto';
        btn_menu_mobile_imput[0].style.top = 'auto';
        btn_menu_mobile_imput[1].style.top = 'auto';
        btn_menu_mobile_imput[0].style.transform = 'rotate(0)';
        btn_menu_mobile_imput[1].style.transform = 'rotate(0)';
      }, 1000);

      btnMobile = false;

    }

  }
});

//====================================

//--------< Dropdown Mobile >

const anchor_menu_mobile = document.querySelectorAll('.anchor-menu-mobile');
const dropdown_mobile = document.querySelectorAll('.dropdown-mobile');
const anchor_menu_mobile_img = document.querySelectorAll('.anchor-menu-mobile img');
const anchor_menu_mobile2 = document.querySelectorAll('.menu-mobile ul ul');

let isActiveAnchor = true;

anchor_menu_mobile[0].addEventListener('click', () => {
  if (isActiveAnchor) {
    isActiveAnchor = false;
    dropdown_mobile[0].style.display = 'flex';
    anchor_menu_mobile_img[0].src = 'https://i.postimg.cc/LXJTq4tN/btn-games-open.png';
    dropdown_mobile[1].style.display = 'none';
    dropdown_mobile[2].style.display = 'none';
    anchor_menu_mobile2[2].style.display = 'none';
    anchor_menu_mobile2[4].style.display = 'none';
  } else {
    isActiveAnchor = true;
    dropdown_mobile[0].style.display = 'none';
    anchor_menu_mobile2[2].style.display = 'block';
    anchor_menu_mobile2[4].style.display = 'block';
    anchor_menu_mobile_img[0].src = 'https://i.postimg.cc/BvYpQPKj/btn-games-closed.png';
  }
});

anchor_menu_mobile[1].addEventListener('click', () => {
  if (isActiveAnchor) {
    isActiveAnchor = false;
    dropdown_mobile[1].style.display = 'flex';
    anchor_menu_mobile_img[1].src = 'https://i.postimg.cc/LXJTq4tN/btn-games-open.png';
    dropdown_mobile[0].style.display = 'none';
    dropdown_mobile[2].style.display = 'none';
    anchor_menu_mobile2[0].style.display = 'none';
    anchor_menu_mobile2[4].style.display = 'none';
  } else {
    isActiveAnchor = true;
    dropdown_mobile[1].style.display = 'none';
    anchor_menu_mobile2[0].style.display = 'block';
    anchor_menu_mobile2[4].style.display = 'block';
    anchor_menu_mobile_img[1].src = 'https://i.postimg.cc/BvYpQPKj/btn-games-closed.png';
  }
});

anchor_menu_mobile[2].addEventListener('click', () => {
  if (isActiveAnchor) {
    isActiveAnchor = false;
    dropdown_mobile[2].style.display = 'flex';
    anchor_menu_mobile_img[2].src = 'https://i.postimg.cc/LXJTq4tN/btn-games-open.png';
    dropdown_mobile[0].style.display = 'none';
    dropdown_mobile[1].style.display = 'none';
    anchor_menu_mobile2[0].style.display = 'none';
    anchor_menu_mobile2[2].style.display = 'none';
  } else {
    isActiveAnchor = true;
    dropdown_mobile[2].style.display = 'none';
    anchor_menu_mobile2[0].style.display = 'block';
    anchor_menu_mobile2[2].style.display = 'block';
    anchor_menu_mobile_img[2].src = 'https://i.postimg.cc/BvYpQPKj/btn-games-closed.png';
  }
});


