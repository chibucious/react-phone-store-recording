import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CompaniesModule } from './companies/companies.module';
import { AdminModule } from './admin/admin.module';
import { OverviewModule } from './overview/overview.module';
import { TicketsModule } from './tickets/tickets.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DashboardRoutingModule,
    /**
     * @required- Components module is required to be imported in the modules of pages where custom components are used
     */
    ComponentsModule,

    /**
     * @description - Custom date, time and date range picker module
     */
    NgxDaterangepickerMd,
    CompaniesModule,
    AdminModule,
    OverviewModule,
    TicketsModule,
  ],
  exports: [CompaniesModule, AdminModule, OverviewModule, TicketsModule],
})
export class DashboardModule {}
