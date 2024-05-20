// package imports
import React from 'react';

// component imports
import { GCNavLinkItem } from '@/shared/components';
import { sidebarMenuItems } from '@/shared/utils/static-data/sidebar';

const SidebarMenuItems = () => {
  return (
    <div className="flex flex-col flex-1 width-full">
      {sidebarMenuItems.map((menuItem) => {
        const { id, icon, path, label, hasChildren } = menuItem;

        if (hasChildren) {
          return (
            <React.Fragment key={path}>
              <p className="my-3 px-2 font-bold text-sm">{label}</p>

              {menuItem.subMenu?.map((submenuItem) => {
                return (
                  <GCNavLinkItem
                    key={submenuItem.id}
                    label={submenuItem.label}
                    path={submenuItem?.path ?? '/'}
                    icon={submenuItem?.icon ?? <></>}
                  />
                );
              })}
            </React.Fragment>
          );
        } else {
          return (
            <GCNavLinkItem key={id} path={path} label={label} icon={icon} />
          );
        }
      })}
    </div>
  );
};
export default SidebarMenuItems;
