import { IonIcon } from '@ionic/react';
import { cart, documentText, globe, wallet } from 'ionicons/icons';

import { StatisticType } from '@/features/dashboard';

export const statisticsData: StatisticType[] = [
  {
    id: 1,
    label: "TODAY'S MONEY",
    amount: '$53,897',
    icon: <IonIcon icon={wallet} />,
    stats: {
      isPositive: true,
      number: '3.48%',
      description: 'Since last month',
    },
  },
  {
    id: 2,
    label: "TODAY'S USERS",
    amount: '$3,200',
    icon: <IonIcon icon={globe} />,
    stats: {
      isPositive: true,
      number: '5.20%',
      description: 'Since last month',
    },
  },
  {
    id: 3,
    label: 'NEW CLIENTS',
    amount: '$2,503',
    icon: <IonIcon icon={documentText} />,
    stats: {
      isPositive: false,
      number: '2.82%',
      description: 'Since last month',
    },
  },
  {
    id: 4,
    label: 'TOTAL SALES',
    amount: '$173,000',
    icon: <IonIcon icon={cart} />,
    stats: {
      isPositive: true,
      number: '8.12%',
      description: 'Since last month',
    },
  },
];
