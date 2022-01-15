import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRowComponent } from './card-row/card-row.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';

@NgModule({
  declarations: [CardRowComponent, CardWrapperComponent],
  imports: [CommonModule],
  exports: [CardRowComponent, CardWrapperComponent],
})
export class CardModule {}
