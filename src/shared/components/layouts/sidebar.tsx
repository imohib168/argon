// component imports
import { ScrollArea } from '@/shared/components/ui/scroll-area';
import { GCBaseButton, GCSidebarMenuItems } from '@/shared/components';

// asset imports
import { ILLUSTRATIONS, LOGOS } from '@/assets';

const Sidebar = () => {
  return (
    <ScrollArea className="bg-card p-4 rounded-lg h-full">
      <div className="flex-center space-x-3 w-full">
        <LOGOS.Argon />
        <div className="bg-white w-[1px] h-4" />
        <LOGOS.Chakra />
      </div>

      <div className="bg-gradient bg-gradient-to-r from-[#E1E0E200] via-[#E1E0E2FF] to-[#E1E0E229] my-6 w-full h-[2px]" />

      <GCSidebarMenuItems />

      <div>
        <img
          src={ILLUSTRATIONS.Document.src}
          alt={ILLUSTRATIONS.Document.alt}
        />

        <div className="mb-6 text-center">
          <p className="font-bold text-lg">Need help?</p>
          <p className="text-muted">Please check our docs</p>
        </div>

        <div>
          <GCBaseButton
            label="DOCUMENTATION"
            className="bg-primary w-full font-bold"
          />
          <GCBaseButton label="UPGRADE TO PRO" className="mt-6 p-4 w-full" />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Sidebar;
