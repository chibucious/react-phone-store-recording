import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-otp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './select-otp.component.html',
  styleUrls: ['./select-otp.component.scss'],
})
export class SelectOtpComponent
  implements AfterContentChecked, OnInit, OnChanges
{
  @Input() showModalBackgroundObservable!: Observable<any>;
  @Input() emailContact!: string;
  @Input() smsContact!: string;
  showModalBackground: boolean = true;
  @Output() selectedOTPMethod: EventEmitter<string> = new EventEmitter();
  @Output() emitModalClosed: EventEmitter<string> = new EventEmitter();

  selectedMethod!: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterContentChecked() {
    console.log(
      'showModalBackground from select otp',
      this.showModalBackground
    );
  }

  ngOnChanges() {
    this.showModalBackgroundObservable.subscribe((data) => {
      console.log('data from otp wrapper to select otp: ', data);

      this.showModalBackground = data;
      this.cd.markForCheck();
    });
  }

  selectOtpMethod(methodString: string): void {
    const emailButton = document.getElementById('email') as HTMLElement;
    const phoneButton = document.getElementById('phone') as HTMLElement;

    if (methodString === 'phone') {
      if (emailButton.classList.contains('selected')) {
        emailButton.classList.remove('selected');
      }
      phoneButton.classList.add('selected');
    }

    if (methodString === 'email') {
      if (phoneButton.classList.contains('selected')) {
        phoneButton.classList.remove('selected');
      }
      emailButton.classList.add('selected');
    }
    this.selectedMethod = methodString;
  }

  showOTPMethod() {
    if (!this.selectedMethod) {
      alert('No otp method selected');
    } else {
      this.selectedOTPMethod.emit(this.selectedMethod);
    }
  }

  spliceSmsContact(contact: string) {
    if (contact == undefined || contact == null || contact == '') {
      return '9000';
    }

    return contact.slice(contact.length - 4, contact.length);
  }

  spliceEmailContact(contact: string) {
    if (contact == undefined || contact == null || contact == '') {
      return 'du@gmail.com';
    }

    return contact.slice(contact.length - 13, contact.length);
  }

  resetModalBackDrop(e: any) {
    console.log('modal closed: ', e);
    this.showModalBackground = false;
    this.emitModalClosed.emit('onClose');
  }
}
