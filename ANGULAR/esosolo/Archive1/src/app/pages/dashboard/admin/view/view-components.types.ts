export interface CompaniesOverviewListInterface {
    type: string;
    metric: number | string;
    trend: boolean;
    trendMetric: number | string;
    class?: string;
    icon: string;
    [key: string]: any;
  }
  
  export interface CompaniesListInterface {
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
  
  export interface CompaniesOverviewMetricsInterface {
    amount: number | string;
    legend: string;
    trend: boolean;
    class: string;
  }
  
  export interface CompaniesOverviewCountriesInterface {
    country: string;
    code: string;
    users: number | string;
  }

  export interface AdminUsersInterface {
      icon: string;
      name: string;
      userid: number | string;
      company: string;
      role: string;
      activity: string;
      status: boolean;
      [key: string]: any;
  }
  