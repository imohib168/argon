// package imports
import clsx from 'clsx';
import { ColumnDef } from '@tanstack/react-table';

// component imports
import { Progress } from '@/shared/components/ui/progress';

// feature imports
import { ProgressType, SocialTrafficType } from '@/features/dashboard';

export const socialTrafficColumnsData: ColumnDef<SocialTrafficType>[] = [
  {
    accessorKey: 'referral',
    header: 'Referral',
    size: 50,
    cell: ({ row }) => {
      return <p className="font-bold text-muted">{row.getValue('referral')}</p>;
    },
  },
  {
    accessorKey: 'visitors',
    header: 'Visitors',
    size: 40,
    cell: ({ row }) => {
      return <p className={clsx('text-muted')}>{row.getValue('visitors')}</p>;
    },
  },
  {
    accessorKey: 'progress',
    header: '',
    cell: ({ row }) => {
      const progress: ProgressType = row.getValue('progress');

      return (
        <div className="flex text-muted items-center w-full">
          <p className="mr-2 font-bold">{progress.percentage ?? 0}%</p>

          <Progress
            value={progress.percentage ?? 0}
            indicatorColor={`bg-[${progress.indicator}]`}
          />
        </div>
      );
    },
  },
];
