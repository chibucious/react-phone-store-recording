import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/data/http-client/http-client.service';

import { environment } from 'src/environments/environment';
import { MemoryCacheService } from 'src/app/services/memory-cache/memory-cache.service';

import { from } from 'rxjs';
import { HttpOptionsInterface } from 'src/app/data/http-client/http.client.types';

export interface msiaApiResponseType {}
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit, AfterViewInit {
  @ViewChild('auxiliaryTemplate') auxiliaryTemplate!: TemplateRef<any>;

  // The below data structures are used as data which will be consumed by the app's page sections

  // Template variable to be updated in order to show our desired template
  modalTemplateInput!: TemplateRef<any>;

  modalContext!: any;

  showModalTemplate: boolean = false;

  noCloseModal: boolean = false;

  // Basic Page text and link values
  headerText: string = 'Gain access. Change your life.';

  footerText: string = "Don't have an account yet?";

  formInnerLink: string = '/onboarding/otp/send';

  footerLink: string = '/onboarding/signup';

  footerLinkText: string = 'Register';

  // Form control inputs needed to login a user
  emailAddress: FormControl = new FormControl('');

  password: FormControl = new FormControl('');

  /**
   * Auxiliary Template value
   */
  auxTemplateTitle!: string;
  auxTemplateText!: string;
  auxTemplateType: 'success' | 'failure' | 'info' = 'success';
  auxTemplateData!: string;
  auxTemplateShowBtn: boolean = false;
  auxTemplateBtnText!: string;
  auxTemplateBtn!: (data?: any) => void;

  // Http options for server requests
  httpOptions: HttpOptionsInterface = {
    headers: new HttpHeaders({
      apiKey: environment.apiKey,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  // Remember user state
  rememberUser: boolean = false;

  // Service Injections
  constructor(
    private router: Router,
    private http: HttpClientService,
    private cache: MemoryCacheService
  ) {}

  ngOnInit(): void {
    this.populatePageData();
  }

  ngAfterViewInit(): void {}

  populatePageData() {
    let rememberUserData = this.cache.get('rememberUser');
    console.log('remember me data: ', rememberUserData);

    if (rememberUserData == true) {
      this.rememberUser = true;
    }
  }

  /**
   * Validate and Login User
   * @description - Validate the user form input, sanitize, send to the server and finally route to the users dashboard
   * @returns - void
   */
  validateUser(): void {
    if (this.password.value === '' || this.emailAddress.value === '') {
      // Inform the user to fill in necessary information
      this.auxTemplateTitle = 'Login failed';
      this.auxTemplateText = 'You must fill in all your details before login';
      this.auxTemplateType = 'info';
      this.auxTemplateShowBtn = false;
      this.auxTemplateBtnText = 'OK';
      this.auxTemplateBtn = () => {
        alert('modal btn clicked');
      };
      this.auxTemplateData = '';

      this.modalTemplateInput = this.auxiliaryTemplate;
      this.modalContext = {
        context: '',
      };
      // Show Modal
      this.showModalTemplate = true;
    } else {
      this.http
        .post(
          `${environment.msiaApibaseUrlDevV3}user/login`,
          { email: this.emailAddress.value, password: this.password.value },
          this.httpOptions
        )
        .subscribe((response) => {
          console.log('Login response: ', response);

          if (response.error === 'true') {
            // Inform the user to register first
            this.auxTemplateTitle = 'Login failed';
            this.auxTemplateText = response.message;
            this.auxTemplateType = 'failure';
            this.auxTemplateShowBtn = false;
            this.auxTemplateBtnText = 'OK';
            this.auxTemplateBtn = () => {
              alert('modal btn clicked');
            };
            this.auxTemplateData = '';

            this.modalTemplateInput = this.auxiliaryTemplate;
            this.modalContext = {
              context: '',
            };
            // Show Modal
            this.showModalTemplate = true;
          }

          if (response.error === 'false') {
            console.log('login data: ', response.data);

            if (this.rememberUser == true) {
              this.cache.changeStorageLocation(this.rememberUser);
              this.cache.put('rememberUser', this.rememberUser);
            }

            if (this.rememberUser == false) {
              this.cache.changeStorageLocation(this.rememberUser);
              this.cache.put('rememberUser', this.rememberUser);
            }

            this.cache.put('userData', response.data);
            this.navigateByUrl('/dashboard');
          }
        });
    }
  }

  toggleRememberUser() {
    this.rememberUser = !this.rememberUser;
    console.log('remember me ', this.rememberUser);
  }

  /**
   *  Close modal
   * @param e
   */
  closeModal(e?: any) {
    if (e === false) this.showModalTemplate = e;

    this.showModalTemplate = false;
  }

  /**
   *
   * @author Prince Akpabio - <princeakpabio90@gmail.com>
   *
   * @description - This handles routing to a url we want to navigate to. The url's absolute path is required. If a starting point isn't provided then it re-redirects to the custom error page
   *
   * @param {string} url  This is the url we want to navigate to
   *
   * @returns void
   */
  navigateByUrl(url: string): void {
    this.router.navigate([url]);
  }
}
