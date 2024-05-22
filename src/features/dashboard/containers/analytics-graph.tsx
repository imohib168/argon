// package imports
import ReactApexChart from 'react-apexcharts';

// feature imports
import { LCGraphCard, charts } from '@/features/dashboard';

const AnalyticsGraph = () => {
  const areaChartDescription = (
    <>
      <span className="text-success font-bold">(+5) more</span>{' '}
      <span className="text-white">in 2021</span>
    </>
  );

  const barChartDescription = (
    <div className="flex flex-col space-y-1">
      <span className="text-muted font-bold tracking-wider">PERFORMANCE</span>
      <span className="text-white font-bold text-lg">Total orders</span>
    </div>
  );

  return (
    <div className="flex flex-col xl:flex-row gap-4">
      <LCGraphCard
        className="w-full xl:flex-1"
        label="Sales overview"
        description={areaChartDescription}
      >
        <ReactApexChart
          height="100%"
          series={charts.series.areaChart}
          options={charts.options.areaChart}
        />
      </LCGraphCard>

      <LCGraphCard
        className="w-full xl:w-2/6"
        description={barChartDescription}
      >
        <ReactApexChart
          type="bar"
          height="100%"
          series={charts.series.barChart}
          options={charts.options.barChart}
        />
      </LCGraphCard>
    </div>
  );
};

export default AnalyticsGraph;
