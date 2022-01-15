import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  // The route the user wishes to view
  selectedSubMenuRoute!: string;

  // The sub component selected
  selectedComponentView!: string;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Listen for changes in selected submenu route and update the page view
   * @param route - changed subment route
   */
  pageWrapperRouteListener(route: string | any) {
    if (typeof route == 'string') this.selectedSubMenuRoute = route;
  }
  
}
