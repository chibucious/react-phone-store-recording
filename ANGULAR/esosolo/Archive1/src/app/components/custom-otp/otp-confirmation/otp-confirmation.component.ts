import { HttpHeaders } from '@angular/common/http';
import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import {
  HttpClientService,
  HttpOptionsInterface,
} from 'src/app/services/data/http-client/http-client.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-otp-confirmation',
  templateUrl: './otp-confirmation.component.html',
  styleUrls: ['./otp-confirmation.component.scss'],
})
export class OtpConfirmationComponent
  implements AfterContentChecked, AfterViewInit
{
  @Input() httpOptions: HttpOptionsInterface = {
    headers: new HttpHeaders({
      apiKey: environment.apiKey,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  @Input() showModalBackground: boolean = true;
  @Input() selectedOtpMethod!: string;
  @Input() OtpEmailMethodContact!: string;
  @Input() OtpSMSMethodContact!: string;
  @Input() OtpEmailVerificationEndpoint!: string;
  @Input() OtpSMSVerificationEndpoint!: string;
  @Input() userIntcode!: string;
  @Output() onSuccess: EventEmitter<boolean> = new EventEmitter();
  @Output() emitModalClosed: EventEmitter<string> = new EventEmitter();

  @ViewChild('codeOne') codeOne!: ElementRef<any>;
  @ViewChild('codeTwo') codeTwo!: ElementRef<any>;
  @ViewChild('codeThree') codeThree!: ElementRef<any>;
  @ViewChild('codeFour') codeFour!: ElementRef<any>;
  @ViewChild('codeFive') codeFive!: ElementRef<any>;

  otpCodeOne: FormControl = new FormControl('');
  otpCodeTwo: FormControl = new FormControl('');
  otpCodeThree: FormControl = new FormControl('');
  otpCodeFour: FormControl = new FormControl('');
  otpCodeFive: FormControl = new FormControl('');

  constructor(private http: HttpClientService, private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.focusOnNextInput();
  }

  ngAfterContentChecked() {
    this.cd.markForCheck();
    console.log(
      'showModalBackground from confirm otp',
      this.showModalBackground
    );
  }

  confirmOtp() {
    if (
      this.otpCodeOne.value === '' ||
      this.otpCodeTwo.value === '' ||
      this.otpCodeThree.value === '' ||
      this.otpCodeFour.value === '' ||
      this.otpCodeFive.value === ''
    ) {
      alert('Please fill in the otp sent to you');
    }

    if (this.selectedOtpMethod == 'phone') {
      this.verifySmsOtp();
    }

    if (this.selectedOtpMethod == 'email') {
      this.verifyEmailOtp();
    }
  }

  verifySmsOtp() {
    console.log(
      'sms otp confirmation request: ',
      'mobile:',
      this.OtpSMSMethodContact,
      'code:',
      `${this.otpCodeOne.value}${this.otpCodeTwo.value}${this.otpCodeThree.value}${this.otpCodeFour.value}${this.otpCodeFive.value}`.trim(),
      'intcode:',
      this.userIntcode
    );

    this.http
      .post(
        this.OtpSMSVerificationEndpoint,
        {
          mobile: this.OtpSMSMethodContact,
          code: `${this.otpCodeOne.value}${this.otpCodeTwo.value}${this.otpCodeThree.value}${this.otpCodeFour.value}${this.otpCodeFive.value}`.trim(),
          intcode: this.userIntcode,
        },
        this.httpOptions
      )
      .subscribe((response) => {
        console.log('verify otp response: ', response);

        if (response.error === 'true' || response.error === true) {
          alert(`${response.message}`);
        }

        if (response.error === 'false') {
          this.onSuccess.emit(true);
        }
      });
  }

  verifyEmailOtp() {
    console.log(
      'email otp confirmation request: ',
      'email:',
      this.OtpEmailMethodContact,
      'code:',
      `${this.otpCodeOne.value}${this.otpCodeTwo.value}${this.otpCodeThree.value}${this.otpCodeFour.value}${this.otpCodeFive.value}`.trim()
    );

    this.http
      .post(
        this.OtpEmailVerificationEndpoint,
        {
          email: this.OtpEmailMethodContact,
          code: `${this.otpCodeOne.value}${this.otpCodeTwo.value}${this.otpCodeThree.value}${this.otpCodeFour.value}${this.otpCodeFive.value}`.trim(),
        },
        this.httpOptions
      )
      .subscribe((response) => {
        console.log('verify otp response: ', response);

        if (response.error === 'true' || response.error === true) {
          alert(`${response.message}`);
        }

        if (response.error === 'false') {
          this.onSuccess.emit(true);
        }
      });
  }

  resetModalBackDrop(e: any) {
    console.log('modal closed: ', e);
    this.showModalBackground = false;
    this.emitModalClosed.emit('onClose');
  }

  focusOnNextInput() {
    let otpInputs = [
      {
        input: this.otpCodeOne,
        nextInput: this.codeTwo,
        prevInput: null,
      },
      {
        input: this.otpCodeTwo,
        nextInput: this.codeThree,
        prevInput: this.codeOne,
      },
      {
        input: this.otpCodeThree,
        nextInput: this.codeFour,
        prevInput: this.codeTwo,
      },
      {
        input: this.otpCodeFour,
        nextInput: this.codeFive,
        prevInput: this.codeThree,
      },
      { input: this.otpCodeFive, nextInput: null, prevInput: this.codeFour },
    ];

    otpInputs.forEach(({ input, nextInput, prevInput }) => {
      input.valueChanges
        .pipe(filter((value: string) => value.length == 1))
        .subscribe(() => {
          nextInput?.nativeElement.focus();
        });

      input.valueChanges
        .pipe(filter((value: string) => value.length < 1))
        .subscribe(() => {
          prevInput?.nativeElement.focus();
        });
    });
  }
}
