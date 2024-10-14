import useKakaoShare from '@/hooks/useKakaoShare';
import { KakaoIcon, LinkIcon } from '@/public/svg';
import { useState } from 'react';

export default function ShareButtons() {
  const [isCopied, setIsCopied] = useState(false);

  const { shareKakao } = useKakaoShare();

  const handleKakaoIconClick = () => {
    shareKakao();
  };

  const handleLinkIconClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      console.error('복사 실패');
    }
  };

  return (
    <>
      <div className="mx-auto mb-10 w-fit ">
        <h4 className="mb-4 text-3xl font-bold text-gray-800">취준유형 테스트 공유하기</h4>
        <div className="flex justify-center gap-3">
          <KakaoIcon
            width={48}
            height={48}
            className="cursor-pointer"
            onClick={handleKakaoIconClick}
          />
          <LinkIcon
            width={48}
            height={48}
            onClick={handleLinkIconClick}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`fixed bottom-0 left-1/2 z-[9999] -translate-x-1/2 transition-all duration-500 ${
          isCopied ? 'bottom-12 opacity-100' : 'bottom-0 opacity-0'
        }`}
      >
        <div className="rounded-full bg-gray-400 px-6 py-3 text-white shadow-md">
          클립보드에 복사 완료!
        </div>
      </div>
    </>
  );
}
