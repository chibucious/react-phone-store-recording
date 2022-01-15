import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-section-wrapper',
  templateUrl: './page-section-wrapper.component.html',
  styleUrls: ['./page-section-wrapper.component.scss'],
})
export class PageSectionWrapperComponent implements OnInit {
  @Input() display: 'row' | 'column' | 'grid' = 'row';

  baseClass: string = 'page-section-wrapper';

  componentClass!: string;

  constructor() {}

  ngOnInit(): void {
    this.componentClass = `${this.baseClass} ${this.display}`;
  }
}
