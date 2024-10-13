import { BulbIcon } from '@/public/svg';
import { MBTIType } from '@/types';
import { typeResult } from '@/utils/typeResult';

export default function TipSection({ type }: { type: MBTIType }) {
  return (
    <div className="mb-10">
      <div className="mb-2 flex items-center gap-[2px]">
        <BulbIcon />
        <h2 className="text-3xl font-bold text-gray-800">
          {typeResult[type].title}의 취준 꿀팁
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {typeResult[type].text.tip.map((tip) => (
          <div key={tip.main} className="rounded-xl bg-gray-50 p-5">
            <p className="mb-2 whitespace-pre-line text-lg font-semibold text-gray-700">
              {tip.main}
            </p>
            <p className="text-base text-gray-700">{tip.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
