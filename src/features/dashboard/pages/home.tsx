import {
  HeaderContainer,
  TablesContainer,
  StatisticsContainer,
  AnalyticsGraphContainer,
} from '@/features/dashboard';

const Home = () => {
  return (
    <div className="grid gap-4">
      <div className="mb-4">
        <HeaderContainer />
      </div>

      <StatisticsContainer />

      <AnalyticsGraphContainer />

      <TablesContainer />
    </div>
  );
};

export default Home;
