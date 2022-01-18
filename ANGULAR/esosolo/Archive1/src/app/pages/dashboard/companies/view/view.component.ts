import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneralFormattingService } from 'src/app/services/general-formatting/general-formatting.service';
import {
  CompaniesListInterface,
  CompaniesOverviewListInterface,
} from '../overview-companies/overview-companies.types';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  // The companies metrics list data
  companiesList!: Array<CompaniesListInterface>;

  // Sample dropdown list
  sampleDropdownList!: Array<any>;

  @Output() componentSelectedRoute: EventEmitter<any> = new EventEmitter();

  // Page cards styling
  isGrid: boolean = false;

  constructor(private formatting: GeneralFormattingService) {}

  ngOnInit(): void {
    this.companiesList = [
      {
        location: 'Minesota',
        status: true,
        logo: '../../../../../assets/icons/custom-icons/Microsoft Logo.svg',
        name: 'Microsoft',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: false,
        logo: '../../../../../assets/icons/custom-icons/MetaMask Logo.svg',
        name: 'Metamask',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: true,
        logo: '../../../../../assets/icons/custom-icons/Centili Logo.svg',
        name: 'Centili',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: false,
        logo: '../../../../../assets/icons/custom-icons/Amazon Logo.svg',
        name: 'Amazon',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: true,
        logo: '../../../../../assets/icons/custom-icons/nike-logo.svg',
        name: 'Nike',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: true,
        logo: '../../../../../assets/icons/custom-icons/Microsoft Logo.svg',
        name: 'Microsoft',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: false,
        logo: '../../../../../assets/icons/custom-icons/MetaMask Logo.svg',
        name: 'Metamask',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: false,
        logo: '../../../../../assets/icons/custom-icons/Centili Logo.svg',
        name: 'Centili',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: true,
        logo: '../../../../../assets/icons/custom-icons/Amazon Logo.svg',
        name: 'Amazon',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: false,
        logo: '../../../../../assets/icons/custom-icons/nike-logo.svg',
        name: 'Nike',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: false,
        logo: '../../../../../assets/icons/custom-icons/MetaMask Logo.svg',
        name: 'Metamask',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
      },
      {
        location: 'Minesota',
        status: false,
        logo: '../../../../../assets/icons/custom-icons/Centili Logo.svg',
        name: 'Centili',
        rating: this.formatting.addCommaToNumbers(500),
        users: this.formatting.addCommaToNumbers(5000),
        email: 'admin@booking.com',
        phoneNumber: '+1 555 902 194',
        registrationNumber: 749201740921,
        website: 'www.booking.com',
        type: 'Joint-stock company',
        size: '10 - 100',
        incorporated: '13-05-1995',
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

  toogleMenuState(state: boolean) {
    this.isGrid = state;
  }

  selectCompany(company: CompaniesListInterface) {
    this.componentSelectedRoute.emit({
      route: `/dashboard/companies/view/${company.name}`,
      data: company,
    });
  }

  // Listen for selected dropdown items
  listenForChangeInDurationDropdown(item: any) {
    console.log('selected item from duration dropdown: ', item);
  }

  // Listen for selected dropdown items
  closeSubChildPage(isClose: boolean) {
    isClose &&
      this.componentSelectedRoute.emit({
        route: '/dashboard/companies/view',
        data: {},
      });
  }

  
}
