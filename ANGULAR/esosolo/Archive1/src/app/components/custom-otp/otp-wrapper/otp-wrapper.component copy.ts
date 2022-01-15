import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-otp-wrapper',
  templateUrl: './otp-wrapper.component.html',
  styleUrls: ['./otp-wrapper.component.scss'],
})
export class OtpWrapperComponent implements AfterViewInit, OnChanges {
  /**
   * The OTP wrapper will handle the showing of the OTP selection process
   *
   * It will also receive the onSuccessFunction which will be called when the user OTP has been validated.
   *
   * The wrapper will also receive the endpoints for sending and verifying an OTP either by email or sms
   *
   * The Wrapper will receive the mobile number and emails of the user in question
   *
   */
  @Input() otpWrapperOnSuccessFunction!: () => void;
  @Input() showOtpComponent: boolean = false;
  @Input() OtpWrapperSMSMethodEndpoint!: string;
  @Input() OtpWrapperEmailMethodEndpoint!: string;
  @Input() OtpWrapperVerifySMSEndpoint!: string;
  @Input() OtpWrapperVerifyEmailEndpoint!: string;
  @Input() OtpWrapperAPIKey!: string;
  @Input() OtpWrapperEmailMethodContact!: string;
  @Input() OtpWrapperSMSMethodContact!: string;

  wrapperUserIntcode!: string;

  wrapperSelectedOTPMethod!: string;
  showOTPConfirmation: boolean = false;
  modalSequence:
    | 'otpSelection'
    | 'sendOtp'
    | 'confirmOtp'
    | 'closeOtpSelection' = 'closeOtpSelection';

  constructor() {}

  ngAfterViewInit() {}

  ngOnChanges() {
    console.log(
      'wrapper properties: ',
      this.otpWrapperOnSuccessFunction,
      this.showOtpComponent,
      this.OtpWrapperEmailMethodEndpoint,
      this.OtpWrapperSMSMethodEndpoint,
      this.OtpWrapperAPIKey,
      this.OtpWrapperEmailMethodContact,
      this.OtpWrapperSMSMethodContact
    );
  }

  /**
   * Auxiliary Component state and methods used for interacting with children component
   *
   */

  showSelectedOTPMethod(method: string) {
    this.wrapperSelectedOTPMethod = method;
    this.showOtpComponent = false;
    this.modalSequence = 'closeOtpSelection';
  }

  showConfirmationTemplate(state: boolean) {
    this.showOTPConfirmation = state;
    this.showOtpComponent = false;
    this.modalSequence = 'confirmOtp';
    // this.wrapperSelectedOTPMethod = 'tyui';
  }

  updateUserMobileNumber(mobile: string) {
    this.OtpWrapperSMSMethodContact = mobile;
  }

  updateUserEmailAddress(email: string) {
    this.OtpWrapperEmailMethodContact = email;
  }

  updateUserIntCode(code: string) {
    this.wrapperUserIntcode = code;
  }
}
