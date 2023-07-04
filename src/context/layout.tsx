import 'react-toastify/dist/ReactToastify.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ReactNode, createContext, useEffect, useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ModalEmail from '@/components/ModalEmail';
import Footer from '@/components/Footer';
import LoadingPage from '@/components/LoadingPage';
import TopButton from '@/components/TopButton';
import Menu from '@/components/Menu';

interface IContext {
  handleOpenModalEmail?: any;
  handleCloseModalEmail?: any;
  isActiveModalEmail?: boolean | undefined;
  handlePageLoaded?: any;
  setIsActiveLoading?: any;
  dialog?: any;
  setIsActiveMenu?: any;
  isActiveMenu?: boolean | undefined;
  setIsFullImage?: any;
  widthPage?: number;
  setIsActiveToggleMenu?: any;
  isActiveToggleMenu?: boolean | undefined;
}

export const Context = createContext<IContext>({});

type ComponentProps = {
  children: ReactNode;
};

interface IProps {
  isActiveLoading: boolean | undefined;
  isFullImage: boolean | undefined;
  isActiveToggleMenu: boolean | undefined;
}

const GlobalStyles = createGlobalStyle<IProps>`    
  ${(props) =>
    props.isActiveLoading &&
      `body {
        overflow: hidden;
      }`}
  ${(props) =>
    props.isFullImage &&
      `body {
        overflow: hidden;
      }`}
  ${(props) =>
    props.isActiveToggleMenu &&
      `body {
        overflow: hidden;
      }`}
`;

export default function Layout({ children }: ComponentProps) {
  const [isFullImage, setIsFullImage] = useState<boolean>(false);

  const [isActiveLoading, setIsActiveLoading] = useState<boolean>(true);

  function handlePageLoaded() {
    setTimeout(() => {
      return setIsActiveLoading(false);
    }, 2500);
  }

  useEffect(() => {
    handlePageLoaded();
  }, []);

  const dialog = useRef<any>(null);

  const [isActiveModalEmail, setIsActiveModalEmail] = useState<boolean>(false);

  function handleOpenModalEmail() {
    return [setIsActiveModalEmail(true), dialog.current.showModal()];
  }

  function handleCloseModalEmail() {
    return [setIsActiveModalEmail(false), dialog.current.close()];
  }

  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(true);

  const [isActiveTopButton, setIsActiveTopButton] = useState<boolean>(false);

  function handleActiveTopButton() {
    if (window.scrollY > window.innerHeight) {
      return setIsActiveTopButton(true);
    } else {
      return setIsActiveTopButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleActiveTopButton); // active top button
  }, []);

  function isElementInViewport() {
    // check if the element is visible on the screen, another option outside pure js is the react-intersection-observer library
    document.querySelectorAll('[data-animation]').forEach((item: any) => {
      // add animation once the element is visible, with pure js, because I didn't want to add another library just for this function
      if (item.getBoundingClientRect().top < window.innerHeight) {
        return item.classList.add(item.getAttribute('data-animation'));
      } else {
        return item.classList.remove(item.getAttribute('data-animation'));
      }
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', isElementInViewport);
  }, []);

  const [widthPage, setWidthPage] = useState<number>(0);

  useEffect(() => {
    return setWidthPage(window.innerWidth);
  }, []);

  const [isActiveToggleMenu, setIsActiveToggleMenu] = useState<boolean>(false); // enable menu mobile

  return (
    <>
      <GlobalStyles
        isActiveLoading={isActiveLoading}
        isFullImage={isFullImage}
        isActiveToggleMenu={isActiveToggleMenu}
      />
      {isActiveLoading && <LoadingPage />}
      <Context.Provider
        value={{
          handleOpenModalEmail,
          handleCloseModalEmail,
          isActiveModalEmail,
          handlePageLoaded,
          setIsActiveLoading,
          dialog,
          setIsActiveMenu,
          isActiveMenu,
          setIsFullImage,
          widthPage,
          setIsActiveToggleMenu,
          isActiveToggleMenu,
        }}
      >
        <Provider store={store}>
          {isActiveMenu && <Menu />}
          <main>{children}</main>
          <ModalEmail />
          <Footer />
          {isActiveTopButton && <TopButton />}
          <ToastContainer />
        </Provider>
      </Context.Provider>
    </>
  );
}
