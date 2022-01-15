import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss'],
})
export class CardWrapperComponent implements OnInit {
  // Wrapper class string constituents
  @Input() wrapperClass: string = 'card-wrapper';
  @Input() extraClass: 'extraStyles' | 'normalStyles' = 'normalStyles';
  @Input() align: 'flex-start' | 'flex-end' | null = null;
  @Input() active: 'active' | null = null;
  @Input() display: 'row' | 'column' = 'column';

  // Main form wrapper class string
  public cardWrapperClass: string | null = null;
  constructor() {}

  ngOnInit(): void {
    this.cardWrapperClass = `${this.wrapperClass} ${this.extraClass} ${this.align} ${this.active} ${this.display}`;
  }

  setActiveClass() {
    if (this.active == 'active') {
      this.active = null;
      console.log('setting');
    } else {
      this.active = 'active';
      console.log('setting two');
    }
  }
}
