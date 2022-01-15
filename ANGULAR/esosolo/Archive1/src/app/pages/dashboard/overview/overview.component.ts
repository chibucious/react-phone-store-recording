import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  // The route the user wishes to view
  selectedSubMenuRoute!: string;

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
