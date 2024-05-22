import { PageVisitsType, SocialTrafficType } from '@/features/dashboard';

export const pageVisitsData: PageVisitsType[] = [
  {
    id: '728ed52f',
    pageName: '/argon/',
    visitors: '4,569',
    uniqueUsers: 340,
    bounceRate: '46,53%',
  },
  {
    id: '728ed52g',
    pageName: '/argon/index.htmml',
    visitors: '3,985',
    uniqueUsers: 319,
    bounceRate: '46,53%',
  },
  {
    id: '728ed52h',
    pageName: '/argon/charts.html',
    visitors: '3,513',
    uniqueUsers: 294,
    bounceRate: '36,49%',
  },
  {
    id: '728ed52a',
    pageName: '/argon/tables.html',
    visitors: '2,050',
    uniqueUsers: 147,
    bounceRate: '50,87%',
  },
  {
    id: '728ed52y',
    pageName: '/argon/profile.html',
    visitors: '1,795',
    uniqueUsers: 190,
    bounceRate: '46,53%',
  },
];

export const socialTrafficData: SocialTrafficType[] = [
  {
    id: '728ed52f',
    referral: 'Facebook',
    visitors: '1,480',
    progress: { percentage: 60, indicator: 'bg-[#ED8936]' },
  },
  {
    id: '728ed52f',
    referral: 'Facebook',
    visitors: '5,480',
    progress: { percentage: 70, indicator: 'bg-[#ED8936]' },
  },
  {
    id: '728ed52f',
    referral: 'Google',
    visitors: '4,807',
    progress: { percentage: 80, indicator: 'bg-primary' },
  },
  {
    id: '728ed52f',
    referral: 'Instagram',
    visitors: '3,678',
    progress: { percentage: 75, indicator: 'bg-primary' },
  },
  {
    id: '728ed52f',
    referral: 'Facebook',
    visitors: '2,645',
    progress: { percentage: 30, indicator: 'bg-[#ED8936]' },
  },
];
