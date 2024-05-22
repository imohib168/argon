import { ColumnDef } from '@tanstack/react-table';

import { PageVisitsType } from '@/features/dashboard';

export const pageVisitsColumnsData: ColumnDef<PageVisitsType>[] = [
  {
    accessorKey: 'pageName',
    header: 'Page Name',
    cell: ({ row }) => {
      return <div className="font-bold">{row.getValue('pageName')}</div>;
    },
  },
  {
    accessorKey: 'visitors',
    header: 'Visitors',
  },
  {
    accessorKey: 'uniqueUsers',
    header: 'Unique Users',
  },
  {
    accessorKey: 'bounceRate',
    header: 'Bounce Rate',
  },
];
