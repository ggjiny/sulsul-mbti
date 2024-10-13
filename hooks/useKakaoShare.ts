'use client';

import { Kakao } from '@/types';
import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: Kakao;
  }
}

const useKakaoShare = (shareUrl: string) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY!);
      }
    }
  }, []);

  const shareKakao = () => {
    const kakao = window.Kakao;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '[Sulsul] 취준유형 테스트',
        description: '내 취준 스타일로 알아보는 취준 꿀팁',
        imageUrl: `${baseUrl}/images/OG.png`,
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: '테스트 하러 가기',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };
  return { shareKakao };
};

export default useKakaoShare;
