export interface OverviewTicketsListInterface {
    type: string;
    metric: number | string;
    trend: boolean;
    trendMetric: number | string;
    class?: string;
    [key: string]: any;
  }
  
  export interface OverviewMetricsInterface {
    amount: number | string;
    legend: string;
    trend: boolean;
    class: string;
  }
  
  export interface OverviewCountriesInterface {
    country: string;
    code: string;
    users: number | string;
  }
  