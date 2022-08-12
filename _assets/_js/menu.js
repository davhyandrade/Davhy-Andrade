
//----------------< Campo contato - "Menu Contato" >

const contato = document.querySelector('#contato');
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

if(window.innerWidth > 800) {
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
}

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
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = "hidden";
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
      btn_menu_mobile_imput[0].style.animation = 'btn-mobile-linha1 0.5s linear';
      btn_menu_mobile_imput[1].style.animation = 'btn-mobile-linha2 0.5s linear';
      setTimeout(() => {
        btn_menu_mobile_imput[0].style.right = '5vw';
        btn_menu_mobile_imput[1].style.right = '5vw';
        btn_menu_mobile_imput[0].style.top = '8.2vh';
        btn_menu_mobile_imput[1].style.top = '8.2vh';
        btn_menu_mobile_imput[0].style.position = 'absolute';
        btn_menu_mobile_imput[1].style.position = 'absolute';
        btn_menu_mobile_imput[0].style.transform = 'rotate(-45deg)';
        btn_menu_mobile_imput[1].style.transform = 'rotate(45deg)';
      }, 500);
    }, 500);

  } 
  
  else {

    isActive = true;
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = "auto";
    document.body.scroll = "yes";
    menu_mobile.style.display = 'none';
    menu_mobile.style.animation = 'btn-mobile-linha3 0.5s linear';

    menuFixed.style.animation = 'btn-mobile-linha3 0.5s linear';
  
    loopMenu();

    if(btnMobile == true) {
      
      btn_menu_mobile_imput[2].style.display = 'block';
      btn_menu_mobile_imput[2].style.animation = 'btn-mobile-desfazendo-linha3 0.5s linear';
      btn_menu_mobile_imput[0].style.animation = 'btn-mobile-desfazendo-linha1 0.5s linear';
      btn_menu_mobile_imput[1].style.animation = 'btn-mobile-desfazendo-linha2 0.5s linear';
  
      setTimeout(() => {
        btn_menu_mobile_imput[0].style.position = 'relative';
        btn_menu_mobile_imput[1].style.position = 'relative';
        btn_menu_mobile_imput[0].style.right = 'auto';
        btn_menu_mobile_imput[1].style.right = 'auto';
        btn_menu_mobile_imput[0].style.top = 'auto';
        btn_menu_mobile_imput[1].style.top = 'auto';
        btn_menu_mobile_imput[0].style.transform = 'rotate(0)';
        btn_menu_mobile_imput[1].style.transform = 'rotate(0)';
      }, 500);

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


