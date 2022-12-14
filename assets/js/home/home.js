
//----------------< Option Bar - "Dropdown section 3" >

const dropdown_option_bar = document.querySelector('.dropdown-option-bar')
const btn_option_bar = document.querySelector('.btn-option-bar')
const img_option_bar = document.querySelector('.img-option-bar')
const dropdown_option_bar2 = document.querySelector('.dropdown-option-bar2')
const btn_option_bar2 = document.querySelector('.btn-option-bar2')
const img_option_bar2 = document.querySelector('.img-option-bar2')
const dropdown_option_bar3 = document.querySelector('.dropdown-option-bar3')
const btn_option_bar3 = document.querySelector('.btn-option-bar3')
const img_option_bar3 = document.querySelector('.img-option-bar3')

let isActiveDropdownHome1 = true;
let isActiveDropdownHome2 = true;
let isActiveDropdownHome3 = true;

btn_option_bar.addEventListener('click', () => {
    if (isActiveDropdownHome1) {
        isActiveDropdownHome1 = false;
        dropdown_option_bar.style.display = 'flex';
        img_option_bar.src = 'https://i.postimg.cc/LXJTq4tN/btn-games-open.png';
    } else {
        isActiveDropdownHome1 = true;
        dropdown_option_bar.style.display = 'none';
        img_option_bar.src = 'https://i.postimg.cc/BvYpQPKj/btn-games-closed.png';
    }
});

btn_option_bar2.addEventListener('click', () => {
    if (isActiveDropdownHome2) {
        isActiveDropdownHome2 = false;
        dropdown_option_bar2.style.display = 'flex';
        img_option_bar2.src = 'https://i.postimg.cc/LXJTq4tN/btn-games-open.png';
    } else {
        isActiveDropdownHome2 = true;
        dropdown_option_bar2.style.display = 'none';
        img_option_bar2.src = 'https://i.postimg.cc/BvYpQPKj/btn-games-closed.png';
    }
});

btn_option_bar3.addEventListener('click', () => {
    if (isActiveDropdownHome3) {
        isActiveDropdownHome3 = false;
        dropdown_option_bar3.style.display = 'flex';
        img_option_bar3.src = 'https://i.postimg.cc/LXJTq4tN/btn-games-open.png';
    } else {
        isActiveDropdownHome3 = true;
        dropdown_option_bar3.style.display = 'none';
        img_option_bar3.src = 'https://i.postimg.cc/BvYpQPKj/btn-games-closed.png';
    }
}); 

//===================================================================

//----------------< Par??grafo Mobile - "Adicionando a tag <br>" >

setInterval(() => {

    if(window.innerWidth < 800) {
    
        document.getElementById('txt-container1').innerHTML = 'Descobri que minha paix??o ?? escrever c??digo e desenvolver solu????es para ajudar outras pessoas a resolver seus problemas. <br><br>Atualmente estou cursando t??cnico em Desenvolvimento de Sistemas na Etec Zona Leste, al??m de um curso de Java na USP Leste, portanto tenho conhecimento em HTML, CSS, JavaScript, PHP, Java, Banco de Dados e Arduino. <br><br>S?? que a minha praia mesmo ?? o Front-End e Design Gr??fico, ao qual tenho curso de Social Media, al??m da experi??ncias como Freelancers, Projetos e gerenciamentos de Redes Sociais como por exemplo a p??gina da Atl??tica da minha Unidade Escolar.';
        document.getElementById('txt-container2').innerHTML = 'Como foi dito minha especialidade ?? o Front-End, em que domino completamente o HTML, CSS e JavaScript, ao qual s??o os pilares do Front-End, al??m do conhecimento em PHP. <br><br>J?? em rela????o ao Design, fa??o Social Media, Web Design e Manipula????es de Imagens com dominiu total no Photoshop e um pouco no Illustrator. <br><br>Conhecimentos adicionais em Java, Arduino, MySQL e Acess.';
    
    }
    
    else {
        document.getElementById('txt-container1').innerHTML = 'Descobri que minha paix??o ?? escrever c??digo e desenvolver solu????es para ajudar outras pessoas a resolver seus problemas. <br>Atualmente estou cursando t??cnico em Desenvolvimento de Sistemas na Etec Zona Leste, al??m de um curso de Java na USP Leste, portanto tenho conhecimento em HTML, CSS, JavaScript, PHP, Java, Banco de Dados e Arduino. <br>S?? que a minha praia mesmo ?? o Front-End e Design Gr??fico, ao qual tenho curso de Social Media, al??m da experi??ncias como Freelancers, Projetos e gerenciamentos de Redes Sociais como por exemplo a p??gina da Atl??tica da minha Unidade Escolar.';
        document.getElementById('txt-container2').innerHTML = 'Como foi dito minha especialidade ?? o Front-End, em que domino completamente o HTML, CSS e JavaScript, ao qual s??o os pilares do Front-End, al??m do conhecimento em PHP. <br>J?? em rela????o ao Design, fa??o Social Media, Web Design e Manipula????es de Imagens com dominiu total no Photoshop e um pouco no Illustrator. <br>Conhecimentos adicionais em Java, Arduino, MySQL e Acess.';
    }

}, 500)

//===================================================================

//----------------< Bot??o Sobre do Rodap?? >

const btn_footer_about = document.querySelector('#btn_footer_about');

btn_footer_about.addEventListener('click', () => {
    window.scrollTo({
        top: 860,
        left:0
      })
});

//===================================================================

//----------------< Bot??o Mais da section Projetos >

const btnMais = document.querySelector('#btn-mais-projetos'); 
const fieldMais = document.querySelector('#field-mais'); 
const container = document.querySelector('.container-section3'); 

btnMais.addEventListener('click',() => {
    if (isActive) {
        isActive = false;
        fieldMais.style.display = 'block';
        container.style.height = '1600px';
        btnMais.innerText = 'Ocultar';
        btnMais.style.color = '#2494d6';
    } else {
        isActive = true;
        fieldMais.style.display = 'none';
        container.style.height = '800px';
        btnMais.innerText = 'Mais...';
        btnMais.style.color = 'white';
    }
})