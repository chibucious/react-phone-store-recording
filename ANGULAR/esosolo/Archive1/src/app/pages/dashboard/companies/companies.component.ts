import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  // The route the user wishes to view
  selectedSubMenuRoute!: string;

  // The sub component selected
  selectedComponentView!: string;

  // The data of a selected sub component
  selectedComponentData!: any;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Listen for changes in selected submenu route and update the page view
   * @param route - changed subment route
   */
  pageWrapperRouteListener(route: string | any) {
    if (typeof route == 'string') this.selectedSubMenuRoute = route;
  }

  /**
   * Listen for changes in selected submenu route and update the page view
   * @param route - changed subment route
   */
  componentRouteListener(response: {
    route: string;
    data: any;
    closeSubPage?: boolean;
  }) {
    if (response !== undefined) {
      if (response.closeSubPage == undefined) {
        this.selectedComponentData = response.data;

        this.selectedComponentView = response.route;
      }

      this.selectedSubMenuRoute = response.route;
    }
  }
}
