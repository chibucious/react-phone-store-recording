/**
 * This is the central menu definition for our application. All application menu must be
 * defined within this file. Each entry could then be imported and use within the application.
 */

/**
 * Main menu interface. The `sidebarMenuMatching` props allows us to define  a sidebar menu base path that
 * matches this route. This will help us know the sidebar menu section to expand once on this router
 */
export interface MenuInterface {
  label: string;
  menuId: string;
  route: string | null;
  icon?: string | null;
  activeIcon?: string | null;
  children?: Array<SubMenuInterface> | null;
  selected?: boolean;
}

/** Main menu interface for `children` menu routes  */
export interface SubMenuInterface {
  icon: string | null;
  label: string;
  menuId: string;
  route?: string;
  selected: boolean;
  children?: Array<SubMenuInterface> | null;
}

// Bread crumbs structure
export interface BreadCrumbsInterface {
  label: string;
  route: string | null;
}

// Menu options {Settings} interface for mobile menu
export interface MenuOption {
  icon: string;
  route: string;
  menuId: string;
  selected: boolean;
}

/**
 * Gets the menu entry of the provided menuId
 * @param menuId - The `menuId` to retrieve a single menu item
 * @returns  {MenuInterface | null} a menu item or null
 */
export const getMenuItem = (
  menuId: string | any
): MenuInterface | null | undefined => {
  const menuEntry: MenuInterface | undefined = sideBarMenu.find(
    (item) => item.menuId === menuId
  );
  if (!menuEntry) return null;
  return menuEntry;
};

/**
 * Returns the menu `children` of the provided `menuId`
 * @param {string} menuId   The menu ID to retrieve a menu item's children
 * @returns  {Array<SubMenuInterface>  | null  undefined}   An array list of menu children if defined
 */
export const getMenuChildren = (
  menuId: string | any
): Array<SubMenuInterface> | null | undefined => {
  const menuEntry: MenuInterface | undefined = sideBarMenu.find(
    (item) => item.menuId === menuId
  );
  if (!menuEntry) return null;
  return menuEntry.children ? menuEntry.children : null;
};

/**
 * Gets the child menu entry of the provided menuId
 * @param menuId        The `menuId` to retrieve its child
 * @param childMenuId    The `label` of the child menu entry to retrieve
 * @returns  {SubMenuInterface | null} a child menu or null
 */
export const getMenuChild = (
  menuId: string | any,
  childMenuId: string
): SubMenuInterface | null => {
  const children = getMenuChildren(menuId);
  if (!children) return null;
  const child = children.filter(
    (child) => child.menuId.toLowerCase() === childMenuId.toLowerCase()
  );
  return child && child.length > 0 ? child[0] : null;
};

/**
 * Gets a list of menu items and its attached children menu entries of the provided menuId
 * @param menuId        The `menuId` to retrieve its child
 * @param childMenuId    The `label` of the child menu entry to retrieve
 * @returns  {Array<SubMenuInterface | null>} a child menu or null
 */
export const getBreadCrumb = (
  menuId: string | any,
  childMenuId: string | any,
  showBasePath: boolean = false,
  basePath: string = 'dashboard',
  pathDelimiter: string = '/'
): Array<BreadCrumbsInterface> | null => {
  const childRoute = getMenuChild(menuId, childMenuId);

  if (!childRoute) return null;

  let route = childRoute.route;

  if (!route) return null;

  /** remove any trailing slash from `route`
   * @example
   * `/dashboard/processor/view` becomes `dashboard/processor/view`
   */
  const slashRegex = /^\/{1}/;
  route = route.replace(slashRegex, '');

  let routeLink: string | null = null;

  let breadCrumb: Array<BreadCrumbsInterface> = [];

  for (let routeLabel of route.split(pathDelimiter)) {
    /**
     * We will always skip the `basePath` while creating our `breadCrumb`
     * Though this is part of the entire url path for routing,
     */

    routeLink = routeLink
      ? `${routeLink}${pathDelimiter}${routeLabel}`
      : `${pathDelimiter}${routeLabel}`;

    /**
     * check if we are showing the menu basePath. If the basePath is shown, user will have the base path
     * in our case `dashboard` as part of the breadcrumb. B default this option is set to false
     * @example So rather than seeing `dashboard > processors > view` we will see  `processors > view`
     */

    if (!showBasePath && routeLabel === basePath) continue;

    /** As we loop , we will create a route entry  point for each array element */
    breadCrumb.push({ label: routeLabel, route: routeLink });
  }
  return breadCrumb;
};

