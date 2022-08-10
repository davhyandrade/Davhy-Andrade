
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

btn_option_bar.addEventListener('click', () => {
    console.log(isActive);
    if (isActive) {
        isActive = false;
        dropdown_option_bar.style.display = 'flex';
        img_option_bar.src = '_assets/_img/btn_games_open.png';
    } else {
        isActive = true;
        dropdown_option_bar.style.display = 'none';
        img_option_bar.src = '_assets/_img/btn_games_closed.png';
    }
});

btn_option_bar2.addEventListener('click', () => {
    console.log(isActive);
    if (isActive) {
        isActive = false;
        dropdown_option_bar2.style.display = 'flex';
        img_option_bar2.src = '_assets/_img/btn_games_open.png';
    } else {
        isActive = true;
        dropdown_option_bar2.style.display = 'none';
        img_option_bar2.src = '_assets/_img/btn_games_closed.png';
    }
});

btn_option_bar3.addEventListener('click', () => {
    console.log(isActive);
    if (isActive) {
        isActive = false;
        dropdown_option_bar3.style.display = 'flex';
        img_option_bar3.src = '_assets/_img/btn_games_open.png';
    } else {
        isActive = true;
        dropdown_option_bar3.style.display = 'none';
        img_option_bar3.src = '_assets/_img/btn_games_closed.png';
    }
}); 

//===================================================================

//----------------< Parágrafo Mobile - "Adicionando a tag <br>" >

setInterval(() => {

    if(window.innerWidth < 800) {
    
        document.getElementById('txt-container1').innerHTML = 'Descobri que minha paixão é escrever código e desenvolver soluções para ajudar outras pessoas a resolver seus problemas. <br><br>Atualmente estou cursando técnico em Desenvolvimento de Sistemas na Etec Zona Leste, além de um curso de Java na USP Leste, portanto tenho conhecimento em HTML, CSS, JavaScript, PHP, Java, Banco de Dados e Arduino. <br><br>Só que a minha praia mesmo é o Front-End e Design Gráfico, ao qual tenho curso de Social Media, além da experiências como Freelancers, Projetos e gerenciamentos de Redes Sociais como por exemplo a página da Atlética da minha Unidade Escolar.';
        document.getElementById('txt-container2').innerHTML = 'Como foi dito minha especialidade é o Front-End, em que domino completamente o HTML, CSS e JavaScript, ao qual são os pilares do Front-End, além do conhecimento em PHP. <br><br>Já em relação ao Design, faço Social Media, Web Design e Manipulações de Imagens com dominiu total no Photoshop e um pouco no Illustrator. <br><br>Conhecimentos adicionais em Java, Arduino, MySQL e Acess.';
    
    }
    
    else {
        document.getElementById('txt-container1').innerHTML = 'Descobri que minha paixão é escrever código e desenvolver soluções para ajudar outras pessoas a resolver seus problemas. <br>Atualmente estou cursando técnico em Desenvolvimento de Sistemas na Etec Zona Leste, além de um curso de Java na USP Leste, portanto tenho conhecimento em HTML, CSS, JavaScript, PHP, Java, Banco de Dados e Arduino. <br>Só que a minha praia mesmo é o Front-End e Design Gráfico, ao qual tenho curso de Social Media, além da experiências como Freelancers, Projetos e gerenciamentos de Redes Sociais como por exemplo a página da Atlética da minha Unidade Escolar.';
        document.getElementById('txt-container2').innerHTML = 'Como foi dito minha especialidade é o Front-End, em que domino completamente o HTML, CSS e JavaScript, ao qual são os pilares do Front-End, além do conhecimento em PHP. <br>Já em relação ao Design, faço Social Media, Web Design e Manipulações de Imagens com dominiu total no Photoshop e um pouco no Illustrator. <br>Conhecimentos adicionais em Java, Arduino, MySQL e Acess.';
    }

}, 500)

//===================================================================

//----------------< Botão Sobre do Rodapé >

const btn_footer_about = document.querySelector('#btn_footer_about');

btn_footer_about.addEventListener('click', () => {
    window.scrollTo({
        top: 860,
        left:0
      })
});

//===================================================================

//----------------< Botão Mais da section Projetos >

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
        container.style.height = '920px';
        btnMais.innerText = 'Mais...';
        btnMais.style.color = 'white';
    }
})