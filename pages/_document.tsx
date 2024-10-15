import { pretendard } from '@/lib/fonts';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko" className={pretendard.variable}>
      <Head>
        <meta name="description" content="내 취준 스타일로 알아보는 취준 꿀팁" />
        <meta property="og:title" content="[Sulsul] 취준유형 테스트" />
        <meta property="og:description" content="내 취준 스타일로 알아보는 취준 꿀팁" />
        <meta property="og:image" content="/images/OG.png" />
        <link
          rel="preload"
          href="/fonts/PretendardVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="relative min-h-screen antialiased">
        <Main />
        <NextScript />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
          crossOrigin="anonymous"
        />
      </body>
    </Html>
  );
}
