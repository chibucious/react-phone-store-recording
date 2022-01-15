import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { CompaniesComponent } from './companies.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { OverviewCompaniesComponent } from './overview-companies/overview-companies.component';
import { SingleCompanyModule } from './single-company/single-company.module';

@NgModule({
  declarations: [
    CompaniesComponent,
    CreateComponent,
    ViewComponent,
    OverviewCompaniesComponent,
  ],
  imports: [
    CommonModule,

    /**
     * @required- Components module is required to be imported in the modules of pages where custom components are used
     */
    ComponentsModule,
    SingleCompanyModule,
  ],
  exports: [
    CompaniesComponent,
    CreateComponent,
    ViewComponent,
    OverviewCompaniesComponent,
    SingleCompanyModule,
  ],
})
export class CompaniesModule {}
