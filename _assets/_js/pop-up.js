
var adicionar = document.querySelector('body');
var pop_up = document.createElement('div');

pop_up.classList.add('pop-up');
pop_up.innerHTML = `<div class="btn-exit">
                            <img src="_assets/_img/pop-up/btn_exit.png" alt="Sair">
                          </div>
                          <div class="field-pop-up">
                            <img src="_assets/_img/pop-up/img_pop_up.png" alt="Vetor">
                            <div>
                              <h1>Aviso</h1>
                              <p>${textPopUp}</p>
                            </div>
                          </div>`;

adicionar.prepend(pop_up);

const btnExitPopUp = document.querySelector('.btn-exit');

function popUp() {
    pop_up.style.display = 'flex';
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    window.scrollTo(0,0);
    btnExitPopUp.addEventListener('click', () => {
      pop_up.style.display = 'none';
      document.documentElement.style.overflow = 'auto';
      document.body.scroll = "yes";
    })
  }
  
if(window.innerWidth < 800) {
    popUp();
}