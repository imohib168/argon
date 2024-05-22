// pages
export { default as HomePage } from './pages/home';

// containers
export { default as TablesContainer } from './containers/tables';
export { default as HeaderContainer } from './containers/header';
export { default as StatisticsContainer } from './containers/statistics';
export { default as AnalyticsGraphContainer } from './containers/analytics-graph';

// components
export { default as LCGraphCard } from './components/graph-card';
export { default as LCTableCard } from './components/table-card';
export { default as LCBreadcrumb } from './components/breadcrumb';
export { default as LCSearchInput } from './components/search-input';
export { default as LCStatisticCard } from './components/statistic-card';

// types
export type { ProgressType } from './types';
export type { StatisticType } from './types';
export type { PageVisitsType } from './types';
export type { SocialTrafficType } from './types';

// utils
import { breadcrumbLinksData } from './utils/static-data/breadcrumb';
import { statisticsData } from './utils/static-data/statistics';

import { barChartOptions } from './utils/static-data/graph';
import { areaChartOptions } from './utils/static-data/graph';
import { areaChartSeries } from './utils/static-data/graph';
import { barChartSeries } from './utils/static-data/graph';

import { pageVisitsColumnsData } from './utils/columns/page-visits';
import { socialTrafficColumnsData } from './utils/columns/social-traffic';
import { pageVisitsData, socialTrafficData } from './utils/static-data/table';

export const staticData = {
  breadcrumbLinks: breadcrumbLinksData,
  statistics: statisticsData,
};

export const charts = {
  options: {
    areaChart: areaChartOptions,
    barChart: barChartOptions,
  },
  series: {
    areaChart: areaChartSeries,
    barChart: barChartSeries,
  },
};

export const table = {
  columns: {
    pageVisit: pageVisitsColumnsData,
    socialTraffic: socialTrafficColumnsData,
  },
  data: {
    pageVisit: pageVisitsData,
    socialTraffic: socialTrafficData,
  },
};
