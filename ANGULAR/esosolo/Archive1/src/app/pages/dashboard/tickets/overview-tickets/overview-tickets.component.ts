import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { GeneralFormattingService } from 'src/app/services/general-formatting/general-formatting.service';
import {
  OverviewCountriesInterface,
  OverviewMetricsInterface,
  OverviewTicketsListInterface,
} from './overview-tickets.types';


// declare var Chart:any;

@Component({
  selector: 'app-overview-tickets',
  templateUrl: './overview-tickets.component.html',
  styleUrls: ['./overview-tickets.component.scss']
})
export class OverviewTicketsComponent implements OnInit {

   // Used to toggle between loading and not loading of the overviewTickets list
   overviewTicketListIsLoading: boolean = true;

   // The overview metric list data
   overviewTicketsList!: Array<OverviewTicketsListInterface>;
 
  //  // The overview graph metrics list
  //  overviewsGraphList!: Array<OverviewMetricsInterface>;
 
  //  // The overview client countries list
  //  overviewCountriesList!: Array<OverviewCountriesInterface>;
 
   // Sample dropdown list
   sampleDropdownList!: Array<any>;
 
   constructor(private formatting: GeneralFormattingService) {}
 
   ngOnInit(): void {

    // Graph
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Pending',
              data: [1000, 2000, 3000, 1500, 3000, 2500, 1000, 1000, 3000, 1500, 3000, 2500],
              backgroundColor: [
                '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D', 
                '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D'
              ],
              borderColor: [
                '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D', 
                '#FFB92D', '#FFB92D', '#FFB92D', '#FFB92D'
              ],
              borderWidth: 1
            },

            {
              label: 'Open',
              data: [500, 1000, 2000, 3000, 1000, 1000, 3000, 1000, 1000, 3000, 1000, 1000],
              backgroundColor: [
                '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4',
                '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4',
              ],
              borderColor: [
                '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4',
                '#1F78B4', '#1F78B4', '#1F78B4', '#1F78B4',
              ],
              borderWidth: 1
            },

            {
              label: 'Closed',
              data: [1500, 2000, 1000, 1000, 2000, 500, 500, 500, 500, 500, 500, 500],
              backgroundColor: [
                '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C',
                '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C',
              ],
              borderColor: [
                '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C',
                '#2FC26C', '#2FC26C', '#2FC26C', '#2FC26C',
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {
          display: true,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              // stepSize: 1, 
            },
          }],
        },
      }
    });
    // Graph




     // Initialize the data for the overview list
     this.overviewTicketsList = [
       {
         type: 'Total Tickets',
         metric: this.formatting.addCommaToNumbers(20500),
         trend: false,
         trendMetric: 8.3+'%',
         icon: '../../../../../assets/icons/custom-icons/icons8_ticket 1.svg',
       },
       {
         type: 'In Progress',
         metric: this.formatting.addCommaToNumbers(2500),
         trend: true,
         trendMetric: 8.3+'%',
         class: 'yellow',
         icon: '../../../../../assets/icons/custom-icons/icons8_ticket 1.svg',
       },
       {
         type: 'Completed',
         metric: this.formatting.addCommaToNumbers(15500),
         trend: true,
         trendMetric: 8.3+'%',
         class: 'green',
         icon: '../../../../../assets/icons/custom-icons/icons8_ticket 1.svg',
       },
       {
         type: 'Closed',
         metric: this.formatting.addCommaToNumbers(2500),
         trend: true,
         trendMetric: 8.3+'%',
         class: 'red',
         icon: '../../../../../assets/icons/custom-icons/icons8_ticket 1.svg',
       }, 
       // {
       //   type: 'Users',
       //   metric: this.formatting.addCommaToNumbers(55500),
       //   trend: true,
       //   trendMetric: 3.5,
       // },
     ];
 
    //  // Initialize the data for the graph metrics list
    //  this.overviewsGraphList = [
    //    {
    //      amount: this.formatting.addCommaToNumbers(1200),
    //      legend: 'Onboarding users',
    //      trend: false,
    //      class: 'blue',
    //    },
    //    {
    //      amount: this.formatting.addCommaToNumbers(25000),
    //      legend: 'Active No KYC',
    //      trend: false,
    //      class: 'yellow',
    //    },
    //    {
    //      amount: this.formatting.addCommaToNumbers(8860),
    //      legend: 'Active KYC',
    //      trend: true,
    //      class: 'green',
    //    },
    //    {
    //      amount: this.formatting.addCommaToNumbers(7800),
    //      legend: 'Active Balance',
    //      trend: true,
    //      class: 'black',
    //    },
    //    {
    //      amount: this.formatting.addCommaToNumbers(12640),
    //      legend: 'Inactive balance',
    //      trend: true,
    //      class: 'red',
    //    },
    //  ];
 
    //  // Initialize the data for countries list
    //  this.overviewCountriesList = [
    //    {
    //      code: 'AE',
    //      country: 'Algeria',
    //      users: this.formatting.addCommaToNumbers(40),
    //    },
    //    {
    //      code: 'AE',
    //      country: 'Algeria',
    //      users: this.formatting.addCommaToNumbers(40),
    //    },
    //    {
    //      code: 'AE',
    //      country: 'Algeria',
    //      users: this.formatting.addCommaToNumbers(40),
    //    },
    //    {
    //      code: 'AE',
    //      country: 'Algeria',
    //      users: this.formatting.addCommaToNumbers(40),
    //    },
    //    {
    //      code: 'AO',
    //      country: 'Algeria',
    //      users: this.formatting.addCommaToNumbers(40),
    //    },
    //    {
    //      code: 'AO',
    //      country: 'Algeria',
    //      users: this.formatting.addCommaToNumbers(40),
    //    },
    //    {
    //      code: 'AO',
    //      country: 'Algeria',
    //      users: this.formatting.addCommaToNumbers(40),
    //    },
    //    {
    //      code: 'AO',
    //      country: 'Algeria',
    //      users: this.formatting.addCommaToNumbers(40),
    //    },
    //  ];
 
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
  //  listenForChangeInDurationDropdown(item: any) {
  //    console.log('selected item from duration dropdown: ', item);
  //  }
 
   // Listen for selected dropdown items
   listenForChangeInMapDropdown(item: any) {
     console.log('selected item from map dropdown: ', item);
   }

}
