import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Davhy Andrade</title>
        <meta name="google-site-verification" content="XkGW891zLEowrfoj-68YJMFUDcQLKe_jqNEkFfDo1Rs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
