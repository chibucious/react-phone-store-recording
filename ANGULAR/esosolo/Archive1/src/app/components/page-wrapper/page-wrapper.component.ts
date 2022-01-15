import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  getMenuChildren,
  getMenuItem,
  MenuInterface,
  SubMenuInterface,
} from 'src/app/config/menu';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent implements OnInit {
  // Receives the Reactive forms' searchbar input form control and associated submit function
  @Input() pageWrapperSearchbarInput: FormControl | any = new FormControl('');
  @Input() pageWrapperSearchbarSumbitFunction: void | null = null;

  // Menu ID attached to the component route we want to view
  @Input() pageMenuId!: string;

  // Emits the selected submenu route to the component where the page wrapper is used
  @Output() pageWrapperSelectedRoute: EventEmitter<string | any> =
    new EventEmitter();

  // The page menu is used to populate custom page values like name of page its associated children entries
  pageMenu!: MenuInterface | null | undefined;

  // This is a list of menu children entries which is used to create the sidebar menu
  pageSubMenuList!: Array<SubMenuInterface> | null | undefined;

  // Updated when the mobile menu is either closed or opened
  isMobileMenu: boolean = false;

  constructor() {}

  /**
   * When the component is initialized, the main page menu is retrieved for populating the page title and any necessary strings, while the submenu is used to populate the sidebar.
   */
  ngOnInit(): void {
    this.pageMenu = getMenuItem(this.pageMenuId);

    this.pageSubMenuList = getMenuChildren(this.pageMenuId);
  }

  /**
   * Listens for changes in the selected submenu route to ensure the page is updated with a new view attached to the updated route
   * @param {string | any} route - The `route` attached to a submenu entry
   * @returns  {void}
   */
  listenForSelectedRoute(route: string | any): void {
    this.pageWrapperSelectedRoute.emit(route);
  }

  /**
   * Listens for changes in the mobile menu component to ascertain when its opened or closed
   * @param {boolean | any} route - The mobile menu state
   * @returns  {void}
   */
  listenForMobileMenuEvents(isMenu: boolean | any): void {
    if (typeof isMenu == 'boolean') this.isMobileMenu = isMenu;
  }
}
