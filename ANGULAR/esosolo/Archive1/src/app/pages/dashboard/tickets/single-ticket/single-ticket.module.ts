import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    MessageComponent,
  ],
  imports: [CommonModule, BrowserAnimationsModule, ComponentsModule],
  exports: [
    MessageComponent,
  ],
})
export class SingleTicketModule {}
