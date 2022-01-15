import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent implements OnInit {
  @Input() display: 'row' | 'column' = 'row';
  @Input() padding: 'true' | 'false' = 'true';

  baseClass: string = 'section-header';

  componentClass!: string;

  constructor() {}

  ngOnInit(): void {
    this.componentClass = `${this.baseClass} ${this.display} ${
      this.padding == 'false' && 'noPadding'
    }`;
  }
}
