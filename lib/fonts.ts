import localFont from 'next/font/local';

export const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  weight: '45 920',
});

export const gmarketSans = localFont({
  src: [
    {
      path: '../public/fonts/GmarketSansBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GmarketSansMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/GmarketSansLight.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-gmarket-sans',
});
