// package imports
import clsx from 'clsx';

// feature imports
import { StatisticType } from '@/features/dashboard';

// component types
type IProps = { statistic: StatisticType };

const StatisticCard: React.FC<IProps> = ({ statistic }) => {
  return (
    <div className="space-y-3 bg-card p-4 rounded-xl">
      <div className="flex-between">
        <div>
          <p className="font-bold text-muted text-xs tracking-widest">
            {statistic.label}
          </p>
          <p className="font-bold text-md">{statistic.amount}</p>
        </div>

        <div className="flex-center bg-primary rounded-md w-[35px] h-[35px] transition duration-200 ease-linear">
          {statistic.icon}
        </div>
      </div>

      <div className="space-x-1">
        <span
          className={clsx(
            'font-bold text-sm',
            statistic.stats.isPositive ? 'text-success' : 'text-danger'
          )}
        >
          {statistic.stats.isPositive ? '+' : '-'}
          {statistic.stats.number}
        </span>
        <span className="text-muted text-sm">Since last month</span>
      </div>
    </div>
  );
};

export default StatisticCard;
