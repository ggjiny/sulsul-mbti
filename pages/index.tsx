import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header';
import cardImg from '@/public/images/main/카드.png';
import keywordImg from '@/public/images/main/키워드.png';
import titleImg from '@/public/images/main/타이틀.png';
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
    <div className="relative min-h-screen bg-[url('/images/main/배경.png')] bg-cover bg-center">
      <Header />
      <Image
        src={keywordImg}
        alt="keyword"
        className="absolute inset-x-0 top-[85px] z-0 w-full"
      />
      <Image src={titleImg} alt="title" className="relative z-10 mx-auto mt-4" />
      <Image src={cardImg} alt="card" className="relative z-10 mx-auto -mt-12" />
      <div className="mx-auto max-w-[335px] ">
        <Link href="/test">
          <button className="w-full rounded-[45px] bg-[#39FFFB] pb-3 pt-4">
            <span className="h-[17px] align-top font-gmarket-sans text-[17px] font-bold tracking-tighter text-[#3B54FF]">
              내 취준 유형 알아보기
            </span>
          </button>
        </Link>
        <div className="mt-3 w-full text-center font-gmarket-sans text-sm tracking-tight text-white">
          지금까지 <span className="font-bold">{data.totalCount}명</span>이 다녀갔어요!
        </div>
      </div>
    </div>
  );
}
