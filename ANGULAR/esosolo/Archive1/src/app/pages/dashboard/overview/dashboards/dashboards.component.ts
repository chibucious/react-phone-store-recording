import { Component, OnInit } from '@angular/core';
import { GeneralFormattingService } from 'src/app/services/general-formatting/general-formatting.service';
import {
  DashboardCountriesInterface,
  DashboardMetricsInterface,
  DashboardsListInterface,
} from './dashboards.types';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],
})
export class DashboardsComponent implements OnInit {
  // Used to toggle between loading and not loading of the dashboards list
  dashboardListIsLoading: boolean = true;

  // The dashboard metric list data
  dashboardsList!: Array<DashboardsListInterface>;

  // The dashboard graph metrics list
  dashboardsGraphList!: Array<DashboardMetricsInterface>;

  // The dashboard client countries list
  dashboardCountriesList!: Array<DashboardCountriesInterface>;

  // Sample dropdown list
  sampleDropdownList!: Array<any>;

  constructor(private formatting: GeneralFormattingService) {}

  ngOnInit(): void {
    // Initialize the data for the dashboard list
    this.dashboardsList = [
      {
        type: 'Companies',
        metric: this.formatting.addCommaToNumbers(500),
        trend: false,
        trendMetric: 3.5,
      },
      {
        type: 'Programs',
        metric: this.formatting.addCommaToNumbers(2500),
        trend: false,
        trendMetric: 3.5,
        class: 'red',
      },
      {
        type: 'Issued Cards',
        metric: this.formatting.addCommaToNumbers(55500),
        trend: true,
        trendMetric: 3.5,
        class: 'yellow',
      },
      {
        type: 'Active APIS',
        metric: this.formatting.addCommaToNumbers(250),
        trend: true,
        trendMetric: 3.5,
        class: 'green',
      },
      // {
      //   type: 'Users',
      //   metric: this.formatting.addCommaToNumbers(55500),
      //   trend: true,
      //   trendMetric: 3.5,
      // },
    ];

    // Initialize the data for the graph metrics list
    this.dashboardsGraphList = [
      {
        amount: this.formatting.addCommaToNumbers(1200),
        legend: 'Onboarding users',
        trend: false,
        class: 'blue',
      },
      {
        amount: this.formatting.addCommaToNumbers(25000),
        legend: 'Active No KYC',
        trend: false,
        class: 'yellow',
      },
      {
        amount: this.formatting.addCommaToNumbers(8860),
        legend: 'Active KYC',
        trend: true,
        class: 'green',
      },
      {
        amount: this.formatting.addCommaToNumbers(7800),
        legend: 'Active Balance',
        trend: true,
        class: 'black',
      },
      {
        amount: this.formatting.addCommaToNumbers(12640),
        legend: 'Inactive balance',
        trend: true,
        class: 'red',
      },
    ];

    // Initialize the data for countries list
    this.dashboardCountriesList = [
      {
        code: 'AE',
        country: 'Algeria',
        users: this.formatting.addCommaToNumbers(40),
      },
      {
        code: 'AE',
        country: 'Algeria',
        users: this.formatting.addCommaToNumbers(40),
      },
      {
        code: 'AE',
        country: 'Algeria',
        users: this.formatting.addCommaToNumbers(40),
      },
      {
        code: 'AE',
        country: 'Algeria',
        users: this.formatting.addCommaToNumbers(40),
      },
      {
        code: 'AO',
        country: 'Algeria',
        users: this.formatting.addCommaToNumbers(40),
      },
      {
        code: 'AO',
        country: 'Algeria',
        users: this.formatting.addCommaToNumbers(40),
      },
      {
        code: 'AO',
        country: 'Algeria',
        users: this.formatting.addCommaToNumbers(40),
      },
      {
        code: 'AO',
        country: 'Algeria',
        users: this.formatting.addCommaToNumbers(40),
      },
    ];

    // Initialize the data for the sample dropdown list
    this.sampleDropdownList = [
      { label: 'Yearly' },
      { label: 'Quarterly' },
      { label: 'Monthly' },
      { label: 'Weekly' },
      { label: 'Daily' },
    ];
  }

  // Listen for selected dropdown items
  listenForChangeInDurationDropdown(item: any) {
    console.log('selected item from duration dropdown: ', item);
  }

  // Listen for selected dropdown items
  listenForChangeInMapDropdown(item: any) {
    console.log('selected item from map dropdown: ', item);
  }
}
