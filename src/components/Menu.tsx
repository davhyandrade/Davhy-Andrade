import Link from 'next/link';
import Router from 'next/router';
import Logo from 'public/images/menu/logo-davhy.svg';
import VectorPhone from 'public/images/menu/vector-phone.svg';
import VectorPhoneBlue from 'public/images/menu/vector-phone-blue.svg';
import { useEffect, useRef, useState } from 'react';

interface IActiveButtonMenu {
  isActive: boolean;
  numberActive?: number;
}

export default function Menu() {
  const buttonsMenu = [
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

  const contactDropdown = [
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
  ];

  const [isActiveButtonsMenu, setIsActiveButtonsMenu] = useState<IActiveButtonMenu>({
    isActive: false,
  });

  function handleButtonsMenu(id: number) {
    setIsActiveDropdown(false);
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
      return [setIsActiveButtonsMenu({ isActive: false, numberActive: undefined }), setIsActiveDropdown(false)];
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, [menu]);

  const [pathname, setPathname] = useState<any>();

  useEffect(() => {
    setPathname(Router.pathname.split('/')[1]);
  }, []);

  const [scroll, setScroll] = useState<number>(0);

  const refProgressBar = useRef<any>(null);

  function handlePageProgressBar() {
    const porcentagem =
      scroll / (document.documentElement.scrollHeight / 100) + document.documentElement.scrollHeight / 100;
    console.log('porcentagem', porcentagem);
    console.log(scroll);
    return (refProgressBar.current.style.width = `${porcentagem}%`);
  }

  useEffect(() => {
    if (scroll > 850) handlePageProgressBar();
  }, [scroll]);

  useEffect(() => {
    setInterval(() => {
      return setScroll(window.scrollY);
    }, 0);
  }, []);

  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false);

  function handleDropdown() {
    setIsActiveButtonsMenu({ isActive: false, numberActive: undefined });
    if (isActiveDropdown) {
      return setIsActiveDropdown(false);
    } else {
      return setIsActiveDropdown(true);
    }
  }

  return (
    <>
      <nav className={`menu ${scroll > 850 && 'menu-small'}`}>
        <div className="position">
          <Link href="/" id="logo">
            <Logo />
            <span>Davhy Andrade</span>
          </Link>
          <ul className="btns-menu" ref={menu}>
            {buttonsMenu.map((item, id) => {
              return (
                <li key={id}>
                  {typeof item.url !== 'undefined' ? (
                    <Link
                      className={`${
                        isActiveButtonsMenu.numberActive === id
                          ? 'active-button'
                          : pathname === item.nameUrl && 'active-button'
                      }`}
                      onClick={() => handleButtonsMenu(id)}
                      href={`${typeof item.url !== 'undefined' ? item.url : ''}`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span
                      className={`${
                        isActiveButtonsMenu.numberActive === id
                          ? 'active-button'
                          : pathname === item.nameUrl && 'active-button'
                      }`}
                      onClick={() => handleButtonsMenu(id)}
                    >
                      {item.name}
                    </span>
                  )}
                  {item.dropdown && (
                    <ul className={`dropdown ${isActiveButtonsMenu.numberActive === id && 'active-dropdown'}`}>
                      <div className="header"></div>
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
            <li>
              <button
                className={`${isActiveDropdown && 'active-contact'}`}
                onClick={handleDropdown}
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
              >
                {!isMouseOver ? <VectorPhone /> : <VectorPhoneBlue />}
                <hr />
                Contact
              </button>
              {isActiveDropdown && (
                <div className="dropdown dropdown-button-contact">
                  <div className="header"></div>
                  {contactDropdown.map((item, id) => {
                    return (
                      <li key={id}>
                        <Link href={item.url}>{item.name}</Link>
                      </li>
                    );
                  })}
                </div>
              )}
            </li>
          </ul>
        </div>
        {scroll > 850 && (
          <div className="page-progress-bar">
            <div ref={refProgressBar}></div>
          </div>
        )}
      </nav>
    </>
  );
}
