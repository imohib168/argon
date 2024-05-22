// feature imports
import { LCStatisticCard, staticData } from '@/features/dashboard';

const Statistics = () => {
  return (
    <div className="gap-3 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
      {staticData.statistics.map((statistic) => {
        return <LCStatisticCard key={statistic.id} statistic={statistic} />;
      })}
    </div>
  );
};

export default Statistics;
