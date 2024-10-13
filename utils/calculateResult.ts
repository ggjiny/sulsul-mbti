import { MBTICountLetter } from '@/types';

export default function calculateResult(answers: string) {
  const counts: Record<MBTICountLetter, number> = {
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  for (const answer of answers) {
    if (answer in counts) {
      counts[answer as MBTICountLetter]++;
    }
  }

  const isS = counts.S >= counts.N;
  const isT = counts.T >= counts.F;
  const isJ = counts.J >= counts.P;

  if (isS) {
    return isJ ? 'SJ' : 'SP';
  } else {
    return isT ? 'NT' : 'NF';
  }
}