/**
 * The main application menu. This menu will be display on the `sidebar` of our application.
 * This is the main application menu. Any menu not defined within this file will not be available
 * within the application.
 *
 * @see: `components/sidebar/sidebar.component.ts` for usage
 *
 * @todo This file must use the language translation module for translation
 *
 * @todo Implement user authentication on each page and sub menus
 *
 */
export const sideBarMenu: Array<MenuInterface> = [
  {
    route: '/dashboard/dashboards',
    label: 'Dashboards',
    menuId: 'dashboards',
    icon: '../../../assets/icons/Iconly/Light-Outline/Category.svg',
    activeIcon: '../../../assets/icons/Iconly/Bold/Category.svg',
    selected: true,
    children: [
      {
        icon: '../../../../assets/icons/Iconly/Light/Chart.svg',
        label: 'Overview',
        menuId: 'dashboards-overview',
        route: '/dashboard/dashboards/overview',
        selected: true,
      },
      {
        icon: '../../../../assets/icons/Iconly/Light/Tick Square.svg',
        label: 'Compliance',
        menuId: 'dashboards-compliance',
        route: '/dashboard/dashboards/compliance',
        selected: false,
      },
      {
        icon: '../../../../assets/icons/Iconly/Light/Activity.svg',
        label: 'Operations',
        menuId: 'dashboards-operations',
        route: '/dashboard/dashboards/operations',
        selected: false,
      },
      {
        icon: '../../../../assets/icons/Iconly/Light/Wallet.svg',
        label: 'Finance',
        menuId: 'dashboards-finance',
        route: '/dashboard/dashboards/finance',
        selected: false,
      },
    ],
  },
  {
    route: '/dashboard/companies',
    label: 'Companies',
    menuId: 'companies',
    icon: '../../../assets/icons/Iconly/Light-Outline/Work.svg',
    activeIcon: '../../../assets/icons/Iconly/Bold/Work.svg',
    selected: false,
    children: [
      {
        icon: '../../../../assets/icons/Iconly/Light-Outline/Chart.svg',
        label: 'Overview',
        menuId: 'companies-overview',
        route: '/dashboard/companies/overview',
        selected: true,
      },
      {
        icon: '../../../../assets/icons/Iconly/Light/Show.svg',
        label: 'View Companies',
        menuId: 'companies-view',
        route: '/dashboard/companies/view',
        selected: false,
      },
      {
        icon: '../../../../assets/icons/Iconly/Light-Outline/Plus.svg',
        label: 'Create Company',
        menuId: 'companies-create',
        route: '/dashboard/companies/create',
        selected: false,
      },
    ],
  },
  {
    route: '/dashboard/admin',
    label: 'Administrator',
    menuId: 'admin',
    icon: '../../../assets/icons/Iconly/Light/2 User.svg',
    activeIcon: '../../../assets/icons/Iconly/Bold/2 User.svg',
    selected: false,
    children: [
      {
        icon: '../../../../assets/icons/Iconly/Light/Chart.svg',
        label: 'Overview',
        menuId: 'admin-overview',
        route: '/dashboard/admin',
        selected: true,
      },
      {
        icon: '../../../../assets/icons/Iconly/Light/Show.svg',
        label: 'View Admin',
        menuId: 'admin-view',
        route: '/dashboard/admin/view',
        selected: false,
      },
      {
        icon: '../../../../assets/icons/Iconly/Light-Outline/Plus.svg',
        label: 'Add Admin',
        menuId: 'admin-add',
        route: '/dashboard/admin/add',
        selected: false,
      },
    ],
  },
  {
    route: '/dashboard/tickets',
    label: 'Tickets',
    menuId: 'tickets',
    icon: '../../../assets/icons/Iconly/Light/Wallet.svg',
    activeIcon: '../../../assets/icons/Iconly/Bold/Wallet.svg',
    selected: false,
    children: [
      {
        icon: '../../../../assets/icons/Iconly/Light/Chart.svg',
        label: 'Overview',
        menuId: 'tickets-overview',
        route: '/dashboard/tickets/overview',
        selected: true,
      },
      {
        icon: '../../../../assets/icons/Iconly/Light/Show.svg',
        label: 'View Ticket',
        menuId: 'tickets-view',
        route: '/dashboard/tickets/view',
        selected: false,
      },
      {
        icon: '../../../../assets/icons/Iconly/Light-Outline/Plus.svg',
        label: 'Add Ticket',
        menuId: 'tickets-add',
        route: '/dashboard/tickets/add',
        selected: false,
      },
    ],
  },
];
