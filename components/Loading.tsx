import { BubbleImg, ProfileImg } from '@/public/svg';

export default function Loading() {
  return (
    <div className="m-5 mb-[30px] flex items-start gap-1.5">
      <ProfileImg className="size-9" />
      <div>
        <span className="text-2xs font-medium text-gray-600">수리</span>
        <div className="relative whitespace-pre-line rounded-base bg-blue-500 px-4 py-3 text-base font-medium text-white">
          <BubbleImg alt="말풍선 꼬리" className="absolute left-[-3px] top-0 h-[8.6px] w-2" />
          당신의 취준유형은
        </div>
        <div className="mt-2 w-fit rounded-base bg-blue-500 px-6 py-5">
          <div className="flex space-x-1">
            <div className="size-2 animate-pulse-1 rounded-full bg-white"></div>
            <div className="size-2 animate-pulse-2 rounded-full bg-white"></div>
            <div className="size-2 animate-pulse-3 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
