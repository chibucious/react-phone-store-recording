import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { SigninComponent } from './signin/signin.component';
import { LandingComponent } from './landing/landing.component';
import { LanguageComponent } from './language/language.component';
import { OtpComponent } from './otp/otp.component';
import { OtpselectionComponent } from './otpselection/otpselection.component';
import { OtpemailComponent } from './otpemail/otpemail.component';
import { SecurityquestionComponent } from './securityquestion/securityquestion.component';
import { Forgotpasswordstep1Component } from './forgotpasswordstep1/forgotpasswordstep1.component';
import { Forgotpassword2Component } from './forgotpassword2/forgotpassword2.component';
import { Forgotpasswordstep3Component } from './forgotpasswordstep3/forgotpasswordstep3.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';
import { PasswordresetsmsComponent } from './passwordresetsms/passwordresetsms.component';
import { PasswordresetphraseComponent } from './passwordresetphrase/passwordresetphrase.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [SigninComponent, LandingComponent, LanguageComponent, OtpComponent, OtpselectionComponent, OtpemailComponent, SecurityquestionComponent, Forgotpasswordstep1Component, Forgotpassword2Component, Forgotpasswordstep3Component, ResetpasswordComponent, PasswordrecoveryComponent, PasswordresetsmsComponent, PasswordresetphraseComponent, TestComponent],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    /**
     * @required- Components module is required to be imported in the modules of pages where custom components are used
     */
    ComponentsModule,
  ],
  exports: [
    /**
     * @description- We need to export our custom pages so that they can reflect in the outer module which handles the pages of each page module.
     *
     * @example - Pages/components under the dashboard module will be exported so our Pages module can reflect them to the app module
     */
    SigninComponent,
  ],
})
export class OnboardingModule {}
