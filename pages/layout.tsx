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
        className={`relative mx-auto max-w-[500px] ${pretendard.variable} ${gmarketSans.variable}`}
      >
        {children}
      </div>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="afterInteractive" />
    </>
  );
}
