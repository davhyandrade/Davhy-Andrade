import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_NEXT_GOOGLE_ANALYTICS_ID}`}></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', '${process.env.PUBLIC_NEXT_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics;