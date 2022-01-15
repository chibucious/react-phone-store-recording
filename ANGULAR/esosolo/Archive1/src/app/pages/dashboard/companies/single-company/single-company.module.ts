import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KybComponent } from './kyb/kyb.component';
import { InformationComponent } from './information/information.component';
import { ProgramsComponent } from './programs/programs.component';
import { ApiComponent } from './api/api.component';
import { UsersComponent } from './users/users.component';
import { SingleCompanyComponent } from './single-company.component';
import { LegalComponent } from './legal/legal.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SingleCompanyComponent,
    KybComponent,
    InformationComponent,
    ProgramsComponent,
    ApiComponent,
    UsersComponent,
    LegalComponent,
    SubscriptionsComponent,
  ],
  imports: [CommonModule, BrowserAnimationsModule, ComponentsModule],
  exports: [
    SingleCompanyComponent,
    KybComponent,
    InformationComponent,
    ProgramsComponent,
    ApiComponent,
    UsersComponent,
    LegalComponent,
    SubscriptionsComponent,
  ],
})
export class SingleCompanyModule {}
