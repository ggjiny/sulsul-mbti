import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header';
import api from '@/utils/api';

export async function getServerSideProps() {
  try {
    const response = await api.get('/api/v1/job-type-test');
    return {
      props: {
        data: response.data.data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null,
      },
    };
  }
}
interface HomePageProps {
  data: { totalCount: number };
}
export default function HomePage({ data }: HomePageProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-500 to-[#3B54FF]">
      <Header />
      <div className="absolute inset-x-0 top-[70px] z-0 h-[304px] w-auto">
        <Image
          src="/images/main/keyword.png"
          alt="keyword"
          width={500}
          height={304}
          sizes="(max-width: 500px) 100vw, 500px"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="relative z-10 mx-auto mt-4 h-[200px] w-full">
        <Image
          src="/images/main/title.png"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="title"
          className="object-contain"
        />
      </div>
      <div className="relative z-10 mx-auto -mt-12 h-[310px] w-full">
        <Image
          src="/images/main/card.png"
          alt="card"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
      <div className="mx-auto max-w-[335px] ">
        <Link href="/test">
          <button className="w-full rounded-[45px] bg-[#39FFFB] pb-3 pt-4">
            <span className="h-[17px] align-top font-gmarket-sans text-[17px] font-bold tracking-tighter text-[#3B54FF]">
              내 취준유형 알아보기
            </span>
          </button>
        </Link>
        <div className="mt-3 w-full text-center font-gmarket-sans text-sm tracking-tight text-white">
          지금까지 <span className="font-bold">{data.totalCount}번 </span>플레이됐어요!
        </div>
      </div>
    </div>
  );
}
