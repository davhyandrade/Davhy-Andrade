import 'react-toastify/dist/ReactToastify.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import EmailModal from '@/components/EmailModal';
import Footer from '@/components/Footer';
import LoadingPage from '@/components/LoadingPage';
import TopButton from '@/components/TopButton';
import Menu from '@/components/Menu';
import Router from 'next/router';

interface IContext {
  handleOpenEmailModal?: () => void;
  handleCloseEmailModal?: () => void;
  isActiveEmailModal?: boolean | undefined;
  handlePageLoaded?: () => void;
  setIsActiveLoading?: Dispatch<SetStateAction<boolean>>;
  dialog?: any;
  setIsActiveMenu?: Dispatch<SetStateAction<boolean>>;
  isActiveMenu?: boolean | undefined;
  setIsFullImage?: Dispatch<SetStateAction<boolean>>;
  pageWidth?: number | undefined;
  setIsActiveToggleMenu?: Dispatch<SetStateAction<boolean>>;
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

  const [isActiveEmailModal, setIsActiveEmailModal] = useState<boolean>(false);

  function handleOpenEmailModal() {
    return [setIsActiveEmailModal(true), dialog.current.showModal()];
  }

  function handleCloseEmailModal() {
    return [setIsActiveEmailModal(false), dialog.current.close()];
  }

  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(true);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setIsActiveMenu(true));
    
    return () => Router.events.off('routeChangeStart', () => setIsActiveMenu(true));
  }, []);

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

  const [pageWidth, setpageWidth] = useState<number>(0);

  useEffect(() => {
    return setpageWidth(window.innerWidth);
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
          handleOpenEmailModal,
          handleCloseEmailModal,
          isActiveEmailModal,
          handlePageLoaded,
          setIsActiveLoading,
          dialog,
          setIsActiveMenu,
          isActiveMenu,
          setIsFullImage,
          pageWidth,
          setIsActiveToggleMenu,
          isActiveToggleMenu,
        }}
      >
        <Provider store={store}>
          {isActiveMenu && <Menu />}
          <main>{children}</main>
          <EmailModal />
          <Footer />
          {isActiveTopButton && <TopButton />}
          <ToastContainer />
        </Provider>
      </Context.Provider>
    </>
  );
}
