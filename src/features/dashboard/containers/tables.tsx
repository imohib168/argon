// component imports
import { GCDataTable } from '@/shared/components';

// feature imports
import { LCTableCard, table } from '@/features/dashboard';

const Tables = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4">
      <div className="w-full xl:flex-1">
        <LCTableCard label="Page visits">
          <div className="my-4">
            <GCDataTable
              columns={table.columns.pageVisit}
              data={table.data.pageVisit}
            />
          </div>
        </LCTableCard>
      </div>

      <div className="w-full xl:w-2/6">
        <LCTableCard label="Social traffic">
          <div className="my-4">
            <GCDataTable
              columns={table.columns.socialTraffic}
              data={table.data.socialTraffic}
            />
          </div>
        </LCTableCard>
      </div>
    </div>
  );
};

export default Tables;
