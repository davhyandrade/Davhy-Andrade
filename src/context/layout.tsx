import LoadingPage from "@/components/LoadingPage";
import TopButton from "@/components/TopButton";
import { ReactNode, createContext, useState, useEffect } from "react"
import { createGlobalStyle } from 'styled-components';

export const Context = createContext({});

type ComponentProps = {
    children: ReactNode;
}

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

    function teste() {
        console.log('test');
    }
    
    function scroll() {
        console.log(window.screen.height);
    }

    useEffect(() => {
        handlePageLoaded();
        console.log(document.documentElement.scrollHeight);
    }, [])

    return (
        <>
            <GlobalStyles isActiveLoading={isActiveLoading} />
            {isActiveLoading && <LoadingPage />}
            <Context.Provider value={{}}>   
                <section onScroll={scroll} onLoad={teste}>{children}</section>
                <TopButton/>
            </Context.Provider>       
        </>
    )
}