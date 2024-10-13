'use client';

import { BubbleImg, ProfileImg } from '@/public/svg';
import type { Question } from '@/types';
import { useEffect, useState } from 'react';

interface QuestionProps {
  question: Question;
  onAnswer: (answer: string) => void;
}

export default function Question({ question, onAnswer }: QuestionProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const animateTimer = setTimeout(() => setAnimate(true), 50);

    return () => {
      clearTimeout(animateTimer);
    };
  }, [question]);

  return (
    <div
      className={`m-5 transition-all duration-700 ease-out ${
        animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div
        className={`mb-[30px] flex items-start gap-1.5 transition-all delay-100 duration-500 ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-0'
        }`}
      >
        <ProfileImg className="size-9" alt="수리 프로필" />
        <div>
          <span className="text-2xs font-medium text-gray-600">수리</span>
          <div className="relative whitespace-pre-line rounded-base bg-blue-500 px-4 py-3 text-base font-medium text-white">
            <BubbleImg
              alt="말풍선 꼬리"
              className="absolute left-[-3px] top-0 h-[8.6px] w-2"
            />
            {question.text}
          </div>
        </div>
      </div>
      {question.options.map((option, index) => (
        <button
          key={option.type}
          className={`w-full rounded-xl bg-gray-100 py-[18px] pl-5 pr-[18px] text-left text-base font-medium text-gray-800 transition-all duration-500 ${
            index === 0 ? 'mb-4' : ''
          } ${
            animate
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-4 scale-95 opacity-0'
          }`}
          style={{ transitionDelay: `${300 + index * 100}ms` }}
          onClick={() => onAnswer(option.type)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}
