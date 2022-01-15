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
import {
  HttpClientService,
  HttpOptionsInterface,
} from 'src/app/services/data/http-client/http-client.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-email-otp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './email-otp.component.html',
  styleUrls: ['./email-otp.component.scss'],
})
export class EmailOtpComponent
  implements AfterViewInit, OnChanges, AfterContentChecked
{
  @Input() showModalBackground: boolean = true;
  @Output() confirmOTP: EventEmitter<boolean> = new EventEmitter();
  @Output() emitUserEmail: EventEmitter<string> = new EventEmitter();
  @Output() emitModalClosed: EventEmitter<string> = new EventEmitter();
  @Input() httpOptions: HttpOptionsInterface = {
    headers: new HttpHeaders({
      apiKey: environment.apiKey,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  @Input() OtpEmailMethodEndpoint!: string;
  @Input() OtpEmailMethodContact!: string;
  sendersContact: FormControl = new FormControl('');

  constructor(private http: HttpClientService, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.sendersContact.valueChanges.subscribe((value) => {
      this.OtpEmailMethodContact = value;

      this.emitUserEmail.emit(this.OtpEmailMethodContact);
    });
  }

  ngOnChanges(): void {
    this.sendersContact.setValue(this.OtpEmailMethodContact);
  }

  ngAfterContentChecked() {
    this.cd.markForCheck();
    console.log('showModalBackground from email', this.showModalBackground);
  }

  sendOtpByEmail() {
    if (
      this.sendersContact.value == '' ||
      this.sendersContact.value == undefined
    ) {
      alert('Please provide your mobile number');
      return null;
    }

    return this.http
      .post(
        this.OtpEmailMethodEndpoint,
        { email: this.sendersContact.value },
        this.httpOptions
      )
      .subscribe((response) => {
        console.log('email otp response: ', response);

        if (response.error === 'true' || response.error === true) {
          alert(`${response.message}`);
        }

        if (response.error === 'false') {
          console.log('send otp response: ', response);
          this.confirmOTP.emit(true);
        }
      });
  }

  resetModalBackDrop(e: any) {
    console.log('modal closed: ', e);
    this.showModalBackground = false;
    this.emitModalClosed.emit('onClose');
  }
}
