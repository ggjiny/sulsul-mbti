'use client';

import { BackgroundImg } from '@/public/svg';
import { MBTIType } from '@/types';
import { typeResult } from '@/utils/typeResult';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from '../Header';

export default function CardSection({ type }: { type: MBTIType }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getBgColor = (type: string) => {
    switch (type) {
      case 'SJ':
        return '#81B4F5';
      case 'NF':
        return '#F6C74D';
      case 'NT':
        return '#576DFC';
      case 'SP':
        return '#FF7278';
    }
  };
  const imageUrl = `/images/${type.toLowerCase()}.png`;

  return (
    <div className={`relative mb-9 w-full ${isScrolled ? 'pt-20' : ''}`}>
      <BackgroundImg
        fill={getBgColor(type)}
        className="absolute inset-x-0 top-0 h-auto w-full"
      />
      <Header />
      <div className="mx-auto mt-4 h-[330px] w-[255px] rounded-md bg-white p-[18px] shadow-md drop-shadow-none">
        <div className="h-full rounded-[14px] bg-[#f6f7fb]">
          <div className=" mx-auto mb-[34px] flex flex-col justify-center gap-[6px] text-center">
            <h2 className="mt-[38px] h-[18px] align-top font-gmarket-sans text-[18px] font-medium tracking-tighter text-gray-800">
              {typeResult[type].subTitle}
            </h2>
            <h1 className="h-[30px] align-top font-gmarket-sans text-[30px] font-bold tracking-tighter text-gray-800">
              {typeResult[type].title}
            </h1>
          </div>
          <div className="relative mx-auto h-[132px] w-[163px]">
            <Image
              src={imageUrl}
              alt="카드 이미지"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
