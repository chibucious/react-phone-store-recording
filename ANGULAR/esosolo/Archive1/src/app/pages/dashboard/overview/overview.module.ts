import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { OperationsComponent } from './operations/operations.component';
import { FinanceComponent } from './finance/finance.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { OverviewComponent } from './overview.component';

@NgModule({
  declarations: [
    OverviewComponent,
    DashboardsComponent,
    ComplianceComponent,
    OperationsComponent,
    FinanceComponent,
  ],
  imports: [
    CommonModule,
    /**
     * @required- Components module is required to be imported in the modules of pages where custom components are used
     */
    ComponentsModule,
  ],
  exports: [
    OverviewComponent,
    DashboardsComponent,
    ComplianceComponent,
    OperationsComponent,
    FinanceComponent,
  ],
})
export class OverviewModule {}
