const initialState = {
  buttonsMenu: [
    {
      name: 'Home',
      url: '/',
      urlName: '',
    },
    {
      name: 'Projects',
      urlName: 'projects',
      dropdown: [],
    },
    {
      name: 'Resume',
      url: '/resume',
      urlName: 'resume',
    },
    {
      name: 'Design',
      urlName: 'design',
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
      url: 'https://instagram.com/_davhy/',
    },
  ],
};

interface IAction {
  type: string;
}

export default function menuReducer(state = initialState, action: IAction) {
  switch (action.type) {
    default:
      return state;
  }
}
