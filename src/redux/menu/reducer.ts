import { MenuActionTypes } from "./actions-types";

const initialState = {
  buttonsMenu: [
    {
      name: 'Home',
      url: '/',
      nameUrl: '',
    },
    {
      name: 'Projects',
      nameUrl: 'projects',
      dropdown: [
        {
          name: 'YourQuiz',
          url: 'https://yourquiz.vercel.app/',
          imageUrl: 'https://i.postimg.cc/PrZYR02q/youquiz.png',
          description: 'Aplicação web de questionários gerais com sistema de login completo.',
          date: '16/12/2022'
        },
        {
          name: 'TaskList',
          url: 'https://taskslists.vercel.app/',
          imageUrl: 'https://i.postimg.cc/d3NTrnYJ/tasklist.png',
          description: 'Aplicação de lista de afazeres com sistema de login.',
          date: '28/10/2022'
        },
        {
          name: 'Relógio',
          url: 'https://relogioonline.vercel.app/',
          imageUrl: 'https://i.postimg.cc/zf3tm2d1/relogio.png',
          description: 'Relógio, com a função padrão de horas, temporizador e cronômetro.',
          date: '16/10/2022'
        },
        {
          name: 'HostMain',
          url: 'https://hostmain.vercel.app/cadastrar',
          imageUrl: 'https://i.postimg.cc/R08Pv18J/hostmain.png',
          description: 'CRUD desenvolvido pelo Next JS, com o Backend feito com o Node JS e Banco de Dados MySQL.',
          date: '10/10/2022'
        },
        {
          name: 'Api Todo List',
          url: 'https://todo-list-jsonplaceholder.vercel.app/todo',
          imageUrl: 'https://i.postimg.cc/fRbnLKH8/to-do-list.png',
          description: 'Aplicação desevolvida com a finalidade de consumir uma API no NextJS.',
          date: '21/10/2022'
        },
        {
          name: 'Dark Mode',
          url: 'https://dark-mode-simple.vercel.app/',
          imageUrl: 'https://i.postimg.cc/fTzTcY29/dark-mode.png',
          description: 'Aplicação com opção de tema escuro ou claro.',
          date: '13/10/2022'
        },
        {
          name: 'Fullscreen',
          url: 'https://fullscreen-react.vercel.app/',
          imageUrl: 'https://i.postimg.cc/bNwSyXjW/fullscreen.png',
          description: 'Projeto ao qual consiste em um botão que consegui deixar o elemento em tela cheia, desenvolvido pelo React.',
          date: '09/09/2022'
        },
        {
          name: 'Cursor Select',
          url: 'https://cursor-select.vercel.app/',
          imageUrl: 'https://i.postimg.cc/BZV4KRKd/cursor-select.png',
          description: 'Botão Cursor ao qual consegue selecionar elemento da página, baseado no botão inspecionar da extensão DevTools.',
          date: '16/08/2022'
        },
        {
          name: 'Extension Troll Chrome',
          url: 'https://github.com/davhyandrade/Extension-Troll-Chrome',
          imageUrl: 'https://i.postimg.cc/m2BJhwd0/troll-chrome.png',
          description: 'Extensão do Chrome ao qual customiza a aba aberta do navegador, como textos, background e imagens.',
          date: '08/08/2022'
        },
        {
          name: 'Pokédex',
          url: 'https://pokedex-javascript-vanilla.vercel.app/',
          imageUrl: 'https://i.postimg.cc/PqY0PRjn/pokedex.png',
          description: 'Pokédex desenvolvida afim de integrar uma API a aplicação com JavaScript.',
          date: '06/10/2021'
        },
        {
          name: 'Calculadora',
          url: 'https://calculadora-javascript-vanilla.vercel.app/',
          imageUrl: 'https://i.postimg.cc/TwXM0X9P/calculadora.png',
          description: 'Calculadora ao qual foi trabalhado lógica de programação, com JavaScript.',
          date: '06/10/2021'
        },
      ],
    },
    {
      name: 'Games',
      nameUrl: 'games',
      dropdown: [
        {
          name: 'Sonic',
          url: '/games/sonic',
        },
      ],
    },
    {
      name: 'Design',
      nameUrl: 'design',
      dropdown: [
        {
          name: 'Social Media',
          url: '/design/social-media',
        },
        {
          name: 'Manipulação de Imagens',
          url: '/design/image-manipulation',
        },
        {
          name: 'Esportivos',
          url: '/design/sporting',
        },
      ],
    },
  ],
  contactDropdown: [
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=5511934643395',
    },
    {
      name: 'E-mail',
      url: '',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_davhy/',
    },
  ],
};

interface IAction {
  type: string;
}

export default function menuReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case MenuActionTypes.PROJECTS:
      return { ...state, buttonsMenu: [        {
        name: 'tes',
        url: 'https://yourquiz.vercel.app/',
      },] };
    default:
      return state;
  }
}
