// package imports
import { IonIcon } from '@ionic/react';
import { notifications, person, settings } from 'ionicons/icons';

// component imports
import { GCIconButton } from '@/shared/components';

// feature imports
import { LCBreadcrumb, LCSearchInput, staticData } from '@/features/dashboard';

const Header = () => {
  return (
    <div className="flex-between">
      <div className="space-y-1">
        <LCBreadcrumb
          separator="/"
          breadcrumbData={staticData.breadcrumbLinks}
        />

        <p className="font-bold">Dashboard</p>
      </div>

      <div className="flex items-center space-x-5">
        <LCSearchInput />

        <GCIconButton
          icon={<IonIcon icon={person} />}
          label="Sign In"
          variant="destructive"
          className="bg-transparent p-0"
        />

        <IonIcon className="cursor-pointer" icon={settings} />
        <IonIcon className="cursor-pointer" icon={notifications} />
      </div>
    </div>
  );
};

export default Header;
