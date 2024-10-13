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
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
