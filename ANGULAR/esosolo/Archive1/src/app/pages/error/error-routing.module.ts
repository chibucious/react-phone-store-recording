import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourzerofourComponent } from './fourzerofour/fourzerofour.component';

const routes: Routes = [
  { path: 'fourzerofour', component: FourzerofourComponent },
  /**
   * @description - We redirect all wrong route requests to the 'error' route which redirects to the 'fourzerofour' route. This module is extensible and accomodates multiple error types.
   */
  { path: '**', pathMatch: 'full', redirectTo: 'fourzerofour' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
