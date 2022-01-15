export interface DashboardsListInterface {
  type: string;
  metric: number | string;
  trend: boolean;
  trendMetric: number | string;
  class?: string;
  [key: string]: any;
}

export interface DashboardMetricsInterface {
  amount: number | string;
  legend: string;
  trend: boolean;
  class: string;
}

export interface DashboardCountriesInterface {
  country: string;
  code: string;
  users: number | string;
}
