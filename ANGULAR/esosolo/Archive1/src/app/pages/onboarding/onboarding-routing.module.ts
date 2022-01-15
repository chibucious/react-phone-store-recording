import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forgotpassword2Component } from './forgotpassword2/forgotpassword2.component';
import { Forgotpasswordstep1Component } from './forgotpasswordstep1/forgotpasswordstep1.component';
import { Forgotpasswordstep3Component } from './forgotpasswordstep3/forgotpasswordstep3.component';
import { LandingComponent } from './landing/landing.component';
import { LanguageComponent } from './language/language.component';
import { OtpComponent } from './otp/otp.component';
import { OtpemailComponent } from './otpemail/otpemail.component';
import { OtpselectionComponent } from './otpselection/otpselection.component';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';
import { PasswordresetphraseComponent } from './passwordresetphrase/passwordresetphrase.component';
import { PasswordresetsmsComponent } from './passwordresetsms/passwordresetsms.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SecurityquestionComponent } from './securityquestion/securityquestion.component';
import { SigninComponent } from './signin/signin.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'language',
    component: LanguageComponent,
  },

  {
    path: 'otp',
    component:  OtpComponent,
  },

  {
    path: 'otpselection',
    component:  OtpselectionComponent,
  },

  {
    path: 'otpemail',
    component:  OtpemailComponent,
  },

  {
    path: 'securityquestion',
    component:   SecurityquestionComponent,
  },


  {
    path: 'forgotpasswordstep1',
    component:   Forgotpasswordstep1Component,
  },
  

  {
    path: 'forgotpassword2',
    component:  Forgotpassword2Component,
  },
  

  {
    path: 'forgotpasswordstep3',
    component: Forgotpasswordstep3Component,
  },
 

  {
    path: 'resetpassword',
    component: ResetpasswordComponent,
  },

  {
    path: 'passwordrecovery',
    component:PasswordrecoveryComponent,
  },

  {
    path: 'passwordresetsms',
    component:PasswordresetsmsComponent,
  },

  {
    path: 'passwordresetphrase',
    component:PasswordresetphraseComponent,
  },
  {
    path: 'test',
    component:TestComponent,
  },

  { path: '', redirectTo: 'signin', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
