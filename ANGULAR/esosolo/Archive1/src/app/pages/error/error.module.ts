import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { FourzerofourComponent } from './fourzerofour/fourzerofour.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [FourzerofourComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
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
    FourzerofourComponent,
  ],
})
export class ErrorModule {}
