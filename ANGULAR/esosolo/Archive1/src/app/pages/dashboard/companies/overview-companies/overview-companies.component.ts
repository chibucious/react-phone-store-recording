import { Component, OnInit } from '@angular/core';
import { GeneralFormattingService } from 'src/app/services/general-formatting/general-formatting.service';
import {
  CompaniesOverviewCountriesInterface,
  CompaniesOverviewListInterface,
  CompaniesOverviewMetricsInterface,
} from './overview-companies.types';

@Component({
  selector: 'app-overview-companies',
  templateUrl: './overview-companies.component.html',
  styleUrls: ['./overview-companies.component.scss'],
})
export class OverviewCompaniesComponent implements OnInit {
  // Used to toggle between loading and not loading of the dashboards list
  dashboardListIsLoading: boolean = true;

  // The dashboard metric list data
  dashboardsList!: Array<CompaniesOverviewListInterface>;

  // The dashboard graph metrics list
  dashboardsGraphList!: Array<CompaniesOverviewMetricsInterface>;

  // The dashboard client countries list
  dashboardCountriesList!: Array<CompaniesOverviewCountriesInterface>;

  // Sample dropdown list
  sampleDropdownList!: Array<any>;

  constructor(private formatting: GeneralFormattingService) {}

  ngOnInit(): void {
    // Initialize the data for the dashboard list
    this.dashboardsList = [
      {
        type: 'Total Companies',
        metric: this.formatting.addCommaToNumbers(250),
        trend: false,
        trendMetric: 3.5,
        icon: '../../../../../assets/icons/custom-icons/buildings.svg',
      },
      {
        type: 'Programs',
        metric: this.formatting.addCommaToNumbers(2500),
        trend: false,
        trendMetric: 3.5,
        class: 'red',
        icon: '../../../../../assets/icons/custom-icons/silo.svg',
      },
      {
        type: 'Users',
        metric: this.formatting.addCommaToNumbers(28218),
        trend: true,
        trendMetric: 3.5,
        class: 'yellow',
        icon: '../../../../../assets/icons/custom-icons/polka-dots.svg',
      },
      {
        type: 'Issued Cards',
        metric: this.formatting.addCommaToNumbers(55500),
        trend: true,
        trendMetric: 3.5,
        class: 'green',
        icon: '../../../../../assets/icons/custom-icons/credit-card.svg',
      },
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
