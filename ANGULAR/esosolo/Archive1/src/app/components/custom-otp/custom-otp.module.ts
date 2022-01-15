import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpWrapperComponent } from './otp-wrapper/otp-wrapper.component';
import { SelectOtpComponent } from './select-otp/select-otp.component';
import { EmailOtpComponent } from './email-otp/email-otp.component';
import { SmsOtpComponent } from './sms-otp/sms-otp.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { OtpConfirmationComponent } from './otp-confirmation/otp-confirmation.component';
import { ModalModule } from '../modal/modal.module';
import { CardModule } from '../card/card.module';
import { FormModule } from '../form/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OtpWrapperComponent,
    SelectOtpComponent,
    EmailOtpComponent,
    SmsOtpComponent,
    DropdownComponent,
    OtpConfirmationComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    CardModule,
    FormModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    OtpWrapperComponent,
    SelectOtpComponent,
    EmailOtpComponent,
    SmsOtpComponent,
    DropdownComponent,
    OtpConfirmationComponent,
  ],
})
export class CustomOtpModule {}
