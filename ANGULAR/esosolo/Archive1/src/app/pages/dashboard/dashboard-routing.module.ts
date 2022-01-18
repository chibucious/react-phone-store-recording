import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardService as RoleGuard } from 'src/app/services/authentication/role-guard/role-guard.service';
import { AdminComponent } from './admin/admin.component';
import { CompaniesComponent } from './companies/companies.component';
import { OverviewComponent } from './overview/overview.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: 'dashboards',
    component: OverviewComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'compliance', component: OverviewComponent },
      { path: 'operations', component: OverviewComponent },
      { path: 'finance', component: OverviewComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    children: [
      { path: 'overview', component: CompaniesComponent },
      { path: 'create', component: CompaniesComponent },
      { path: 'view', component: CompaniesComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'add', component: AdminComponent },
      { path: 'view', component: AdminComponent },
      { path: '', redirectTo: 'add', pathMatch: 'full' },
    ],
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin',
    },
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    children: [
      { path: 'overview', component: TicketsComponent },
      { path: 'add', component: TicketsComponent },
      { path: 'view', component: TicketsComponent },
      { path: 'single-ticket', component: TicketsComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboards',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RoleGuard],
})
export class DashboardRoutingModule {}
