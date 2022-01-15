import { Component, Input, OnInit } from '@angular/core';
import { MenuInterface } from 'src/app/config/menu';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent implements OnInit {
  // The current page's menu entry
  @Input() menuItem!: MenuInterface | null | undefined;

  constructor() {}

  ngOnInit(): void {}
}
