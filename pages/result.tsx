import ResultClient from '@/components/result/ResultClient';
import { MBTIType } from '@/types';
import api from '@/utils/api';
import calculateResult from '@/utils/calculateResult';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { answers } = context.query;

  if (!answers) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  try {
    await api.get('/api/v1/job-type-test/visit', {
      timeout: 3000,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  const answersString = Array.isArray(answers) ? answers.join('') : answers;
  const result = calculateResult(answersString);

  return {
    props: { result },
  };
};

interface ResultPageProps {
  result: MBTIType;
}

export default function ResultPage({ result }: ResultPageProps) {
  return <ResultClient result={result} />;
}
