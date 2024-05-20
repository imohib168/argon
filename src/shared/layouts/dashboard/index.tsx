// package imports
import { Outlet } from 'react-router-dom';

// component imports
import { GCSidebar } from '@/shared/components';

// component types
type IProps = {
  children: React.ReactNode;
};

const Dashboard: React.FC<IProps> = () => {
  return (
    <main className="relative flex p-4 h-screen overflow-hidden">
      <div className="z-50 w-[330px] h-full">
        <GCSidebar />
      </div>

      <section className="z-50 px-4 py-4 lg:p-2 w-full overflow-y-auto">
        <div className="container">
          <Outlet />
        </div>
      </section>

      <div className="top-0 left-0 absolute bg-secondary w-full h-72" />
    </main>
  );
};

export default Dashboard;
