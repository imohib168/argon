// package imports
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// route imports
import { routes } from '@/routes';

const App = () => {
  const router = createBrowserRouter(routes());
  return <RouterProvider router={router} />;
};

export default App;
