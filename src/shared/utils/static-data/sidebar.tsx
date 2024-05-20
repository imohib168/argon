import { IonIcon } from '@ionic/react';
import {
  home,
  card,
  build,
  person,
  rocket,
  document,
  statsChart,
} from 'ionicons/icons';

interface MenuItem {
  id: number;
  label: string;
  subMenu?: SidebarMenuItem[];
}

type SidebarMenuItem = MenuItem &
  (
    | {
        hasChildren?: false;
        icon: JSX.Element;
        path: string;
      }
    | {
        hasChildren: true;
        icon?: JSX.Element;
        path?: string;
      }
  );

export const sidebarMenuItems: SidebarMenuItem[] = [
  {
    id: 1,
    path: '/',
    label: 'Dashboard',
    icon: <IonIcon icon={home} />,
  },
  {
    id: 2,
    path: '/tables',
    label: 'Tables',
    icon: <IonIcon icon={statsChart} />,
  },
  {
    id: 3,
    path: '/billing',
    label: 'Billing',
    icon: <IonIcon icon={card} />,
  },
  {
    id: 4,
    path: '/rtl',
    label: 'RTL',
    icon: <IonIcon icon={build} />,
  },

  {
    id: 5,
    hasChildren: true,
    label: 'ACCOUNT PAGES',
    subMenu: [
      {
        id: 1,
        path: '/profile',
        label: 'Profile',
        icon: <IonIcon icon={person} />,
      },
      {
        id: 2,
        path: '/sign-in',
        label: 'Sign In',
        icon: <IonIcon icon={document} />,
      },
      {
        id: 3,
        path: '/sign-up',
        label: 'Sign Up',
        icon: <IonIcon icon={rocket} />,
      },
    ],
  },
];
