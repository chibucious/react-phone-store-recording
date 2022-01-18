import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { AddTicketsComponent } from './add-tickets/add-tickets.component';
import { OverviewTicketsComponent } from './overview-tickets/overview-tickets.component';
import { SingleTicketModule } from './single-ticket/single-ticket.module';
import { SingleTicketComponent } from './single-ticket/single-ticket.component';


@NgModule({
  declarations: [
    TicketsComponent,
    ViewTicketsComponent,
    AddTicketsComponent,
    OverviewTicketsComponent,
    SingleTicketComponent,
  ],
  imports: [
    CommonModule, 
    /**
     * @required- Components module is required to be imported in the modules of pages where custom components are used
     */
    ComponentsModule
  ],
  exports: [
    TicketsComponent,
    ViewTicketsComponent,
    AddTicketsComponent,
    OverviewTicketsComponent,
    SingleTicketComponent,
  ],
})
export class TicketsModule {}
