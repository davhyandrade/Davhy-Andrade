import { useSelector } from 'react-redux';
import { Context } from '@/context/layout';
import { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import VectorPhone from 'public/images/menu/vector-phone.svg';
import Logo from 'public/images/menu/logo-davhy.svg';
import VectorPhoneBlue from 'public/images/menu/vector-phone-blue.svg';
import Arrow from 'public/images/arrow.svg';
import { createGlobalStyle } from 'styled-components';
import Router from 'next/router';

interface IActiveButtonMenu {
  isActive: boolean;
  activeName?: string | undefined;
}

interface IDropdownMenuMobile {
  isActive: boolean;
  activeName?: string | undefined;
}

interface IProps {
  numberDropdownMenuMobile: number;
  isActiveToggleMenu: string | undefined;
}

const GlobalStyles = createGlobalStyle<IProps>`
  .dropdwon-menu-mobile-field {
    ${(props) => props.numberDropdownMenuMobile > 5 && 'overflow-y: scroll;'}
  }

  .landing-page {
    ${(props) => props.isActiveToggleMenu && 'height: 105vh;'}
  }
`;

export default function Menu() {
  const { buttonsMenu, contactDropdown } = useSelector((rootReducer: any) => rootReducer.menuReducer);

  const {
    handleOpenEmailModal,
    isActiveMenu,
    setIsActiveMenu,
    pageWidth,
    setIsActiveToggleMenu,
    isActiveToggleMenu,
    projects,
  }: any = useContext(Context);

  const [isActiveButtonsMenu, setIsActiveButtonsMenu] = useState<IActiveButtonMenu>({
    isActive: false,
  });

  function handleButtonsMenu(urlName: string) {
    setIsactiveName(false);
    if (isActiveButtonsMenu.activeName !== urlName)
      return setIsActiveButtonsMenu({ isActive: true, activeName: urlName });
    if (isActiveButtonsMenu.isActive) {
      return setIsActiveButtonsMenu({ isActive: false, activeName: undefined });
    } else {
      return setIsActiveButtonsMenu({ isActive: true, activeName: urlName });
    }
  }

  const menu = useRef<any>(null);

  function handleClickOutside(event: any) {
    if (menu.current && !menu.current.contains(event.target)) {
      return [
        setIsActiveButtonsMenu({ isActive: false, activeName: Router.pathname.split('/')[1] }),
        setIsactiveName(false),
      ];
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
    setPathname(Router.pathname.split('/')[1]);
    setIsActiveButtonsMenu({ isActive: false, activeName: Router.pathname.split('/')[1] });
  }, []);

  const handleRouteChange = () => {
    if (isActiveButtonsMenu.activeName !== Router.pathname.split('/')[1]) {
      return setIsActiveButtonsMenu({ isActive: true, activeName: Router.pathname.split('/')[1] }); // set current page url name
    }
  };

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => handleRouteChange());

    return () => {
      Router.events.off('routeChangeComplete', () => handleRouteChange());
    };
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

  const [isactiveName, setIsactiveName] = useState<boolean>(false);

  function handleDropdown() {
    setIsActiveButtonsMenu({ isActive: false, activeName: undefined });
    if (isactiveName) {
      return setIsactiveName(false);
    } else {
      return setIsactiveName(true);
    }
  }

  function handleOptionsContactButton(name: string) {
    switch (name) {
      case 'E-mail':
        return handleOpenEmailModal();
      default:
        return;
    }
  }

  function handleMoreButton(dropdown: string) {
    // expand dropdown options
    if (dropdown === 'Projects') {
      if (Router.pathname !== '/') {
        setIsActiveMenu(true); // enable menu small
        Router.push('/');
        setTimeout(() => {
          return window.scrollTo({ top: 2000, left: 0 });
        }, 1000);
      }
      return window.scrollTo({ top: 2000, left: 0 });
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
      setIsActiveNameMenuMobile({ isActive: false, activeName: undefined }), // close dropdown menu mobile
      setNumberDropdownMenuMobile(7), // defaul dropdown menu mobille
    ];
  }

  const [isActiveNameMenuMobile, setIsActiveNameMenuMobile] = useState<IDropdownMenuMobile>({
    isActive: false,
    activeName: undefined,
  });

  const [numberDropdownMenuMobile, setNumberDropdownMenuMobile] = useState<number>(7); // number of elements listed

  function handleMoreButtonMenuMobile() {
    return setNumberDropdownMenuMobile(numberDropdownMenuMobile + 7);
  }

  const [buttonsMenuFilteredActiveNameMenu, setButtonsMenuFilteredActiveNameMenu] = useState<any>(
    buttonsMenu.filter((item: any) => item.urlName === isActiveNameMenuMobile.activeName)[0]
  );

  useEffect(() => {
    setButtonsMenuFilteredActiveNameMenu(
      buttonsMenu.filter((item: any) => item.urlName === isActiveNameMenuMobile.activeName)[0]
    );
  }, [isActiveNameMenuMobile]);

  return (
    <>
      <GlobalStyles numberDropdownMenuMobile={numberDropdownMenuMobile} isActiveToggleMenu={isActiveToggleMenu} />
      <header className={`menu ${scroll > 1200 && 'menu-small'} ${isActiveMenu && 'menu-small'}`}>
        <div className="position">
          <Link href="/" id="logo">
            <Logo />
            <span>Davhy Andrade</span>
          </Link>
          <nav>
            {pageWidth < 800 ? (
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
                            className={`${isActiveButtonsMenu.activeName === item.urlName && 'active-button'}`}
                            onClick={() => [
                              handleButtonsMenu(item.urlName),
                              item.url !== '/' && setIsActiveMenu(true),
                              setPathname(item.urlName),
                            ]}
                            href={`/${typeof item.url !== 'undefined' ? item.url : ''}`}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <button
                            className={`${isActiveButtonsMenu.activeName === item.urlName && 'active-button'}`}
                            onClick={() => [handleButtonsMenu(item.urlName)]}
                          >
                            {item.name}
                          </button>
                        )}
                        {item.dropdown && (
                          <ul
                            className={`dropdown ${
                              isActiveButtonsMenu.isActive && isActiveButtonsMenu.activeName === item.urlName && 'active-dropdown'
                            }`}
                          >
                            <div className="header"></div>
                            {item.urlName !== 'projects'
                              ? item.dropdown?.slice(0, 5).map((item: any, id: number) => {
                                  return (
                                    <li key={id}>
                                      <Link
                                        onClick={() => [setIsActiveMenu(true), setPathname(item.urlName)]}
                                        href={`/${item.url}`}
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  );
                                })
                              : projects?.slice(0, 5).map((item: any, id: number) => {
                                  return (
                                    <li key={id}>
                                      <Link
                                        onClick={() => [setIsActiveMenu(true), setPathname(item.urlName)]}
                                        href={`/project/${item._id}`}
                                      >
                                        {item.title}
                                      </Link>
                                    </li>
                                  );
                                })}
                            {item.urlName !== 'projects'
                              ? item.dropdown?.length > 5
                              : projects?.length > 5 && (
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
                      className={`btn-contact ${isactiveName && 'active-contact'}`}
                      onClick={handleDropdown}
                      onMouseEnter={() => setIsMouseOver(true)}
                      onMouseLeave={() => setIsMouseOver(false)}
                    >
                      {!isMouseOver ? <VectorPhone /> : <VectorPhoneBlue />}
                      <hr />
                      Contact
                    </button>
                    {isactiveName && (
                      <ul className="dropdown dropdown-button-contact">
                        <div className="header"></div>
                        {contactDropdown.map((item: any, id: number) => {
                          return (
                            <li key={id} onClick={() => handleOptionsContactButton(item.name)}>
                              <Link href={`/${item.url}`}>{item.name}</Link>
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
              {isActiveNameMenuMobile.isActive ? (
                typeof isActiveNameMenuMobile.activeName !== 'undefined' ? (
                  <div className="dropdwon-menu-mobile-field">
                    <ul className="dropdown-menu-mobile">
                      <div className="header" onClick={handleCloseDropdownMenuMobile}>
                        <Arrow />
                        <h1>{buttonsMenuFilteredActiveNameMenu?.name}</h1>
                      </div>
                      {isActiveNameMenuMobile.activeName !== 'projects'
                        ? buttonsMenu
                            .filter((item: any) => item.urlName === isActiveNameMenuMobile.activeName)[0]
                            .dropdown.slice(0, numberDropdownMenuMobile)
                            .map((item: any, id: number) => {
                              return (
                                <li key={id}>
                                  <Link onClick={() => [setIsActiveMenu(true), toggleMenu()]} href={`/${item.url}`}>
                                    {item.name}
                                  </Link>
                                </li>
                              );
                            })
                        : projects.slice(0, numberDropdownMenuMobile).map((item: any, id: number) => {
                            return (
                              <li key={id}>
                                <Link
                                  onClick={() => [setIsActiveMenu(true), toggleMenu()]}
                                  href={`/project/${item._id}`}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            );
                          })}
                      {buttonsMenuFilteredActiveNameMenu?.urlName !== 'projects'
                        ? buttonsMenuFilteredActiveNameMenu?.dropdown.length > 7 &&
                          numberDropdownMenuMobile < buttonsMenuFilteredActiveNameMenu?.dropdown.length && (
                            <div className="more-dropdown">
                              <span onClick={() => handleMoreButtonMenuMobile()}>more...</span>
                            </div>
                          )
                        : projects?.length > 7 &&
                          numberDropdownMenuMobile < projects.length && (
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
                            <Link href={`/${item.url}`}>{item.name}</Link>
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
                            href={`/${typeof item.url !== 'undefined' ? item.url : ''}`}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <button
                            onClick={() => setIsActiveNameMenuMobile({ isActive: true, activeName: item.urlName })}
                          >
                            {item.name}
                            <Arrow />
                          </button>
                        )}
                      </li>
                    );
                  })}
                  <li>
                    <button onClick={() => setIsActiveNameMenuMobile({ isActive: true, activeName: undefined })}>
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
