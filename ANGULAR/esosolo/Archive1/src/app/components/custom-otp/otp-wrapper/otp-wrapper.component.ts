import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type otpModalSequenceType =
  | 'onSelection'
  | 'onMethod'
  | 'onConfirm'
  | 'onClose';
@Component({
  selector: 'app-otp-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './otp-wrapper.component.html',
  styleUrls: ['./otp-wrapper.component.scss'],
})
export class OtpWrapperComponent
  implements AfterContentChecked, OnInit, AfterViewInit
{
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
  @Input() showOtpComponent: boolean = true;
  showOtpComponentObservable!: BehaviorSubject<any>;
  @Input() pageThis!: any;

  @Input() OtpWrapperSMSMethodEndpoint!: string;
  @Input() OtpWrapperEmailMethodEndpoint!: string;
  @Input() OtpWrapperVerifySMSEndpoint!: string;
  @Input() OtpWrapperVerifyEmailEndpoint!: string;
  @Input() OtpWrapperAPIKey!: string;
  @Input() OtpWrapperEmailMethodContact!: string;
  @Input() OtpWrapperSMSMethodContact!: string;
  @Input() wrapperUserIntcode!: string;

  @Output() onSuccess: EventEmitter<boolean> = new EventEmitter();

  wrapperSelectedOTPMethod!: string;
  showOTPConfirmation: boolean = false;

  @Input() modalSequenceObservable!: Observable<any>;
  modalSequence: otpModalSequenceType = 'onClose';

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log('modal sequence observable: ', this.modalSequenceObservable);

    this.modalSequenceObservable.subscribe((data) => {
      console.log('new modal sequence data: ', data);

      this.modalSequence = data;
      this.cd.markForCheck();
    });
  }

  ngAfterContentChecked() {
    console.log('show modal after content checked: ', this.showOtpComponent);
    this.showOtpComponentObservable = new BehaviorSubject(
      this.showOtpComponent
    );

    console.log(
      'wrapper properties FROM modal wrapper: ',
      this.modalSequence,
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
    this.modalSequence = 'onMethod';
    this.showOtpComponent = true;
  }

  showConfirmationTemplate(state: boolean) {
    this.showOTPConfirmation = state;
    this.modalSequence = 'onConfirm';
    this.showOtpComponent = true;
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

  emitOtpSuccess(success: boolean) {
    this.onSuccess.emit(success);
    // this.showOtpComponent = false;
  }

  closeOtpComponent(closeOtp: any) {
    console.log('Modal sequence on close: ', closeOtp);

    this.modalSequence = closeOtp;
    // this.showOtpComponent = false;
    // this.OtpWrapperEmailMethodEndpoint = '';
    // this.OtpWrapperSMSMethodEndpoint = '';
    // this.OtpWrapperAPIKey = '';
    // this.OtpWrapperEmailMethodContact = '';
    // this.OtpWrapperSMSMethodContact = '';
  }
}
