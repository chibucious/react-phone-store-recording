import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ModalBackdropComponent } from './modal-backdrop/modal-backdrop.component';
import { ModalBodyComponent } from './modal-body/modal-body.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';
import { ModalWrapperComponent } from './modal-wrapper/modal-wrapper.component';
import { ModalComponent } from './modal.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    ModalComponent,
    ModalWrapperComponent,
    ModalBackdropComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalFooterComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  exports: [
    ModalComponent,
    ModalWrapperComponent,
    ModalBackdropComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalFooterComponent,
  ],
})
export class ModalModule {}
