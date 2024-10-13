import { useRouter } from 'next/router';
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import QuestionHeader from '../components/QuestionHeader';
import { QUESTIONS } from '../utils/question';

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push(
        {
          pathname: '/result',
          query: { answers: newAnswers.join('') },
        },
        '/result'
      );
    }
  };

  return (
    <div>
      <QuestionHeader current={currentQuestion + 1} />
      <ProgressBar current={currentQuestion + 1} total={QUESTIONS.length} />
      <Question
        key={currentQuestion + 1}
        question={QUESTIONS[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
