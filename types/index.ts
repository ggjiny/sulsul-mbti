export type Option = {
  text: string;
  type: MBTILetter;
};

export type Question = {
  text: string;
  options: Option[];
};

export type MBTILetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type MBTICountLetter = 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type MBTIResult = `${MBTILetter}${MBTILetter}${MBTILetter}${MBTILetter}`;

export type MBTIType = 'SJ' | 'NT' | 'SP' | 'NF';

interface Tip {
  main: string;
  sub: string;
}

interface TextItem {
  tag: string[];
  desc: string;
  tip: Tip[];
}

interface ResultData {
  title: string;
  subTitle: string;
  text: TextItem;
}

export type TypeResult = Record<MBTIType, ResultData>;

export interface Kakao {
  init: (key: string) => void;
  cleanup: () => void;
  isInitialized: () => boolean;
  Share: {
    sendDefault: (options: {
      objectType: string;
      content: {
        title: string;
        description: string;
        imageUrl: string;
        link: {
          mobileWebUrl: string;
          webUrl: string;
        };
      };
      buttons: [
        {
          title: string;
          link: {
            mobileWebUrl: string;
            webUrl: string;
          };
        }
      ];
    }) => void;
  };
}
