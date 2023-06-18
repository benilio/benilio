import Script from 'next/script'

const LayoutAnalytics = () => {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-1K5WEFMXV6'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
      >
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-1K5WEFMXV6');
        `}
      </Script>
    </>
  )
}
