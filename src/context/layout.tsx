import LoadingPage from "@/components/LoadingPage";
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

    useEffect(() => {
        handlePageLoaded();
    }, [])

    return (
        <>
            <GlobalStyles isActiveLoading={isActiveLoading} />
            {isActiveLoading && <LoadingPage />}
            <Context.Provider value={{}}>   
                <section>{children}</section>
            </Context.Provider>       
        </>
    )
}