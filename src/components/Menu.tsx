import Link from 'next/link';
import Router from 'next/router';
import Logo from 'public/images/menu/logo-davhy.svg';
import VectorPhone from 'public/images/menu/vector-phone.svg';
import VectorPhoneBlue from 'public/images/menu/vector-phone-blue.svg';
import { useEffect, useRef, useState } from 'react';

interface IActiveButtonMenu {
  isActive: boolean,
  numberActive?: number
}

export default function Menu() {
  const buttonsMenu = [
    {
      name: 'Home',
      url: '/',
      nameUrl: ''
    },
    {
      name: 'Projects',
      nameUrl: 'projects',
      dropdown: [
        {
          name: 'YourQuiz',
          url: 'https://yourquiz.vercel.app/',
        },
        {
          name: 'Sonic',
          url: '/games/sonic',
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
  ];

  const [isActiveButtonsMenu, setIsActiveButtonsMenu] = useState<IActiveButtonMenu>({
    isActive: false,
  });

  function handleButtonsMenu(id: number) {
    if (isActiveButtonsMenu.numberActive !== id) return setIsActiveButtonsMenu({ isActive: true, numberActive: id });    
    if (isActiveButtonsMenu.isActive) {
      return setIsActiveButtonsMenu({ isActive: false, numberActive: undefined });
    } else {
      return setIsActiveButtonsMenu({ isActive: true, numberActive: id });
    }
  }

  const menu = useRef<any>(null);

  function handleClickOutside(event: any) {
    if (menu.current && !menu.current.contains(event.target)) {
      return setIsActiveButtonsMenu({ isActive: false, numberActive: undefined });
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, [menu]);

  const [pathname, setPathname] = useState<any>()

  useEffect(() => {
    setPathname(Router.pathname.split('/')[1]);
  }, []);

  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  return (
    <nav className="menu">
      <div className="position">
        <Link href="/" id="logo">
          <Logo />
          <span>Davhy Andrade</span>
        </Link>
        <ul className="btns-menu" ref={menu}>
          {buttonsMenu.map((item, id) => {
            return (
              <li key={id}>
                <Link className={`${isActiveButtonsMenu.numberActive === id ? 'active-button' : pathname === item.nameUrl && 'active-button'}`} onClick={() => handleButtonsMenu(id)} href={`${typeof item.url !== 'undefined' ? item.url : ''}`}>
                  {item.name}
                </Link>
                {item.dropdown && (
                  <ul className={`dropdown ${isActiveButtonsMenu.numberActive === id && 'active-dropdown'}`}>
                    {item.dropdown?.map((item, id) => {
                      return (
                        <li key={id}>
                          <Link href={item.url}>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
          <button onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
            {!isMouseOver ? <VectorPhone/> : <VectorPhoneBlue/>}
            <hr />
            Contact
          </button>
        </ul>
      </div>
    </nav>
  );
}
