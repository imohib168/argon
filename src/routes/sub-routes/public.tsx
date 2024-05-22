import { HomePage } from '@/features/dashboard';

export const publicSubRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'tables',
    element: <>Tables</>,
  },
  {
    path: 'billing',
    element: <>Billing</>,
  },
  {
    path: 'rtl',
    element: <>RTL</>,
  },
  {
    path: 'profile',
    element: <>Profile</>,
  },
  {
    path: 'sign-in',
    element: <>Sign In</>,
  },
  {
    path: 'sign-up',
    element: <>Sign Up</>,
  },
];
