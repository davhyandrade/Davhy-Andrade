
//----------------< Botão Home Screen do Rodapé >

const btn_footer_Home_screen = document.querySelector('#btn_footer_Home_screen');

btn_footer_Home_screen.addEventListener('click', () => {
    window.scrollTo(0,0);
});

//===================================================================

//----------------< Botão Contato do Rodapé >

const btn_footer_contact = document.querySelector('#btn_footer_contact');

btn_footer_contact.addEventListener('click', () => {
    menuFixed.classList.remove('menu-fixed')
    window.scrollTo(0,0);
    setTimeout(() => {
        contatoInfo.style.display = 'flex';
    }, 1000)
});
