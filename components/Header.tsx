'use client';

import logoColorImg from '@/public/images/main/Logo-color.png';
import logoImg from '@/public/images/main/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
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

  const headerClass = `
    flex w-full items-center justify-between px-5 py-[22px]
    transition-all duration-300 ease-in-out
    ${
      isScrolled
        ? 'fixed top-0 z-30 bg-white stroke-gray-200 stroke-1 max-w-[500px]'
        : 'relative z-10'
    }
  `;

  const buttonClass = `
    rounded-md px-3 py-2
    transition-all duration-300 ease-in-out
    ${isScrolled ? 'bg-gray-800' : 'bg-white bg-opacity-[0.16]'}
  `;

  return (
    <div className={headerClass}>
      <Image
        src={isScrolled ? logoColorImg : logoImg}
        alt="logo title"
        width={92}
        height={22}
        className="transition-opacity duration-300 ease-in-out"
      />
      <Link href="https://www.sulsul-interview.kr" target="_blank" className={buttonClass}>
        <span className="text-xs font-semibold text-white">술술 바로가기</span>
      </Link>
    </div>
  );
}
