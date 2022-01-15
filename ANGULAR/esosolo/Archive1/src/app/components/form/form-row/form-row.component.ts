import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss'],
})
export class FormRowComponent implements OnInit {
  // Wrapper class string constituents
  @Input() rowClass: string = 'formRow';
  @Input() rowDisplay: 'row' | 'column' = 'row';

  // Main form wrapper class string
  public formRowClass: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.formRowClass = `${this.rowClass} ${this.rowDisplay}`;
  }
}
