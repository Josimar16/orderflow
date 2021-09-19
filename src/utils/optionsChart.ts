import { theme } from '@chakra-ui/react';

export const optionsChart = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: true,
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    title: {
      text: "Quantidade de solicitacoes"
    }
  },
  xaxis: {
    type: "datetime" as any,
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-17T00:00:00.000Z',
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
    ],
  },
  colors: [],
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};