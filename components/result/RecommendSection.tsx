import { GraphIcon } from '@/public/svg';
import Image from 'next/image';
import Link from 'next/link';

export default function RecommendSection() {
  return (
    <div className="mb-10">
      <div className="mb-2 flex items-center gap-[2px]">
        <GraphIcon />
        <h2 className="text-3xl font-bold text-gray-800">취업 성공률을 높이고 싶다면?</h2>
      </div>
      <div className="relative h-[380px] w-full rounded-xl bg-blue-100 p-[26px]">
        <div className="flex flex-col justify-start ">
          <div className="mb-[6px] text-4xl font-bold leading-8 text-gray-800">
            최종면접 합격률
            <hr />딱 5배 높이는 방법
          </div>
          <div className="mb-[30px] text-sm font-medium text-gray-600">
            자소서 기반 면접질문 예상부터
            <hr />
            면접 단골 기출문제까지!
          </div>
          <Link
            href="https://www.sulsul-interview.kr"
            target="_blank"
            className="w-fit rounded-md bg-gray-800 px-4 py-[10px] text-xs font-semibold text-white"
          >
            지금 시작하기
          </Link>
        </div>
        <Image
          src="/images/layer.png"
          alt="layer"
          width={384}
          height={266}
          className="absolute bottom-0 right-0 h-[210px] w-auto rounded-br-xl object-contain"
          sizes="(max-width: 768px) 30vw, 300px"
          unoptimized
        />
      </div>
    </div>
  );
}
