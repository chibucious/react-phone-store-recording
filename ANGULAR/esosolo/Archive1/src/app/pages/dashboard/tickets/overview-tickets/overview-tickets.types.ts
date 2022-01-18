export interface OverviewTicketsListInterface {
    type: string;
    metric: number | string;
    trend: boolean;
    trendMetric: number | string;
    class?: string;
    [key: string]: any;
  }

  export interface TicketsListInterface {
    status: boolean;
    location: string;
    name: string;
    users: number | string;
    class?: string;
    logo: string;
    rating: number | string;
    email: string;
    phoneNumber: string | string;
    registrationNumber: number;
    website: string;
    type: string;
    size: string;
    incorporated: number | string;
  
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
  