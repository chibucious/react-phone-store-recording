import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { AddTicketsComponent } from './add-tickets/add-tickets.component';
import { OverviewTicketsComponent } from './overview-tickets/overview-tickets.component';
import { ViewmessageTicketsComponent } from './viewmessage-tickets/viewmessage-tickets.component';

@NgModule({
  declarations: [
    TicketsComponent,
    ViewTicketsComponent,
    AddTicketsComponent,
    OverviewTicketsComponent,
    ViewmessageTicketsComponent,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [
    TicketsComponent,
    ViewTicketsComponent,
    AddTicketsComponent,
    OverviewTicketsComponent,
    ViewmessageTicketsComponent,
  ],
})
export class TicketsModule {}
