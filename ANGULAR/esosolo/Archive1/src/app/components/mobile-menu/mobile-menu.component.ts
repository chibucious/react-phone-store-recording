import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuInterface, MenuOption, sideBarMenu } from 'src/app/config/menu';
import { MemoryCacheService } from 'src/app/services/memory-cache/memory-cache.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  // The list of main menu entries
  sideBarMenu!: Array<MenuInterface>;

  // Route which the user will navigate to after being logged out
  logOutRoute: string = '/onboarding/signin';

  // The icon of the logout button
  logOutIcon: string = '../../../assets/icons/Iconly/Light-Outline/Logout.svg';

  // Route which the user will navigate to when the app logo is clicked
  landingPageRoute: string = '/dashboard';

  // Logo of the app
  appLogo: string = '../../../assets/images/essolo-logo.png';

  // State of the mobile menu
  @Input() isMenuOpened: boolean = false;

  // Mobile menu emitter
  @Output() menuEvent: EventEmitter<boolean> = new EventEmitter();

  // Extra menu options
  menuOptions: Array<MenuOption> = [
    {
      icon: '../../../assets/icons/Iconly/Light/Message.svg',
      route: '#',
      menuId: 'messages',
      selected: false,
    },
    {
      icon: '../../../assets/icons/Iconly/Light/Notification.svg',
      route: '#',
      menuId: 'notification',
      selected: false,
    },
    {
      icon: '../../../assets/icons/Iconly/Light/Setting.svg',
      route: '#',
      menuId: 'setting',
      selected: false,
    },
    {
      icon: '../../../assets/icons/Iconly/Light/Info Square.svg',
      route: '#',
      menuId: 'information',
      selected: false,
    },
    {
      icon: '../../../assets/icons/Iconly/Light/Profile.white.svg',
      route: '#',
      menuId: 'profile',
      selected: false,
    },
  ];

  constructor(private cache: MemoryCacheService, private router: Router) {}

  ngOnInit(): void {
    /**
     * Assign the main menu from the config file to the class property during initialization
     * @note - Do NOT change the below line. Changes to the sidebar menu takes place in the config file
     * @see: `config/menu.ts` for usage
     */
    this.sideBarMenu = sideBarMenu;
  }

  /**
   * Selects a new menu entry
   * @param {menuInterface} menu - The selected menu entry
   * @returns {void}
   */
  selectMenu(menu: MenuInterface): void {
    // Traverse through the menu list and unselect all entries
    this.sideBarMenu?.map((menu: MenuInterface) => (menu.selected = false));

    // Select the clicked menu
    menu.selected = true;

    // Navigate to menu route
    this.router.navigate([menu.route]);

    // Close mobile menu
    this.closeMeun();
  }

  /**
   * Toogle Menu
   * @description - Toggles the isMenuOpened property which opens or closes the mobile menu
   * @returns {void}
   */
  closeMeun(): void {
    this.isMenuOpened = false;

    this.menuEvent.emit(false);
  }

  /**
   * Clears the storage object which is used for saving app data
   * This storage object can either be the local or session storage
   */
  logOut() {
    this.cache.reset();

    this.router.navigate([this.logOutRoute]);
  }
}
