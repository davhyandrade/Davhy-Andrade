import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Context } from '@/context/layout';
import { useContext } from 'react';
import Link from 'next/link';
import VectorPhone from 'public/images/menu/vector-phone.svg';
import Logo from 'public/images/menu/logo-davhy.svg';
import VectorPhoneBlue from 'public/images/menu/vector-phone-blue.svg';
import Arrow from 'public/images/arrow.svg';
import { createGlobalStyle } from 'styled-components';

interface IActiveButtonMenu {
  isActive: boolean;
  numberActive?: number;
}

interface IDropdownMenuMobile {
  isActive: boolean;
  activeNumber: number;
}

interface IProps {
  numberDropdownMenuMobile: number;
}

const GlobalStyles = createGlobalStyle<IProps>`    
  ${(props) =>
    props.numberDropdownMenuMobile > 5 &&
    `.dropdwon-menu-mobile-field {
        overflow-y: scroll;
      }`}
`;

export default function Menu() {
  const { buttonsMenu, contactDropdown } = useSelector((rootReducer: any) => rootReducer.menuReducer);

  const {
    handleOpenModalEmail,
    isActiveMenu,
    setIsActiveMenu,
    widthPage,
    setIsActiveToggleMenu,
    isActiveToggleMenu,
  }: any = useContext(Context);

  const router = useRouter();

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
    if (typeof pathname === 'undefined') {
      setTimeout(() => setPathname(window.location.href.split('/')[3]), 100);
    }
  }, [pathname]);

  useEffect(() => {
    setPathname(router.pathname.split('/')[1]);
  }, []);

  const [scroll, setScroll] = useState<number>(0);

  const refProgressBar = useRef<any>(null);

  function handlePageProgressBar() {
    const porcentagem =
      (100 * document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    return (refProgressBar.current.style.width = `${porcentagem}%`);
  }

  useEffect(() => {
    if (isActiveMenu || scroll > 1200) handlePageProgressBar();
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

  function handleOptionsContactButton(name: string) {
    switch (name) {
      case 'E-mail':
        return handleOpenModalEmail();
      default:
        return;
    }
  }

  function handleMoreButton(dropdown: string) {
    // expand dropdown options
    if (dropdown === 'Projects') {
      if (router.pathname !== '/') {
        setIsActiveMenu(true); // enable menu small
        router.push('/');
        setTimeout(() => {
          return window.scrollTo({ top: 2300, left: 0 });
        }, 1000);
      }
      return window.scrollTo({ top: 2300, left: 0 });
    }
  }

  function toggleMenu() {
    if (isActiveToggleMenu) {
      // close and restart everything to default
      handleCloseDropdownMenuMobile(); // close dropdown menu mobile
      setIsActiveToggleMenu(false); // close menu mobile
    } else {
      setIsActiveToggleMenu(true);
    }
  }

  function handleCloseDropdownMenuMobile() {
    return [
      setIsActiveDropdownMenuMobile({ isActive: false, activeNumber: 0 }), // close dropdown menu mobile
      setNumberDropdownMenuMobile(7), // defaul dropdown menu mobille
    ];
  }

  const [isActiveDropdownMenuMobile, setIsActiveDropdownMenuMobile] = useState<IDropdownMenuMobile>({
    isActive: false,
    activeNumber: 0,
  });

  const [numberDropdownMenuMobile, setNumberDropdownMenuMobile] = useState<number>(7); // number of elements listed

  function handleMoreButtonMenuMobile() {
    return setNumberDropdownMenuMobile(numberDropdownMenuMobile + 7);
  }

  return (
    <>
      <GlobalStyles numberDropdownMenuMobile={numberDropdownMenuMobile} />
      <header className={`menu ${scroll > 1200 && 'menu-small'} ${isActiveMenu && 'menu-small'}`}>
        <div className="position">
          <Link href="/" id="logo">
            <Logo />
            <span>Davhy Andrade</span>
          </Link>
          <nav>
            {widthPage < 800 ? (
              <>
                <div onClick={toggleMenu} className={`toggle-menu ${isActiveToggleMenu && 'active'}`}>
                  <div className="toggle-menu-item"></div>
                </div>
              </>
            ) : (
              <>
                <ul className="btns-menu" ref={menu}>
                  {buttonsMenu.map((item: any, id: number) => {
                    return (
                      <li key={id}>
                        {typeof item.url !== 'undefined' ? (
                          <Link
                            className={`${
                              isActiveButtonsMenu.numberActive === id
                                ? 'active-button'
                                : pathname === item.nameUrl && 'active-button'
                            }`}
                            onClick={() => [
                              handleButtonsMenu(id),
                              item.url !== '/' && setIsActiveMenu(true),
                              setPathname(item.nameUrl),
                            ]}
                            href={`${typeof item.url !== 'undefined' ? item.url : ''}`}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <button
                            className={`${
                              isActiveButtonsMenu.numberActive === id
                                ? 'active-button'
                                : pathname === item.nameUrl && 'active-button'
                            }`}
                            onClick={() => [handleButtonsMenu(id)]}
                          >
                            {item.name}
                          </button>
                        )}
                        {item.dropdown && (
                          <ul className={`dropdown ${isActiveButtonsMenu.numberActive === id && 'active-dropdown'}`}>
                            <div className="header"></div>
                            {item.dropdown?.slice(0, 5).map((item: any, id: number) => {
                              return (
                                <li key={id}>
                                  <Link
                                    onClick={() => [setIsActiveMenu(true), setPathname(item.nameUrl)]}
                                    href={item.url}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              );
                            })}
                            {item.dropdown?.length > 5 && (
                              <div className="more-dropdown">
                                <span onClick={() => handleMoreButton(item.name)}>more...</span>
                              </div>
                            )}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                  <li>
                    <button
                      className={`btn-contact ${isActiveDropdown && 'active-contact'}`}
                      onClick={handleDropdown}
                      onMouseEnter={() => setIsMouseOver(true)}
                      onMouseLeave={() => setIsMouseOver(false)}
                    >
                      {!isMouseOver ? <VectorPhone /> : <VectorPhoneBlue />}
                      <hr />
                      Contact
                    </button>
                    {isActiveDropdown && (
                      <ul className="dropdown dropdown-button-contact">
                        <div className="header"></div>
                        {contactDropdown.map((item: any, id: number) => {
                          return (
                            <li key={id} onClick={() => handleOptionsContactButton(item.name)}>
                              <Link href={item.url}>{item.name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                </ul>
              </>
            )}
          </nav>
        </div>
        {scroll > 1200 ? (
          <div className="page-progress-bar">
            <div ref={refProgressBar}></div>
          </div>
        ) : (
          isActiveMenu && (
            <div className="page-progress-bar">
              <div ref={refProgressBar}></div>
            </div>
          )
        )}
        {isActiveToggleMenu && (
          <div className="menu-mobile">
            <nav className="position">
              {isActiveDropdownMenuMobile.isActive ? (
                isActiveDropdownMenuMobile.activeNumber !== -1 ? (
                  <div className="dropdwon-menu-mobile-field">
                    <ul className="dropdown-menu-mobile">
                      <div className="header" onClick={handleCloseDropdownMenuMobile}>
                        <Arrow />
                        <h1>{buttonsMenu[isActiveDropdownMenuMobile.activeNumber].name}</h1>
                      </div>
                      {buttonsMenu[isActiveDropdownMenuMobile.activeNumber].dropdown
                        .slice(0, numberDropdownMenuMobile)
                        .map((item: any, id: number) => {
                          return (
                            <li key={id}>
                              <Link onClick={() => [setIsActiveMenu(true), toggleMenu()]} href={item.url}>
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      {buttonsMenu[isActiveDropdownMenuMobile.activeNumber].dropdown.length > 7 &&
                        numberDropdownMenuMobile <
                          buttonsMenu[isActiveDropdownMenuMobile.activeNumber].dropdown.length && (
                          <div className="more-dropdown">
                            <span onClick={() => handleMoreButtonMenuMobile()}>more...</span>
                          </div>
                        )}
                    </ul>
                  </div>
                ) : (
                  // dropdown contact
                  <div className="dropdwon-menu-mobile-field">
                    <ul className="dropdown-menu-mobile">
                      <div className="header" onClick={handleCloseDropdownMenuMobile}>
                        <Arrow />
                        <h1>Contact</h1>
                      </div>
                      {contactDropdown.map((item: any, id: number) => {
                        return (
                          <li key={id} onClick={() => handleOptionsContactButton(item.name)}>
                            <Link href={item.url}>
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )
              ) : (
                <ul>
                  {buttonsMenu.map((item: any, id: number) => {
                    return (
                      <li key={id}>
                        {typeof item.url !== 'undefined' ? (
                          <Link
                            onClick={() => [toggleMenu(), item.url !== '/' && setIsActiveMenu(true)]}
                            href={`${typeof item.url !== 'undefined' ? item.url : ''}`}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <button onClick={() => setIsActiveDropdownMenuMobile({ isActive: true, activeNumber: id })}>
                            {item.name}
                            <Arrow />
                          </button>
                        )}
                      </li>
                    );
                  })}
                  <li>
                    <button onClick={() => setIsActiveDropdownMenuMobile({ isActive: true, activeNumber: -1 })}>
                      Contact
                      <Arrow />
                    </button>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
