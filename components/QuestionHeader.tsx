interface QuestionHeaderProps {
  current: number;
}

export default function QuestionHeader({ current }: QuestionHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between px-5 py-[14px]">
      <div className="flex gap-1">
        <span className="text-[18px] font-bold text-gray-800">수리</span>
        <div className="flex items-center rounded-[16px] bg-blue-100 px-2 py-1 text-[10px] text-blue-500">
          술술 인공지능
        </div>
      </div>
      <div className="text-xs font-semibold text-gray-400">
        <span className="text-blue-500">{current}</span> / 12
      </div>
    </div>
  );
}
