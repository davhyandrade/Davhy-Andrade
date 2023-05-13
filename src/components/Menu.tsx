import Link from 'next/link';
import Router from 'next/router';
import Logo from 'public/images/menu/logo-davhy.svg';
import VectorPhone from 'public/images/menu/vector-phone.svg';
import VectorPhoneBlue from 'public/images/menu/vector-phone-blue.svg';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from "@/context/layout";
import { useContext } from "react";

interface IActiveButtonMenu {
  isActive: boolean;
  numberActive?: number;
}

export default function Menu() {
  const { buttonsMenu, contactDropdown } = useSelector((rootReducer: any) => rootReducer.menuReducer);

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
    const porcentagem = scroll / (document.documentElement.scrollHeight / 100) + document.documentElement.scrollHeight / 100;
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

  const { handleOpenModalEmail } = useContext(Context);

  function handleOptionsContactButton(name: string) {
    switch (name) {
      case 'E-mail':
        return handleOpenModalEmail();
      default:
        return;
    }
  }

  return (
    <>
      <nav className={`menu ${scroll > 1200 && 'menu-small'}`}>
        <div className="position">
          <Link href="/" id="logo">
            <Logo />
            <span>Davhy Andrade</span>
          </Link>
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
                      onClick={() => handleButtonsMenu(id)}
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
                      onClick={() => handleButtonsMenu(id)}
                    >
                      {item.name}
                    </button>
                  )}
                  {item.dropdown && (
                    <ul className={`dropdown ${isActiveButtonsMenu.numberActive === id && 'active-dropdown'}`}>
                      <div className="header"></div>
                      {item.dropdown?.map((item: any, id: number) => {
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
                <div className="dropdown dropdown-button-contact">
                  <div className="header"></div>
                  {contactDropdown.map((item: any, id: number) => {
                    return (
                      <li key={id} onClick={() => handleOptionsContactButton(item.name)}>
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
