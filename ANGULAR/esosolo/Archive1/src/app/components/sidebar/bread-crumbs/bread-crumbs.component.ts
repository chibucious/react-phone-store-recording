import { Component, Input, OnChanges } from '@angular/core';
import { BreadCrumbsInterface } from 'src/app/config/menu';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
})
export class BreadCrumbsComponent implements OnChanges {
  // List of breadcrumbs from the page component
  @Input() breadCrumbs!: Array<BreadCrumbsInterface> | null;

  // The last breadcrumb in the list. The property is used to remove the next icon from the UI
  lastChild!: number | any;

  constructor() {}

  ngOnChanges(): void {
    // Check for last breadcrumb if the list is avialable
    this.lastChild = this.breadCrumbs && this.breadCrumbs.length;
  }
}
