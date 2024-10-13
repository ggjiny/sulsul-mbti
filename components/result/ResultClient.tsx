'use client';

import Loading from '@/components/Loading';
import ProgressBar from '@/components/ProgressBar';
import QuestionHeader from '@/components/QuestionHeader';
import Buttons from '@/components/result/Buttons';
import CardSection from '@/components/result/CardSection';
import RecommendSection from '@/components/result/RecommendSection';
import ShareButtons from '@/components/result/ShareButtons';
import TagSection from '@/components/result/TagSection';
import TipSection from '@/components/result/TipSection';

import { MBTIType } from '@/types';
import { useEffect, useState } from 'react';

export default function ResultClient({ result }: { result: MBTIType }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <>
        <QuestionHeader current={12} />
        <ProgressBar current={12} total={12} />
        <Loading />
      </>
    );
  }

  return (
    <div>
      <CardSection type={result} />
      <div className="px-6">
        <TagSection type={result} />
        <TipSection type={result} />
        <RecommendSection />
        <Buttons />
      </div>
      <ShareButtons />
      <div className="mx-auto w-fit pb-[50px] font-inter text-2xs text-gray-400">
        © 2024 Team Sulsul. All Right Reserved.
      </div>
    </div>
  );
}
