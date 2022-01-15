import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AdminComponent,
    ViewComponent,
    AddComponent,
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    /**
     * @required- Components module is required to be imported in the modules of pages where custom components are used
     */
    ComponentsModule,
  ],
  exports: [AdminComponent, ViewComponent, AddComponent, OverviewComponent],
})
export class AdminModule {}
