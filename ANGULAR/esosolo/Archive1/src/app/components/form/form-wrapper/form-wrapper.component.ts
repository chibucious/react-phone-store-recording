import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss'],
})
export class FormWrapperComponent implements OnInit {
  // Wrapper class string constituents
  @Input() wrapperClass: string = 'form-wrapper';
  @Input() extraClass: 'extraStyles' | 'normalStyles' = 'normalStyles';

  // Main form wrapper class string
  public formWrapperClass: string | null = null;
  constructor() {}

  ngOnInit(): void {
    this.formWrapperClass = `${this.wrapperClass} ${this.extraClass}`;
  }
}
