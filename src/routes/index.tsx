// route middleware imports
import PublicMiddleware from './middleware/public';

// sub-route imports
import { publicSubRoutes } from './sub-routes/public';

export const routes = () => [
  // Routes that are accessible to both authenticated
  // and un-authenticated users
  {
    path: '/',
    element: <PublicMiddleware />,
    children: publicSubRoutes || [],
  },
  // Error page if user intentionally/unintentionally tries to go to
  // wrong path/url
  {
    path: '*',
    element: <>Error 404</>,
  },
];
