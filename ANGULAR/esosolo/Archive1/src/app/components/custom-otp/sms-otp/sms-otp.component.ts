import { HttpHeaders } from '@angular/common/http';
import {
  AfterContentChecked,
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
import { FormControl } from '@angular/forms';
import { intCodeInterface } from 'src/app/pages/onboarding/signup/signup.component';
import {
  HttpClientService,
  HttpOptionsInterface,
} from 'src/app/services/data/http-client/http-client.service';
import { intcodeList } from 'src/app/services/data/mock-data/international-calling-code';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sms-otp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sms-otp.component.html',
  styleUrls: ['./sms-otp.component.scss'],
})
export class SmsOtpComponent
  implements OnInit, AfterViewInit, OnChanges, AfterContentChecked
{
  @Input() showModalBackground: boolean = true;
  @Output() confirmOTP: EventEmitter<boolean> = new EventEmitter();
  @Output() emitUserMobileNumber: EventEmitter<string> = new EventEmitter();
  @Output() emitUserIntCode: EventEmitter<string> = new EventEmitter();
  @Output() emitModalClosed: EventEmitter<string> = new EventEmitter();
  @Input() OtpSMSMethodEndpoint!: string;
  @Input() OtpSMSMethodContact!: string;
  @Input() OtpIntCode!: string;

  @Input() httpOptions: HttpOptionsInterface = {
    headers: new HttpHeaders({
      apiKey: environment.apiKey,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  sendersContact: FormControl = new FormControl('');
  intcode: FormControl = new FormControl('');

  intCodeList!: Array<intCodeInterface>;

  selectedIntCode!: intCodeInterface;

  constructor(private http: HttpClientService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.intCodeList = this.formatIntCodeList(intcodeList);
  }

  ngAfterViewInit(): void {
    this.sendersContact.valueChanges.subscribe((value) => {
      this.OtpSMSMethodContact = value;

      this.emitUserMobileNumber.emit(this.OtpSMSMethodContact);
    });

    this.intcode.valueChanges.subscribe((value) => {
      this.OtpIntCode = value;

      this.emitUserIntCode.emit(value);
    });
  }

  ngOnChanges() {
    this.sendersContact.setValue(this.OtpSMSMethodContact);
    this.intcode.setValue(this.OtpIntCode);

    /**
     * @todo - Comment out when in local mode
     */
    this.intcode.disable({ onlySelf: true });
    this.sendersContact.disable({ onlySelf: true });
    this.intCodeList = [];
  }

  ngAfterContentChecked() {
    this.cd.markForCheck();
    console.log('showModalBackground from sms', this.showModalBackground);
  }

  sendOtpBySMS() {
    if (
      this.sendersContact.value == '' ||
      this.sendersContact.value == undefined
    ) {
      alert('Please provide your mobile number');
      return null;
    } else if (this.intcode.value == '' || this.intcode.value == undefined) {
      alert('Please provide your int code');
      return null;
    }

    return this.http
      .post(
        this.OtpSMSMethodEndpoint,
        { mobile: this.sendersContact.value, intcode: this.intcode.value },
        this.httpOptions
      )
      .subscribe((response) => {
        console.log(
          'sms otp request: ',
          this.sendersContact.value,
          this.intcode.value,
          this.OtpSMSMethodEndpoint,
          this.httpOptions
        );
        console.log('sms otp response: ', response);

        if (response.error === 'true' || response.error === true) {
          alert(`${response.message}`);
        }

        if (response.error === 'false') {
          console.log('send otp response: ', response);
          this.confirmOTP.emit(true);
        }
      });
  }

  showDropDown(id: string) {
    const dropdown = document.getElementById(id) as HTMLElement;

    if (dropdown.classList.contains('show-dropdown')) {
      dropdown.classList.remove('show-dropdown');
    } else {
      dropdown.classList.add('show-dropdown');
    }
  }

  selectDropDownItem(item: intCodeInterface) {
    this.intCodeList.forEach((intCode) => (intCode.selected = false));

    this.selectedIntCode = item;

    this.intcode.setValue(item.code);

    item.selected = true;
  }

  formatIntCodeList(intCodeJSON: {
    [key: string]: string;
  }): intCodeInterface[] {
    const intCodeKeys = Object.keys(intCodeJSON);

    let formattedIntCodeList: intCodeInterface[] = [];

    intCodeKeys.map((intCode: string) => {
      const formatedIntCode: intCodeInterface = {
        code: intCodeJSON[`${intCode}`],
        country: intCode,
        flag: `../../../../assets/icons/flags-list/${intCode.toUpperCase()}.svg`,
        selected: false,
      };

      formattedIntCodeList = formattedIntCodeList.concat(formatedIntCode);
    });

    console.log('formated int list: ', formattedIntCodeList);

    return formattedIntCodeList;
  }

  resetModalBackDrop(e: any) {
    console.log('modal closed: ', e);
    this.showModalBackground = false;
    this.emitModalClosed.emit('onClose');
  }
}
