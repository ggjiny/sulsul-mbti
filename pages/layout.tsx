import { gmarketSans, pretendard } from '@/lib/fonts';
import Head from 'next/head';
import Script from 'next/script';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>[Sulsul] 취준유형 테스트</title>
      </Head>
      <div
        className={`relative mx-auto max-w-[500px] ${pretendard.variable} ${gmarketSans.variable} font-sans`}
      >
        {children}
      </div>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="afterInteractive" />
      <Script id="hotjar-script" strategy="afterInteractive">
        {`(function(h,o,t,j,a,r){        
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};        
        h._hjSettings={hjid:5173093,hjsv:6};        
        a=o.getElementsByTagName('head')[0];        
        r=o.createElement('script');r.async=1;        
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;        
        a.appendChild(r);    
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
    </>
  );
}
