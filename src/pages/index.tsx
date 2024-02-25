import { useContext, useEffect } from 'react';
import { Context } from '@/context/layout';
import LandingPage from '@/components/LandingPage';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  const { setIsActiveMenu }: any = useContext(Context);

  useEffect(() => {
    return setIsActiveMenu(false);
  }, []);

  return (
    <>
      <LandingPage />
      <About />
      <Projects />
    </>
  );
}
