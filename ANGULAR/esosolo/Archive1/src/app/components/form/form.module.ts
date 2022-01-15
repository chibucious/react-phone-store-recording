import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { FormRowComponent } from './form-row/form-row.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';

@NgModule({
  declarations: [FormInputComponent, FormRowComponent, FormWrapperComponent],
  imports: [CommonModule],
  exports: [FormInputComponent, FormRowComponent, FormWrapperComponent],
})
export class FormModule {}
