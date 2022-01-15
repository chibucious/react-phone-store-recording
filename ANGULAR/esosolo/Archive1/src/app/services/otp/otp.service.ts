import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { showOtpModalType } from './otp.types';

@Injectable({
  providedIn: 'root',
})
export class OtpService extends EventEmitter {
  /**
   * Sets the state of the OTP Component
   */
  otpSuccess!: () => void;
  showOtp: boolean = true;
  OtpModalSequence: BehaviorSubject<any> = new BehaviorSubject('onClose');
  emailOtpEndpoint!: string;
  smsOtpEndpoint!: string;
  smsVerifyOtpEndpoint!: string;
  emailVerifyOtpEndpoint!: string;
  otpApiKey!: string;
  emailOtpContact!: string;
  smsOtpContact!: string;
  intCode!: string;
  pageThis: any = this;

  constructor() {
    super();
  }

  /**
   * Retrieve all otp service values if needed
   * @returns {}
   */
  getOtpVariables() {
    return {
      otpSuccess: this.otpSuccess,
      showOtp: this.showOtp,
      OtpModalSequence: this.OtpModalSequence,
      emailOtpEndpoint: this.emailOtpEndpoint,
      smsOtpEndpoint: this.smsOtpEndpoint,
      smsVerifyOtpEndpoint: this.smsVerifyOtpEndpoint,
      emailVerifyOtpEndpoint: this.emailVerifyOtpEndpoint,
      otpApiKey: this.otpApiKey,
      emailOtpContact: this.emailOtpContact,
      smsOtpContact: this.smsOtpContact,
      pageThis: this.pageThis,
      intCode: this.intCode,
    };
  }

  /**
   * Shows the OTP component provided sufficient data;
   * @param otpData - the data needed to  show the OTP menu
   */
  showOtpModalComponent(otpData: showOtpModalType) {
    const {
      otpApiKey,
      otpSuccess,
      emailOtpContact,
      emailOtpEndpoint,
      emailVerifyOtpEndpoint,
      smsVerifyOtpEndpoint,
      smsOtpContact,
      smsOtpEndpoint,
      OtpModalSequence = 'onSelection',
      showOtp,
      intCode,
    } = otpData;

    this.otpApiKey = otpApiKey;
    this.otpSuccess = otpSuccess;
    this.emailOtpContact = emailOtpContact;
    this.emailOtpEndpoint = emailOtpEndpoint;
    this.emailVerifyOtpEndpoint = emailVerifyOtpEndpoint;
    this.smsOtpContact = smsOtpContact;
    this.intCode = intCode;
    this.smsOtpEndpoint = smsOtpEndpoint;
    this.smsVerifyOtpEndpoint = smsVerifyOtpEndpoint;
    this.OtpModalSequence.next(OtpModalSequence);
    this.showOtp = showOtp;
  }

  /**
   * Informs the parent component if the otp is a success
   *
   * @param {boolean} success - Event that fires when otp is successful. An action is taken when successful.
   */
  onOtpSuccess(success: boolean) {
    if (success) {
      this._eventEmitter('onOtpSuccess', this.otpSuccess);
    }
  }

  /**
   * Close Otp Component Manually
   */
  closeOtpComponent() {
    this.OtpModalSequence.next('onClose');
  }

  /**
   * Emits otp events to the component which the service is being used in
   * @param {string} eventName - the event name to be passed to the main component
   * @param {any} eventData - the event data the main component will consume
   */
  _eventEmitter(eventName: string, eventData: any) {
    if (!eventName || !eventData)
      throw new Error('Event Name and Event Data can not be empty!');
    this.emit({ type: eventName, data: eventData });
    console.log(eventName + ' emitted: ' + eventData);
  }
}
