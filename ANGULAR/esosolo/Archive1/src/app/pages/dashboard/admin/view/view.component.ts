import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneralFormattingService } from 'src/app/services/general-formatting/general-formatting.service';
import {
  CompaniesListInterface,
  CompaniesOverviewListInterface,
  AdminUsersInterface
} from './view-components.types';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  // The companies metrics list data
  companiesList!: Array<CompaniesListInterface>;

  adminList!: Array<AdminUsersInterface>;

  // Sample dropdown list
  sampleDropdownList!: Array<any>;

  roleDropdownList!: Array<any>;

  @Output() componentSelectedRoute: EventEmitter<any> = new EventEmitter();

  // Page cards styling
  isGrid: boolean = false;

  constructor(private formatting: GeneralFormattingService) {}

  ngOnInit(): void {
    this.adminList = [
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Hanson',
        userid: 20796,
        company: 'Microsoft',
        role: 'Product',
        activity: 'Dec 10, 2011 11:22',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Gram',
        userid: 1331,
        company: 'Microsoft',
        role: 'Support',
        activity: 'Dec 4, 2019 21:42',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Curtis',
        userid: 18599,
        company: 'Microsoft',
        role: 'Finance',
        activity: 'Dec 2, 2019 05:18',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Jenna',
        userid: 45904,
        company: 'Microsoft',
        role: 'Compliance',
        activity: 'Dec 1, 2019 07:52',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Jim',
        userid: 95554,
        company: 'Microsoft',
        role: 'Compliance',
        activity: 'Feb 02, 2019 19:28',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Hanson',
        userid: 23340,
        company: 'Microsoft',
        role: 'Finance',
        activity: 'Dec 7, 2019 23:26',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Aaron',
        userid: 23340,
        company: 'Microsoft',
        role: 'Finance',
        activity: 'Dec 07, 2019 23:26',
        status: true,
      },
      {
        icon: '../../../../../assets/icons/custom-icons/user-img.png',
        name: 'Sander',
        userid: 23340,
        company: 'Microsoft',
        role: 'Finance',
        activity: 'Dec 07, 2019 23:26',
        status: true,
      }
    ]

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
        logo: '../../../../../assets/icons/custom-icons/user-img.png',
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

    this.roleDropdownList = [
      { label: 'Companies' },
      { label: 'Finance' },
      { label: 'Operations' },
      { label: 'Support' },
      { linethrough: '<----->' },
      { label: 'Custom Role' },
    ]
  }

  toogleMenuState(state: boolean) {
    this.isGrid = state;
  }

  selectAdmin(user: AdminUsersInterface) {
    this.componentSelectedRoute.emit({
      route: `/dashboard/companies/view/${user.name}`,
      data: user,
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
