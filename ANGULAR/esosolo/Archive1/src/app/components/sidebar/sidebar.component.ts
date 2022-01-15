import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuInterface, sideBarMenu } from 'src/app/config/menu';
import { MemoryCacheService } from 'src/app/services/memory-cache/memory-cache.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
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
   * Clears the storage object which is used for saving app data
   * This storage object can either be the local or session storage
   */
  logout() {
    this.cache.reset();

    this.router.navigate([this.logOutRoute]);
  }
}
