import { MBTIType } from '@/types';
import { typeResult } from '@/utils/typeResult';

export default function TagSection({ type }: { type: MBTIType }) {
  const getColor = (type: string) => {
    switch (type) {
      case 'SJ':
        return 'bg-[#DAEDFF] text-[#1F95EA]';
      case 'NF':
        return 'bg-[#FFF7DC] text-[#FF9E0D]';
      case 'NT':
        return 'bg-[#E4E8FF] text-[#576DFC]';
      case 'SP':
        return 'bg-[#FFECED] text-[#FF7278]';
    }
  };

  return (
    <div className="mb-10">
      <div className="mb-3 flex">
        {typeResult[type].text.tag.map((tag) => (
          <div
            key={tag}
            className={`${getColor(
              type
            )} mr-2 rounded-[13px] px-[14px] py-2 font-gmarket-sans text-sm font-medium tracking-tighter`}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="w-full whitespace-pre-line text-lg text-gray-900">
        {typeResult[type].text.desc}
      </div>
    </div>
  );
}
