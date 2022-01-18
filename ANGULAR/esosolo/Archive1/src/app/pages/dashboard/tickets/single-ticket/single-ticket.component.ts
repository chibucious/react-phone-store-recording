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
import { TicketsListInterface } from '../overview-tickets/overview-tickets.types';

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.scss'],
  animations: [showTabSection],
})
export class SingleTicketComponent implements OnInit, OnChanges {
  @Input() componentData!: TicketsListInterface | any;

  @Output() closeChildPage: EventEmitter<any> = new EventEmitter();

  // Page cards styling
  isGrid: boolean = false;

  selectedTab!: string;

  ticketTabsList: Array<Tab> = [
    { tabId: '1', tabText: 'Message', selected: true },
  ];

  constructor() { }

  ngOnInit(): void {
    // When page is initialized, we set the selected tab section;
    const selectedTab = this.ticketTabsList.filter(
      (tab) => tab.selected == true
    );

    // Assign the first selected tab as the tab section to show
    this.selectedTab = selectedTab[0].tabId;

    console.log('selected tab: ', this.selectedTab);
  }

  // Listen for change in each row click
  ngOnChanges() {
    console.log('new component data: ', this.componentData);
    // console.log(this.componentData.name);
  }

  updateTabSection(e: any) {
    console.log('selected Tab: ', e);
    // console.log(e.userid);
    this.selectedTab = e;

    // setTimeout(() => (), 200);
  }

  // Listen for selected dropdown items
  closePage() {
    this.closeChildPage.emit({
      route: '/dashboard/tickets/view',
      data: {},
    });
  }

  toogleMenuState(state: boolean) {
    this.isGrid = state;
  }

}
