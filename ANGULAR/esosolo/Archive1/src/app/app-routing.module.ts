import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './services/authentication/auth/authentication.service';

const routes: Routes = [
  {
    path: 'onboarding',
    loadChildren: () =>
      import('./pages/onboarding/onboarding-routing.module').then(
        (m) => m.OnboardingRoutingModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
    canActivate: [AuthenticationService],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./pages/error/error-routing.module').then(
        (m) => m.ErrorRoutingModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'onboarding',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [AuthenticationService],
})
export class AppRoutingModule {}
