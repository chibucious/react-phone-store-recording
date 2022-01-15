import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.scss'],
})
export class CardRowComponent implements OnInit {
  // Wrapper class string constituents
  @Input() rowClass: string = 'cardRow';
  @Input() rowDisplay:
    | 'row'
    | 'column'
    | 'row extraClass'
    | 'row-space-between' = 'row';
  @Input() rowAlign: 'header' | null = null;

  // Main form wrapper class string
  public cardRowClass: string | null = null;
  constructor() {}

  ngOnInit(): void {
    this.cardRowClass = `${this.rowClass} ${this.rowDisplay} ${this.rowAlign}`;
  }
}
