import ModalEmail from '@/components/ModalEmail';
import Footer from '@/components/Footer';
import LoadingPage from '@/components/LoadingPage';
import TopButton from '@/components/TopButton';
import { ReactNode, createContext, useEffect, useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import store from '@/redux/store';
import { Provider } from 'react-redux';

interface IContext {
  handleOpenModalEmail?: any;
  handleCloseModalEmail?: any;
  isActiveModalEmail?: boolean | undefined;
  setIsActiveLoading?: any;
  dialog?: any;
}

export const Context = createContext<IContext>({});

type ComponentProps = {
  children: ReactNode;
};

interface IProps {
  isActiveLoading: boolean | undefined;
}

const GlobalStyles = createGlobalStyle<IProps>`    
    ${(props) =>
      props.isActiveLoading &&
      `body {
            overflow: hidden;
        }`}
`;

export default function Layout({ children }: ComponentProps) {
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

  return (
    <>
      <GlobalStyles isActiveLoading={isActiveLoading} />
      {isActiveLoading && <LoadingPage />}
      <Context.Provider value={{ handleOpenModalEmail, handleCloseModalEmail, isActiveModalEmail, setIsActiveLoading, dialog }}>
        <Provider store={store}>
          <section>{children}</section>
          <ModalEmail />
          <Footer/>
          <TopButton />
        </Provider>
      </Context.Provider>
    </>
  );
}
