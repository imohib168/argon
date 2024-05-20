// package imports
import { Outlet } from 'react-router-dom';

// layout imports
import { DashboardLayout } from '@/shared/layouts';

const PublicMiddleware = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default PublicMiddleware;
