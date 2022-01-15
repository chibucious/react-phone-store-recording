export interface showOtpModalType {
  otpSuccess: () => void;
  showOtp: boolean;
  OtpModalSequence: otpModalSequenceType;
  emailOtpEndpoint: string;
  smsOtpEndpoint: string;
  emailVerifyOtpEndpoint: string;
  smsVerifyOtpEndpoint: string;
  otpApiKey: string;
  emailOtpContact: string;
  smsOtpContact: string;
  intCode: string;
}

export type otpModalSequenceType =
  | 'onSelection'
  | 'onMethod'
  | 'onConfirm'
  | 'onClose';
