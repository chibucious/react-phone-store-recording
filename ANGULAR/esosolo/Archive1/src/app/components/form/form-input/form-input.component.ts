import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  // We use this input property of our custom component to show the particular icon of our choice. However if none is passed, it shows a default icon.
  @Input() formInputIcon: string | null =
    '../../../../assets/icons/remix/line/business/award-line.svg';

  @Input() formIconClass: string = 'formInputIcon';
  @Input() size: 'bigger' | 'smaller' | 'smallest' | 'rounded' | null = null;
  @Input() isIconBold: boolean = false;
  @Input() iconAlignment: 'left' | 'right' | 'none' = 'left';

  formInputIconClass: string | null = null;
  constructor() {}

  ngOnInit(): void {
    this.formInputIconClass = `${this.formIconClass} ${
      this.isIconBold ? 'bold' : null
    } ${this.iconAlignment} `;
  }
}
