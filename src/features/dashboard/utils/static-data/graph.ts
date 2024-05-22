import { ApexOptions } from 'apexcharts';

export const areaChartOptions: ApexOptions = {
  chart: { type: 'area', toolbar: { show: false } },
  grid: { show: true, borderColor: '#a0aec0', strokeDashArray: 3 },
  stroke: { curve: 'smooth', width: 3 },
  legend: { show: false },
  xaxis: {
    type: 'category',
    axisBorder: { show: false },
    axisTicks: { show: false },
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    labels: { style: { colors: '#fff' } },
    tooltip: { enabled: false },
  },
  yaxis: {
    show: true,
    stepSize: 100,
    labels: { style: { colors: '#fff' } },
    tooltip: { enabled: false },
  },

  colors: ['#3182CE', '#FFFFFF'],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.5,
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
  plotOptions: { area: { fillTo: 'end' } },
  tooltip: { enabled: false, marker: { show: false } },
};

export const barChartOptions: ApexOptions = {
  chart: { type: 'bar', toolbar: { show: false } },
  colors: ['#ED8936'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '12px',
      borderRadius: 5,
      borderRadiusApplication: 'around',
      borderRadiusWhenStacked: 'last',
      dataLabels: {
        position: 'bottom',
        orientation: 'vertical',
      },
    },
  },
  dataLabels: { enabled: false },
  stroke: { show: true, width: 2 },
  grid: { show: true, borderColor: '#a0aec0', strokeDashArray: 3 },
  xaxis: {
    type: 'category',
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { style: { colors: '#fff' } },
    categories: ['Jul', 'Aug', 'sep', 'Oct', 'Nov', 'Dec'],
  },
  fill: { opacity: 1, type: 'solid' },
  yaxis: {
    show: true,
    stepSize: 10,
    labels: { style: { colors: '#fff' } },
    tooltip: { enabled: false },
  },
  tooltip: { enabled: false },
};

export const areaChartSeries = [
  {
    name: 'Series A',
    type: 'area',
    data: [500, 170, 250, 190, 240, 170, 280, 99, 234, 34, 200, 100],
  },
  {
    name: 'Series B',
    type: 'area',
    data: [220, 320, 290, 340, 142, 400, 130, 499, 300, 280, 356, 400],
  },
];

export const barChartSeries = [
  { name: 'Total Orders', data: [25, 20, 30, 22, 17, 29] },
];
