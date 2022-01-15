import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  BreadCrumbsInterface,
  getBreadCrumb,
  MenuInterface,
  SubMenuInterface,
} from 'src/app/config/menu';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss'],
})
export class SubmenuComponent implements OnInit {
  // The current page's menu entry
  @Input() menuItem!: MenuInterface | null | undefined;

  // The list of the current page's submenu entries
  @Input() subMenuList!: Array<SubMenuInterface> | null | undefined;

  // The list of the current page's submenu bread crumbs entries
  @Input() subMenuBreadCrumbs!: Array<BreadCrumbsInterface> | null;

  // The selected route a user chooses
  @Output() selectedRoute: EventEmitter<string | any> = new EventEmitter();

  selectedMenuLabel!: string | undefined;

  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Check for the first submenu entry that has a truthy selected property
    const selectedMenuOnInit = this.subMenuList?.find(
      (menu) => menu.selected == true
    );

    // Emit the selected submenu to the page wrapper component which updates the view of the main component its used in
    selectedMenuOnInit != undefined &&
      this.selectedRoute.emit(selectedMenuOnInit?.route);

    this.selectedMenuLabel = selectedMenuOnInit?.label;

    // Set the first breadcrumb view when page loads
    this.subMenuBreadCrumbs = getBreadCrumb(
      this.menuItem?.menuId,
      selectedMenuOnInit?.menuId
    );
  }

  /**
   * Show dropdown list
   * @returns {void}
   */
  showDropDown(): void {
    this.isOpen = !this.isOpen;
  }

  /**
   * Selects a new submenu entry
   * @param {SubMenuInterface} subMenu - The selected submenu entry
   * @returns {void}
   */
  selectSubMenu(subMenu: SubMenuInterface): void {
    // Traverse through the submenu list and unselect all entries
    this.subMenuList?.map(
      (subMenu: SubMenuInterface) => (subMenu.selected = false)
    );

    // Select the clicked submenu
    subMenu.selected = true;

    this.selectedMenuLabel = subMenu?.label;

    // Change the breadcrumbs view
    this.subMenuBreadCrumbs = getBreadCrumb(
      this.menuItem?.menuId,
      subMenu?.menuId
    );

    // Emit the selected submenu to the page wrapper component which then emits it to the main component its used in
    this.selectedRoute.emit(subMenu.route);

    // Close dropdown
    this.isOpen = false;
  }
}
