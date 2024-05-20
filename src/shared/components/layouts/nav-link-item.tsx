// package imports
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

// component types
type IProps = {
  path: string;
  icon: JSX.Element;
  label: string;
};

const NavLinkItem: React.FC<IProps> = ({ path, icon, label }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx(
          'mb-2 p-2 rounded-md transition ease-linear duration-200',
          isActive ? 'bg-background' : 'bg-transparent'
        )
      }
    >
      {({ isActive }) => (
        <div className="flex items-center space-x-4">
          <div
            className={clsx(
              'flex-center rounded-md w-[35px] h-[35px] transition ease-linear duration-200',
              isActive ? 'bg-primary' : 'bg-background'
            )}
          >
            {icon}
          </div>
          <span className="font-bold">{label}</span>
        </div>
      )}
    </NavLink>
  );
};

export default NavLinkItem;
