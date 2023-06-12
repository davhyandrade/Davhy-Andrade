import ModalEmail from '@/components/ModalEmail';
import Footer from '@/components/Footer';
import LoadingPage from '@/components/LoadingPage';
import TopButton from '@/components/TopButton';
import { ReactNode, createContext, useEffect, useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
}

export const Context = createContext<IContext>({});

type ComponentProps = {
  children: ReactNode;
};

interface IProps {
  isActiveLoading: boolean | undefined;
  isFullImage: boolean | undefined;
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

  return (
    <>
      <GlobalStyles isActiveLoading={isActiveLoading} isFullImage={isFullImage} />
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
        }}
      >
        <Provider store={store}>
          {isActiveMenu && <Menu />}
          <main>{children}</main>
          <ModalEmail />
          <Footer />
          <TopButton />
          <ToastContainer />
        </Provider>
      </Context.Provider>
    </>
  );
}
