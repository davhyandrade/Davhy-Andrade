import GoogleAnalytics from '@/components/GoogleAnalytics';
import Context from '@/context/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Davhy Andrade</title>
        <meta name="google-site-verification" content="XkGW891zLEowrfoj-68YJMFUDcQLKe_jqNEkFfDo1Rs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Entusiasta da tecnologia, Desenvolvedor Web e Designer Digital." />
        <meta
          name="keywords"
          content="davhy, davhy andrade, davhyandrade, web dev, developer, nextjs, design, designer"
        />
        <meta name="author" content="Davhy Andrade" />
        <meta property="og:title" content="Davhy Andrade"/>
        <meta property="og:description" content="Sou desenvolvedor web especializado em Next.js e TypeScript. Aqui, compartilho meus projetos, habilidades e experiências. Explore e descubra mais sobre o meu trabalho!" />
        <meta property="og:url" content="https://davhyandrade.com.br"/>
        <meta property="og:image" content="https://i.postimg.cc/Qtch9s7s/screencapture-davhyandrade-br-2024-09-04-09-53-57.png"/>
        <meta property="og:type" content="website"/>
      </Head>
      <GoogleAnalytics/>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  );
}
