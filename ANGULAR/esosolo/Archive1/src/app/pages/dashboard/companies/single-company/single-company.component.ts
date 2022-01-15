import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { showTabSection } from 'src/app/components/tabs/tab-animation/tab.animation';
import { Tab } from 'src/app/components/tabs/tabs.component';
import { CompaniesListInterface } from '../overview-companies/overview-companies.types';

@Component({
  selector: 'app-single-company',
  templateUrl: './single-company.component.html',
  styleUrls: ['./single-company.component.scss'],
  animations: [showTabSection],
})
export class SingleCompanyComponent implements OnInit, OnChanges {
  @Input() componentData!: CompaniesListInterface | any;

  @Output() closeChildPage: EventEmitter<any> = new EventEmitter();

  selectedTab!: string;

  companyTabsList: Array<Tab> = [
    { tabId: '1', tabText: 'Company Information', selected: true },
    { tabId: '2', tabText: 'KYB Documents', selected: false },
    { tabId: '3', tabText: 'Programs', selected: false },
    { tabId: '4', tabText: 'API', selected: false },
    { tabId: '5', tabText: 'Users', selected: false },
    { tabId: '6', tabText: 'Subscriptions', selected: false },
    { tabId: '7', tabText: 'Legal', selected: false },
  ];

  constructor() {}

  ngOnInit(): void {
    // When page is initialized, we set the selected tab section;
    const selectedTab = this.companyTabsList.filter(
      (tab) => tab.selected == true
    );

    // Assign the first selected tab as the tab section to show
    this.selectedTab = selectedTab[0].tabId;

    console.log('selected tab: ', this.selectedTab);
  }

  ngOnChanges() {
    console.log('new component data: ', this.componentData);
  }

  updateTabSection(e: any) {
    console.log('selected Tab: ', e);
    this.selectedTab = e;
    // setTimeout(() => (), 200);
  }

  // Listen for selected dropdown items
  closePage() {
    this.closeChildPage.emit({
      route: '/dashboard/companies/view',
      data: {},
    });
  }
}
