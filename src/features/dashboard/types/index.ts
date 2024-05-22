export type StatisticType = {
  id: number;
  label: string;
  amount: string;
  icon: JSX.Element;
  stats: { isPositive: boolean; number: string; description: string };
};

export type PageVisitsType = {
  id: string;
  pageName: string;
  visitors: string;
  uniqueUsers: number;
  bounceRate: string;
};

export type ProgressType = {
  percentage: number;
  indicator: string;
};

export type SocialTrafficType = {
  id: string;
  referral: string;
  visitors: string;
  progress: ProgressType;
};
