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
        <meta name="description" content="Entusiasta de tecnologia, Desenvolvedor Web e Designer Digital." />
        <meta
          name="keywords"
          content="davhy, davhy andrade, davhyandrade, web dev, developer, nextjs, design, designer"
        />
        <meta name="author" content="Davhy Andrade" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QMB3N8TTYK"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-QMB3N8TTYK');
        `}
      </Script>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  );
}
