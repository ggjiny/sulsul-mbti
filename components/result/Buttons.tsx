import { RedoIcon } from '@/public/svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Buttons() {
  return (
    <div className="mb-10 flex w-full flex-col gap-3">
      <Link
        href="https://www.sulsul-interview.kr"
        target="_blank"
        className="flex items-center justify-center gap-[6px] rounded-[27px] bg-blue-500 py-3"
      >
        <div className="relative h-[16px] w-[64px]">
          <Image
            src="/images/sulsul.png"
            alt="sulsul"
            fill
            sizes="66px"
            className="object-contain"
          />
        </div>
        <span className="text-lg font-bold text-white">바로가기</span>
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center gap-[6px] rounded-[27px] border border-gray-400  bg-white py-3 text-center"
      >
        <RedoIcon />
        <span className="text-lg font-bold text-gray-600">테스트 다시하기</span>
      </Link>
    </div>
  );
}
